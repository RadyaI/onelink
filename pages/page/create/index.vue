<template>
    <div>
        <div class="wrapper">
            <div class="step">
                <div class="head">
                    <i class="bi bi-arrow-left"></i>
                    <div class="title">
                        <h1>Create New Page</h1>
                    </div>
                    <p>Please enter some information below.</p>
                </div>
                <div class="template">
                    <div class="title">
                        <h3>1. Select a theme</h3>
                    </div>
                    <div class="card">
                        <div class="template-list"></div>
                        <div class="template-list"></div>
                        <div class="template-list"></div>
                    </div>
                </div>
                <div class="name">
                    <div class="title">
                        <h3>2. Choose a name</h3>
                    </div>
                    <div class="name-page">
                        <p><b>Page Name</b></p>
                        <input type="text" placeholder="My Page">
                    </div>
                    <div class="name-link">
                        <p><b>Link Name</b></p>
                        <input type="text" placeholder="https://onelink.radya.fun/mypage" v-model="state.linkName">
                        <p><small>https://onelink.radya.fun/{{ state.linkName }}</small></p>
                    </div>
                </div>
            </div>
            <div class="preview">
                <div class="display">
                    <div class="head">
                        <div class="profil"><img :src="state.profil" alt="profil"></div>
                        <div class="name">Jhon Doe</div>
                        <div class="bio"><small>I like banana</small></div>
                    </div>
                    <div class="medsos-link">
                        <div class="instagram"><i class="bi bi-instagram"></i></div>
                        <div class="youtube"><i class="bi bi-youtube"></i></div>
                        <div class="tiktok"><i class="bi bi-tiktok"></i></div>
                        <div class="github"><i class="bi bi-github"></i></div>
                        <div class="wa"><i class="bi bi-whatsapp"></i></div>
                        <div class="facebook"><i class="bi bi-facebook"></i></div>
                    </div>
                    <div class="random-link">
                        <div class="card"><img src="" alt="logo"><small>OneLink Repository Github</small></div>
                        <div class="card"><img src="" alt="logo"><small>OneLink Repository Github</small></div>
                        <div class="card"><img src="" alt="logo"><small>OneLink Repository Github</small></div>
                        <div class="card"><img src="" alt="logo"><small>OneLink Repository Github</small></div>
                        <div class="card"><img src="" alt="logo"><small>OneLink Repository Github</small></div>
                    </div>
                </div>
                <button>Create</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';

import Cookies from 'js-cookie';

import Sidebar from '../layouts/sidebar.vue';


useHead({
    title: 'OneLink - Create',
    link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css' }
    ],
    meta: [
        { name: 'author', content: 'M Radya Iftikhar' },
        { name: 'description', content: 'Discover the ease of sharing with one simple link. Combine all your important links into a single, easily accessible link. Perfect for social media, portfolios, and more.' },
        { name: 'seo', content: 'onelink, link, bio' },
    ]
})

const state = reactive({
    profil: '',
    uid: '',
    theme: '',
    pageName: '',
    linkName: ''
})


onMounted(() => {
    state.profil = JSON.parse(localStorage.getItem('loginData')).photoURL
    state.uid = JSON.parse(localStorage.getItem('loginData')).uid
    const auth = Cookies.get('isLoggedIn')
    if (!auth) {
        location.href = '/'
    }
})

</script>

<style>
* {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
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

.wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
}

.wrapper .step {
    width: 100%;
    height: 100%;
    color: #384152;
}

.wrapper .step .head {
    width: 90%;
    height: 15vh;
    margin: 0 auto;
    margin-top: 20px;
}


.wrapper .step .head p {
    margin-top: 10px;
}

.wrapper .step .template {
    margin: 0 auto;
    width: 90%;
}

.wrapper .step .template .card {
    border-radius: 10px;
    background-color: #efefef;
    width: 100%;
    height: 30vh;
    margin-top: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
}

.wrapper .step .template .card .template-list:first-child {
    margin-left: 20px;
}

.wrapper .step .template .card .template-list {
    border: 1px solid black;
    border-radius: 5px;
    width: 100px;
    height: 80%;
    cursor: pointer;
}

.wrapper .step .name {
    margin: 0 auto;
    margin-top: 15px;
    width: 90%;
}

.wrapper .step .name .name-page {
    margin-top: 10px;
    padding: 10px;
}

.wrapper .step .name .name-page input {
    border: 1px solid grey;
    border-radius: 10px;
    width: 70%;
    height: 40px;
    margin-top: 5px;
    padding: 0 10px;
    font-size: 15px;
}

.wrapper .step .name .name-link {
    margin-top: 10px;
    padding: 10px;
}

.wrapper .step .name .name-link input {
    border: 1px solid grey;
    border-radius: 10px;
    width: 70%;
    height: 40px;
    margin-top: 5px;
    padding: 0 10px;
    font-size: 15px;
}

.wrapper .preview {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.wrapper .preview::after {
    content: '';
    position: absolute;
    height: 90%;
    width: 45%;
    z-index: -1;
    border-left: 2px solid #efefef;
    /* border-left: 1px solid var(--optional); */
}

.wrapper .preview .display {
    border: 1px solid grey;
    width: 50%;
    height: 80%;
}

.wrapper .preview .display::-webkit-scrollbar{
    width: 0;
}

.wrapper .preview .display .head {
    width: 100%;
    height: auto;
}

.wrapper .preview .display .head .profil {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;
}

.wrapper .preview .display .head .name {
    width: 100%;
    margin-top: 15px;
    text-align: center;
    font-weight: bold;
}

.wrapper .preview .display .head .bio {
    text-align: center;
}

.wrapper .preview .display .medsos-link {
    margin-top: 20px;
    width: 100%;
    display: flex;
    gap: 15px;
    justify-content: center;
}

.wrapper .preview .display .medsos-link div {
    cursor: pointer;
}

.wrapper .preview .display .medsos-link div i{
    font-size: 25px;
}

.wrapper .preview .display .random-link {
    margin-top: 20px;
    width: 100%;
}

.wrapper .preview .display .random-link .card{
    margin: 0 auto;
    border: 1px solid black;
    width: 90%;
    height: 40px;
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
}

.wrapper .preview .display .random-link .card:last-child{
    margin-bottom: 10px;
}

.wrapper .preview .display .random-link .card img{
    width: 30px;
    height: 30px;
    border-radius: 20%;
    border: 1px solid black;
    margin-left: 5px;
}

.wrapper .preview .display .random-link .card small{
    margin-left: 10px;
}

.wrapper .preview button {
    margin-top: 20px;
    padding: 10px 25px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: var(--text-optional);
    font-weight: bold;
}
</style>