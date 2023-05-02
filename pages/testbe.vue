<template lang="">
    <div>
        <div v-for="u in users" class="flex items-center justify-start">
            <p>{{u.Country}}</p><br>
            <!-- <p>{{u.email}}</p> -->
        </div>
        fgtrg
    </div>
</template>
<script setup>

// 
    // const { data: users } = await useFetch('https://dev-api-telegram-bot.makcircle.com/api/signup')
    const { data: users } = await useFetch('https://api.covid19api.com/countries')
    // const { data: users } = await useFetch('http://127.0.0.1:8000/api/user')
    // const { data: users } = await useFetch('https://fakestoreapi.com/products')
    
</script>
<style>
    
</style>