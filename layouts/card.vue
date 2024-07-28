<template>
    <div>
        <div class="card">
            <div class="text">
                <h2>{{ state.content.title }}</h2>
                <p>{{ state.content.text }}</p>
                <p @click="getStarted()">{{ state.content.text2 }}</p>
            </div>
            <div class="img">
                <img :src="state.content.img" alt="home">
            </div>
        </div>
    </div>
</template>

<script setup>
import { onUpdated, reactive } from 'vue';
import { useRouter } from 'vue-router';

import Cookies from 'js-cookie';

import homeImg from '@/public/img/home2.png'
import aboutImg from '@/public/img/about.png'
import { loginUser } from '../service/auth';


const props = defineProps(['display'])
const router = useRouter()
const state = reactive({
    img: {
        home: homeImg
    },
    content: {
        title: 'Welcome to OneLink.',
        text: 'Put all the links you have here!',
        text2: 'Get Started',
        img: homeImg
    }
})

function contentToDisplay(display) {
    if (display === 'home') {
        state.content.title = 'Welcome to OneLink.'
        state.content.text = 'Put all the links you have here!'
        state.content.text2 = 'Get Started'
        state.content.img = homeImg
    } else if (display === 'about') {
        state.content.title = 'What is OneLink?.'
        state.content.text = 'OneLink is a platform for creating a link containing your social media links or whatever links'
        state.content.text2 = 'You can also include a profile photo and about yourself'
        state.content.img = aboutImg
    } else if (display === 'dashboard') {
        state.content.title = 'Coming Soon'
        state.content.text = ''
        state.content.text2 = ''
        state.content.img = homeImg
    }
}

async function getStarted() {
    if (state.content.text2 === 'Get Started' && Cookies.get('isLoggedIn')) {
        router.push('/dashboard')
    } else {
        const user = await loginUser()
        localStorage.setItem('loginData', JSON.stringify(user))
        Cookies.set('isLoggedIn', true)
        router.push('/dashboard')
    }
}

onUpdated(() => {
    contentToDisplay(props.display)
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

.card {
    margin: 0 auto;
    width: 95%;
    height: 400px;
    display: flex;
}

.card .text {
    width: 50%;
    height: 90%;
    color: var(--text-light);
    overflow-y: auto;
}

.card .text::-webkit-scrollbar {
    width: 10px;
}

.card .text::-webkit-scrollbar-thumb {
    background-color: var(--text-optional);
    border-radius: 50px;
}

.card .text h2 {
    width: 90%;
    font-size: 70px;
    margin-top: 70px;
    margin-left: 20px;
}

.card .text p:nth-child(2) {
    font-size: 30px;
    margin-top: 20px;
    margin-left: 20px;
    width: 90%;
}

.card .text p:nth-child(3) {
    font-size: 30px;
    margin-top: 10px;
    margin-left: 20px;
    width: 90%;
    text-decoration: underline;
    cursor: pointer;
}

.card .img {
    width: 50%;
    height: 100%;
}

.card .img img {
    margin-left: 30px;
}

@media only screen and (max-width:700px) {
    .card {
        flex-direction: column;
        height: 70vh;
    }

    .card .text {
        width: 100%;
    }

    .card .text h2 {
        margin-top: 40px;
        font-size: 40px;
    }

    .card .text p:nth-child(2) {
        font-size: 20px;
    }

    .card .text p:nth-child(3) {
        font-size: 20px;
    }

    .card .img {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card .img img {
        width: 200px;
        height: 200px;
    }
}
</style>