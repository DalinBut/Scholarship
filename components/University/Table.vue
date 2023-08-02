<template>
<!-- <button><NuxtLink to="">Add New ➕</NuxtLink></button> -->
<!-- <UniversityCreate /> -->
<UniversityAnnouncement />
<SearchBar class="flex justify-end mt-5"/>
<div class="flex flex-col">
  <div class="overflow-x-hidden">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">

                <!-- TABLE -->
                <div class="bg-white shadow-sm rounded-md my-1 overflow-x-auto">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-center">Id</th>
                                <th class="py-3 px-6 text-left">University</th>
                                <th class="py-3 px-6 text-left">Phone</th>
                                <th class="py-3 px-6 text-center">Level</th>
                                <th class="py-3 px-6 text-center">Deadline</th>
                                <th class="py-3 px-6 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm" v-for="user in announcement" :key="user.id">
                                <tr class="border-b border-gray-200 hover:bg-gray-100">
                                    <td class="py-3 px-6 text-center">
                                        {{ user.id }}
                                    </td>
                                    <td class="py-3 px-6 text-left whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <!-- <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/> -->
                                            </div>
                                            <span>{{ user.name }}</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-left">
                                        <div class="flex items-center">
                                            <span>{{ user.phone }}</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        {{ user.level }}
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                      {{ user.day }} - {{ user.month }} - {{ user.year }}
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                      <div class="flex item-center justify-center">

                                        <NuxtLink :to="`/university/${user.id}`">
                                          <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </div>
                                        </NuxtLink>
                                        <button type="button" @click="deleteDetail(user.id)">
                                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </div>
                                          </button>
                                      </div>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
              </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      announcement: []
    };
  },
  mounted() {
   this.getAnnouncement();
  },
  methods: {
    async getAnnouncement() {
      try {
        const token = localStorage.getItem('school_token');
        const response = await fetch('http://localhost:8000/api/announcement', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          credentials:'include'
        });
        if (response.ok) {
          const data = await response.json();
          this.announcement = data.data;
          console.log(this.announcement);
          console.log('Hello');
        } else {
          console.error('Failed to fetch announcement:', response.status);
        }
      } catch (error) {
        console.error('Fetch announcement error:', error);
      }
    },
    async deleteDetail(id){
      if (confirm("Are you sure you want to delete?")){
        const token = localStorage.getItem('school_token');
        const result = await fetch(`http://localhost:8000/api/announcement/${id}`, {
            method: 'DELETE',
            headers: {
              // 'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            credentials:'include'
          });
        // alert("deleted successfully")
        this.getAnnouncement();
      }

    },
  }
};
</script>
