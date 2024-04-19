<template>
  <v-container>
    <h1>Update Client Details</h1>

    <v-form @submit.prevent="updateUser">
      <v-text-field
        v-model="editedUser.name"
        label="Nombre"
        required
      ></v-text-field>

      <v-text-field
        v-model="editedUser.lastName"
        label="Apellido"
        required
      ></v-text-field>

      <v-text-field
        v-model="editedUser.phone"
        label="Teléfono"
        required
      ></v-text-field>

      <v-text-field
        v-model="editedUser.email"
        label="Email"
        required
      ></v-text-field>

      <v-btn type="submit" color="primary">Update</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { ref, computed } from 'vue';
import axios from '../plugins/axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'UserUpdateComponent',

  setup() {
    const store = useStore();
    const editedUser = computed(() => store.getters.selectedUser);
    const userId = computed(() => editedUser.value.idClient);
    const router = useRouter();

    const updateUser = async () => {
      try {
        const response = await axios.put(`/clients/${userId.value}`, editedUser.value);
        console.log('Usuario actualizado:', response.data);
      } catch (error) {
        console.error('Error al actualizar el usuario:', error);
      }
      router.push('/updateUser');
    };

    return {
      editedUser,
      updateUser
    };
  }
}
</script>