<template>
    <div>
        <div class="container">
            <h1>Coming Soon</h1>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
useHead({
    title: `OneLink - ${route.params.id}`,
    link: [
        { rel: '', href: '' }
    ],
    meta: [
        { name: 'description', content: '' },
    ]
})


onMounted(() => {
    console.log('coming soon => ' + route.params.id)
})
</script>

<style scoped>
h1 {
    color: white;
}
</style>