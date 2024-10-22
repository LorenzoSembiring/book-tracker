<template>
    <Navbar />
    <div class="grid justify-items-center radial-backgroud">
        <div
            class="md:text-5xl text-4xl plus-jakarta-sans text-gray-600 mt-40 text-center"
        >
            Add your book
        </div>
        <div class="text-lg plus-jakarta-sans text-gray-400 mt-3 mb-10">
            Search or input your current reading
        </div>
        <div class="w-56 sm:w-80 transition-all ease-in-out delay-150" :class="{'sm:w-1/3' : isSearchFocused}">
            <label class="input input-bordered flex items-center gap-2">
                <input
                    type="text"
                    class="grow"
                    placeholder="Search"
                    v-model="searchInput"
                    @focus="isSearchFocused = true"
                    @blur="isSearchFocused = false"
                />
                <Icon
                    @click="search()"
                    class="text-2xl cursor-pointer"
                    icon="ic:round-search"
                />
            </label>
        </div>
        <div class="text-md plus-jakarta-sans text-gray-600 mt-1 mb-10">
            Not finding your book?
            <span class="cursor-pointer text-blue-500">Insert it manually</span>
        </div>
    </div>
</template>

<script setup>
import Navbar from "@/components/navbar.vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const searchInput = defineModel("searchInput");
const isSearchFocused = ref(false)

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

.radial-backgroud {
    background: rgb(255, 251, 249);
    background: radial-gradient(
        circle,
        rgba(255, 251, 249, 1) 50%,
        rgba(231, 253, 255, 1) 80%,
        rgba(197, 249, 243, 1) 100%
    );
}
</style>
