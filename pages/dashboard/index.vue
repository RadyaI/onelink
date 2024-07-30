<template>
    <div>
        <loadingToPage v-if="state.loading" />
        <div class="row">
            <Sidebar />
            <div class="dashboard">
                <div class="header">
                    <h2>Dashboard</h2>
                </div>
                <div class="access">
                    <div class="title">
                        QUICK ACCESS
                    </div>
                    <div class="card">
                        <div class="make-page" @click="createNewPage()">
                            <i class="bi bi-border-all"></i>
                            <p>New Page</p>
                            <i class="bi bi-arrow-right"></i>
                        </div>
                        <div class="make-link">
                            <i class="bi bi-link-45deg"></i>
                            New Link
                            <i class="bi bi-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div class="analytic">
                    <div class="title">
                        ANALYTIC
                    </div>
                    <div class="card">
                        <div class="all-page-visit">
                            <div class="value">0</div>
                            <div class="name"><i class="bi bi-record-fill"></i> Total Page Visitor</div>
                        </div>
                        <div class="all-link-visit">
                            <div class="value">0</div>
                            <div class="name"><i class="bi bi-record-fill"></i> Total Link Visitor</div>
                        </div>
                        <div class="popular-page-visit">
                            <div class="value">instagram-page</div>
                            <div class="name"><i class="bi bi-record-fill"></i> Popular Page</div>
                        </div>
                        <div class="popular-link-visit">
                            <div class="value">youtube-link</div>
                            <div class="name"><i class="bi bi-record-fill"></i> Popular Link</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';

import Cookies from 'js-cookie';

import Sidebar from '../layouts/sidebar.vue';
import loadingToPage from '@/components/loadingToPage.vue'

const route = useRouter()
useHead({
    title: 'OneLink - Dashboard',
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

})

function createNewPage() {
    state.loading = true
    setTimeout(() => {
        route.push('/page/create')
    }, 1100);
}

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

.dashboard {
    width: 79%;
    height: 100vh;
    overflow-y: scroll;
    border-left: 1px solid #efefef;
    background-color: #f9fafc;
}

.dashboard::-webkit-scrollbar {
    width: 10px;
}

.dashboard::-webkit-scrollbar-thumb {
    background-color: var(--optional);
}

.dashboard .header {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
}

.dashboard .header h2 {
    width: 95%;
    margin: 0 auto;
    font-size: 30px;
}

.dashboard .access {
    width: 100%;
    height: 100px;
    margin-top: 20px;
}

.dashboard .access .title {
    width: 95%;
    margin: 0 auto;
    font-weight: bold;
    color: #495666;
}

.dashboard .access .card {
    width: 95%;
    margin: 0 auto;
    margin-top: 15px;
    height: 60px;
    display: flex;
    align-items: center;
}

.dashboard .access .card .make-page {
    border: 1px solid #ff0000a5;
    width: 200px;
    height: 90%;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    background-color: #fef2f2;
    color: #cd3136;
}

.dashboard .access .card .make-page:hover {
    background-color: #c03f3f2a;
}

.dashboard .access .card .make-page i {
    font-size: 20px;
}

.dashboard .access .card .make-link {
    border: 1px solid #ffd900;
    width: 200px;
    height: 90%;
    margin-left: 20px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    background-color: #fefbea;
    color: #d2763a;
}

.dashboard .access .card .make-link:hover {
    background-color: #b5a65239;
}

.dashboard .access .card .make-link i {
    font-size: 20px;
}

.dashboard .analytic {
    width: 100%;
    height: 300px;
    margin-top: 25px;
}

.dashboard .analytic .title {
    width: 95%;
    margin: 0 auto;
    font-weight: bold;
    color: #495666;
}

.dashboard .analytic .card {
    width: 95%;
    margin: 0 auto;
    margin-top: 15px;
    height: auto;
    display: flex;
    align-items: center;
}

.dashboard .analytic .card .all-page-visit {
    width: 220px;
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 10px;
    border: 1px solid #ecedef;
    background-color: #ffffff;
}

.dashboard .analytic .card .all-page-visit .value {
    font-size: 35px;
    margin-top: 20px;
    margin-left: 15px;
}

.dashboard .analytic .card .all-page-visit .name {
    margin-bottom: 20px;
    margin-left: 15px;
}

.dashboard .analytic .card .all-page-visit .name i {
    color: red;
}

.dashboard .analytic .card .all-link-visit {
    width: 220px;
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 10px;
    border: 1px solid #ecedef;
    background-color: #ffffff;
    margin-left: 20px;
}

.dashboard .analytic .card .all-link-visit .value {
    font-size: 35px;
    margin-top: 20px;
    margin-left: 15px;
}

.dashboard .analytic .card .all-link-visit .name {
    margin-bottom: 20px;
    margin-left: 15px;
}

.dashboard .analytic .card .all-link-visit .name i {
    color: purple;
}

.dashboard .analytic .card .popular-page-visit {
    width: 220px;
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 10px;
    border: 1px solid #ecedef;
    background-color: #ffffff;
    margin-left: 20px;
}

.dashboard .analytic .card .popular-page-visit .value {
    font-size: 18px;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 15px;
}

.dashboard .analytic .card .popular-page-visit .name {
    margin-bottom: 20px;
    margin-left: 15px;
}

.dashboard .analytic .card .popular-page-visit .name i {
    color: red;
}

.dashboard .analytic .card .popular-link-visit {
    width: 220px;
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 10px;
    border: 1px solid #ecedef;
    background-color: #ffffff;
    margin-left: 20px;
}

.dashboard .analytic .card .popular-link-visit .value {
    font-size: 18px;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 15px;
}

.dashboard .analytic .card .popular-link-visit .name {
    margin-bottom: 20px;
    margin-left: 15px;
}

.dashboard .analytic .card .popular-link-visit .name i {
    color: purple;
}
</style>