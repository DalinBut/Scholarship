<script setup>
    const { id } = useRoute().params

</script>
<template>
    <div>
        <StudentDetail />
        <!-- <div v-for="student in students" :key="student.id" :student="student">
            <p>{{ student.id }}</p>
            <p>{{ student.name }}</p>
            <p>{{ student.company }}</p>
            <p>{{ student.city }}</p>
        </div> -->
    </div>
</template>