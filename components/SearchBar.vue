<template>
    <div class="flex">
      <input
        class="border border-gray-400 py-2 px-4 rounded-lg focus:outline-none focus:border-blue-400"
        type="text"
        placeholder="Search..."
        v-model="searchTerm"
        @keyup.enter="search"
      />
      <button
        class="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        @click="search"
      >
        Search
      </button>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        searchTerm: "",
      };
    },
    methods: {
      search() {
        // Do something with the search term, such as redirect to a search results page
        console.log("Searching for:", this.searchTerm);
      },
    },
  };
  </script>
  