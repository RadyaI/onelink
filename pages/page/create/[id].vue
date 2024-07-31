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
                        <div class="profil">
                            <h3>Profil Image:</h3>
                            <input type="file">
                        </div>
                        <div class="name">
                            <h3>Name:</h3>
                            <input type="text" v-model="state.pageData.pageName">
                        </div>
                        <div class="bio">
                            <h3>Description:</h3>
                            <input type="text" v-model="state.pageData.bio">
                        </div>
                        <div class="medsos">
                            <h3>Social Media:</h3>
                            <div class="medsos-link">
                                <i class="bi bi-instagram"></i>
                                <input type="text" v-model="state.pageData.instagram">
                                <label class="switch">
                                    <input type="checkbox" v-model="state.pageData.instagramStatus">
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div class="medsos-link"><i class="bi bi-youtube"></i><input type="text"
                                    v-model="state.pageData.youtube">
                                <label class="switch">
                                    <input type="checkbox" v-model="state.pageData.youtubeStatus">
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div class="medsos-link"><i class="bi bi-tiktok"></i><input type="text"
                                    v-model="state.pageData.tiktok">
                                <label class="switch">
                                    <input type="checkbox" v-model="state.pageData.tiktokStatus">
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div class="medsos-link"><i class="bi bi-github"></i><input type="text"
                                    v-model="state.pageData.github">
                                <label class="switch">
                                    <input type="checkbox" v-model="state.pageData.githubStatus">
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div class="medsos-link"><i class="bi bi-whatsapp"></i><input type="text"
                                    v-model="state.pageData.wa">
                                <label class="switch">
                                    <input type="checkbox" v-model="state.pageData.waStatus">
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div class="medsos-link"><i class="bi bi-facebook"></i><input type="text"
                                    v-model="state.pageData.facebook">
                                <label class="switch">
                                    <input type="checkbox" v-model="state.pageData.facebookStatus">
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div class="random-link">
                            <h3>Your Link:</h3>

                            <div class="random-link-list">
                                <div class="header">
                                    <h3>Card 1</h3>
                                    <label class="switch">
                                        <input type="checkbox" v-model="state.pageData.card1status">
                                        <span class="slider"></span>
                                    </label>
                                </div>
                                <div class="input">
                                    <h4>Card Name:</h4>
                                    <input type="text" v-model="state.pageData.card1">

                                    <h4>Link:</h4>
                                    <input type="text" v-model="state.pageData.card1link">
                                </div>
                            </div>
                            <!--  -->
                            <div class="random-link-list">
                                <div class="header">
                                    <h3>Card 2</h3>
                                    <label class="switch">
                                        <input type="checkbox" v-model="state.pageData.card2status">
                                        <span class="slider"></span>
                                    </label>
                                </div>
                                <div class="input">
                                    <h4>Card Name:</h4>
                                    <input type="text" v-model="state.pageData.card2">

                                    <h4>Link:</h4>
                                    <input type="text" v-model="state.pageData.card2link">
                                </div>
                            </div>
                            <!--  -->
                            <div class="random-link-list">
                                <div class="header">
                                    <h3>Card 3</h3>
                                    <label class="switch">
                                        <input type="checkbox" v-model="state.pageData.card3status">
                                        <span class="slider"></span>
                                    </label>
                                </div>
                                <div class="input">
                                    <h4>Card Name:</h4>
                                    <input type="text" v-model="state.pageData.card3">

                                    <h4>Link:</h4>
                                    <input type="text" v-model="state.pageData.card3link">
                                </div>
                            </div>
                            <!--  -->
                            <div class="random-link-list">
                                <div class="header">
                                    <h3>Card 4</h3>
                                    <label class="switch">
                                        <input type="checkbox" v-model="state.pageData.card4status">
                                        <span class="slider"></span>
                                    </label>
                                </div>
                                <div class="input">
                                    <h4>Card Name:</h4>
                                    <input type="text" v-model="state.pageData.card4">

                                    <h4>Link:</h4>
                                    <input type="text" v-model="state.pageData.card4link">
                                </div>
                            </div>
                            <!--  -->
                            <div class="random-link-list">
                                <div class="header">
                                    <h3>Card 5</h3>
                                    <label class="switch">
                                        <input type="checkbox" v-model="state.pageData.card5status">
                                        <span class="slider"></span>
                                    </label>
                                </div>
                                <div class="input">
                                    <h4>Card Name:</h4>
                                    <input type="text" v-model="state.pageData.card5">

                                    <h4>Link:</h4>
                                    <input type="text" v-model="state.pageData.card5link">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn-group">
                        <button @click="pageDelete()">Delete Page</button>
                        <button>Save Changes</button>
                    </div>
                </div>
                <div class="preview">
                    <div class="display"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNuxtApp } from 'nuxt/app';

import { doc, getDoc } from 'firebase/firestore';
import swal from 'sweetalert';

import loadingToPage from '../../../components/loadingToPage.vue'
import { deletePage } from '../../../service/pageService'

const router = useRouter()
const route = useRoute()
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

const state = reactive({
    pageData: {}
})

function backHome() {
    state.loading = true
    setTimeout(() => {
        router.push('/page')
    }, 1100);
}

async function getPageData() {
    try {
        const id = route.params.id
        const { $db } = useNuxtApp()
        const get = await getDoc(doc($db, 'pages', id))
        const data = get.data()
        state.pageData = data
    } catch (error) {
        throw new Error(error)
    }
}

async function pageDelete() {
    try {
        const alert = await swal({
            icon: 'warning',
            title: 'Are you sure?',
            buttons: ['No', 'Yes'],
            dangerMode: true
        })
        if (alert) {
            const id = route.params.id
            const result = await deletePage(id)
            if (result) {
                swal({
                    icon: 'success',
                    title: false,
                    button: false,
                    timer: 1000
                }).then(
                    (back) => {
                        if (back) {
                            location.href = '/page'
                        }
                    }
                )
            }
        }
    } catch (error) {
        console.log(error)
    }
}

onBeforeMount(() => {
    getPageData()
})
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
    border: 1px solid black;
    width: 100%;
    height: 10vh;
}

.wrapper .header button {
    border: none;
    background-color: white;
    margin-top: 10px;
    margin-left: 17px;
    padding: 7px 20px;
    font-size: 30px;
    cursor: pointer;
}

.wrapper .row {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 90vh;
}

.wrapper .row .setting {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.wrapper .row .setting .card {
    width: 90%;
    height: 85%;
    padding: 0 20px;
    overflow-y: scroll;
}

.wrapper .row .setting .card::-webkit-scrollbar {
    width: 10px;
}

.wrapper .row .setting .card::-webkit-scrollbar-thumb {
    background-color: var(--text-optional);
    border-radius: 15px;
}

.wrapper .row .setting .card .profil {
    width: 100%;
    font-weight: bold;
    margin-top: 10px;
}

.wrapper .row .setting .card .profil input {
    margin-top: 10px;
}

.wrapper .row .setting .card .name {
    margin-top: 10px;
    font-weight: bold;
}

.wrapper .row .setting .card .name input {
    width: 80%;
    height: 35px;
    border: 1px solid grey;
    border-radius: 5px;
    margin-top: 10px;
    padding: 0 5px;
}

.wrapper .row .setting .card .bio {
    margin-top: 10px;
    font-weight: bold;
}

.wrapper .row .setting .card .bio input {
    width: 80%;
    height: 35px;
    border: 1px solid grey;
    border-radius: 5px;
    margin-top: 10px;
    padding: 0 5px;
}

.wrapper .row .setting .card .medsos {
    margin-top: 10px;
    font-weight: bold;
    width: auto;
    height: auto;
}

.wrapper .row .setting .card .medsos .medsos-link {
    border: 1px solid grey;
    margin-top: 10px;
    width: 80%;
    border-radius: 5px;
    height: 40px;
    padding: 0 5px;
    display: flex;
    align-items: center;
}

.wrapper .row .setting .card .medsos .medsos-link i {
    font-size: 27px;
    padding: 0 5px;
}

.wrapper .row .setting .card .medsos .medsos-link input {
    height: 100%;
    width: 84%;
    border: none;
    margin-left: 10px;
    padding: 0 5px;
}

.wrapper .row .setting .card .medsos .medsos-link input:active {
    border: none;
}

.switch {
    --button-width: 3em;
    --button-height: 1.5em;
    --toggle-diameter: 1em;
    --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);
    --toggle-shadow-offset: 10px;
    --toggle-wider: 1em;
    --color-grey: #cccccc;
    --color-green: #4296f4;
    margin-top: 5px;
    padding: 0 3px;
    cursor: pointer;
}

.slider {
    display: inline-block;
    width: var(--button-width);
    height: var(--button-height);
    background-color: var(--color-grey);
    border-radius: calc(var(--button-height) / 2);
    position: relative;
    transition: 0.3s all ease-in-out;
}

.slider::after {
    content: "";
    display: inline-block;
    width: var(--toggle-diameter);
    height: var(--toggle-diameter);
    background-color: #fff;
    border-radius: calc(var(--toggle-diameter) / 2);
    position: absolute;
    top: var(--button-toggle-offset);
    transform: translateX(var(--button-toggle-offset));
    box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
    transition: 0.3s all ease-in-out;
}

.switch input[type="checkbox"]:checked+.slider {
    background-color: var(--color-green);
}

.switch input[type="checkbox"]:checked+.slider::after {
    transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));
    box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
}

.switch input[type="checkbox"] {
    display: none;
}

.switch input[type="checkbox"]:active+.slider::after {
    width: var(--toggle-wider);
}

.switch input[type="checkbox"]:checked:active+.slider::after {
    transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));
}


.wrapper .row .setting .card .random-link {
    margin-top: 10px;
}

.wrapper .row .setting .card .random-link h3 {
    margin-top: 15px;
}

.wrapper .row .setting .card .random-link .random-link-list {
    width: 80%;
    padding: 5px 5px;
    height: auto;
    /* border-radius: 5px; */
    margin-top: 10px;
    border-top: 1px solid grey;
}

.wrapper .row .setting .card .random-link .random-link-list .header {
    width: 100%;
    height: auto;
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    border: none;
}

.wrapper .row .setting .card .random-link .random-link-list .input {
    width: 100%;
    height: auto;
}

.wrapper .row .setting .card .random-link .random-link-list .input h4 {
    margin-top: 10px;
}

.wrapper .row .setting .card .random-link .random-link-list .input input {
    height: 35px;
    width: 84%;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 0 5px;
    margin-top: 10px
}

.wrapper .row .setting .btn-group {
    width: fit-content;
    margin-left: 80px;
}

.wrapper .row .setting .btn-group button {
    margin-left: 25px;
    margin-top: 10px;
    padding: 13px 25px;
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background-color: var(--text-optional);
    color: var(--optional);
}

.wrapper .row .preview {
    width: 50%;
    height: 100%;
    background-color: #202938;
}

.wrapper .row .preview .display {
    border: 1px solid black;
    background-color: white;
    border-radius: 10px;
    width: 75%;
    height: 90%;
    margin: 0 auto;
    margin-top: 20px;
}
</style>