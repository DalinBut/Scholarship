<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white rounded-lg shadow-lg p-6 overflow-y-auto h-screen flex">
          <!-- <div class="font-bold mb-2 font-mono text-2xl text-red-500">Application for Scholarship</div> -->
          <div class=" h-screen w-[500px]">
              <div class="mb-4 flex">
                  <!-- {{ message }} -->
                  <form @submit.prevent="submitForm" class="w-full max-w-lg">
                      <p class="font-bold font-mono ">ITC's Scholarship</p>
                      <hr class="h-[1px] w-auto mx-auto mb-4 bg-gray-900 border-0 rounded md:mb-5 md:mt-2 dark:bg-gray-400">
                      <div class="flex flex-wrap -mx-3 m-6">
                          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                                  University Name
                              </label>
                              <input v-model="name" class="outline-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" required>
                          </div>
                          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                                  Email
                              </label>
                              <input v-model="email" class="outline-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" placeholder="EX: JaneDao@gmail.com" required>
                          </div>
                          <div class="w-full md:w-1/2 px-3 mt-10 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="phone">
                                  Phone Number
                              </label>
                              <input v-model="phone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="text" placeholder="" required>
                          </div>
                          <div class="w-full md:w-1/2 px-3 mt-10 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="level">
                                  Level of Study
                              </label>
                              <input v-model="level" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="level" type="text" placeholder="" required>
                          </div>
                          <div class="w-full md:w-1/2 px-3 mt-10 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="duration">
                                  Duration
                              </label>
                              <input v-model="duration" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="duration" type="text" placeholder="" required>
                          </div>
                          <div class="w-full md:w-1/2 px-3 mt-10 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="formFile">
                                  Image
                              </label>
                              <!-- <input accept="image/*" type="file" name="image" id="image" @change="handleImageUpload" required> -->
  
                              <!-- <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="formFile" type="file"> -->
                              <!-- <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="img" placeholder=""> -->
                              <!-- <input @change="handleImageUpload" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="file" src="" alt=""> -->
                              <input @change="handleImageUpload" class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-4 py-3 text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" type="file" id="formFile" />
                          </div>
                      </div>
  
                      <p class="font-mono">Deadline</p>
                      <div class="flex flex-wrap -mx-3 mb-2">
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="day">
                                  Day
                              </label>
                              <input v-model="day" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="day" type="number">
                          </div>
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                  Month
                              </label>
                              <div class="relative">
                                  <select v-model="month" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
  
                                      <option value="january">January</option>
                                      <option value="february">February</option>
                                      <option value="march">March</option>
                                      <option value="april">April</option>
                                      <option value="may">May</option>
                                      <option value="june">June</option>
                                      <option value="july">July</option>
                                      <option value="august">August</option>
                                      <option value="september">September</option>
                                      <option value="october">October</option>
                                      <option value="november">November</option>
                                      <option value="december">December</option>
                                  </select>
                                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                  </div>
                              </div>
                          </div>
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                  Year
                              </label>
                              <input v-model="year" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number">
                          </div>
                      </div>
  
                      <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full px-3">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                  Description
                              </label>
                              <textarea v-model="description" cols="66" rows="4" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                          </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full px-3">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="address">
                                  Award Type
                              </label>
                              <input v-model="award" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="award" type="text" required>
                          </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full px-3">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="address">
                                  Qualification
                              </label>
                              <input v-model="qualification" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="qualification" type="text">
                          </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full px-3">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="link">
                                  School Link
                              </label>
                              <input v-model="more_info" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="link" type="link">
                          </div>
                      </div>
                      <div class="flex justify-end">
                          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" @click="$emit('close')">Close</button>
                          <!-- <button type="submit" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" @click="$emit('close')">Submit</button> -->
                          <button type="submit" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" >Submit</button>
                          <!-- <input type="submit" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" value="Submit">  -->
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
  </template>
  
  
  <!-- <script>
  export default {
      name: 'Form',
      props: {
          // title: {
          //     type: String,
          //     default: 'Application'
          // },
          // message: {
          //     type: String,
          //     default: 'Dialog Message'
          // },
          show: {
              type: Boolean,
              default: false
          }
      }
  }
  </script> -->
  <script>
  
   export default {
      //    name: 'form',
      //  props: {
      //      show: {
      //          type: Boolean,
      //          default: false
      //      }
      //  },
       data() {
           return {
               name: '',
               phone: '',
               email: '',
               award: '',
               level: '',
               duration: '',
               description: '',
               qualification: '',
               more_info: '',
               img: null,
  
               // deadline
               day: '',
               month: '',
               year: ''
           }
       },
       methods: {
           async submitForm() {
               const formData = {
                   name: this.name,
                   phone: this.phone,
                   email: this.email,
                   award: this.award,
                   level: this.level,
                   duration: this.duration,
                   description: this.description,
                   qualification: this.qualification,
                   more_info: this.more_info,
                   img: this.img,
  
                   // deadline
                   day: this.day,
                   month: this.month,
                   year: this.year
               };
  
               try {
                   const token = localStorage.getItem('school_token');
  
                   const response = await fetch('http://localhost:8000/api/announcement', {
                       method: 'POST',
                       headers: {
                           'Content-Type': 'application/json',
                           'Authorization': `Bearer ${token}`
                       },
                       credentials: 'include',
                       body: JSON.stringify(formData)
                   });
  
                   if (response.ok) {
                       // Handle successful response if needed
                   } else if (response.status === 401) {
                       // Handle unauthorized error, e.g., refresh token expired or invalid
                       console.error('Unauthorized: Refresh token expired or invalid');
                   } else {
                       // Handle other errors
                       console.error('Error:', response.statusText);
                   }
                   console.log('Hello');
                   this.$router.push('/dashboard');
               } catch (error) {
                   // Handle network errors or other exceptions
                   console.error('Error:', error);
               }
           },
          handleImageUpload(event) {
              this.img = event.target.files[0];
          },
          
       }
  
   }
  </script>
  
  <style>
  ::-webkit-scrollbar {
      width: 10px;
  }
  </style>