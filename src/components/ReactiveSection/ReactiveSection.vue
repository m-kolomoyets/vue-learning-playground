<script setup>
import { reactive } from 'vue'

const combinedState = reactive({
    count: 0,
    users: ['Alice', 'Bob', 'Charlie'],
})

const incrementCounter = () => {
    combinedState.count++
}

const addUser = (name) => {
    combinedState.users.push(name)
}
</script>

<!-- NOTE: Once state changes, not all object retrieves rerender, but only the changes one -->
<template>
    <h1>Count: {{ combinedState.count }}</h1>
    <button @click="incrementCounter">Increment</button>

    <h2>Users:</h2>
    <button @click="addUser('David')">Add User</button>
    <ul>
        <li v-for="user in combinedState.users" :key="user">{{ user }}</li>
    </ul>
</template>
