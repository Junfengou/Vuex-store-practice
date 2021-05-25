import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// const url = "https://icanhazdadjoke.com";
// const headers = { Accept: "application/json" };

export default new Vuex.Store({
	state: {
		name: "OG",
	},

	mutations: {
		// syncrous way to update state in the vuex store
		// basically vue's way to setState and the payload is the information that comes back after hitting the endpoint
		handleClick(state, payload) {
			state.name = payload;
			console.log("hi");
		},
	},
	actions: {
		// asyncronous ONLY!
		// anything that has to do with time like fetching information must go here
		handle(state) {
			const payload = "what";
			state.commit("handleClick", payload);
		},
	},
	modules: {},

	// grab information to display anywhere in the app
	getters: {
		getName: (state) => state.name,
	},
});
