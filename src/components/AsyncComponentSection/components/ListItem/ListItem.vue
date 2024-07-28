<script setup>
const { title } = defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <li>
        <h2>{{ title }}</h2>
        <slot></slot>
    </li>
</template>
