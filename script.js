  //Section App vue

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

  //Section animation GSAP

  gsap.registerPlugin(ScrollTrigger, SplitText);

  //Animation texte

  mytitleSplitText = new SplitText("h1", { type: "words,chars" });
  let titre = mytitleSplitText.chars;

  gsap.from(titre, {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    x: 80,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01,
  });


  mytextSplitText = new SplitText(".textA", { type: "words,chars" });
  let textA = mytextSplitText.chars;

  gsap.from(textA, {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    y: -80,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01,
  });

  mylinkSplitText = new SplitText("a", { type: "words,chars" });
  let lien = mylinkSplitText.chars;

  gsap.from(lien, {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    x: -80,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01,
  });

  mytext2SplitText = new SplitText(".textC", { type: "words,chars" });
  let textC = mytext2SplitText.chars;

  gsap.from(textC, {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    x: -80,
    y: -80,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01,
  });

  //Animation normale

  //Timeline page à propos
  gsap.timeline()
  .from("#divP",{
    x: "1000px",
    duration: 1
  })
  .from("#divP2",{
    x: "-10000px",
    duration: 1
  })
  .from("#sectionP2",{
    y: "1000px",
    duration: 1
  })
  .from("#divP3",{
    opacity: 0,
    duration: 1
  })
  .from("#divP4",{
    opacity: 0,
    duration: 1
  })