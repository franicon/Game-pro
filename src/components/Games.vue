<template>
  <div class=" xl:basis-1/5 md:basis-4/12 relative mb-6 mt-6 mx-4 bg-zinc-800 rounded-xl shadow-xl">
    <img :alt="item.title" :src="`${item.thumbnail}`"
         class="rounded-t-2xl w-screen p-2 hover:scale-90 duration-200 hover:rounded-2xl"/>

    <div class="text-xs text-white w-full border-red-500 font-sans">
      <p class="font-medium text-sm px-2 normal-case">{{ item.title }}</p>
      <p class="mx-2 mt-1 text-xs capitalize">{{ item.genre }}</p>
      <p class="p-2 w-full text-xs tracking-wide"> {{
          item.short_description?.substring(0, 120) + "..."
        }} </p>
      <div class="flex justify-between items-center m-3">
        <div class="w-full text-center">
          <a
              :href="`${item.game_url}`"
              class="inline-block px-4 py-3 hover:bg-zinc-600
              bg-zinc-700 text-zinc-100 text-xs mt-2 duration-500 w-full"
              target="_blank"
          >Read more</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Games",
  props: ["item"],
};
</script>

<style scoped></style>
