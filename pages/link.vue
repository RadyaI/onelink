<template>
    <div>
        <div class="row">
            <Sidebar />
            <div class="link">
                <div class="profil">
                    <h2>Link</h2>
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
    title: 'OneLink - Link',
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
    // const auth = Cookies.get('isLoggedIn')
    const auth = true
    if(!auth){
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

.link {
    width: 79%;
    height: 100vh;
    overflow-y: scroll;
    background-color: #efefef;
}

.link::-webkit-scrollbar {
    width: 10px;
}

.link::-webkit-scrollbar-thumb {
    background-color: var(--optional);
}

.link .profil {
    width: 100%;
    height: 100px;
}
</style>