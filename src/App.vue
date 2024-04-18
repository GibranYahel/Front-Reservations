<template>
  <v-app>

    <v-toolbar app>
      <v-icon @click="drawer = !drawer"
      style="padding-left: 20px; cursor: pointer;">
      mdi-menu
      </v-icon>
      <v-toolbar-title>Reservations</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn :to="{name: 'rooms'}">Rooms</v-btn>
      <v-btn>Log In</v-btn>
      <v-btn>Log out</v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" temporary class="dark bg-grey darken-4">
      <div class="mt-4 d-flex flex-column align-center justify-center">
        <div>
          <v-avatar>
            <img src="https://randomuser.me/api/portraits/men/84.jpg" alt="">
          </v-avatar>
        </div>
        <div class="mt-2">
          <h1>User Name</h1>
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
export default {
  name: 'App',

  data() {
    return{
      drawer: true
    }
  }
}
</script>
