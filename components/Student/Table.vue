<script setup>
    const  {students} = useStudent();
    const props = defineProps({
        student: Object
    })
</script>
<template>
<!-- <div  class="flex justify-between items-center flex-col">

    <table>
        <thead>
            <tr class="border-b border-gray-400 bg-red-100 text-neutral-800 flex justify-between items-centerq">
                <th>Name</th>
                <th>Company</th>
                <th>City</th>
                <th>Progress</th>
                <th>Created</th>
                
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in students" :key="student.id" :student="student" class="border-b border-gray-400 bg-gray-300 text-neutral-800">
                <td class="border-b-0 lg:w-6 before:hidden">
                    <UserAvatar class="w-24 h-24 mx-auto lg:w-6 lg:h-6" />
                </td>
                <td class="whitespace-nowrap px-6 py-4 font-medium">
                    {{ student.name }}
                </td>
                <td class="whitespace-nowrap px-6 py-4 font-medium">
                    {{ student.company }}
                </td>
                <td class="whitespace-nowrap px-6 py-4 font-medium">
                    {{ student.city }}
                </td>
                <td class="lg:w-32">
                    <progress class="flex w-2/5 self-center lg:w-full" max="100" :value="student.progress">
                        {{ student.progress }}
                    </progress>
                </td>
                <td class="lg:w-1 whitespace-nowrap">
                    <small class="text-gray-500 dark:text-slate-400">{{ student.created }}</small>
                </td>
                <td class="before:hidden lg:w-1 whitespace-nowrap">
                    <BaseButtons type="justify-start lg:justify-end" no-wrap>
                        <BaseButton color="info" :icon="mdiEye" small @click="isModalActive = true" />
                        <BaseButton color="danger" :icon="mdiTrashCan" small @click="isModalDangerActive = true" />
                    </BaseButtons>
                </td>
            </tr>
        </tbody>
    </table>
</div> -->

<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500 bg-black h-20 text-white">
            <tr>
                <th>Name</th>
                <th>School</th>
                <th>Degree</th>
                <th>Status</th>
                <th>Created</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b dark:border-neutral-500 bg-slate-200" v-for="student in students" :key="student.id" :student="student">
                <NuxtLink :to="`/student/${student.id}`">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">{{ student.name }}</td>
                </NuxtLink>
                  <td class="whitespace-nowrap px-6 py-4">{{student.company}}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{student.city}}</td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <progress class="flex w-2/5 self-center lg:w-full" max="100" :value="student.progress">
                        {{ student.progress }}
                    </progress></td>
                  <td class="whitespace-nowrap px-6 py-4">{{student.created}}</td>
                  <td>
                      <!-- <input type="button" value="Approve" class="bg-blue-600 px-4 py-[2px] text-white font-mono font-bold rounded-md hover:bg-blue-900"> -->
                      <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2">Approve ✔</button>
                      <!-- <input type="button" value="Reject" class="bg-red-600 px-4 py-[2px] text-white font-mono font-bold mx-2 rounded-md hover:bg-red-900"> -->
                      <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 m-2">Reject ❌</button>
                  </td>
                </tr>            
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>
