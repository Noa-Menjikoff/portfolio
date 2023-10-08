const myDiv = document.querySelector('.Bienvenue');
const myH = document.querySelector('.txt');


myDiv.addEventListener('animationend', () => {
    setTimeout(() => {
    myDiv.style.animation = 'test-2 1.5s ease';},2000);
    myH.style.display = 'block';
    setTimeout(() => {
    myDiv.classList.add('hidden');
    document.documentElement.style.overflowY = 'visible'; // HTML
    document.body.style.overflowY = 'visible';
},3500);
    
});


Vue.config.devtools = true;



Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null
  }),
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      }
    }
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width/2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height/2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(()=>{
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    }
  }
});

const app = new Vue({
  el: '#app'
});


// script.js
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche l'envoi du formulaire par défaut

  // Récupérer les valeurs des champs
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Vous pouvez traiter les données ici, par exemple, les envoyer à un serveur ou les afficher
  console.log("Nom: " + name);
  console.log("Email: " + email);
  console.log("Message: " + message);

  // Réinitialiser le formulaire
  document.getElementById("contact-form").reset();
});
