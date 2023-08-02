<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input id="name" type="text" v-model="name" required>
      </div>
      <div>
        <label for="school">school:</label>
        <textarea id="school" v-model="school" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        school: ''
      }
    },
    methods: {
      async submitForm() {
        const response = await fetch('http://127.0.0.1:8000/api/bio', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            school: this.school,
          })
        })
        const data = await response.json()
        console.log(data)
      }
    }
  }
  </script>