<template>
  <div class="container sm:px-0 sm:max-w-full">
    <div class="hero px-4 bg-cyan-400/50 pt-10">
      <div>
        <!-- left -->
        <div class="flex flex-wrap pb-10">
          <div></div>
          <div class="w-full md:w-1/2">
            <div
              class="text-white text-3xl md:text-4xl px-5 pt-5 libre-baskerville-bold"
            >
              Book Journey
            </div>
            <div class="p-5 text-xl text-white plus-jakarta-sans">
              Hit every milestone in your reading journey—never lose your page
              again!
            </div>
            <div class="w-full lg:w-1/2">
            <div class="flex flex-wrap p-5">
              <div class="w-1/2">
                <button
                  class="border rounded-md px-4 py-2 bg-white text-cyan-600 font-bold"
                  type="button"
                  @click="goToRegister()"
                >
                  Sign Up!
                </button>
              </div>
              <div class="w-1/2">
                <button
                  class="border rounded-md px-4 py-2 text-white font-bold"
                  type="button"
                  @click="goToLogin()"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="bg-gray-100 mt-10 py-4">
      <div class="px-4 text-slate-600 plus-jakarta-sans">
        <p class="text-center text-xl font-bold mb-2">We get it—losing track of your reading is <strong class="text-cyan-500">frustrating.</strong></p>
        <p class="text-center px-10">That's why we keep you on point, so you can dive back in without missing a beat.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "../router/index.js"

function goToRegister() {
  router.push("/register")
}

function goToLogin() {
  router.push("/login")
}

</script>

<style scoped>
.libre-baskerville-bold {
  font-family: "Libre Baskerville", serif;
  font-weight: 900;
  font-style: normal;
}
.plus-jakarta-sans {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
.plus-jakarta-sans-bold {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
.hero {
  background-color: aqua;
  background-image: url("hero.png");
  opacity: 100%;
}
</style>
