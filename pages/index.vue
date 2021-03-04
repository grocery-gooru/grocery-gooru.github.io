<template>
  <div>
    <section
      class='header relative items-center align-middle flex h-screen max-h-620-px bg-gray-200 sm:bg-none'
      :style='{ backgroundImage: `url(${backgroundImagePath})` }'
    >
      <div class='container mx-auto items-center flex flex-wrap'>
        <div class='w-full xl:w-6/12 px-12 pt-12 rounded-lg bg-white bg-opacity-0 text-black'>
          <div class='sm:pt-0'>
            <h2 class='font-semibold text-3xl md:text-5xl text-center'>
              Grocery Guru - We Handle The Hassle So You Don't Have To
            </h2>
            <p class='mt-4 md:text-xl text-lg leading-relaxed text-center'>
              We offer a fully comprehensive turn-key solution that manages the A-Z of your <b>Needs</b> Lifestyle.
              <b>Personally, Professionally, Proficiently.</b>
            </p>
            <p class='mt-4 md:text-xl text-lg leading-relaxed text-center'>
              <b>COVID-19 is a reality. Your needs are a necessity. The Grocery Guru manages your necessary needs
                providing comfort and convenience affordably. A better reality!</b>
            </p>
            <div class='mt-12 text-center flex justify-center'>
              <router-link
                to='/contact/?plan=custom'
                class='text-white bg-everglade-500 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 active:bg-everglade-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
              >
                Custom Requests
              </router-link>
              <a
                href='#pricing-plans'
                class='ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-cherrywood-500 active:bg-cherrywood-400 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
              >
                Pricing Plans
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--      <img-->
      <!--        class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"-->
      <!--        src="@/assets/img/grocercy-man.jpg"-->
      <!--        alt="..."-->
      <!--      />-->
    </section>

    <section class='pb-40 relative bg-gray-200'>
      <div
        class='-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20'
        style='transform: translateZ(0)'
      >
      </div>
      <div class='container mx-auto'>
        <div class='flex flex-wrap items-center'>
          <!--          <div-->
          <!--            class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"-->
          <!--          >-->
          <!--            <div-->
          <!--              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-everglade-600"-->
          <!--            >-->
          <!--              <img-->
          <!--                alt="..."-->
          <!--                src="@/assets/img/mobile-grocery.webp"-->
          <!--                class="w-full align-middle rounded-t-lg"-->
          <!--              />-->
          <!--              <blockquote class="relative p-8 mb-4">-->
          <!--                <svg-->
          <!--                  preserveAspectRatio="none"-->
          <!--                  xmlns="http://www.w3.org/2000/svg"-->
          <!--                  viewBox="0 0 583 95"-->
          <!--                  class="absolute left-0 w-full block h-95-px -top-94-px"-->
          <!--                >-->
          <!--                  <polygon-->
          <!--                    points="-30,95 583,95 583,65"-->
          <!--                    class="text-everglade-600 fill-current"-->
          <!--                  ></polygon>-->
          <!--                </svg>-->
          <!--                <h4 class="text-xl font-bold text-white">Coming Soon</h4>-->
          <!--                <p class="text-md font-light mt-2 text-white">-->
          <!--                  The Grocery Guru web app will allow you to manage and fund-->
          <!--                  your account. Stay tuned for exciting developments from our-->
          <!--                  dedicated tech team!-->
          <!--                </p>-->
          <!--              </blockquote>-->
          <!--            </div>-->
          <!--          </div>-->

          <div class='w-full px-4'>
            <div class='flex flex-wrap'>

              <div class='md:w-full lg:w-3/12 px-4'>
                <div class='px-4 py-5 flex-auto'>
                  <div
                    class='text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'
                  >
                    <i class='fas fa-wrench'></i>
                  </div>
                  <h6 class='text-xl mb-1 font-semibold'>Versatile</h6>
                  <p class='mb-4 text-gray-600'>
                    Shop for groceries; bulk or essential, vegan, diabetic or lactose intolerant.
                    Shop for meds and even your monthly prescription.
                    Collect your post, pay your bills and do your laundry.
                  </p>
                </div>
              </div>

              <div class='md:w-full lg:w-3/12 px-4 border-2 '>
                <div class='px-4 py-5 flex-auto'>
                  <div
                    class='text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'
                  >
                    <i class='fas fa-chart-line'></i>
                  </div>
                  <h6 class='text-xl mb-1 font-semibold'>Efficient</h6>
                  <p class='mb-4 text-gray-600'>
                    Structured or flexible time allocation. Same day delivery. <br /> <i>(T's and C's apply)</i>.
                  </p>
                </div>
              </div>

              <div class='md:w-full lg:w-3/12 px-4'>
                <div class='px-4 py-5 flex-auto'>
                  <div
                    class='text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'
                  >
                    <i class='fas fa-thumbs-up'></i>
                  </div>
                  <h6 class='text-xl mb-1 font-semibold'>Reliable</h6>
                  <p class='mb-4 text-gray-600'>
                    Communication and Service delivery 24/7.<br /> <i>(T's and C's apply)</i>
                  </p>
                </div>
              </div>
              <div class='md:w-full lg:w-3/12 px-4 border-2 '>
                <div class='px-4 py-5 flex-auto'>
                  <div
                    class='text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'
                  >
                    <i class='fas fa-user-secret'></i>
                  </div>
                  <h6 class='text-xl mb-1 font-semibold'>Discreet</h6>
                  <p class='mb-4 text-gray-600'>
                    All communication is direct and personal. You have access to your very own client
                    liaison executive ensuring that
                    your needs are fully met with integrity and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--      <div class='container mx-auto overflow-hidden pb-20'>-->
      <!--        <div class='flex flex-wrap items-center'>-->
      <!--          <div class='w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48'>-->
      <!--            <div-->
      <!--              class='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'-->
      <!--            >-->
      <!--              <i class='fas fa-sitemap text-xl'></i>-->
      <!--            </div>-->
      <!--            <h3 class='text-3xl mb-2 font-semibold leading-normal'>-->
      <!--              CSS Components-->
      <!--            </h3>-->
      <!--            <p-->
      <!--              class='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'-->
      <!--            >-->
      <!--              Every element that you need in a product comes built in as a-->
      <!--              component. All components fit perfectly with each other and can-->
      <!--              have different colours.-->
      <!--            </p>-->
      <!--            <div class='block pb-6'>-->
      <!--              <span-->
      <!--                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'-->
      <!--              >-->
      <!--                Buttons-->
      <!--              </span>-->
      <!--              <span-->
      <!--                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'-->
      <!--              >-->
      <!--                Inputs-->
      <!--              </span>-->
      <!--              <span-->
      <!--                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'-->
      <!--              >-->
      <!--                Labels-->
      <!--              </span>-->
      <!--              <span-->
      <!--                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'-->
      <!--              >-->
      <!--                Menus-->
      <!--              </span>-->
      <!--              <span-->
      <!--                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'-->
      <!--              >-->
      <!--                Navbars-->
      <!--              </span>-->
      <!--              <span-->
      <!--                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'-->
      <!--              >-->
      <!--                Pagination-->
      <!--              </span>-->
      <!--              <span-->
      <!--                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'-->
      <!--              >-->
      <!--                Progressbars-->
      <!--              </span>-->
      <!--              <span-->
      <!--                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'-->
      <!--              >-->
      <!--                Typography-->
      <!--              </span>-->
      <!--            </div>-->
      <!--            <a-->
      <!--              href='https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index'-->
      <!--              target='_blank'-->
      <!--              class='font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150'-->
      <!--            >-->
      <!--              View All-->
      <!--              <i class='fa fa-angle-double-right ml-1 leading-relaxed'></i>-->
      <!--            </a>-->
      <!--          </div>-->

      <!--          <div class='w-full md:w-5/12 px-4 mr-auto ml-auto mt-32'>-->
      <!--            <div-->
      <!--              class='relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0'-->
      <!--            >-->
      <!--              <img-->
      <!--                alt='...'-->
      <!--                :src='componentBtn'-->
      <!--                class='w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3'-->
      <!--              />-->
      <!--              <img-->
      <!--                alt='...'-->
      <!--                :src='componentProfileCard'-->
      <!--                class='w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px'-->
      <!--              />-->
      <!--              <img-->
      <!--                alt='...'-->
      <!--                :src='componentInfoCard'-->
      <!--                class='w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2'-->
      <!--              />-->
      <!--              <img-->
      <!--                alt='...'-->
      <!--                :src='componentInfo2'-->
      <!--                class='w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px'-->
      <!--              />-->
      <!--              <img-->
      <!--                alt='...'-->
      <!--                :src='componentMenu'-->
      <!--                class='w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px'-->
      <!--              />-->
      <!--              <img-->
      <!--                alt='...'-->
      <!--                :src='componentBtnPink'-->
      <!--                class='w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px'-->
      <!--              />-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->

      <!--&lt;!&ndash;        <div class='flex flex-wrap items-center pt-32'>&ndash;&gt;-->
      <!--&lt;!&ndash;          <div class='w-full md:w-6/12 px-4 mr-auto ml-auto mt-32'>&ndash;&gt;-->
      <!--&lt;!&ndash;            <div class='justify-center flex flex-wrap relative'>&ndash;&gt;-->
      <!--&lt;!&ndash;              <div class='my-4 w-full lg:w-6/12 px-4'>&ndash;&gt;-->
      <!--&lt;!&ndash;                <a&ndash;&gt;-->
      <!--&lt;!&ndash;                  href='https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vn-index'&ndash;&gt;-->
      <!--&lt;!&ndash;                  target='_blank'&ndash;&gt;-->
      <!--&lt;!&ndash;                >&ndash;&gt;-->
      <!--&lt;!&ndash;                  <div class='bg-red-600 shadow-lg rounded-lg text-center p-8'>&ndash;&gt;-->
      <!--&lt;!&ndash;                    <img&ndash;&gt;-->
      <!--&lt;!&ndash;                      alt='...'&ndash;&gt;-->
      <!--&lt;!&ndash;                      class='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'&ndash;&gt;-->
      <!--&lt;!&ndash;                      src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg'&ndash;&gt;-->
      <!--&lt;!&ndash;                    />&ndash;&gt;-->
      <!--&lt;!&ndash;                    <p class='text-lg text-white mt-4 font-semibold'>&ndash;&gt;-->
      <!--&lt;!&ndash;                      Svelte&ndash;&gt;-->
      <!--&lt;!&ndash;                    </p>&ndash;&gt;-->
      <!--&lt;!&ndash;                  </div>&ndash;&gt;-->
      <!--&lt;!&ndash;                </a>&ndash;&gt;-->
      <!--&lt;!&ndash;                <a&ndash;&gt;-->
      <!--&lt;!&ndash;                  href='https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vn-index'&ndash;&gt;-->
      <!--&lt;!&ndash;                  target='_blank'&ndash;&gt;-->
      <!--&lt;!&ndash;                >&ndash;&gt;-->
      <!--&lt;!&ndash;                  <div&ndash;&gt;-->
      <!--&lt;!&ndash;                    class='bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8'&ndash;&gt;-->
      <!--&lt;!&ndash;                  >&ndash;&gt;-->
      <!--&lt;!&ndash;                    <img&ndash;&gt;-->
      <!--&lt;!&ndash;                      alt='...'&ndash;&gt;-->
      <!--&lt;!&ndash;                      class='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'&ndash;&gt;-->
      <!--&lt;!&ndash;                      src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg'&ndash;&gt;-->
      <!--&lt;!&ndash;                    />&ndash;&gt;-->
      <!--&lt;!&ndash;                    <p class='text-lg text-white mt-4 font-semibold'>&ndash;&gt;-->
      <!--&lt;!&ndash;                      ReactJS&ndash;&gt;-->
      <!--&lt;!&ndash;                    </p>&ndash;&gt;-->
      <!--&lt;!&ndash;                  </div>&ndash;&gt;-->
      <!--&lt;!&ndash;                </a>&ndash;&gt;-->
      <!--&lt;!&ndash;                <a&ndash;&gt;-->
      <!--&lt;!&ndash;                  href='https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index'&ndash;&gt;-->
      <!--&lt;!&ndash;                  target='_blank'&ndash;&gt;-->
      <!--&lt;!&ndash;                >&ndash;&gt;-->
      <!--&lt;!&ndash;                  <div&ndash;&gt;-->
      <!--&lt;!&ndash;                    class='bg-gray-800 shadow-lg rounded-lg text-center p-8 mt-8'&ndash;&gt;-->
      <!--&lt;!&ndash;                  >&ndash;&gt;-->
      <!--&lt;!&ndash;                    <img&ndash;&gt;-->
      <!--&lt;!&ndash;                      alt='...'&ndash;&gt;-->
      <!--&lt;!&ndash;                      class='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'&ndash;&gt;-->
      <!--&lt;!&ndash;                      src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg'&ndash;&gt;-->
      <!--&lt;!&ndash;                    />&ndash;&gt;-->
      <!--&lt;!&ndash;                    <p class='text-lg text-white mt-4 font-semibold'>&ndash;&gt;-->
      <!--&lt;!&ndash;                      NextJS&ndash;&gt;-->
      <!--&lt;!&ndash;                    </p>&ndash;&gt;-->
      <!--&lt;!&ndash;                  </div>&ndash;&gt;-->
      <!--&lt;!&ndash;                </a>&ndash;&gt;-->
      <!--&lt;!&ndash;              </div>&ndash;&gt;-->
      <!--&lt;!&ndash;              <div class='my-4 w-full lg:w-6/12 px-4 lg:mt-16'>&ndash;&gt;-->
      <!--&lt;!&ndash;                <a&ndash;&gt;-->
      <!--&lt;!&ndash;                  href='https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vn-index'&ndash;&gt;-->
      <!--&lt;!&ndash;                  target='_blank'&ndash;&gt;-->
      <!--&lt;!&ndash;                >&ndash;&gt;-->
      <!--&lt;!&ndash;                  <div&ndash;&gt;-->
      <!--&lt;!&ndash;                    class='bg-yellow-500 shadow-lg rounded-lg text-center p-8'&ndash;&gt;-->
      <!--&lt;!&ndash;                  >&ndash;&gt;-->
      <!--&lt;!&ndash;                    <img&ndash;&gt;-->
      <!--&lt;!&ndash;                      alt='...'&ndash;&gt;-->
      <!--&lt;!&ndash;                      class='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'&ndash;&gt;-->
      <!--&lt;!&ndash;                      src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png'&ndash;&gt;-->
      <!--&lt;!&ndash;                    />&ndash;&gt;-->
      <!--&lt;!&ndash;                    <p class='text-lg text-white mt-4 font-semibold'>&ndash;&gt;-->
      <!--&lt;!&ndash;                      JavaScript&ndash;&gt;-->
      <!--&lt;!&ndash;                    </p>&ndash;&gt;-->
      <!--&lt;!&ndash;                  </div>&ndash;&gt;-->
      <!--&lt;!&ndash;                </a>&ndash;&gt;-->
      <!--&lt;!&ndash;                <a&ndash;&gt;-->
      <!--&lt;!&ndash;                  href='https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vn-index'&ndash;&gt;-->
      <!--&lt;!&ndash;                  target='_blank'&ndash;&gt;-->
      <!--&lt;!&ndash;                >&ndash;&gt;-->
      <!--&lt;!&ndash;                  <div&ndash;&gt;-->
      <!--&lt;!&ndash;                    class='bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8'&ndash;&gt;-->
      <!--&lt;!&ndash;                  >&ndash;&gt;-->
      <!--&lt;!&ndash;                    <img&ndash;&gt;-->
      <!--&lt;!&ndash;                      alt='...'&ndash;&gt;-->
      <!--&lt;!&ndash;                      class='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'&ndash;&gt;-->
      <!--&lt;!&ndash;                      src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg'&ndash;&gt;-->
      <!--&lt;!&ndash;                    />&ndash;&gt;-->
      <!--&lt;!&ndash;                    <p class='text-lg text-white mt-4 font-semibold'>&ndash;&gt;-->
      <!--&lt;!&ndash;                      Angular&ndash;&gt;-->
      <!--&lt;!&ndash;                    </p>&ndash;&gt;-->
      <!--&lt;!&ndash;                  </div>&ndash;&gt;-->
      <!--&lt;!&ndash;                </a>&ndash;&gt;-->
      <!--&lt;!&ndash;                <a&ndash;&gt;-->
      <!--&lt;!&ndash;                  href='https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index'&ndash;&gt;-->
      <!--&lt;!&ndash;                  target='_blank'&ndash;&gt;-->
      <!--&lt;!&ndash;                >&ndash;&gt;-->
      <!--&lt;!&ndash;                  <div&ndash;&gt;-->
      <!--&lt;!&ndash;                    class='bg-everglade-500 shadow-lg rounded-lg text-center p-8 mt-8'&ndash;&gt;-->
      <!--&lt;!&ndash;                  >&ndash;&gt;-->
      <!--&lt;!&ndash;                    <img&ndash;&gt;-->
      <!--&lt;!&ndash;                      alt='...'&ndash;&gt;-->
      <!--&lt;!&ndash;                      class='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'&ndash;&gt;-->
      <!--&lt;!&ndash;                      src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg'&ndash;&gt;-->
      <!--&lt;!&ndash;                    />&ndash;&gt;-->
      <!--&lt;!&ndash;                    <p class='text-lg text-white mt-4 font-semibold'>&ndash;&gt;-->
      <!--&lt;!&ndash;                      Vue.js&ndash;&gt;-->
      <!--&lt;!&ndash;                    </p>&ndash;&gt;-->
      <!--&lt;!&ndash;                  </div>&ndash;&gt;-->
      <!--&lt;!&ndash;                </a>&ndash;&gt;-->
      <!--&lt;!&ndash;              </div>&ndash;&gt;-->
      <!--&lt;!&ndash;            </div>&ndash;&gt;-->
      <!--&lt;!&ndash;          </div>&ndash;&gt;-->

      <!--&lt;!&ndash;          <div class='w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48'>&ndash;&gt;-->
      <!--&lt;!&ndash;            <div&ndash;&gt;-->
      <!--&lt;!&ndash;              class='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'&ndash;&gt;-->
      <!--&lt;!&ndash;            >&ndash;&gt;-->
      <!--&lt;!&ndash;              <i class='fas fa-drafting-compass text-xl'></i>&ndash;&gt;-->
      <!--&lt;!&ndash;            </div>&ndash;&gt;-->
      <!--&lt;!&ndash;            <h3 class='text-3xl mb-2 font-semibold leading-normal'>&ndash;&gt;-->
      <!--&lt;!&ndash;              Javascript Components&ndash;&gt;-->
      <!--&lt;!&ndash;            </h3>&ndash;&gt;-->
      <!--&lt;!&ndash;            <p&ndash;&gt;-->
      <!--&lt;!&ndash;              class='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'&ndash;&gt;-->
      <!--&lt;!&ndash;            >&ndash;&gt;-->
      <!--&lt;!&ndash;              In order to create a great User Experience some components require&ndash;&gt;-->
      <!--&lt;!&ndash;              JavaScript. In this way you can manipulate the elements on the&ndash;&gt;-->
      <!--&lt;!&ndash;              page and give more options to your users.&ndash;&gt;-->
      <!--&lt;!&ndash;            </p>&ndash;&gt;-->
      <!--&lt;!&ndash;            <p&ndash;&gt;-->
      <!--&lt;!&ndash;              class='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'&ndash;&gt;-->
      <!--&lt;!&ndash;            >&ndash;&gt;-->
      <!--&lt;!&ndash;              We created a set of Components that are dynamic and come to help&ndash;&gt;-->
      <!--&lt;!&ndash;              you.&ndash;&gt;-->
      <!--&lt;!&ndash;            </p>&ndash;&gt;-->
      <!--&lt;!&ndash;            <div class='block pb-6'>&ndash;&gt;-->
      <!--&lt;!&ndash;              <span&ndash;&gt;-->
      <!--&lt;!&ndash;                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'&ndash;&gt;-->
      <!--&lt;!&ndash;              >&ndash;&gt;-->
      <!--&lt;!&ndash;                Alerts&ndash;&gt;-->
      <!--&lt;!&ndash;              </span>&ndash;&gt;-->
      <!--&lt;!&ndash;              <span&ndash;&gt;-->
      <!--&lt;!&ndash;                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'&ndash;&gt;-->
      <!--&lt;!&ndash;              >&ndash;&gt;-->
      <!--&lt;!&ndash;                Dropdowns&ndash;&gt;-->
      <!--&lt;!&ndash;              </span>&ndash;&gt;-->
      <!--&lt;!&ndash;              <span&ndash;&gt;-->
      <!--&lt;!&ndash;                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'&ndash;&gt;-->
      <!--&lt;!&ndash;              >&ndash;&gt;-->
      <!--&lt;!&ndash;                Menus&ndash;&gt;-->
      <!--&lt;!&ndash;              </span>&ndash;&gt;-->
      <!--&lt;!&ndash;              <span&ndash;&gt;-->
      <!--&lt;!&ndash;                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'&ndash;&gt;-->
      <!--&lt;!&ndash;              >&ndash;&gt;-->
      <!--&lt;!&ndash;                Modals&ndash;&gt;-->
      <!--&lt;!&ndash;              </span>&ndash;&gt;-->
      <!--&lt;!&ndash;              <span&ndash;&gt;-->
      <!--&lt;!&ndash;                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'&ndash;&gt;-->
      <!--&lt;!&ndash;              >&ndash;&gt;-->
      <!--&lt;!&ndash;                Navbars&ndash;&gt;-->
      <!--&lt;!&ndash;              </span>&ndash;&gt;-->
      <!--&lt;!&ndash;              <span&ndash;&gt;-->
      <!--&lt;!&ndash;                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'&ndash;&gt;-->
      <!--&lt;!&ndash;              >&ndash;&gt;-->
      <!--&lt;!&ndash;                Popovers&ndash;&gt;-->
      <!--&lt;!&ndash;              </span>&ndash;&gt;-->
      <!--&lt;!&ndash;              <span&ndash;&gt;-->
      <!--&lt;!&ndash;                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'&ndash;&gt;-->
      <!--&lt;!&ndash;              >&ndash;&gt;-->
      <!--&lt;!&ndash;                Tabs&ndash;&gt;-->
      <!--&lt;!&ndash;              </span>&ndash;&gt;-->
      <!--&lt;!&ndash;              <span&ndash;&gt;-->
      <!--&lt;!&ndash;                class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2'&ndash;&gt;-->
      <!--&lt;!&ndash;              >&ndash;&gt;-->
      <!--&lt;!&ndash;                Tooltips&ndash;&gt;-->
      <!--&lt;!&ndash;              </span>&ndash;&gt;-->
      <!--&lt;!&ndash;            </div>&ndash;&gt;-->
      <!--&lt;!&ndash;            <a&ndash;&gt;-->
      <!--&lt;!&ndash;              href='https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index'&ndash;&gt;-->
      <!--&lt;!&ndash;              target='_blank'&ndash;&gt;-->
      <!--&lt;!&ndash;              class='font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150'&ndash;&gt;-->
      <!--&lt;!&ndash;            >&ndash;&gt;-->
      <!--&lt;!&ndash;              View all&ndash;&gt;-->
      <!--&lt;!&ndash;              <i class='fa fa-angle-double-right ml-1 leading-relaxed'></i>&ndash;&gt;-->
      <!--&lt;!&ndash;            </a>&ndash;&gt;-->
      <!--&lt;!&ndash;          </div>&ndash;&gt;-->
      <!--&lt;!&ndash;        </div>&ndash;&gt;-->
      <!--      </div>-->

      <!--      <div class='container mx-auto px-4 pb-32 pt-48'>-->
      <!--        <div class='items-center flex flex-wrap'>-->
      <!--          <div class='w-full md:w-5/12 ml-auto px-12 md:px-4'>-->
      <!--            <div class='md:pr-12'>-->
      <!--              <div-->
      <!--                class='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'-->
      <!--              >-->
      <!--                <i class='fas fa-file-alt text-xl'></i>-->
      <!--              </div>-->
      <!--              <h3 class='text-3xl font-semibold'>-->
      <!--                Complex Documentation-->
      <!--              </h3>-->
      <!--              <p class='mt-4 text-lg leading-relaxed text-gray-600'>-->
      <!--                This extension comes a lot of fully coded examples that help you-->
      <!--                get started faster. You can adjust the colors and also the-->
      <!--                programming language. You can change the text and images and-->
      <!--                you're good to go.-->
      <!--              </p>-->
      <!--              <ul class='list-none mt-6'>-->
      <!--                <li class='py-2'>-->
      <!--                  <div class='flex items-center'>-->
      <!--                    <div>-->
      <!--                      <span-->
      <!--                        class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3'-->
      <!--                      >-->
      <!--                        <i class='fas fa-fingerprint'></i>-->
      <!--                      </span>-->
      <!--                    </div>-->
      <!--                    <div>-->
      <!--                      <h4 class='text-gray-600'>-->
      <!--                        Built by Developers for Developers-->
      <!--                      </h4>-->
      <!--                    </div>-->
      <!--                  </div>-->
      <!--                </li>-->
      <!--                <li class='py-2'>-->
      <!--                  <div class='flex items-center'>-->
      <!--                    <div>-->
      <!--                      <span-->
      <!--                        class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3'-->
      <!--                      >-->
      <!--                        <i class='fab fa-html5'></i>-->
      <!--                      </span>-->
      <!--                    </div>-->
      <!--                    <div>-->
      <!--                      <h4 class='text-gray-600'>-->
      <!--                        Carefully crafted code for Components-->
      <!--                      </h4>-->
      <!--                    </div>-->
      <!--                  </div>-->
      <!--                </li>-->
      <!--                <li class='py-2'>-->
      <!--                  <div class='flex items-center'>-->
      <!--                    <div>-->
      <!--                      <span-->
      <!--                        class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3'-->
      <!--                      >-->
      <!--                        <i class='far fa-paper-plane'></i>-->
      <!--                      </span>-->
      <!--                    </div>-->
      <!--                    <div>-->
      <!--                      <h4 class='text-gray-600'>-->
      <!--                        Dynamic Javascript Components-->
      <!--                      </h4>-->
      <!--                    </div>-->
      <!--                  </div>-->
      <!--                </li>-->
      <!--              </ul>-->
      <!--            </div>-->
      <!--          </div>-->

      <!--          <div class='w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0'>-->
      <!--            <img-->
      <!--              alt='...'-->
      <!--              class='max-w-full rounded-lg shadow-xl'-->
      <!--              style='-->
      <!--                transform: scale(1) perspective(1040px) rotateY(-11deg)-->
      <!--                  rotateX(2deg) rotate(2deg);-->
      <!--              '-->
      <!--              :src='documentation'-->
      <!--            />-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->

      <a id='pricing-plans' />
      <div class='justify-center text-center flex flex-wrap mt-24'>
        <div class='text-center text-cherrywood-500 font-semibold flex flex-wrap mb-20'>
          <h2 class='text-5xl'>"We do the things you need so you can do the things you love"</h2>
        </div>
        <div class='w-full md:w-6/12 px-12 md:px-4'>
          <h2 class='font-semibold text-4xl'>
            Tailor made solutions for your lifestyle
          </h2>
          <p class='text-lg leading-relaxed mt-4 mb-4 text-gray-600'>
            Choose the pricing plan that suites your needs and budget.
          </p>
        </div>
      </div>
    </section>

    <price-plan />

    <section class='py-20 bg-gray-700 overflow-hidden'>
      <div class='container mx-auto pb-64'>
        <div class='flex flex-wrap justify-center'>
          <!--          <div class='w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64'>-->
          <!--            <div-->
          <!--              class='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'-->
          <!--            >-->
          <!--              <i class='fas fa-code-branch text-xl'></i>-->
          <!--            </div>-->
          <!--            <h3 class='text-3xl mb-2 font-semibold leading-normal text-white'>-->
          <!--              We do the things you need so you can do the things you love.-->
          <!--            </h3>-->
          <!--            <p-->
          <!--              class='text-lg font-semibold leading-relaxed mt-4 mb-4 text-gray-500'-->
          <!--            >-->
          <!--              A truly unique innovation that seeks to engage with and fully-->
          <!--              understand each clients personal lifestyle needs, and to then-->
          <!--              create a fully comprehensive turn key solution that essentially-->
          <!--              manages the A to Z of your needs lifestyle-->
          <!--            </p>-->
          <!--            <p-->
          <!--              class='text-lg font-sans leading-relaxed mt-0 mb-4 text-gray-500'-->
          <!--            >-->
          <!--              - personally professionally and proficiently!-->
          <!--            </p>-->
          <!--            <a-->
          <!--              href='https://github.com/creativetimofficial/vue-notus?ref=vn-index'-->
          <!--              target='_blank'-->
          <!--              class='github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'-->
          <!--            >-->
          <!--              Testimonials-->
          <!--            </a>-->
          <!--          </div>-->

          <div class='w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative'>
            <i
              class='icon- fab text-gray-800 text-55 absolute -top-150-px -right-100 left-auto opacity-80'
              style='font-family: icomoon;'
            >&#xe900;</i>
          </div>
        </div>
      </div>
    </section>

    <section class='pb-16 bg-gray-300 relative pt-32'>
      <div
        class='-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20'
        style='transform: translateZ(0)'
      >
        <svg
          class='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon
            class='text-gray-300 fill-current'
            points='2560 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div>

      <div class='container mx-auto'>
        <div
          class='flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10'
        >
          <div class='w-full text-center lg:w-8/12'>

            <h3 class='font-semibold text-3xl'>
              We offer various personal solutions; To find out more contact us.
            </h3>
            <div class='sm:block flex flex-col mt-10'>
              <router-link
                to='/contact/'
                class='github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-cherrywood-500 active:bg-cherrywood-400 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
              >
                <span>Contact Us</span>
              </router-link>
            </div>
            <div class='text-center mt-16'></div>
          </div>
        </div>
      </div>
    </section>
    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from '@/components/Navbars/IndexNavbar.vue'
import FooterComponent from '@/components/Footers/Footer.vue'

import patternVue from '@/assets/img/pattern_vue.png'
import componentBtn from '@/assets/img/component-btn.png'
import componentProfileCard from '@/assets/img/component-profile-card.png'
import componentInfoCard from '@/assets/img/component-info-card.png'
import componentInfo2 from '@/assets/img/component-info-2.png'
import componentMenu from '@/assets/img/component-menu.png'
import componentBtnPink from '@/assets/img/component-btn-pink.png'
import documentation from '@/assets/img/documentation.png'
import login from '@/assets/img/login.jpg'
import profile from '@/assets/img/profile.jpg'
import landing from '@/assets/img/landing.jpg'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.js'
import backgroundImagePath from '@/assets/img/grocery-guru-concierge.jpg'

const fullConfig = resolveConfig(tailwindConfig)

export default {
  data() {
    return {
      patternVue,
      componentBtn,
      componentProfileCard,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink,
      documentation,
      login,
      profile,
      landing,
      backgroundImagePath,
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'Service',
        'Brand': {
          'name': 'Grocery Guru',
          'slogan': 'We handle the hassle so you don\'t have to',
          'logo': 'https://grocery-guru.com/brand_logo.png'
        }
      }
    }
  },
  components: {
    IndexNavbar,
    FooterComponent
  },
  head() {
    return {
      script: [{ type: 'application/ld+json', json: this.structuredData }]
    }
  }
}
</script>
