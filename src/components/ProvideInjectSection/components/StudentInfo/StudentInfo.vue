<script setup>
import { inject } from 'vue';
import { UNIVERSITY_INFO_PROVIDE_KEY } from '../../constants';

const { id } = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const { students } = inject(UNIVERSITY_INFO_PROVIDE_KEY);

const currentStudent = students[id];
</script>

<template>
    <h1>Student</h1>
    <ul v-if="!!currentStudent">
        <li v-for="[key, value] in Object.entries(currentStudent)" :key="key">
            <strong>{{ key }}: </strong>
            {{ value }}
        </li>
    </ul>
    <p v-else>Invalid student</p>
</template>
