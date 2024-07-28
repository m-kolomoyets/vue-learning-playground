<script setup>
import { inject } from 'vue';
import { UNIVERSITY_INFO_PROVIDE_KEY } from '../../constants';
import StudentInfo from '../StudentInfo';

const { students, ...universityInfo } = inject(UNIVERSITY_INFO_PROVIDE_KEY);
</script>

<template>
    <ul>
        <li v-for="[key, value] in Object.entries(universityInfo)" :key="key">
            <strong> {{ key }}: </strong>
            {{ value }}
        </li>
    </ul>
    <ul>
        <li v-for="student in Object.values(students)" :key="student.id">
            <StudentInfo :id="student.id" />
        </li>
    </ul>
</template>
