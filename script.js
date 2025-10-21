const app = Vue.createApp({
    data() {
      return {
        projets: [] // tableau qui contiendra les données du JSON
      }
    },
  
   
    mounted() {
      fetch('projets.json') // fait le fetch dans le json projets
        .then(response => response.json())
        .then(data => {
          this.projets = data
        })
        .catch(error => {
          console.error('Erreur lors du chargement du JSON :', error)
        })
    },
  
    methods: {}
  })


app.mount('#app');