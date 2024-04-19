<template>
  <v-container>
    <h1>Clients Registered</h1>
    <v-row v-if="users.length > 0">
      <v-col
        v-for="user in users"
        :key="user.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card>
          <v-card-title>{{ user.name }} {{ user.lastName }}</v-card-title>
          <v-card-text>
            <div>Email: {{ user.email }}</div>
            <div>Teléfono: {{ user.phone }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="selectUser(user)">Update</v-btn>
            <v-btn color="error" @click="deleteUser(user.idClient)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div v-else>
      Charging users.....
    </div>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from '../plugins/axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'UserListComponent',

  setup() {
    const users = ref([]);
    const store = useStore();
    const router = useRouter();

    const fetchUsers = async () => {
      try {
        const response = await axios.get('/clients');
        users.value = response.data;
        console.log('Usuarios cargados:', users.value);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    };

    const selectUser = (user) => {
      store.dispatch('setSelectedUser', user);
      router.push('/updateUser');
    };

    const deleteUser = async (userId) => {
      const confirmed = window.confirm('Are you sure you want to delete this user?');

      if (confirmed) {
        try {
          await axios.delete(`/clients/${userId}`);
          console.log(userId)
          fetchUsers();
        } catch (error) {
          console.error('Error al eliminar usuario:', error);
        }
      }
    };

    onMounted(() => {
      fetchUsers();
    });

    return {
      users,
      selectUser,
      deleteUser
    };
  }
}
</script>
