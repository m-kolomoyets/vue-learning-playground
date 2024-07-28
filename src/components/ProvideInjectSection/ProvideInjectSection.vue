<script setup>
import { provide } from 'vue';
import UniversityInfo from './components/UnivercityInfo';
import { UNIVERSITY_INFO, UNIVERSITY_INFO_PROVIDE_KEY } from './constants';

provide(UNIVERSITY_INFO_PROVIDE_KEY, UNIVERSITY_INFO);
</script>

<template>
    <UniversityInfo />
</template>
