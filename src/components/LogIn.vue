<template>
  <v-container>
    <h1>Iniciar sesión</h1>
    <v-form @submit.prevent="login">
    <v-text-field v-model="credentials.email" label="Correo electrónico"></v-text-field>
    <v-text-field v-model="credentials.password" label="Contraseña" type="password"></v-text-field>
    <v-btn type="submit" color="primary">Iniciar sesión</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch('login', this.credentials);

      this.$router.push('/rooms');
    },
  },
};
</script>