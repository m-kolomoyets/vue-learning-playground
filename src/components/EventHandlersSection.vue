<script setup>
import { ref } from 'vue'
import FormWithValidation from './FormWithValidation'
const count = ref(0)

const increment = () => {
    count.value++
}

const decrement = () => {
    count.value--
}

const formSubmitHandler = (event) => {
    event.preventDefault()

    const firstName = event.target[0].value
    const lastName = event.target[1].value

    console.log('Form submitted!', { firstName, lastName })
}
</script>

<template>
    <h1>Count: {{ count }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>

    <form @submit="formSubmitHandler">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <button type="submit">Submit</button>
    </form>

    <FormWithValidation />
</template>
