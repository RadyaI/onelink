<template>
    <div>
        <div class="row">
            <Sidebar/>
            <div class="page">
                <div class="header">
                    <h2>Page</h2>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

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

</style>