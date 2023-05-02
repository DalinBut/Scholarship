<script setup>
    const  {students} = useStudent();
    const props = defineProps({
        student: Object
    })
</script>
<template>
    <div v-for="student in students" :key="student.id" :student="student">
        <p>{{ student.id }}</p>
        <p>{{ student.name }}</p>
        <p>{{ student.company }}</p>
        <p>{{ student.city }}</p>
    </div>
</template>