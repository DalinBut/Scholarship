<template>
    <div>
        <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center text-left flex">
            <div class="bg-white text-gray-700 rounded-lg shadow-lg p-6 overflow-y-auto h-screen flex flex-col">
                <div class="font-bold flex justify-end mb-0 font-mono text-2xl text-red-500">
                    <NuxtLink to="/university/listing">
                        <svg class="w-5 h-5 text-red-500 hover:text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </NuxtLink>
                </div>

                <div v-if="info" class="flex flex-row rounded-md mb-20">
    
                    <div class="h-full w-[600px] pl-5">
                        <div class="mt-10">
                <table class="text-left">
                    <tr>
                        <td class="w-56 font-simibold text-lg pl-5 h-10">University</td>
                        <td>{{ info.name }}</td>
                    </tr>
                    <tr>
                        <td class="w-56 font-simibold text-lg pl-5 h-10">Phone Number</td>
                        <td>{{ info.phone }}</td>
                    </tr>
                    <tr>
                        <td class="w-56 font-semibold text-lg pl-5 h-10">Email</td>
                        <td>{{ info.email }}</td>
                    </tr>
                    <tr>
                        <td class="w-56 font-semibold text-lg pl-5 h-10">Level of Study</td>
                        <td>{{ info.level }}</td>
                    </tr>
                    <tr>
                        <td class="w-56 font-semibold text-lg pl-5 h-10">Award Type</td>
                        <td>{{ info.award }}</td>
                    </tr>
                    <tr>
                        <td class="w-56 font-semibold text-lg pl-5 h-10">Describtion</td>
                        <td>{{ info.description }}</td>
                    </tr>
                    <tr>
                        <td class="w-56 font-semibold text-lg pl-5 h-10">Qualification</td>
                        <td>{{ info.qualification }}</td>
                    </tr>
                    <tr>
                        <td class="w-56 font-semibold text-lg pl-5 h-10">Duration</td>
                        <td>{{ info.duration }}</td>
                    </tr>
                    <tr>
                        <td class="w-56 font-semibold text-lg pl-5 h-10">More Information</td>
                        <td>{{ info.more_info }}</td>
                    </tr>
                    <tr>
                        <td class="w-56 font-semibold text-lg pl-5 h-10">Deadline</td>
                        <td>{{ info.day }} - {{ info.month }} - {{ info.year }}</td>
                    </tr>
                </table>
            </div>
                    </div>
                </div>
                <div class="flex justify-end">
                    <NuxtLink class="bg-red-500 hover:bg-red-700 font-bold capitalize rounded px-5 py-1 text-white" to="/university/listing">Close</NuxtLink>
                </div>
            </div>

        </div>
        <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        <!-- <div v-if="info">
            {{ info.name }}
        </div> -->
    </div>
    </template>
<script>
export default {

    data() {
        return {
            showModal: true,
            info: []
        };
    },
    mounted() {
        this.id = this.$route.params.id;
        this.getInfo(this.id);
    },
    methods: {
        toggleModal: function () {
            this.showModal = !this.showModal;
        },

        async getInfo(id) {
            try {
                const token = localStorage.getItem('school_token');
                const response = await fetch(`http://localhost:8000/api/announcement/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    credentials: 'include'
                });
                if (response.ok) {
                    const data = await response.json();
                    this.info = data.data;
                    console.log(id)
                    console.log(this.info)
                } else {
                    console.error('Failed to fetch users:', response.status);
                }
            } catch (error) {
                console.error('Fetch users error:', error);
            }
        }
    },
};
</script>

