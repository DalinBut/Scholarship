<script>
    export default {
        data() {
            return {
                num:1
            }
        },
    }
</script>
<template>
<!-- <SearchBar class="flex justify-end mt-5"/> -->
<!-- <h1 class="text-xl font-bold">History</h1> -->
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
                                <th class="py-3 px-6 text-left">Student</th>
                                <th class="py-3 px-6 text-center">Status</th>
                                <th class="py-3 px-6 text-center">Created</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm">
                            <!-- <nuxt-link to=""> -->
                                <tr class="border-b border-gray-200 hover:bg-gray-100">
                                    <td class="py-3 px-6 text-center">
                                        21
                                    </td>
                                    <td class="py-3 px-6 text-left whitespace-nowrap">
                                            Reactjs
                                        <!-- </div> -->
                                    </td>
                                    <td class="py-3 px-6 text-left">
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                            </div>
                                            <span>Eshal Rosas</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <span v-if="num==0" class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                        <span v-else class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Reject</span>
                                    </td>
                                    <td class="py-3 px-6 text-center">10/05/2023</td>
                                    <!-- <td class="py-3 px-6 text-center">
                                        <div class="flex item-center justify-center">
                                            <StudentInfo />
                                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </div>
                                            <DeleteModal />
                                        </div>
                                    </td> -->
                                </tr>
                                <tr class="border-b border-gray-200 hover:bg-gray-100">
                                    <td class="py-3 px-6 text-center">
                                        21
                                    </td>
                                    <td class="py-3 px-6 text-left whitespace-nowrap">
                                            Reactjs
                                        <!-- </div> -->
                                    </td>
                                    <td class="py-3 px-6 text-left">
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                            </div>
                                            <span>Eshal Rosas</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <span v-if="num==0" class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                        <span v-else class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Reject</span>
                                    </td>
                                    <td class="py-3 px-6 text-center">10/05/2023</td>
                                    <!-- <td class="py-3 px-6 text-center">
                                        <div class="flex item-center justify-center">
                                            <StudentInfo />
                                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </div>
                                            <DeleteModal />
                                        </div>
                                    </td> -->
                                </tr>
                                <tr class="border-b border-gray-200 hover:bg-gray-100">
                                    <td class="py-3 px-6 text-center">
                                        21
                                    </td>
                                    <td class="py-3 px-6 text-left whitespace-nowrap">
                                            Reactjs
                                        <!-- </div> -->
                                    </td>
                                    <td class="py-3 px-6 text-left">
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                            </div>
                                            <span>Eshal Rosas</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <span v-if="num==0" class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                        <span v-else class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Reject</span>
                                    </td>
                                    <td class="py-3 px-6 text-center">10/05/2023</td>
                                    <!-- <td class="py-3 px-6 text-center">
                                        <div class="flex item-center justify-center">
                                            <StudentInfo />
                                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </div>
                                            <DeleteModal />
                                        </div>
                                    </td> -->
                                </tr>
                                <tr class="border-b border-gray-200 hover:bg-gray-100">
                                    <td class="py-3 px-6 text-center">
                                        21
                                    </td>
                                    <td class="py-3 px-6 text-left whitespace-nowrap">
                                            Reactjs
                                        <!-- </div> -->
                                    </td>
                                    <td class="py-3 px-6 text-left">
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                            </div>
                                            <span>Eshal Rosas</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <span v-if="num==0" class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                        <span v-else class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Reject</span>
                                    </td>
                                    <td class="py-3 px-6 text-center">10/05/2023</td>
                                    <!-- <td class="py-3 px-6 text-center">
                                        <div class="flex item-center justify-center">
                                            <StudentInfo />
                                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </div>
                                            <DeleteModal />
                                        </div>
                                    </td> -->
                                </tr>
                                <tr class="border-b border-gray-200 hover:bg-gray-100">
                                    <td class="py-3 px-6 text-center">
                                        21
                                    </td>
                                    <td class="py-3 px-6 text-left whitespace-nowrap">
                                            Reactjs
                                        <!-- </div> -->
                                    </td>
                                    <td class="py-3 px-6 text-left">
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                            </div>
                                            <span>Eshal Rosas</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <span v-if="num==0" class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                        <span v-else class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Reject</span>
                                    </td>
                                    <td class="py-3 px-6 text-center">10/05/2023</td>
                                    <!-- <td class="py-3 px-6 text-center">
                                        <div class="flex item-center justify-center">
                                            <StudentInfo />
                                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </div>
                                            <DeleteModal />
                                        </div>
                                    </td> -->
                                </tr>

                            <!-- </nuxt-link> -->
                        </tbody>
                    </table>
                </div>
      </div>
    </div>
  </div>
</div>
</template>
