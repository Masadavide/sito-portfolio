<template>
<div class="ms_background">
  <div id="contatti" class="ms_container">
    <div class="row row-cols-1 row-cols-lg-2">
      <div class="col">
        <div class="ms_container2">
          <div class="ms_scritta text-center mt-5">
            Contattami...
          </div>
          <div class="d-flex justify-content-around align-items-center" style="height:330px">
            <a href="mailto:davide.masadm@gmail.com" target="_blank" class="ms_icona">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/Masadavide" target="_blank" class="ms_icona">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/davide-masa" target="_blank" class="ms_icona">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div @mouseover="tag = true" @mouseleave="tag = false" class="ms_mappa col">
        <div class="position-relative">
          
            <div v-show="tag" class="ms_milano">
              <a href="https://www.google.com/maps/place/Milano" target="_blank">
                <img src="../assets/milano.png" alt="">
              </a>
            </div>
          
        </div>
        <img src="../assets/mappaitalia.png" alt="">
      </div>
    </div>
      

    

    <!-- <div class="circle__box">
      <div class="circle__wrapper circle__wrapper--right">
        <div class="circle__whole circle__right"></div>
      </div>
      <div class="circle__wrapper circle__wrapper--left">
        <div class="circle__whole circle__left"></div>
      </div>
    </div> -->
  </div>
    
</div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
    tag : false
    }
  }
}


</script>


<style scoped lang="scss">
.ms_background{
  background-image: url(../assets/montagna.jpg);
  background-size: cover;
  background-color: #97aac1;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}

.ms_container{
  min-height: 100vh;
  width: 100%;
  padding: 0 150px;
  padding-top: 200px;
}

.ms_container2{
  width: 100%;
  height: 100%;
}

.ms_scritta{
  font-size: 3.5rem;
  color: white;
  font-family: 'Tiro Devanagari Sanskrit', serif;
}

.ms_icona{
  font-size: 80px;
  height: 100%;
  margin: 0 auto;
  color: white;
  :hover{
    color: #FF2C75;
  }
}


.ms_mappa{

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
}

.ms_milano{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-left: -100px;
  width: 400px;
  height: 400px;
  border: 3px solid salmon;
  border-radius: 100%;
  img{
    border-radius: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.ms_ping{
  position: absolute;
  left: 258px;
  top: 80px;
  z-index: 1;
}

@media only screen and (max-width: 993px) {
  .ms_container{
    padding: 0;
  }
  .ms_icone{
    width: 80%;
  }
}








.circle__box {
  width: 200px;
  height: 200px;
  margin: 50px auto;
  position: relative;
}

.circle__wrapper {
  width: 80px;
  height: 200px;
  position: absolute;
  top: 0;
  overflow: hidden;
}

.circle__wrapper--right {
  right: 0;
  margin-right: 20px;
}

.circle__wrapper--left {
  left: 0;
  margin-left: 20px;
}

.circle__whole {
  width: 160px;
  height: 160px;
  border: 20px solid transparent;
  border-radius: 50%;
  position: absolute;
  top: 0;
  transform: rotate(-135deg);
}

.circle__right {
  border-top: 20px solid teal;
  border-right: 20px solid teal;
  right: 0;
  animation: circleRight 5s linear forwards;
}

.circle__left {
  border-bottom: 20px solid teal;
  border-left: 20px solid teal;
  left: 0;
  animation: circleLeft 5s linear forwards;
}

@keyframes circleRight {
  0% {
    transform: rotate(-135deg);
  }
  50%,
  100% {
    transform: rotate(45deg);
  }
}

@keyframes circleLeft {
  0%,
  50% {
    transform: rotate(-135deg);
  }
  100% {
    -webkit-transform: rotate(45deg);
  }
}
</style>
