import Vue from 'vue'

Vue.filter('readingTime', (value) => {
  const wpm = 150
  const time = Math.ceil(value / wpm)
  return time
})
