<template>
    <div>
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
            <div class="login">
                <button>Login / Daftar</button>
            </div>
        </nav>
    </div>
</template>

<script setup>

const emit = defineEmits()
const state = reactive({
    navSelect: 'home',
})

function switchOnPage(menu) {
    state.navSelect = menu
    emit('loadOnPage', true)
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

nav {
    /* border: 1px solid white; */
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
    color: #000814;
    padding: 5px 10px;
    border-radius: 10px;
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
        padding: 10px 20px;
        margin-right: 50px;
    }
}
</style>