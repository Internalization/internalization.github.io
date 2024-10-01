Vue.config.productionTip = false

Vue.component('start', {
  template: '#start',
  methods: {
    startPage() {
      // Emit event to change the page to 'next'
      this.$emit('change-page', 'next');

      // Play the music
      const audio = document.getElementById('background-music');
      if (audio) {
        audio.play();
      }
    }
  }
})

Vue.component('next', {
  template: '#next'
})

new Vue({
  el: '#app',
  
  data: {
    page: 'start'  // Initial page
  },
  
  methods: {
    onChangePage(to) {
      this.page = to;  // Change page dynamically
    }
  },
  
  mounted() {
    // Listen for the 'change-page' event
    this.$on('change-page', (to) => {
      this.page = to;
    });
  }
})
