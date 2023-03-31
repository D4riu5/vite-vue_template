<script>
// components
import AppHeader from "./components/AppHeader.vue";
import Component1 from "./components/Component1.vue";
import { store } from "./store.js";

export default {
    name: "App",
    components: {
        Component1,
        AppHeader,
    },
    data() {
        return {
            store,
        };
    },
    methods: {},
};
</script>

<template>
    <AppHeader />
    <Main class="p-5 container">
        <router-view></router-view>
    </Main>
    <Component1 />
</template>

<style lang="scss">
@use "./styles/main";
</style>
