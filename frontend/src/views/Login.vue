<template>
  <div class="container py-20 bg-cyan-50 h-dvh sm:px-0 sm:max-w-full">
    <div class="">
      <div class="flex content-center justify-center">
        <div class="border rounded bg-white items-center px-4 sm:px-16 sm:py-3">
          <div class="flex justify-center flex-col items-center">
            <div class="font-bold text-cyan-900 text-2xl pt-5">Sign In</div>
            <div class="text-black">
              <div>
                or
                <div class="font-semibold text-cyan-800 inline">
                  <a href="/register">don't have an account</a>
                </div>
              </div>
            </div>
          </div>
          <div class="m-4">
            <div class="p-3 border rounded-md m-3">
              <div class="flex">
                <span class="me-2"
                  ><Icon
                    class="text-2xl text-gray-400"
                    icon="mdi:email-outline"
                /></span>
                <input class="w-50 sm:w-80" type="text" placeholder="Email" />
              </div>
            </div>
            <div class="p-3 border rounded-md m-3">
              <div class="flex">
                <span class="me-2"
                  ><Icon class="text-2xl text-gray-400" icon="lucide:key-round"
                /></span>
                <input
                  class="w-50 sm:w-80"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  placeholder="Password"
                />
                <span @click="isPasswordVisible = !isPasswordVisible">
                  <Icon
                    class="text-xl text-gray-400 cursor-pointer"
                    :icon="
                      isPasswordVisible
                        ? 'mdi:eye-outline'
                        : 'mdi:eye-off-outline'
                    "
                  />
                </span>
              </div>
            </div>
          </div>
          <div class="flex justify-center pb-5">
            <button
              class="border rounded-md px-4 py-2 bg-cyan-500 text-white font-bold"
            >
              Sign Up
            </button>
          </div>
          <div class="flex flex-col items-center">
            <div class="text-gray-500 font-medium">Or continue with</div>
            <button class="bg-gray-200 rounded m-3 p-3 inline-block">
              <Icon class="text-gray-600" icon="ri:google-fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const isPasswordVisible = ref(false);

function setPasswordVisibility() {
  if (isPasswordVisible) {
    isPasswordVisible = false;
  } else {
    isPasswordVisible = true;
  }
}
</script>
<style scoped>
.libre-baskerville-bold {
  font-family: "Libre Baskerville", serif;
  font-weight: 900;
  font-style: normal;
}
textarea:focus,
input:focus {
  outline: none;
}
</style>
