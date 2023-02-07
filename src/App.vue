<script>
import Component1 from './components/Component1.vue';
import { store } from "./store.js";

export default {
    name: "App",
    components: {
      Component1,
    },
    data() {
          return {
             store, 
          }
      },
    methods:{
        
    },
};
</script>


<template>
  <!-- placeholder -->
  <Component1/> 
  <!-- placeholder -->
</template>


<style lang="scss">
@use "./styles/main";
</style>