<script setup>
import { reactive, ref } from 'vue'

const refState = ref({
    count: 0,
    users: ['Alice', 'Bob', 'Charlie'],
})

const reactiveState = reactive({
    count: 0,
    users: ['Alice', 'Bob', 'Charlie'],
})

const incrementReactiveCounter = () => {
    reactiveState.count++
}

const incrementRefCounter = () => {
    refState.value.count++
}

const addReactiveUser = (name) => {
    reactiveState.users.push(name)
}

const addRefUser = (name) => {
    refState.value.users.push(name)
}
</script>

<!-- NOTE: Once state changes, not all object retrieves rerender, but only the changes one -->
<template>
    <br />
    <h1>REACTIVE</h1>
    <h3>Count: {{ reactiveState.count }}</h3>
    <button @click="incrementReactiveCounter">Increment</button>

    <h3>Users:</h3>
    <button @click="addReactiveUser('David')">Add User</button>
    <ul>
        <li v-for="user in reactiveState.users" :key="user">{{ user }}</li>
    </ul>

    <br />

    <h1>REF</h1>
    <h3>Count: {{ refState.count }}</h3>
    <button @click="incrementRefCounter">Increment</button>

    <h3>Users:</h3>
    <button @click="addRefUser('David')">Add User</button>

    <ul>
        <li v-for="user in refState.users" :key="user">{{ user }}</li>
    </ul>
</template>
