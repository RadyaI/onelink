<template>
    <div>
        <loadingToPage v-if="state.loading" />
        <div class="wrapper">
            <div class="step">
                <div class="head">
                    <div class="title">
                        <h1>Create New Page</h1>
                    </div>
                    <router-link to="/page">
                        <p>Home</p>
                    </router-link>
                    <p>Please enter some information below.</p>
                </div>
                <div class="template">
                    <div class="title">
                        <h3>1. Select a theme</h3>
                    </div>
                    <div class="card">
                        <div class="template-list" @click="state.theme = 'default'"><img :src="defaultTheme"
                                alt="default"></div>
                        <div class="template-list" @click="state.theme = 'blackwhite'"><img :src="blackwhite"
                                alt="blackwhite"></div>
                        <div class="template-list" @click="state.theme = 'batik'"><img :src="batik" alt="batik"></div>
                        <div class="template-list" @click="state.theme = 'sky'"><img :src="sky" alt="sky"></div>
                    </div>
                </div>
                <div class="name">
                    <div class="title">
                        <h3>2. Choose a name</h3>
                    </div>
                    <div class="name-page">
                        <p><b>Page Name</b></p>
                        <input type="text" placeholder="My Page" v-model="state.pageName">
                    </div>
                    <div class="name-link">
                        <p><b>Link Name</b></p>
                        <input type="text" placeholder="https://onelink.radya.fun/mypage" v-model="state.linkName">
                        <p><small>https://onelink.radya.fun/{{ state.linkName }}</small></p>
                    </div>
                </div>
            </div>
            <div class="preview">
                <div class="display"
                    :class="{ 'default': state.theme == 'default', 'blackwhite': state.theme == 'blackwhite', 'batik': state.theme == 'batik', 'sky': state.theme == 'sky' }">
                    <div class="head"
                        :class="{ 'default-text': state.theme == 'default', 'blackwhite-text': state.theme == 'blackwhite', 'batik-text': state.theme == 'batik', 'sky-text': state.theme == 'sky' }">
                        <div class="profil"><img :src="state.profil" alt="profil"></div>
                        <div class="name">Jhon Doe</div>
                        <div class="bio"><small>Streaming Gaming Content</small></div>
                    </div>
                    <div class="medsos-link">
                        <div class="instagram"
                            :class="{ 'default-medsos': state.theme == 'default', 'blackwhite-medsos': state.theme == 'blackwhite', 'batik-medsos': state.theme == 'batik', 'sky-medsos': state.theme == 'sky' }">
                            <i class="bi bi-instagram"></i>
                        </div>
                        <div class="youtube"
                            :class="{ 'default-medsos': state.theme == 'default', 'blackwhite-medsos': state.theme == 'blackwhite', 'batik-medsos': state.theme == 'batik', 'sky-medsos': state.theme == 'sky' }">
                            <i class="bi bi-youtube"></i>
                        </div>
                        <div class="tiktok"
                            :class="{ 'default-medsos': state.theme == 'default', 'blackwhite-medsos': state.theme == 'blackwhite', 'batik-medsos': state.theme == 'batik', 'sky-medsos': state.theme == 'sky' }">
                            <i class="bi bi-tiktok"></i>
                        </div>
                        <div class="github"
                            :class="{ 'default-medsos': state.theme == 'default', 'blackwhite-medsos': state.theme == 'blackwhite', 'batik-medsos': state.theme == 'batik', 'sky-medsos': state.theme == 'sky' }">
                            <i class="bi bi-github"></i>
                        </div>
                        <div class="wa"
                            :class="{ 'default-medsos': state.theme == 'default', 'blackwhite-medsos': state.theme == 'blackwhite', 'batik-medsos': state.theme == 'batik', 'sky-medsos': state.theme == 'sky' }">
                            <i class="bi bi-whatsapp"></i>
                        </div>
                        <div class="facebook"
                            :class="{ 'default-medsos': state.theme == 'default', 'blackwhite-medsos': state.theme == 'blackwhite', 'batik-medsos': state.theme == 'batik', 'sky-medsos': state.theme == 'sky' }">
                            <i class="bi bi-facebook"></i>
                        </div>
                    </div>
                    <div class="random-link">
                        <div class="card"
                            :class="{ 'default-card': state.theme == 'default', 'blackwhite-card': state.theme == 'blackwhite', 'batik-card': state.theme == 'batik', 'sky-card': state.theme == 'sky' }">
                            <img :src="state.profil" alt="logo"><small>OneLink Repository Github</small>
                        </div>
                        <div class="card"
                            :class="{ 'default-card': state.theme == 'default', 'blackwhite-card': state.theme == 'blackwhite', 'batik-card': state.theme == 'batik', 'sky-card': state.theme == 'sky' }">
                            <img :src="state.profil" alt="logo"><small>OneLink Repository Github</small>
                        </div>
                        <div class="card"
                            :class="{ 'default-card': state.theme == 'default', 'blackwhite-card': state.theme == 'blackwhite', 'batik-card': state.theme == 'batik', 'sky-card': state.theme == 'sky' }">
                            <img :src="state.profil" alt="logo"><small>OneLink Repository Github</small>
                        </div>
                        <div class="card"
                            :class="{ 'default-card': state.theme == 'default', 'blackwhite-card': state.theme == 'blackwhite', 'batik-card': state.theme == 'batik', 'sky-card': state.theme == 'sky' }">
                            <img :src="state.profil" alt="logo"><small>OneLink Repository Github</small>
                        </div>
                        <div class="card"
                            :class="{ 'default-card': state.theme == 'default', 'blackwhite-card': state.theme == 'blackwhite', 'batik-card': state.theme == 'batik', 'sky-card': state.theme == 'sky' }">
                            <img :src="state.profil" alt="logo"><small>OneLink Repository Github</small>
                        </div>
                    </div>
                </div>
                <button @click="createPage()">Create</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';

import Cookies from 'js-cookie';
import swal from 'sweetalert';

import defaultTheme from '@/public/img/theme/default.png'
import batik from '@/public/img/theme/batik.png'
import sky from '@/public/img/theme/sky.png'
import blackwhite from '@/public/img/theme/blackwhite.png'
import { newPage } from '../../../service/pageService';
import { useRouter } from 'vue-router';


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

const router = useRouter()
const state = reactive({
    profil: '',
    uid: '',
    theme: 'default',
    pageName: '',
    linkName: ''
})

async function createPage() {
    try {
        if (state.pageName == '') {
            swal({
                icon: 'warning',
                title: 'Page Name is required',
                button: 'Close'
            })
        } else if (state.linkName == '') {
            swal({
                icon: 'warning',
                title: 'Link Name is required',
                button: 'Close'
            })
        } else {
            state.loading = true
            const result = await newPage(state.pageName, state.uid, state.profil, state.linkName, state.theme)
            if (result.status == false) {
                swal({
                    icon: 'error',
                    title: `${result.message}`,
                    button: 'Close'
                })
            } else {
                router.push(`/page/create/${result.id}`)
            }
        }
    } catch (error) {
        console.log(error)
    }
}


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

a {
    color: blue;
    text-decoration: underline;
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
    height: 18vh;
    margin: 0 auto;
    margin-top: 20px;
}


.wrapper .step .head p {
    margin-top: 10px;
}

.wrapper .step .head p:nth-child(2) {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

.wrapper .step .head p:last-child {
    margin-bottom: 10px;
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
    overflow: hidden;
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
    border-radius: 10px;
}

.wrapper .preview .display::-webkit-scrollbar {
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
    font-size: 27px;
}

.wrapper .preview .display .head .bio {
    text-align: center;
}

.wrapper .preview .display .medsos-link {
    margin-top: 20px;
    width: 100%;
    display: flex;
    gap: 12px;
    justify-content: center;
}

.wrapper .preview .display .medsos-link div {
    cursor: pointer;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrapper .preview .display .medsos-link div i {
    font-size: 20px;
}

.wrapper .preview .display .random-link {
    margin-top: 20px;
    width: 100%;
}

.wrapper .preview .display .random-link .card {
    margin: 0 auto;
    width: 90%;
    height: 40px;
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
}

.wrapper .preview .display .random-link .card:last-child {
    margin-bottom: 10px;
}

.wrapper .preview .display .random-link .card img {
    width: 30px;
    height: 30px;
    border-radius: 20%;
    border: 1px solid black;
    margin-left: 5px;
}

.wrapper .preview .display .random-link .card small {
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

/* KHUSUS THEME */

/* DEFAULT */
.default {
    background-color: #d1d4db;
}

.default-text {
    color: #000000;
}

.default-medsos {
    background-color: #ffffff;
}

.default-card {
    color: #000000;
    background-color: #ffffff;
    border: none;
}

/* DEFAULT */

/* blackwhite */
.blackwhite {
    background-color: #ffffff;
}

.blackwhite-text {
    color: #000000;
}

.blackwhite-medsos {
    background-color: #ffffff;
}

.blackwhite-card {
    color: #000000;
    background-color: #ffffff;
    border: 1px solid black;
}

/* blackwhite */

/* BATIK */
.batik {
    background: url('@/public/img/theme/batik-bg.png');
}

.batik-text {
    color: #ffffff;
}

.batik-medsos {
    background-color: #ffffff;
}

.batik-card {
    color: #ffffff;
    background-color: #774045;
}

/* BATIK */

/* sky */
.sky {
    background: linear-gradient(#0398ff, #98e6ff);
}

.sky-text {
    color: #000000;
}

.sky-medsos {
    background-color: #ffffff;
}

.sky-card {
    color: #000000;
    background-color: #0398ff;
}

/* sky */

/* KHUSUS THEME */
</style>