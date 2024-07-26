<script setup>
import { computed, ref } from 'vue';
import { USERS } from './constants';

const counter = ref(0);
const userName = ref('');

const squaredCounter = computed(() => {
    return counter.value * counter.value;
});

const isUserNameMoreThatFive = computed(() => {
    return userName.value.length > 5;
});

const isUserAlreadyExists = computed(() => {
    return USERS.includes(userName.value);
});
</script>

<template>
    <h1>Counter: {{ counter }}</h1>
    <h1>Squared Counter: {{ squaredCounter }}</h1>
    <button @click="counter++">Increment</button>

    <br />

    <h1>Is User Name More Than Five: {{ isUserNameMoreThatFive }}</h1>
    <h1>Is User Already Exists: {{ isUserAlreadyExists }}</h1>
    <input v-model="userName" />
</template>
