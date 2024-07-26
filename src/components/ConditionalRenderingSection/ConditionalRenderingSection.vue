<script setup>
import { computed } from 'vue';
import { useCounter, useToggle } from '@vueuse/core';

const [isChecked, toggleIsChecked] = useToggle();

const { count: counter, inc: incrementCounter, dec: decrementCounter } = useCounter(0);

const isCounterMoreThanFive = computed(() => {
    return counter.value > 5;
});
</script>

<template>
    <h1>Is Checked: {{ isChecked }}</h1>
    <h1>Counter: {{ counter }}</h1>
    <button @click="toggleIsChecked()">Toggle</button>
    <button @click="incrementCounter()">Increment</button>
    <button @click="decrementCounter()">Decrement</button>

    <br />
    <h1 v-if="isChecked">Checked</h1>
    <h1 v-else-if="isCounterMoreThanFive">Counter is more than five and checked is false</h1>
    <h1 v-else>Not Checked</h1>
    <p v-show="isChecked">This is a paragraph that will only show when the checkbox is checked. using V-SHOW</p>
</template>
