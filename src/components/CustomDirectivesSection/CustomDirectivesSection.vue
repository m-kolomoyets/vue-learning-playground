<script setup>
const vBoldTitle = {
    mounted(element) {
        element.style.fontWeight = 'bold';
    },
};

const vRedText = {
    mounted(element) {
        element.style.color = 'red';
    },
};

const vUnderline = {
    mounted(element) {
        element.style.textDecoration = 'underline';
    },
};

const vFontSize = {
    mounted(element, binding) {
        element.style.fontSize = `${binding.value}px`;
    },
};
</script>

<template>
    <h2>Custom directives</h2>
    <p v-bold-title>Bold</p>
    <p v-red-text>Red</p>
    <p v-underline>Underline</p>
    <p v-font-size="20">Font size 20px</p>
    <p v-bold-title v-red-text>Bold Ref</p>
    <p v-bold-title v-red-text v-underline v-font-size="30">Bold Red Underline Font size 30px</p>
</template>
