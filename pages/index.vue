<template>
  <div class="relative">
    <div class="pt-12 max-w-6xl w-full mx-auto">
      <!-- Content -->
      <div class="mt-20 text-center">
        <h1 class="text-5xl">
          <span class="text-green-500">t</span>eam <span class="text-green-500">c</span>oding
        </h1>
        <div class="text-gray-400 text-2xl font-light mt-6">
          Lapak Hasil Bookmark Script & Coding
        </div>
      </div>
      <div class="mt-20 flex">
        <div class="max-w-4xl w-full">
          <div v-if="artikel_obj">
            <div v-for="i in artikel_obj.results" :key="i.id" class="p-6 bg-white shadow-sm mb-20">
              <div class="text-center text-3xl text-gray-700 flex justify-center">
                <NuxtLink :to="{name: 'artikel-slug', params: {slug: i.slug}}" href="#" class="max-w-xl w-full hover:text-green-500 transition-all ease-in-out">
                  {{ i.title }}
                </NuxtLink>
              </div>
              <div class="flex items-center justify-center space-x-10 mt-10">
                <div class="text-gray-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span class="ml-2">{{ $moment(Date.parse(i.create)).format('DD MMM YYYY') }}</span>
                </div>
                <div class="text-gray-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span class="ml-2">Anderi</span>
                </div>
                <div class="text-gray-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="ml-2">{{ i.duration | readingTime }} Menit</span>
                </div>
                <div class="text-gray-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span class="ml-2">1 Dilihat</span>
                </div>
                <div class="text-gray-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span class="ml-2">0 Komentar</span>
                </div>
              </div>
              <div class="mt-5">
                <NuxtLink :to="{name: 'artikel-slug', params: {slug: i.slug}}" href="#">
                  <img class="w-full" :src="i.cover_image_url" alt="">
                </NuxtLink>
              </div>
              <div class="mt-10 flex items-center space-x-5">
                <span v-for="c in i.tags" :key="c.id" class="text-white bg-blue-500 py-1 px-3">
                  {{ c.tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      artikel_obj: null
    }
  },
  async fetch () {
    this.artikel_obj = await this.$axios.$get('artikel/artikel/')
  }
}
</script>
