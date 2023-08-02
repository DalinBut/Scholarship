<template>
    <div>
        <button type="button" v-on:click="toggleModal()">
            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            </div>
        </button>
        <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center text-left flex">
          <!-- <div class="grid grid-cols-1"> -->

            <div class="bg-white text-gray-700 rounded-lg shadow-lg p-6 overflow-y-auto h-screen flex flex-col">
              <!-- <div class="font-bold mb-2 font-mono text-2xl text-red-500">Application for Scholarship</div> -->
              <!-- <div class="border-r-2 h-screen w-52"> -->
                <div class="flex flex-row">
              <div class="border-r-2 h-[600px] w-52">
                  <div class="flex flex-wrap justify-center">
                      <img src="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?w=176&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7" class="h-auto max-w-sm w-40" alt="" />
                  </div>
                  <p class="font-extrabold text-xl">BUT DALIN</p>
                  <p>20mc, Sangkat Steung Mean Chey, Khan Mean Chey, Phnom Penh</p>
                  <p>086 22 30 31</p>
                  <p>ButDalin25@gmail.com</p>
                  <table class="table-auto">
                      <thead>
                          <tr>
                              <th class="text-base">Gender</th>
                          </tr>
                          <tr>
                              <td>Male</td>
                          </tr>
                          <tr>
                              <th class="text-base">Date of Birth</th>
                          </tr>
                          <tr>
                              <td>25-August-2001</td>
                          </tr>
                          <tr>
                              <th class="text-base">Family Information</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th>Father</th>
                          </tr>
                          <tr>
                              <td>Name</td>
                              <td>John</td>
                          </tr>
                          <tr>
                              <td>Job</td>
                              <td>Farmer</td>
                          </tr>
                          <tr>
                              <td>Status</td>
                              <td>Alive</td>
                          </tr>
                          <tr>
                              <th>Mother</th>
                          </tr>
                          <tr>
                              <td>Name</td>
                              <td>John</td>
                          </tr>
                          <tr>
                              <td>Job</td>
                              <td>Farmer</td>
                          </tr>
                          <tr>
                              <td>Status</td>
                              <td>Alive</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
                
              <div class="h-[600px] w-96 pl-5">
                  <p class="font-bold text-lg">Profile</p>
                  <hr class="h-[1px] w-auto mx-auto mb-4 bg-gray-700 border-0 rounded md:mb-5 md:mt-2 dark:bg-gray-900" />
                  <p class="">
                      This scholarship is for all students and graduates who want to get
                      the most out of life. Designing a fullfilling and balanced life is
                      easier than done. It take a tremendous amount of creativity and
                      courage to find a path that genuinely works for you.
                  </p>
                  <table class="table-auto">
                      <thead>
                          <tr>
                              <th class="text-lg">Education</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th class="text-base">High School</th>
                          </tr>
                          <tr>
                              <td>Name</td>
                              <td>Hun Sen Ban Dav High School</td>
                          </tr>
                          <tr>
                              <td>Place</td>
                              <td>Kandal</td>
                          </tr>
                          <tr>
                              <td>Grade</td>
                              <td>B</td>
                          </tr>
                          <tr>
                              <th class="text-base">University</th>
                          </tr>
                          <tr>
                              <td>Name</td>
                              <td>Institute of Technology of Cambodia</td>
                          </tr>
                          <tr>
                              <td>Place</td>
                              <td>Phnom Penh</td>
                          </tr>
                          <tr>
                              <td>Field</td>
                              <td>Inforamtion and Communication</td>
                          </tr>
                          <tr>
                              <td>GPA</td>
                              <td>3.0</td>
                          </tr>
                          <tr>
                              <td>End Year</td>
                              <td>07-July-2023</td>
                          </tr>
                          <tr>
                              <th class="text-base">Request to</th>
                          </tr>
                          <tr>
                              <td>University</td>
                              <td>Royal University Phnom Penh</td>
                          </tr>
                          <tr>
                              <td>Place</td>
                              <td>Phnom Penh</td>
                          </tr>
                          <tr>
                              <td>Field</td>
                              <td>Data Science</td>
                          </tr>
                          <tr>
                              <td>Level of Study</td>
                              <td>Master's Degree</td>
                          </tr>
                          <tr>
                              <td>Scholarship</td>
                              <td>100%</td>
                          </tr>
                          <tr>
                              <td>Start Year</td>
                              <td>2023</td>
                          </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                    <embed src="https://files.instapdf.in/wp-content/uploads/pdf-thumbnails/2022/03/simple-resume-format-599.webp" width="600px" height="800px" />
                </div>
                <span class="font-bold py-5">- Transcript</span>
                <div>
                    <embed src="https://files.instapdf.in/wp-content/uploads/pdf-thumbnails/2022/03/simple-resume-format-599.webp" width="600px" height="800px" />
                </div>
                <div class="flex justify-end">
                    <button type="button" class="text-red-500 hover:text-red-700 uppercase font-bold" v-on:click="toggleModal()">Close</button>
                </div>
            </div>
          <!-- </div> -->
        </div>
        <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>

<script>
export default {
  name: "regular-modal",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
  },
};
</script>
