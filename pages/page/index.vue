<template>
    <div>
        <div class="row">
            <Sidebar />
            <div class="page">
                <div class="header">
                    <h2>Page</h2>
                </div>
                <div class="button">
                    <button>New page</button>
                </div>
                <div class="tabel-container">
                    <div class="filter">
                        <div class="search">
                            <input type="text" placeholder="Search...">
                        </div>
                        <div class="sorting">
                            <div class="list-title"
                                @click="filter.toggleSorting = filter.toggleSorting === 'block' ? 'none' : 'block'">
                                Sort
                                <i class="bi bi-arrow-down"></i>
                            </div>
                            <div class="menu-list" :style="{ 'display': filter.toggleSorting }">
                                <div class="list" @click="filter.lastAdded = filter.lastAdded == true ? false : true">
                                    <p>Last added</p> <i class="bi bi-check-lg" v-if="filter.lastAdded"></i>
                                </div>
                                <div class="list" @click="filter.name = filter.name == true ? false : true">
                                    <p>Name</p> <i class="bi bi-check-lg" v-if="filter.name"></i>
                                </div>
                            </div>
                        </div>
                        <div class="popular">
                            <div class="check"
                                :style="{ 'background-color': filter.popular ? 'lightblue' : 'white', 'border': filter.popular ? '1px solid lightblue' : '1px solid grey' }"
                                @click="filter.popular = filter.popular == true ? false : true"></div>
                            <p>Popular</p>
                        </div>
                    </div>
                    <div class="tabel">
                        <!-- Card start -->
                        <div class="card">
                            <div class="card-head">
                                <div class="thumbnail">R</div>
                                <div class="title">
                                    <div class="name">Radya</div>
                                    <div class="link"><a href="https://onelink.radya.fun/radya"
                                            target="_blank"><small>onelink.radya.fun/radya</small></a></div>
                                </div>
                            </div>
                            <div class="card-info">
                                <div class="menu">
                                    <div class="view"><i class="bi bi-eye"></i> 99 Views</div>
                                    <div class="edit"><i class="bi bi-pencil-square"></i> Edit</div>
                                    <div class="share"><i class="bi bi-share-fill"></i></div>
                                </div>
                                <div class="created"><small><i class="bi bi-clock"></i> 28/07/2024</small></div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-head">
                                <div class="thumbnail">R</div>
                                <div class="title">
                                    <div class="name">Radya</div>
                                    <div class="link"><a href="https://onelink.radya.fun/radya"
                                            target="_blank"><small>onelink.radya.fun/radya</small></a></div>
                                </div>
                            </div>
                            <div class="card-info">
                                <div class="menu">
                                    <div class="view"><i class="bi bi-eye"></i> 99 Views</div>
                                    <div class="edit"><i class="bi bi-pencil-square"></i> Edit</div>
                                    <div class="share"><i class="bi bi-share-fill"></i></div>
                                </div>
                                <div class="created"><small><i class="bi bi-clock"></i> 28/07/2024</small></div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-head">
                                <div class="thumbnail">R</div>
                                <div class="title">
                                    <div class="name">Radya</div>
                                    <div class="link"><a href="https://onelink.radya.fun/radya"
                                            target="_blank"><small>onelink.radya.fun/radya</small></a></div>
                                </div>
                            </div>
                            <div class="card-info">
                                <div class="menu">
                                    <div class="view"><i class="bi bi-eye"></i> 99 Views</div>
                                    <div class="edit"><i class="bi bi-pencil-square"></i> Edit</div>
                                    <div class="share"><i class="bi bi-share-fill"></i></div>
                                </div>
                                <div class="created"><small><i class="bi bi-clock"></i> 28/07/2024</small></div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-head">
                                <div class="thumbnail">R</div>
                                <div class="title">
                                    <div class="name">Radya</div>
                                    <div class="link"><a href="https://onelink.radya.fun/radya"
                                            target="_blank"><small>onelink.radya.fun/radya</small></a></div>
                                </div>
                            </div>
                            <div class="card-info">
                                <div class="menu">
                                    <div class="view"><i class="bi bi-eye"></i> 99 Views</div>
                                    <div class="edit"><i class="bi bi-pencil-square"></i> Edit</div>
                                    <div class="share"><i class="bi bi-share-fill"></i></div>
                                </div>
                                <div class="created"><small><i class="bi bi-clock"></i> 28/07/2024</small></div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-head">
                                <div class="thumbnail">R</div>
                                <div class="title">
                                    <div class="name">Radya</div>
                                    <div class="link"><a href="https://onelink.radya.fun/radya"
                                            target="_blank"><small>onelink.radya.fun/radya</small></a></div>
                                </div>
                            </div>
                            <div class="card-info">
                                <div class="menu">
                                    <div class="view"><i class="bi bi-eye"></i> 99 Views</div>
                                    <div class="edit"><i class="bi bi-pencil-square"></i> Edit</div>
                                    <div class="share"><i class="bi bi-share-fill"></i></div>
                                </div>
                                <div class="created"><small><i class="bi bi-clock"></i> 28/07/2024</small></div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-head">
                                <div class="thumbnail">R</div>
                                <div class="title">
                                    <div class="name">Radya</div>
                                    <div class="link"><a href="https://onelink.radya.fun/radya"
                                            target="_blank"><small>onelink.radya.fun/radya</small></a></div>
                                </div>
                            </div>
                            <div class="card-info">
                                <div class="menu">
                                    <div class="view"><i class="bi bi-eye"></i> 99 Views</div>
                                    <div class="edit"><i class="bi bi-pencil-square"></i> Edit</div>
                                    <div class="share"><i class="bi bi-share-fill"></i></div>
                                </div>
                                <div class="created"><small><i class="bi bi-clock"></i> 28/07/2024</small></div>
                            </div>
                        </div>
                        <!-- Card end -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';

import Cookies from 'js-cookie';

import Sidebar from '../layouts/sidebar.vue';


useHead({
    title: 'OneLink - Page',
    link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css' }
    ],
    meta: [
        { name: 'author', content: 'M Radya Iftikhar' },
        { name: 'description', content: 'Discover the ease of sharing with one simple link. Combine all your important links into a single, easily accessible link. Perfect for social media, portfolios, and more.' },
        { name: 'seo', content: 'onelink, link, bio' },
    ]
})

const filter = reactive({
    toggleSorting: 'none',
    lastAdded: false,
    name: false,
    popular: false
})

onMounted(() => {
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


a {
    text-decoration: none;
    color: grey;
}

.row {
    display: flex;
}

:root {
    --primary: #000814;
    --secondary: #001d3d;
    --optional: #003566;
    --text-light: #f2e9e4;
    --text-dark: #22223b;
    --text-optional: #ffd60a;
}

.page {
    width: 79%;
    height: 100vh;
    overflow-y: scroll;
    border-left: 1px solid #efefef;
    background-color: #f9fafc;
}

.page::-webkit-scrollbar {
    width: 10px;
}

.page::-webkit-scrollbar-thumb {
    background-color: var(--optional);
}

.page .header {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
}

.page .header h2 {
    width: 95%;
    margin: 0 auto;
    font-size: 30px;
}

.page .button {
    height: auto;
    width: 95%;
    margin: 0 auto;
    margin-top: 20px;
}

.page .button button {
    padding: 10px 20px;
    border: none;
    background-color: var(--text-optional);
    color: var(--text-dark);
    border-radius: 10px;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
}

.page .tabel-container {
    /* border: 1px solid black; */
    width: 95%;
    height: 430px;
    margin: 0 auto;
    margin-top: 5px;
}

.page .tabel-container .filter {
    /* border: 1px solid red; */
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    margin-top: 15px;
}

.page .tabel-container .filter .search input {
    padding: 0 10px;
    width: 250px;
    height: 40px;
    /* background-color: var(--text-light); */
    border: 1px solid var(--text-light);
    border-radius: 10px;
    font-size: 15px;
}

.page .tabel-container .filter .sorting {
    border: 1px solid var(--text-light);
    border-radius: 10px;
    margin-left: 30px;
}

.page .tabel-container .filter .sorting .list-title {
    /* border: 1px solid var(--text-light); */
    border-radius: 10px;
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: grey;
}

.page .tabel-container .filter .sorting .list-title i {
    margin-left: 10px;
}

.page .tabel-container .filter .sorting .menu-list {
    position: absolute;
}

.page .tabel-container .filter .sorting .menu-list .list {
    /* border: 1px solid black; */
    color: grey;
    width: 125px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
}

.page .tabel-container .filter .sorting .menu-list .list p {
    margin-left: 10px;
}

.page .tabel-container .filter .sorting .menu-list .list:hover {
    background-color: #efefef;
}

.page .tabel-container .filter .popular {
    border: 1px solid var(--text-light);
    border-radius: 10px;
    margin-left: 30px;
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: grey;
}

.page .tabel-container .filter .popular .check {
    border: 1px solid var(--optional);
    width: 17px;
    height: 17px;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 5px;
}

.page .tabel-container .tabel {
    width: 95%;
    height: 360px;
    margin-top: 10px;
}

.page .tabel-container .tabel::-webkit-scrollbar{
    width: 10px;
}

.page .tabel-container .tabel::-webkit-scrollbar-thumb{
    background-color: var(--text-optional);
    border-radius: 50px;
}

.page .tabel-container .tabel .card {
    border: 1.5px solid #efefef;
    border-radius: 5px;
    background-color: white;
    width: 80%;
    height: 80px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.page .tabel-container .tabel .card .card-head {
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 20px;
}

.page .tabel-container .tabel .card .card-head .thumbnail {
    border-radius: 10px;
    width: 65px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    background-color: var(--text-light);
}

.page .tabel-container .tabel .card .card-head .title {
    margin-left: 10px;
}

.page .tabel-container .tabel .card .card-head .title .name {
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 17px;
}

.page .tabel-container .tabel .card .card-head .title .link {
    color: grey;
    cursor: pointer;
}

.page .tabel-container .tabel .card .card-head .title .link:hover {
    text-decoration: underline;
}

.page .tabel-container .tabel .card .card-info {
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: end;
}

.page .tabel-container .tabel .card .card-info .menu {
    display: flex;
}

.page .tabel-container .tabel .card .card-info .menu .view {
    padding: 5px 7px;
    margin-right: 15px;
    background-color: #efefef;
    border-radius: 5px;
    cursor: pointer;
}

.page .tabel-container .tabel .card .card-info .menu .edit {
    padding: 5px 7px;
    margin-right: 15px;
    background-color: #efefef;
    border-radius: 5px;
    cursor: pointer;
}

.page .tabel-container .tabel .card .card-info .menu .share {
    padding: 5px 7px;
    margin-right: 15px;
    background-color: #efefef;
    border-radius: 5px;
    cursor: pointer;
}

.page .tabel-container .tabel .card .card-info .created {
    margin-right: 20px;
}
</style>