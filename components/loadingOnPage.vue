<template>
    <div>
        <div class="pageLoading"></div>
    </div>
</template>

<script>

</script>

<style scoped>
.pageLoading {
    background-color: #ffd60a;
    width: 100%;
    height: 3px;
    position: absolute;
    top: 0;
    animation: load 0.5s linear;
}

@keyframes load {
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
}
</style>