<template>
  <section class='block relative z-1 bg-gray-700'>
    <div class='container mx-auto'>
      <div class='justify-center flex flex-wrap'>
        <div class='w-full lg:w-12/12 px-4 -mt-24'>
          <div class='flex flex-wrap'>
            <div class='w-full lg:w-4/12 px-4'>
              <router-link to='/'>
                <div
                  class='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'
                >
                  <div class=' text-center'>
                    <div class='px-6 py-4 rounded card'>
                      <i
                        class='icon- fab text-cherrywood-400'
                        style='font-family: icomoon; font-size: 72px'
                      >&#xe900;</i>
                      <h1 class='font-bold mb-2'>Personal Guru</h1>
                      <ul>
                        <li class='text-lg'>3 Hours per week</li>
                        <li class='text-lg pt-1'>Flexi 1 hour slot 3 days a week</li>
                        <li class='text-lg pt-1'>Multiple destinations</li>
                        <li class='text-lg pt-1'>No extra charges</li>
                        <li class='text-lg pt-1 invisible'> -</li>
                      </ul>
                      <button
                        @click.prevent='$router.push("/contact/?plan=personal")'
                        class='bg-transparent hover:bg-cherrywood-500 text-cherrywood-500 font-semibold hover:text-white py-3 px-4 border border-cherrywood-500 hover:border-transparent rounded mt-4 w-full'>
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>

            <div class='w-full lg:w-4/12 px-4'>
              <router-link to='/'>
                <div
                  class='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'
                >

                  <div class=' text-center'>
                    <div class='px-6 py-4 rounded card'>
                      <i
                        class='icon- fab text-gray-400'
                        style='font-family: icomoon; font-size: 72px'
                      >&#xe900;</i>
                      <h1 class='font-bold mb-2'>Business Guru</h1>
                      <ul>
                        <li class='text-lg'>6 hours per week</li>
                        <li class='text-lg pt-1'>Fixed 2 hour slot 3 days a week</li>
                        <li class='text-lg pt-1'>Multiple destinations</li>
                        <li class='text-lg pt-1'>No extra charges</li>
                        <li class='text-lg pt-1 invisible'> -</li>
                      </ul>
                      <button
                        @click.prevent='$router.push("/contact/?plan=business")'
                        class='bg-transparent hover:bg-cherrywood-500 text-cherrywood-500 font-semibold hover:text-white py-3 px-4 border border-cherrywood-500 hover:border-transparent rounded mt-4 w-full'>
                        Inquire
                      </button>
                    </div>
                  </div>

                </div>
              </router-link>
            </div>

            <div class='w-full lg:w-4/12 px-4'>

              <router-link to='/'>
                <div
                  class='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'
                >

                  <div class=' text-center'>
                    <div class='px-6 py-4 rounded card'>
                      <i
                        class='icon- fab text-yellow-400'
                        style='font-family: icomoon; font-size: 72px'
                      >&#xe900;</i>
                      <h1 class='font-bold mb-2'>Lifestyle Guru VIP</h1>
                      <ul>
                        <li class='text-lg'>10 hours per week</li>
                        <li class='text-lg pt-1'>Fixed 2 hour slot 5 days a week</li>
                        <li class='text-lg pt-1'>Multiple destinations</li>
                        <li class='text-lg pt-1'>Ad hoc emergencies</li>
                        <li class='text-lg pt-1'>Personal Driver</li>
                      </ul>
                      <button
                        @click.prevent='$router.push("/contact/?plan=VIP")'
                        class='bg-transparent hover:bg-cherrywood-500 text-cherrywood-500 font-semibold hover:text-white py-3 px-4 border border-cherrywood-500 hover:border-transparent rounded mt-4 w-full'>
                        Inquire
                      </button>
                    </div>
                  </div>


                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricePlan'
}
</script>

<style scoped>
body {
  background-color: #f2f2f2;
}

.card {
  background-color: #fff;
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, .2);
}

h1 {
  text-align: center;
  font-size: 26px;
  padding-top: 10px;
  color: #576574;
}

hr {
  width: 20%;
  display: block;
  margin: 0 auto;
  height: 1px;
  background: #000;
}

p.text-base {
  padding-top: 15px;
  text-align: center;
  padding-bottom: 15px;
  color: #8395a7;
}

.fa {
  font-size: 56px;
  text-align: center;
  margin: 0 auto;
  display: block;
  color: #576574;
}

@media (max-width: 430px) {
  .card {
    margin: 10px;
  }
}
</style>
