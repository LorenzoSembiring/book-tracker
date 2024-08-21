<template>
  <div class="h-screen flex text-center place-items-center justify-center">
    <div class="">
      <div class="font-bold text-4xl text-cyan-500">404</div>
      <div class="pt-2 text-lg font-semibold text-cyan-800">
        The page you're looking for doesn't exist.
      </div>
      <div class="pt-4">
        <button
				@click="goToHomepage"
          class="border rounded-md px-4 py-2 bg-cyan-500 text-white font-bold"
        >
          Back to Homepage
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import router from "../router/index.js"

function goToHomepage() {
  router.push("/")
}
</script>
<style scoped>
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
</style>
