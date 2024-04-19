<template>
    <v-container>
        <h1>Habitaciones Disponibles</h1>
        <v-list>
        <v-list-item
            v-for="room in rooms"
            :key="room.number"
            @click="selectRoom(room.id)"
        >
            <v-list-item-content>
            <h2>{{ room.number }}</h2>
            <v-list-item-title>{{ room.type }}</v-list-item-title>
            <v-list-item-subtitle>{{ room.description }}</v-list-item-subtitle>
            <v-list-item-subtitle>$ {{ room.price }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ room.state }}</v-list-item-subtitle>
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
            rooms: [],
        };
    },
    mounted() {
        this.fetchRooms();
    },
    methods: {
        async fetchRooms() {
            try {
                const response = await axios.get('/rooms');
                this.rooms = response.data;
            } catch (error) {
                console.error('Error al obtener habitaciones:', error);
            }
        },
        async selectRoom(roomNumber) {
            await this.$store.dispatch('setSelectedRoom', roomNumber);

            this.$router.push('/create');
        },
    },
};
</script>