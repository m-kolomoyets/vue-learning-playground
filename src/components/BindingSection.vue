<script setup>
const testMessage = 'Hello!';
const testLinkUrl = 'https://vitejs.dev/guide/features.html';
const testImage = {
    src: 'https://vitejs.dev/logo.svg',
    alt: 'Vite Logo',
};
</script>

<template>
    <h1>testMessage: {{ testMessage }}</h1>
    <a :href="testLinkUrl">Vite Docs</a>
    <img v-bind="testImage" />
</template>
