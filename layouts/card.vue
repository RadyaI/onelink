<template>
    <div>
        <div class="card">
            <div class="text">
                <h2>Welcome to OneLink.</h2>
                <p>Put all the links you have here!</p>
                <p>Get Started</p>
            </div>
            <div class="img">
                <img :src="state.img.home" alt="home">
            </div>
        </div>
    </div>
</template>

<script setup>
import homeImg from '@/public/img/home2.png'
import { reactive } from 'vue';

const state = reactive({
    img: {
        home: homeImg
    }
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
    height: 100%;
    color: var(--text-light);
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