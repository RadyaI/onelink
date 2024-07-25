<template>
    <div>
        <div class="pageLoading"></div>
    </div>
</template>

<script>

</script>

<style scoped>
.pageLoading {
    background-color: rgba(0, 0, 0, 0.519);
    width: 100%;
    height: 3px;
    position: absolute;
    top: 0;
    animation: load 1s;
}

@keyframes load {
    0% {
        width: 0%;
    }

    50% {
        width: 50%;
    }

    60% {
        width: 75%;
        }

    100% {
        width: 100%;
    }
}
</style>