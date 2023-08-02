<template>
<SearchBar class="flex justify-end mt-5"/>

<div class="flex flex-col">
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
                <!-- TABLE -->
                <div class="bg-white shadow rounded-sm my-2.5 overflow-x-auto">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-center">Id</th>
                                <th class="py-3 px-6 text-left">Student</th>
                                <th class="py-3 px-6 text-left">University</th>
                                <th class="py-3 px-6 text-center">Status</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm" v-for="student in students" :key="student.id">
                            <tr class="border-b border-gray-200 hover:bg-gray-100">
                                <td class="py-3 px-6 text-center">
                                    {{ student.id }}
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6 rounded-full" :src="student.image"/>
                                        </div>
                                        <span>{{ student.lastname }} {{ student.firstname }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    {{ student.to_university }}
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div v-if="student.status==='pending'">
                                        <button class="mr-5" @click="accepted(student.id)">✔</button>
                                        <nuxt-link to="##" class="">❌</nuxt-link>
                                    </div>
                                    <div v-else-if="student.status==='accept'" class="">
                                        <button class="mr-5 hidden" @click="accepted(student.id)">✔</button>
                                        <nuxt-link to="##" class="">❌</nuxt-link>
                                    </div>
                                    <div v-else class="">
                                        <button class="mr-5 hidden" @click="accepted(student.id)">✔</button>
                                        <button class="" @click="accepted(student.id)">✔</button>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <NuxtLink :to="`/student/${student.id}`">
                                          <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                              </svg>
                                          </div>
                                        </NuxtLink>
                                        <button type="button" @click="deleteDetail(student.id)">
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
                students: [],
            }
        },
        mounted() {
            this.getStudents();
            this.accepted();
            this.accepted();
        },
        methods: {
            // Function for listing all student
            async getStudents() {
                try {
                    const token = localStorage.getItem('school_token');
                    const response = await fetch('http://localhost:8000/api/student', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        credentials: 'include'
                    });
                    if (response.ok) {
                        const data = await response.json();
                        this.students = data.data;
                        console.log(this.students);
                    }else {
                        console.error('Failed to fetch users:', response.status);
                    }
                }catch (error) {
                    console.error('Fetch users error:', error);
                }
            },
        async accepted(id) {
            const token = localStorage.getItem('school_token');
            const response = fetch(`http://localhost:8000/api/scholarship/${id}/accept`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                },
                // body: JSON.stringify({
                // status: 'accept'
                // })
            })
            if (response.ok) {
                const data = await response.json();
                console.log(data.message);
            } else {
                // alert('Failed to accept student:', response.status);
                console.error('Failed to accept student:', response.status);
            }
        },
        async deleteDetail(sid){
            if (confirm("Are you sure you want to delete?")){
                const token = localStorage.getItem('school_token');
                const result = await fetch(`http://localhost:8000/api/student/${sid}`, {
                    method: 'DELETE',
                    headers: {
                    // 'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                    },
                    credentials:'include'
                });
                // alert("deleted successfully")
                this.getUsers();
            }

            },
        }   
    }
</script>