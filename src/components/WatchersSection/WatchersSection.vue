<script setup>
import { reactive, ref, watch } from 'vue';

const refCounter = ref(0);
const reactiveUser = reactive({
    name: 'John',
    age: 25,
});

const increment = () => {
    refCounter.value++;
};

const changeName = () => {
    reactiveUser.name = 'Jane';
};

// Watchers
watch(refCounter, (newValue, oldValue) => {
    console.log('refCounter changed:', newValue, oldValue);
});

watch(
    () => reactiveUser.name,
    (newValue, oldValue) => {
        console.log('reactiveUser.name changed:', newValue, oldValue);
    }
);

watch(
    reactiveUser,
    (newValue, oldValue) => {
        console.log('reactiveUser changed:', newValue, oldValue);
    },
    { deep: true }
);
</script>

<template>
    <div>
        <h1>refCounter: {{ refCounter }}</h1>
        <button @click="increment">Increment</button>
        <h1>reactiveUser.name: {{ reactiveUser.name }}</h1>
        <button @click="changeName">Change Name</button>
    </div>
</template>
