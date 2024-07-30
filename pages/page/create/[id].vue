<template>
    <div>
        <loadingToPage v-if="state.loading" />
        <div class="wrapper">
            <div class="header">
                <button @click="backHome()"><i class="bi bi-arrow-left"></i></button>
            </div>
            <div class="row">
                <div class="setting">
                    <div class="card">
                        <div class="profil"></div>
                        <div class="name"></div>
                        <div class="bio"></div>
                        <div class="medsos">
                            <div class="medsos-list"></div>
                            <div class="medsos-list"></div>
                            <div class="medsos-list"></div>
                            <div class="medsos-list"></div>
                            <div class="medsos-list"></div>
                        </div>
                        <div class="random-link">
                            <div class="random-link-list"></div>
                            <div class="random-link-list"></div>
                            <div class="random-link-list"></div>
                            <div class="random-link-list"></div>
                            <div class="random-link-list"></div>
                        </div>
                    </div>
                    <button>Save Changes</button>
                </div>
                <div class="preview">
                    <div class="display"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

import loadingToPage from '../../../components/loadingToPage.vue'

const router = useRouter()
useHead({
    title: 'OneLink - Edit',
    link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css' }
    ],
    meta: [
        { name: 'author', content: 'M Radya Iftikhar' },
        { name: 'description', content: 'Discover the ease of sharing with one simple link. Combine all your important links into a single, easily accessible link. Perfect for social media, portfolios, and more.' },
        { name: 'seo', content: 'onelink, link, bio' },
    ]
})

const state = reactive({})

function backHome() {
    state.loading = true
    setTimeout(() => {
        router.push('/page')
    }, 1100);
}
</script>

<style scoped>
:root {
    --primary: #000814;
    --secondary: #001d3d;
    --optional: #003566;
    --text-light: #f2e9e4;
    --text-dark: #22223b;
    --text-optional: #ffd60a;
}

.wrapper {
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.wrapper .header {
    width: 100%;
    height: 15vh;
}

.wrapper .header button {
    border: none;
    background-color: white;
    margin-top: 25px;
    margin-left: 17px;
    padding: 7px 20px;
    font-size: 30px;
    cursor: pointer;
}

.wrapper .row {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 85vh;
}

.wrapper .row .setting {
    border: 1px solid black;
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.wrapper .row .setting .card {
    border: 1px solid black;
    width: 90%;
    height: 85%;
    overflow-y: scroll;
}

.wrapper .row .setting button {
    margin-top: 10px;
    margin-left: 350px;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: var(--text-optional);
    color: var(--optional);
}

.wrapper .row .preview {
    /* border: 1px solid black; */
    width: 100%;
    height: 100%;
}

.wrapper .row .preview .display{
    border: 1px solid black;
    border-radius: 10px;
    width: 50%;
    height: 90%;
    margin: 0 auto;
}
</style>