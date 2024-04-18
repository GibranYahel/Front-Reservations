<template>
  <v-container>
    <h1>Reservations</h1>
    <v-list>
      <v-list-item v-for="reservation in reservations" :key="reservation.id">
        <v-list-item-content>
          <v-list-item-title>
            Cliente: {{ reservation.client.name }} {{ reservation.client.lastName }}<br>
            Teléfono: {{ reservation.client.phone }}<br>
            Email: {{ reservation.client.email }}<br>
            Habitación: {{ reservation.room.number }} ({{ reservation.room.type }})<br>
            Precio: {{ reservation.room.price }}<br>
            Estado: {{ reservation.state }}<br>
            Precio Total: {{ reservation.totalPrice }}<br>
            Observaciones: {{ reservation.observations }}
            <hr/>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import axios from '../plugins/axios';

export default {
  data() {
    return {
      reservations: []
    };
  },
  mounted() {
    axios.get('/reservations')
      .then(response => {
        this.reservations = response.data;
      })
      .catch(error => {
        console.error('Error al obtener reservaciones:', error);
      });
  }
};
</script>