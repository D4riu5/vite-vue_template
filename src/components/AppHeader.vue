<script>
import { store } from "../store.js";

// Helpers
import axios from "axios";

export default {
    name: "AppMain",
    components: {},
    data() {
        return {
            store,
            menuItems: [
                {
                    routeName: "home",
                    label: "Home",
                },
            ],
        };
    },
    methods: {},
};
</script>

<template>
    <header class="p-5 container text-center text-light">
        <div class="container">
            <div class="row">
                <div class="col">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div
                                class="collapse navbar-collapse"
                                id="navbarNav"
                            >
                                <ul
                                    class="navbar-nav d-flex w-100 justify-content-center"
                                >
                                    <li
                                        class="nav-item"
                                        v-for="menuItem in menuItems"
                                    >
                                        <router-link
                                            :to="{ name: menuItem.routeName }"
                                            class="nav-link text-danger"
                                        >
                                            {{ menuItem.label }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
// img{
//     width: 400px;
// }
</style>
