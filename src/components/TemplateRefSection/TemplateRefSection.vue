<script setup>
import { ref, onMounted } from 'vue';

const inputRef = ref(null);
const inputRefFunction = (element) => {
    console.log('inputRefFunction: ', element);
};

console.log('inputRef value from root code section:', inputRef.value);

onMounted(() => {
    console.log('inputRef value from mount method:', inputRef.value);
});
</script>

<template>
    <div>
        <h1>Template Ref</h1>
        <input ref="inputRef" id="with-regular-ref" />
        <input :ref="inputRefFunction" id="with-ref-function" />
    </div>
</template>
