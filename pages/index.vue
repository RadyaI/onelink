<template>
    <div>
        <loadingOnPage v-if="state.pageLoad" />
        <div class="container">
            <div class="wrapper">
                <Navbar @loadOnPage="getLoad" @currentDisplay="getDisplay" />
                <card :display="state.display" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import loadingOnPage from '../components/loadingOnPage.vue';
import Navbar from '../layouts/navbar.vue';
import card from '../layouts/card.vue';

useHead({
    title: 'OneLink - home',
    link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css' }
    ],
    meta: [
        { name: 'author', content: 'M Radya Iftikhar' },
        { name: 'description', content: 'Put all your links in one link' },
        { name: 'seo', content: 'onelink, link, bio' },
    ]
})

const state = reactive({
    pageLoad: false,
    display: 'home'
})

function getLoad(value) {
    state.pageLoad = value
    setTimeout(() => {
        state.pageLoad = false
    }, 600);
}

function getDisplay(value) {
    state.display = value
}

onMounted(() => {
    console.log(process.env.FIREBASE_KEY)
})

</script>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

:root {
    --primary: #000814;
    --secondary: #001d3d;
    --optional: #003566;
    --text-light: #f2e9e4;
    --text-dark: #22223b;
    --text-optional: #ffd60a;
}

.container {
    width: 100%;
    height: 100vh;
    background-color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrapper {
    width: 90%;
    height: 85vh;
    border-radius: 30px;
    background-color: var(--secondary);
}

@media only screen and (max-width:700px) {
    .wrapper {
        width: 100%;
        height: 100vh;
        border-radius: 0%;
    }
}
</style>