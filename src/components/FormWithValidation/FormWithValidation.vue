<script setup>
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { formSchema } from './constants';

const { handleSubmit, errors, defineField } = useForm({
    validationSchema: toTypedSchema(formSchema),
});

const [firstName, firstNameAttrs] = defineField('firstName');
const [email, emailAttrs] = defineField('email');

const submitHandler = handleSubmit(
    (values) => {
        console.log('Form submitted!', values);
    },
    (errors) => {
        console.log('Form errors!', errors);
    }
);
</script>

<template>
    <form @submit="submitHandler">
        <label>
            First Name:
            <input v-model="firstName" v-bind="firstNameAttrs" />
        </label>
        <span>{{ errors.firstName }}</span>

        <label>
            Email:
            <input v-model="email" v-bind="emailAttrs" />
        </label>
        <span>{{ errors.email }}</span>

        <button type="submit">Submit</button>
    </form>
</template>
