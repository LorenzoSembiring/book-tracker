<template>
    <Navbar />
    <div class="grid justify-items-center">
        <div class="md:text-5xl text-4xl plus-jakarta-sans text-gray-600 mt-40 text-center">Add your book</div>
        <div class="text-lg plus-jakarta-sans text-gray-400 mt-3 mb-10">Search or input your current reading</div>
        <div class="w-56 sm:w-80">
            <label class="input input-bordered flex items-center gap-2">
                <input
                    type="text"
                    class="grow"
                    placeholder="Search"
                    v-model="searchInput"
                />
                <Icon
                    @click="search()"
                    class="grow text-2xl cursor-pointer"
                    icon="ic:round-search"
                />
            </label>
        </div>
        <div class="text-md plus-jakarta-sans text-gray-600 mt-1 mb-10">Not finding your book? <span class="cursor-pointer text-blue-500">Insert it manually</span></div>
    </div>
</template>

<script setup>
import Navbar from "@/components/navbar.vue";
import { Icon } from "@iconify/vue";

const searchInput = defineModel("searchInput");

function search() {}
</script>
<style scoped>
.input:focus,
.input:focus-within {
    outline-style: none;
}

.plus-jakarta-sans {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
}
</style>
