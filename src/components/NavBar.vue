<template>
  <header
      v-show="userNav"
      class=" container mx-auto rounded-b-full pt-0 text-white mb-12"
  >
    <nav class="bg-zinc-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
                aria-controls="mobile-menu"
                aria-expanded="false"
                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                type="button"
            >
              <span class="sr-only">Open main menu</span>
              <!--
                Icon when menu is closed.

                Heroicon name: outline/bars-3

                Menu open: "hidden", Menu closed: "block"
              -->
              <svg
                  aria-hidden="true"
                  class="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
              <!--
                Icon when menu is open.

                Heroicon name: outline/x-mark

                Menu open: "block", Menu closed: "hidden"
              -->
              <svg
                  aria-hidden="true"
                  class="hidden h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
              class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex flex-shrink-0 items-center">
              <img
                  alt="Your Company"
                  class="block h-8 w-auto lg:hidden"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <RouterLink
                    :to="{ name: 'home' }"
                    aria-current="page"
                    class="bg-stone-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >Game~Pro
                </RouterLink>
                <RouterLink
                    :to="{ name: 'about' }"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >About
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div id="mobile-menu" class="sm:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
              aria-current="page"
              class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              href="#"
          >Dashboard</a
          >

          <a
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="#"
          >Team</a
          >

          <a
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="#"
          >Projects</a
          >

          <a
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="#"
          >Calendar</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import {mapWritableState} from "pinia";
import useNavbarStore from "@/stores/navbar";

export default {
  name: "NavBar",
  computed: {
    ...mapWritableState(useNavbarStore, ["userNavbar"]),
    userNav() {
      return this.userNavbar.includes(this.$route.name);
    },
  },
};
</script>
