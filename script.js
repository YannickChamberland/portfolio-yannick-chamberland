const app = Vue.createApp({
    data() {
      return {
        projets: [] // tableau qui contiendra les données du JSON
      }
    },
  
    mounted() {
      fetch('projets.json') // chemin vers fichier JSON
        .then(response => {
          if (!response.ok) {
            throw new Error("Erreur lors du chargement du fichier JSON");
          }
          return response.json();
        })
        .then(data => {
          this.projets = data; // stocke le JSON dans le tableau projets
        })
        .catch(error => {
          console.error('Erreur lors du chargement du JSON :', error);
        });
    }
  });
  
  app.mount('#app');
  