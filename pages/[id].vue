<template>
    <div>
        <div class="container">
            <h1>Coming Soon</h1>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    console.log('coming soon')
})
</script>

<style scoped>
h1 {
    color: white;
}
</style>