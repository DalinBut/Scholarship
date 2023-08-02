<template lang="">
    <div>
        <!-- <div v-for="u in users" class="flex items-center justify-start"> -->
            <!-- <p>{{u.Country}}</p><br> -->
            <!-- <p>{{u.email}}</p> -->
            <!-- <p class="mr-5 text-blue-800">{{u.name}}</p> -->
            <!-- <p>{{u.school}}</p> -->
        <!-- </div> -->
        s <p>{{users}}</p>
    </div>
</template>
<script setup>
    // const { data: users } = await useFetch('https://dev-api-telegram-bot.makcircle.com/api/signup')
    // const { data: users } = await useFetch('https://api.covid19api.com/countries')

    // const { data: users } = await useFetch('http://127.0.0.1:8000/api/bio')
    const { data: users } = await useFetch('http://127.0.0.1:8000/api/count_users')

    // const { data: users } = await useFetch('https://fakestoreapi.com/products')
    
</script>
<style>
    
</style>