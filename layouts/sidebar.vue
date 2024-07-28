<template>
    <div>
        <loadingToPage v-if="loading" />
        <div class="sidebar">
            <div class="menu">
                <div class="title"> <span style="color: var(--text-optional);">One</span>Link</div>
                <div class="menu-list">
                    <div class="list" style="margin-left: 25px; font-weight: bold;">MENU</div>
                    <div class="list" @click="display('dashboard')"
                        :class="{ 'selected': currectDisplay === 'dashboard' }"><i class="bi bi-grid"></i>
                        <p>Dashboard</p>
                    </div>
                    <div class="list" @click="display('page')" :class="{ 'selected': currectDisplay === 'page' }"><i
                            class="bi bi-boxes"></i>
                        <p>Page</p>
                    </div>  
                    <div class="list" @click="display('setting')" :class="{ 'selected': currectDisplay === 'setting' }">
                        <i class="bi bi-gear"></i>
                        <p>Setting</p>
                    </div>
                </div>
            </div>
            <div class="logout" @click="logout()"><i class="bi bi-arrow-right-square"></i>
                <p>Logout</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Cookies from 'js-cookie';
import swal from 'sweetalert';

import { useRouter } from 'vue-router';

import { logoutUser } from '../service/auth';
import loadingToPage from '../components/loadingToPage.vue'
import { onMounted, onUpdated } from 'vue';

const router = useRouter()
const currectDisplay = ref('dashboard')
const loading = ref(false)

async function logout() {
    try {
        const alert = await swal({
            icon: 'warning',
            title: 'Ingin logout?',
            buttons: ['Tidak', 'Iya']
        })

        if (alert) {
            await logoutUser()
            localStorage.clear()
            Cookies.remove('isLoggedIn')
            location.href = '/'
        }
    } catch (error) {
        console.log(error.message)
    }
}

function display(value) {
    currectDisplay.value = value
    localStorage.setItem('display', value)
    loading.value = true
    setTimeout(() => {
        loading.value = false
        router.push(value)
    }, 1100);
}

onMounted(() => {
    currectDisplay.value = localStorage.getItem('display') ? localStorage.getItem('display') : 'dashboard'
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

.sidebar {
    background-color: white;
    width: 270px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
}


.sidebar .menu {
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.sidebar .menu .title {
    font-size: 45px;
    font-weight: bold;
    text-align: center;
    margin-top: 30px;
}

.sidebar .menu .menu-list {
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 10px;
}

.sidebar .menu .menu-list .list {
    /* border: 1px solid green; */
    cursor: pointer;
    width: 90%;
    height: 20%;
    margin: 0 auto;
    font-size: 17px;
    color: #000000c0;
    display: flex;
    align-items: center;
}

.sidebar .menu .menu-list .list i {
    margin-left: 10px;
}

.sidebar .menu .menu-list .list p {
    margin-left: 5px;
}

.sidebar .logout {
    border-top: 5px solid #efefef;
    height: 60px;
    font-size: 17px;
    font-weight: bold;
    color: #000000c0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.sidebar .logout p {
    margin-left: 10px;
}

.selected {
    background-color: var(--text-optional);
    border-radius: 10px;
}
</style>