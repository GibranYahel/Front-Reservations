import { createStore } from 'vuex';
import axios from '../plugins/axios';

export default createStore({
  state: {
    idClient: null,
    clientData: null,
    selectedRoomId: null,
  },
  getters: {
    idClient: (state) => state.idClient,
    clientData: (state) => state.clientData,
    selectedRoomId: (state) => state.selectedRoomId,
  },
  mutations: {
    SET_ID_CLIENT(state, id) {
      state.idClient = id;
    },
    SET_CLIENT_DATA(state, data) {
      state.clientData = data;
    },
    SET_SELECTED_ROOM(state, id) {
      state.selectedRoomId = id;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('/clients/login', credentials);
        commit('SET_ID_CLIENT', response.data.idClient);
        commit('SET_CLIENT_DATA', response.data);
      } catch (error) {
        console.error('Error on Log In:', error);
      }
    },
    async setSelectedRoom({ commit }, id) {
      commit('SET_SELECTED_ROOM', id);
    },
  },
})
