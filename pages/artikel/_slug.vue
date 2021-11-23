<template>
  <div class="relative">
    <div class="pt-12 max-w-5xl w-full mx-auto">
      <div class="mt-20">
        <div v-if="artikel" class="w-full">
          <div class="p-6 bg-white shadow-sm">
            <div class="text-center text-4xl text-gray-700 flex justify-center">
              <h1 class="">
                {{ artikel.title }}
              </h1>
            </div>
            <div class="flex text-sm font-light items-center justify-center space-x-10 mt-10">
              <div class="text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="ml-2">20 Nov 2021</span>
              </div>
              <!-- <div class="text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="ml-2">Ander</span>
              </div> -->
              <div class="text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="ml-2">{{ artikel.duration | readingTime }} Menit</span>
              </div>
              <div class="text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span class="ml-2">1 Dilihat</span>
              </div>
              <div class="text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span class="ml-2">0 Komentar</span>
              </div>
            </div>
            <div class="mt-6 filter grayscale">
              <img class="w-full" :src="artikel.cover_image_url" alt="">
            </div>
            <div class="mt-12 text-lg text-gray-900 leading-9 content-blog" v-html="artikel.content">
              <!-- Content -->
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
      artikel: null
    }
  },
  async fetch () {
    this.artikel = await this.$axios.$get(`artikel/artikel/${this.$route.params.slug}/`)
    // console.log(artikel)
  }
}
</script>
