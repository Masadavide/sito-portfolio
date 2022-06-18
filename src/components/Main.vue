<template>
<div>
  <section class="ms_background position-relative">
    
    <div id="su di me" class="ms_container d-flex align-items-center">
      <div class="d-none d-xl-block">
        <div class="ms_sidebar row row-cols-1 flex-column justify-content-between align-items-center">
          <div class="ms_logo col m-auto">
            <img src="../assets/logoMasa.png" alt="">
            <div class="ms_scrittalogo">
              Masa
            </div>
          </div>

          <div class="ms_linea col m-auto"></div>

          <div class="ms_icona d-flex flex-column text-center col m-auto">
            <a href="mailto:davide.masadm@gmail.com">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/davide-masa/" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            
          </div>
        </div>

        <div class="ms_sidebar2 row row-cols-1 flex-column justify-content-between align-items-center">
          <div class="ms_menu col m-auto">
            <div class="w-100 h-100 d-flex flex-column justify-content-around align-items-center">
              <div class="Menu">
                <ul class="Menu-list">
                  <a href="#home">
                    <li class="Menu-list-item">
                      Home
                      <span class="Mask"><span>Home</span></span>
                      <span class="Mask"><span>Home</span></span>
                    </li>
                  </a>
                  <a href="#su di me">
                    <li class="Menu-list-item">
                      Su di me
                      <span class="Mask"><span>Su di me</span></span>
                      <span class="Mask"><span>Su di me</span></span>
                    </li>
                  </a>
                  <a href="#progetti">
                    <li class="Menu-list-item">
                      Progetti
                      <span class="Mask"><span>Progetti</span></span>
                      <span class="Mask"><span>Progetti</span></span>
                    </li>
                  </a>
                  <a href="#contatti">
                    <li class="Menu-list-item">
                      Contatti
                      <span class="Mask"><span>Contatti</span></span>
                      <span class="Mask"><span>Contatti</span></span>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div class="ms_linea col"></div>
        </div>
      </div>


      <!-- <div class="custom-shape-divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div> -->



      <div class="ms_biografia">
        <div class="ms_sfondobiografia"></div>
        <div class="ms_html ms_codice">
          &lt;html&gt;
        </div>
        <div class="ms_body ms_codice">
          &lt;body&gt;
        </div>
        <div class="ms_h ms_codice">
          &lt;h2&gt;
        </div>
        <div>
          <div class="ms_scritta">
            Masa Davide,
          </div>
          <div class="ms_scritta">
            Web Developer.
          </div>
        </div>
        <div class="ms_h ms_codice">
          &lt;/h2&gt;
        </div>
        <div class="ms_p ms_codice">
          &lt;p&gt;
        </div>
        <div>
          <div class="ms_scritta">
            Sono caparbio e da sempre
            appassionato di informatica.<br>
            Dopo aver svolto molteplici lavori,
            acquisendo svariate esperienze in
            diversi ambiti, ho deciso di
            ascoltare la mia passione per
            l'informatica e, dopo aver studiato ed
            essermi preparato, sono pronto per
            affrontare questa nuova sfida in un
            mondo, per me, completamente nuovo
            ma molto stimolante.
          </div>
        </div>
        <div class="ms_p ms_codice">
          &lt;/p&gt;
        </div>
        <div class="ms_body ms_codice">
          &lt;/body&gt;
        </div>
        <div class="ms_html ms_codice">
          &lt;/html&gt; 
        </div>
      </div>


    <!--  <div class="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill">
            <image href="../assets/grey.png"/>
          </path>
        </svg>
      </div> -->





      <!-- <div class="ms_puntatore">
        <div class="d-flex">
          <div class="ms_triangolosuperioresx"></div>
          <div class="ms_triangolosuperioredx"></div>
        </div>
        <div class="d-flex">
          <div class="ms_triangoloinferioresx"></div>
          <div class="ms_triangoloinferioredx"></div>
        </div>
      </div> -->
    </div>
  </section>


  <section class="ms_background2">
    <div id="progetti" class="ms_container position-relative">
      <div class="ms_scrittaprogetti position-absolute">
        <h2>
          <div class="ms_scrittafreccia">
            I miei 
            <div>
              progetti
            </div>
          </div>
        </h2>
        <div class="ms_freccia">
          <img src="../assets/freccia.png" alt="">
        </div>
      </div>
      <div class="d-flex flex-column align-items-center">
        <a href="#" onClick="return false;" class="mb-5">
          <div class="ms_pallino ms_pallino0" @mouseover="tag0 = true" @mouseleave="tag0 = false">
            Il futuro
              <div v-show="tag0" @mouseleave="tag0 = false" class="ms_preview ms_preview0">
                <div class="ms_frase text-center">
                  E molti altri verranno aggiunti...
                </div>
              </div>
          </div>
        </a>
        <a href="https://github.com/Masadavide/BoolBnB" target="_blank" class="m-5">
          <div class="ms_pallino" @mouseover="tag1 = true">
            BoolBnB
          </div>
          <div v-show="tag1" @mouseleave="tag1 = false" class="ms_preview ms_preview1">
            <img src="../assets/BoolBnB.png" alt="">
          </div>
        </a>
        <a href="https://github.com/Masadavide/proj-html-vuejs" target="_blank" class="m-5">
          <div class="ms_pallino" @mouseover="tag2 = true">
            Template
          </div>
          <div v-show="tag2" @mouseleave="tag2 = false" class="ms_preview ms_preview2">
            <img src="../assets/Progetto singolo.png" alt="">
          </div>
        </a>
        <a href="https://github.com/Masadavide/vue-dc-comics" target="_blank" class="m-5">
          <div class="ms_pallino" @mouseover="tag3 = true">
            Dc-comics
          </div>
          <div v-show="tag3" @mouseleave="tag3 = false" class="ms_preview ms_preview3">
            <img src="../assets/Comics.png" alt="">
          </div>
        </a>
        <a href="https://github.com/Masadavide/htmlcss-dropbox" target="_blank" class="m-5">
          <div class="ms_pallino" @mouseover="tag4 = true">
            Dropbox
          </div>
          <div v-show="tag4" @mouseleave="tag4 = false" class="ms_preview ms_preview4">
            <img src="../assets/Dropbox.png" alt="">
          </div>
        </a>
        <a href="https://github.com/Masadavide/html-css-spotifyweb" target="_blank" class="m-5">
          <div class="ms_pallino" @mouseover="tag5 = true">
            Spotify
          </div>
          <div v-show="tag5" @mouseleave="tag5 = false" class="ms_preview ms_preview5">
            <img src="../assets/Spotify.png" alt="">
          </div>
        </a>
        <a href="https://github.com/Masadavide/htmlcss-discord" target="_blank" class="m-5">
          <div class="ms_pallino" @mouseover="tag6 = true">
            Discord
          </div>
          <div v-show="tag6" @mouseleave="tag6 = false" class="ms_preview ms_preview6">
            <img src="../assets/Discord.png" alt="">
          </div>
        </a>
        


      </div>
    </div>
    
  </section>
</div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
    tag0 : false,
    tag1 : false,
    tag2 : false,
    tag3 : false,
    tag4 : false,
    tag5 : false,
    tag6 : false,
    }
  }
}
</script>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Sanskrit&display=swap');

.ms_background{
  background-image: url(../assets/strada.jpg);
  background-size: cover;
  z-index: 0;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  /* box-shadow: inset 0px 850px 500px -500px white; */
}


.ms_container{
  max-width: 1200px;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  padding: 120px;
}

@media screen and (max-width: 990px){
  .ms_container{
    padding: 20px;
  }
}



.ms_sidebar{
  width: 150px;
  height: 100vh;
  position: fixed;
  top: 0vh;
  left: 0px;
  padding: 50px 0;
}
.ms_logo{
  width: 80px;
  height: 80px;
  position: relative;
  padding: 0;
}

.ms_scrittalogo{
  color: white;
  position: absolute;
  font-size: 25px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Alfa Slab One', cursive;
  transform: rotate(-15deg);
  left: 4px;
  top: 20px;
}

img{
  width: 100%;
  height: 100%;
}

.ms_linea{
  width: 1px;
  height: 400px;
  background-color: black;
  padding: 0;
  margin: 0 auto;
}

.ms_icona{
  bottom: 0px;
  left: 60px;
  i{
    font-size: 30px!important;
    color: white;
  }
  :hover{
    color: #FF2C75;
  }
}

.ms_sidebar2{
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0vh;
  right: 0px;
  padding: 30px 0;
}

a{
  text-decoration: none;
}

.ms_menu{
  width: 150px;
  height: 200px;
  border: 1px solid black;
  background-color: white;
  transform: rotateX(-20deg) rotateY(20deg);
}


.ms_biografia{
  position: relative;
  color: white;
  border: 1px solid turquoise;
  font-size: 20px;
  padding: 20px;
  z-index: -1;
}

.ms_sfondobiografia{
  margin: -20px;
  background-color: rgb(52, 49, 49);
  font-size: 20px;
  opacity: 0.9;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
  background: linear-gradient(-45deg, #ee7752, #2bb037 ,#c37043, #ee7752);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.ms_codice{
  font-family: 'Fredericka the Great', cursive;
  color: rgb(56, 18, 66);
}
/* .ms_html{
  
} */

.ms_body{
  margin-left: 20px;
}

.ms_h, .ms_p{
  margin-left: 40px;
}

.ms_scritta{
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 60px;
  font-family: 'Tiro Devanagari Sanskrit', serif;
}













.ms_triangolosuperioresx{
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 200px solid #0d2139;
}
.ms_triangolosuperioredx{
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 200px solid red;
}
.ms_triangoloinferioresx{
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 0px solid transparent;
  border-top: 50px solid whitesmoke;
}
.ms_triangoloinferioredx{
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 50px solid transparent;
  border-top: 50px solid #0d2139;
}





// === Variables =====
$perspective:     60rem;
$font-size:       1.8rem;
$split-position:  49%;
$split-thickness: 4px;
$split-color:     #FF2C75;


// === Menu <ul> =====
.Menu-list {
  font-size: $font-size;
  line-height: 1.5;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: rotateX(-10deg) rotateY(20deg);
  padding-left: 0;
  margin-bottom: 0;
}

// === Menu item =====
.Menu-list-item {
  position: relative;
  color: transparent;
  cursor: pointer;
  
  // === Split Line =====
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: $split-position;
    left: -10%;
    right: -10%;
    height: $split-thickness;
    border-radius: $split-thickness;
    /* margin-top: -($split-thickness / 2); */
    background: $split-color;
    transform: scale(0);
    transition: transform .8s cubic-bezier(.16,1.08,.38,.98);
    z-index: 1;
  }
}

// === Top/bottom mask =====
.Mask {
  display: block;
  position: absolute;
  overflow: hidden;
  color: $split-color;
  top: 0;
  height: $split-position;
  transition: all .8s cubic-bezier(.16,1.08,.38,.98);
  
  span { display: block; }
}

// === Bottom mask specific =====
.Mask + .Mask {
  top: $split-position - 0.1;
  height: 100 - $split-position + 0.1;
  
  span { transform: translateY(-$split-position); }
}

// === Where the fun stuff happens =====
.Menu-list-item:hover,
.Menu-list-item:active {
  .Mask { color: black; transform: skewX(12deg) translateX(5px); }
  .Mask + .Mask { transform: skewX(12deg) translateX(-5px); }
  &::before { transform: scale(1); }
}



.ms_bg{
  transform-style: preserve-3d;
}

.ms_background2{
  background-image: url(../assets/babele.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 1237px;

  /* background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat; */

}
/* .prova{
  height: 2160px;
  position: absolute;
  font-size: 5.4166666667vw;
  letter-spacing: .845em;
  line-height: 16.65vh;
  word-break: break-all;
  min-width: 100vw;
  height: 100vh;
  left: 0.45em;
  top: 0;
  left: 0;
  animation: spostamentolettere 10s infinite linear;
  
}


@keyframes spostamentolettere {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
} */
/* .ms_progetto{
  width: 100px;
  height: 100px;
  top: 0;
  left: 100px;
  background-color: #ee7752;
  top: 150px;
} */

.ms_scrittaprogetti{
  font-family: 'Fredericka the Great', cursive;
  left: 10%;
  color: black;
  margin-left: -50px;
  .ms_scrittafreccia{
    font-size: 3rem;
  }
  img{
    width: 100px;
    height: 100px;
    transform: scaleX(-1);
  }
}
.ms_pallino{
  width: 80px;
  height: 50px;
  text-align: center;
  padding-top: 10px;
  border-radius: 100%;
  background-color: #57e610;
  border: 2px solid white;
  color: #FF2C75;
}

.ms_preview{
  width: 900px;
  height: 700px;
  overflow-y: scroll;
  position: fixed;
  border-radius: 20px;
  border: 3px solid greenyellow;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.ms_preview::-webkit-scrollbar {
    display: none;
}

.ms_frase{
  font-size: 5rem;
  color: white;
  font-family: 'Fredericka the Great', cursive;
}
.ms_preview0{
  height: 300px;
  background-color: white;
  display: flex;
  align-items: center;
  background-image: url(../assets/infinito2.jpg);
  background-size: cover;
  background-position: center;
}
.ms_preview1, .ms_preview6{
  img{
    width: 100%;
    height: 300%;
  }
}
.ms_preview2, .ms_preview4{
  img{
    width: 100%;
    height: 500%;
  }
}
.ms_preview3{
  img{
    width: 100%;
    height: 200%;
  }
}




@media only screen and (max-width: 600px) {
  .ms_scrittaprogetti{
    margin-left: 0;
  }
  .ms_scrittafreccia {
    font-size: 30px!important;
  }
  .ms_freccia{
    margin-top: -25px;
  }
  .ms_pallino0{
    display: none;
  }
}
</style>
