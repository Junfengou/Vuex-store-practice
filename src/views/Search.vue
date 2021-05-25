<template>
    <div>
        <button @click="handleClick">hello</button>
        <br />
        <button @click="handle">hi</button>
        <p>{{ name }}</p>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "Search",
    methods: {
        // mapActions only work in methods
        ...mapActions({handle: "handle"}), // This is refering to action, not mutation
        
        handleClick() {
            console.log("hello");
        }
    },
    computed: {
        // mapGetters only work in computed
        ...mapGetters({ name: "getName"}),
    }
}
</script>
<style>
    
</style>