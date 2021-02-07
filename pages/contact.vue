<template>
  <div>
    <index-navbar />
    <div class='container mx-auto px-4 h-screen'>
      <div class='flex content-center items-center justify-center h-screen'>
        <div class='w-full lg:w-6/12 px-4'>
          <div
            class='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'
          >
            <div class='rounded-t mb-0 px-6 py-6'>
              <div class='text-center mb-3'>
                <h2 class='text-gray-600 text-xl font-bold'>
                  {{ formTitle }} Inquiry
                </h2>
              </div>
              <div class='btn-wrapper text-center'>
                <!--              <button-->
                <!--                class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"-->
                <!--                type="button"-->
                <!--              >-->
                <!--                <img alt="..." class="w-5 mr-1" :src="github" />-->
                <!--                Github-->
                <!--              </button>-->
                <!--              <button-->
                <!--                class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"-->
                <!--                type="button"-->
                <!--              >-->
                <!--                <img alt="..." class="w-5 mr-1" :src="google" />-->
                <!--                Google-->
                <!--              </button>-->
              </div>
              <hr class='mt-6 border-b-1 border-gray-400' />
            </div>
            <div class='flex-auto px-4 lg:px-10 py-10 pt-0'>
              <form @submit.prevent='sendMessage'>
                <div class='relative w-full mb-3'>
                  <label
                    class='block uppercase text-gray-700 text-xs font-bold mb-2'
                  >
                    Name
                  </label>
                  <input
                    required
                    type='text'
                    class='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150'
                    placeholder='Name'
                    v-model='form.name'
                  />
                </div>

                <div class='relative w-full mb-3'>
                  <label
                    class='block uppercase text-gray-700 text-xs font-bold mb-2'
                  >
                    Mobile / Cell Number (Optional)
                  </label>
                  <input
                    v-model='form.phone'
                    type='text'
                    class='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150'
                    placeholder='Mobile/Cell Number'
                  />
                </div>

                <div class='relative w-full mb-3'>
                  <label
                    class='block uppercase text-gray-700 text-xs font-bold mb-2'
                  >
                    Email
                  </label>
                  <input
                    v-model='form.email'
                    required
                    type='email'
                    class='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150'
                    placeholder='Email'
                  />
                </div>

                <div class='relative w-full mb-3'>
                  <label
                    class='block uppercase text-gray-700 text-xs font-bold mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    v-model='form.message'
                    class='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white h-40 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150'
                    placeholder='Message'
                    required
                  />
                </div>

                <!--              <div>-->
                <!--                <label class='inline-flex items-center cursor-pointer'>-->
                <!--                  <input-->
                <!--                    id='customCheckLogin'-->
                <!--                    type='checkbox'-->
                <!--                    class='form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150'-->
                <!--                  />-->
                <!--                  <span class='ml-2 text-sm font-semibold text-gray-700'>-->
                <!--                    I agree with the-->
                <!--                    <a href='javascript:void(0)' class='text-green-500'>-->
                <!--                      Privacy Policy-->
                <!--                    </a>-->
                <!--                  </span>-->
                <!--                </label>-->
                <!--              </div>-->

                <div class='text-center mt-6'>
                  <button
                    v-if='!success'
                    :class='{"animate-pulse": loading}'
                    class='bg-cherrywood-500 text-white active:bg-cherrywood-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
                    type='submit'
                    :disabled='loading'
                  >
                    Send Inquiry
                  </button>
                </div>
                <alert v-if='success' color='everglade'>
                  <p class='font-bold'>Thank you</p>
                  <p class='text-sm'>We have received your email, expect feedback from us shortly.</p>
                </alert>

                <alert v-if='error' color='cherrywood'>
                  <p class='font-bold text-white'>Error</p>
                  <p class='text-sm text-white'>We were unable to process your request at this time. Please try again
                    later</p>
                </alert>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  mounted() {
    this.form.message = this.message
  },
  data() {
    return {
      loading: false,
      success: false,
      error: false,
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
        plan: ''
      }
    }
  },
  computed: {
    formTitle() {
      switch (this.plan) {
        case 'personal':
          return 'Personal Guru'
        case 'business':
          return 'Business Guru'
        case 'VIP':
          return 'Lifestyle Guru VIP'
        default:
          return 'General'
      }
    },
    plan() {
      return this.$route.query.plan || null
    },
    message() {
      if (this.plan)
        return `Dear Sir/Madam \nI'd to inquire about the ${this.formTitle} plan. Please contact me on my Mobile/Email`
      return ''
    }
  },
  methods: {
    sendMessage() {
      this.loading = true
      this.success = false
      this.error = false
      axios.post('https://deodzrpz7f.execute-api.us-east-1.amazonaws.com/production', this.form).then(() => {
        this.success = true
      }).catch((e) => {
        this.error = true
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
