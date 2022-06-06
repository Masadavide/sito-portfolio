<template>
  <div class="ms_container">
    <div class="d-none d-lg-block">
      <div class="ms_sidebar row row-cols-1 flex-column justify-content-between align-items-center">
        <div class="ms_logo col m-auto">
          <img src="../assets/logoMasa.png" alt="">
          <div class="ms_scrittalogo">
            Masa
          </div>
        </div>

        <div class="ms_linea col m-auto"></div>

        <div class="ms_icona d-flex flex-column text-center col m-auto">
          <i class="fas fa-envelope"></i>
          <i class="fa-brands fa-linkedin"></i>
          
        </div>
      </div>

      <div class="ms_sidebar2 row row-cols-1 flex-column justify-content-between align-items-center">
        <div class="ms_menu col m-auto">
          <div class="w-100 h-100 d-flex flex-column justify-content-around align-items-center">
          <div class="Menu">
            <ul class="Menu-list">
              <li class="Menu-list-item">
                Home
                <span class="Mask"><span>Home</span></span>
                <span class="Mask"><span>Home</span></span>
              </li>
              <li class="Menu-list-item">
                Su di me
                <span class="Mask"><span>Su di me</span></span>
                <span class="Mask"><span>Su di me</span></span>
              </li>
              <li class="Menu-list-item">
                Progetti
                <span class="Mask"><span>Progetti</span></span>
                <span class="Mask"><span>Progetti</span></span>
              </li>
              <li class="Menu-list-item">
                Contatti
                <span class="Mask"><span>Contatti</span></span>
                <span class="Mask"><span>Contatti</span></span>
              </li>
            </ul>
          </div>

        </div>
      </div>
        <div class="ms_linea col"></div>
      </div>
    </div>

    <div class="ms_biografia">
      <div class="ms_html">
        &lt;html&gt;
      </div>
      <div class="ms_body">
        &lt;body&gt;
      </div>
      <div class="ms_h">
        &lt;h&gt;
      </div>
      <div>
        <div class="ms_scritta">
          Masa Davide,
        </div>
        <div class="ms_scritta">
          web developer
        </div>
      </div>
      <div class="ms_h">
        &lt;/h&gt;
      </div>
      <div class="ms_p">
        &lt;p&gt;
      </div>
      <div>
        <div class="ms_scritta">
          Sono caparbio e da sempre
          appassionato di informatica.
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
      <div class="ms_/p">
        &lt;/p&gt;
      </div>

    </div>






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
</template>

<script>
export default {
  name: 'Main',
  }
</script>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

.ms_container{
  max-width: 1150px;
  margin: 0 auto;
  height: 100vh;
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

.ms_menu{
  width: 150px;
  height: 200px;
  border: 1px solid black;
  background-color: white;
}

.ms_html{
  margin-left: -40px;
}

.ms_body{
  margin-left: -20px;
}
.ms_scritta{
  margin-left: 20px;
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
    margin-top: -($split-thickness / 2);
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
</style>
