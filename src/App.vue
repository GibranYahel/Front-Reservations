<template>
  <v-app>

    <v-toolbar app>
      <v-icon @click="drawer = !drawer" :disabled="idClient === null"
      style="padding-left: 20px; cursor: pointer;">
      mdi-menu
      </v-icon>
      <v-toolbar-title>Reservations</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn :to="{name: 'rooms'}"> Rooms </v-btn>
      <v-btn :to="{name: 'users'}"> Users </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" temporary class="dark bg-grey darken-4">
      <div class="mt-4 d-flex flex-column align-center justify-center">
        <div>
          <v-avatar>
            <img src="https://randomuser.me/api/portraits/men/84.jpg" alt="">
          </v-avatar>
        </div>
        <div class="mt-2">
          <h1>{{ userName }}{{  }}</h1>
        </div>
      </div>
      <div class="d-flex flex-column mt-3">
        <div class="mx-3">
          <v-btn color="success" block :to="{name: 'create'}" >Make Reservation</v-btn>
          <v-btn class="mt-3" color="success" block :to="{name: 'reservations'}" >Reservations</v-btn>
        </div>
      </div>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',

  data() {
    return {
      drawer: false
    };
  },

  setup() {
    const store = useStore();

    const idClient = computed(() => store.getters.idClient);

    const userName = computed(() => {
      const clientData = store.getters.clientData; 
      return clientData ? clientData.name + ' ' + clientData.lastName : '';
    });

    return {
      idClient,
      userName
    };
  },
}
</script>
