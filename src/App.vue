<template>
  <search />
</template>

<script>
import Search from './views/Search.vue';
// import { mapActions } from "vuex";
export default {
  components: { Search },
  methods: {
    
  },
  mounted() {
    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 60px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: blue;
}
</style>
