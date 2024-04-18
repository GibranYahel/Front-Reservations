<template>
  <v-container>
    <h1>Crear Reservación</h1>
    <v-form @submit.prevent="crearReservacion">
      <v-text-field v-model="formData.state" label="Estado"></v-text-field>
      <v-text-field v-model="formData.totalPrice" label="Precio total" type="number"></v-text-field>
      <v-textarea v-model="formData.observations" label="Observaciones"></v-textarea>
      <v-btn type="submit" color="primary">Create Reservación</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from '../plugins/axios';
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  setup() {
    const store = useStore();
    const formData = ref({
      state: '',
      totalPrice: 0,
      observations: ''
    });

    const crearReservacion = () => {
      const { state, totalPrice, observations } = formData.value;
      const idClient = store.getters.idClient;
      const idRoom = store.getters.selectedRoomId;
      
      axios.post(`/reservations/${idClient}/create/${idRoom}`, {
        state,
        totalPrice,
        observations
      })
      .then(response => {
        console.log('Reservación creada:', response.data);
        
        formData.value = {
          state: '',
          totalPrice: 0,
          observations: ''
        };
      })
      .catch(error => {
        console.error('Error al crear reservación:', error);
      });
    };

    return {
      formData,
      crearReservacion
    };
  }
};
</script>