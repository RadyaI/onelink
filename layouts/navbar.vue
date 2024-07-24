<template>
    <div>
        <div class="sidebar-open" v-if="state.sidebar"></div>
        <nav>
            <div class="row">
                <div class="title">
                    <span style="color: var(--text-optional);">One</span>Link
                </div>
                <div class="menu">
                    <div class="menu-list" :class="{ 'selected': state.navSelect === 'home' }"
                        @click="switchOnPage('home')">Home</div>
                    <div class="menu-list" :class="{ 'selected': state.navSelect === 'about' }"
                        @click="switchOnPage('about')">About</div>
                    <div class="menu-list" :class="{ 'selected': state.navSelect === 'dashboard' }"
                        @click="switchOnPage('dashboard')">Dashboard</div>
                </div>
            </div>
            <div class="menu-burger">
                <i class="bi bi-list" @click="state.sidebar = true"></i>
            </div>
            <div class="login">
                <button @click="logout" v-if="state.isLoggedIn">LogOut</button>
                <button @click="login" v-else>Login / Daftar</button>
            </div>
        </nav>
        <div class="sidebar" :class="{ 'hide': state.onHide }" v-if="state.sidebar">
            <div class="close">
                <i class="icon bi bi-x-lg" @click="hideSidebar()"></i>
            </div>
            <div class="menu">
                <div class="menu-list" :class="{ 'selected': state.navSelect === 'home' }"
                    @click="switchOnPage('home')">Home </div>
                <div class="menu-list" :class="{ 'selected': state.navSelect === 'about' }"
                    @click="switchOnPage('about')">About</div>
                <div class="menu-list" :class="{ 'selected': state.navSelect === 'dashboard' }"
                    @click="switchOnPage('dashboard')">Dashboard</div>
            </div>
            <div class="login">
                <button @click="logout" v-if="state.isLoggedIn">LogOut</button>
                <button @click="login" v-else>Login / Daftar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useNuxtApp } from 'nuxt/app';

import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

import swal from 'sweetalert';

const emit = defineEmits()
const { $auth } = useNuxtApp()
const state = reactive({
    isLoggedIn: false,
    navSelect: 'home',
    sidebar: false,
    onHide: false,
})

function switchOnPage(menu) {
    state.navSelect = menu
    emit('loadOnPage', true)
    emit('currentDisplay', state.navSelect)
}

function hideSidebar() {
    state.onHide = true
    setTimeout(() => {
        state.onHide = false
        state.sidebar = false
    }, 150);
}

async function login() {
    try {
        console.log('Login...')
        const provider = new GoogleAuthProvider()
        const user = await signInWithPopup($auth, provider)
        state.isLoggedIn = true

        localStorage.setItem('loginData', JSON.stringify(user.user))
        localStorage.setItem('isLoggedIn', true)

        console.log(user)
    } catch (error) {
        console.log(error)
    }
}

async function logout() {
    try {
        const alert = await swal({
            icon: 'warning',
            title: 'Ingin LogOut?',
            buttons: ['Tidak', 'Iya'],
            dangerMode: true
        })

        if (alert) {
            console.log('logout...')
            await signOut($auth)
            localStorage.clear()
            location.reload()
        }
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    state.isLoggedIn = localStorage.getItem('isLoggedIn')
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

nav {
    border-radius: 30px 30px 0 0;
    display: flex;
    justify-content: space-between;
    color: var(--text-light);
    width: 100%;
    height: 100px;
}

.row {
    display: flex;
    justify-content: space-between;
    width: 45%;
}

.selected {
    background-color: #ffd60a;
    color: var(--optional);
    padding: 5px 10px;
    border-radius: 10px;
}

.menu-burger,
.sidebar {
    display: none;
}

nav .row .title {
    cursor: pointer;
    width: 150px;
    height: 100px;
    font-weight: bolder;
    font-size: 40px;
    margin-left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav .row .menu {
    width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bolder;
}

nav .row .menu .menu-list {
    cursor: pointer;
}

nav .login {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px
}

nav .login button {
    border: none;
    border-radius: 15px;
    cursor: pointer;
    padding: 10px 30px;
    font-size: 15px;
    background-color: var(--text-light);
    color: var(--primary);
}

@media only screen and (max-width:700px) {

    .row .menu .menu-list {
        display: none;
    }

    nav .row .title {
        font-size: 30px;
        margin-left: 35px
    }

    nav .login button {
        display: none;
    }

    .selected {
        background-color: var(--primary);
        color: var(--text-light);
    }

    .menu-burger {
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 45px;
        margin-left: 130px;
    }

    .sidebar-open {
        position: absolute;
        background-color: black;
        opacity: 0.5;
        width: 100%;
        height: 100vh;
    }

    .sidebar {
        position: absolute;
        background-color: var(--text-light);
        color: var(--text-dark);
        top: 0;
        left: 0;
        display: block;
        width: 80%;
        height: 100vh;
        animation: slide 0.2s;
    }

    .hide {
        animation: hideSlide 0.2s;
    }

    @keyframes hideSlide {
        0% {
            left: 0;
        }

        100% {
            left: -350px;
        }
    }

    @keyframes slide {
        0% {
            left: -350px;
        }

        100% {
            left: 0;
        }
    }

    .sidebar .close {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 40px;
    }

    .sidebar .close .icon {
        margin-right: 20px;
    }

    .sidebar .menu {
        width: 100%;
        height: 200px;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: var(--text-dark);
    }

    .sidebar .menu .menu-list {
        width: 80%;
        height: 45px;
        font-weight: bold;
        display: flex;
        align-items: center;
    }

    .sidebar .login {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        margin-top: 25px;
    }

    .sidebar .login button {
        border: none;
        border-radius: 20px;
        cursor: pointer;
        padding: 3px 15px;
        font-size: 15px;
        background-color: var(--text-optional);
        color: var(--primary);
        font-weight: bold;
    }

}
</style>