<script setup>
import { useToggle } from '@vueuse/core';
import { defineAsyncComponent } from 'vue';
import { LIST_ITEMS } from './constants';

const ListItem = defineAsyncComponent(() => {
    return import('./components/ListItem');
});

const [isListVisible, toggleIsListVisible] = useToggle();
</script>

<template>
    <h2>Async component</h2>
    <button @click="toggleIsListVisible()">{{ isListVisible ? 'Hide' : 'Show' }} list</button>
    <ul v-if="isListVisible">
        <ListItem v-for="item in LIST_ITEMS" :key="item.id" :title="item.title">
            {{ item.content }}
        </ListItem>
    </ul>
</template>
