<template>
<div class="ms_background">
  <div id="home" class="ms_container row row-cols-1 row-cols-xl-2 justify-content-center align-items-center overflow-hidden text-center">
    <div class="col ms_frase">
      Ogni giorno, quello che scegli, quello che pensi e quello che fai ...
      <div class="ms_macchinascrivere reveal-text">
        È ciò che diventi.
      </div>
    </div>
    <div class="ms_cerchio ms_boxcerchio d-flex justify-content-center align-items-center col">
      <div id="pointer"></div>
      <div class="ms_involucrocerchio ms_involucrocerchiodx">
        <div class="ms_cerchiointero ms_cerchiodx"></div>
      </div>
      <div class="ms_involucrocerchio ms_involucrocerchiosx">
        <div class="ms_cerchiointero ms_cerchiosx"></div>
      </div>


      <div class="ms_rettangolo ms_rettangoloSw position-absolute">
        <div class="ms_puntatore2">
          <div class="d-flex">
            <div class="ms_triangolosuperioresx2"></div>
            <div class="ms_triangolosuperioredx2"></div>
          </div>
        </div>
      </div>

      <div class="ms_rettangolo ms_rettangoloW position-absolute">
        <div class="ms_lettera text-center mt-3">W</div>
        <div class="ms_puntatore">
            <div class="d-flex">
              <div class="ms_triangolosuperioresx"></div>
              <div class="ms_triangolosuperioredx"></div>
            </div>
            <div class="d-flex">
              <div class="ms_triangoloinferioresx"></div>
              <div class="ms_triangoloinferioredx"></div>
            </div>
          </div>
      </div>

      <div class="ms_rettangolo ms_rettangoloNw position-absolute">
        <div class="ms_puntatore2">
          <div class="d-flex">
            <div class="ms_triangolosuperioresx2"></div>
            <div class="ms_triangolosuperioredx2"></div>
          </div>
        </div>
      </div>

      <div class="ms_rettangolo ms_rettangoloN position-absolute">
        <div class="ms_letteraN text-center mt-3">N</div>
        <div class="ms_puntatore">
            <div class="d-flex">
              <div class="ms_triangolosuperioresx"></div>
              <div class="ms_triangolosuperioredx"></div>
            </div>
            <div class="d-flex">
              <div class="ms_triangoloinferioresx"></div>
              <div class="ms_triangoloinferioredx"></div>
            </div>
          </div>
        <!-- <div class="ms_puntino position-absolute"></div> -->
      </div>

      <div class="ms_rettangolo ms_rettangoloNe position-absolute">
        <div class="ms_puntatore2">
          <div class="d-flex">
            <div class="ms_triangolosuperioresx2"></div>
            <div class="ms_triangolosuperioredx2"></div>
          </div>
        </div>
      </div>

      <div class="ms_rettangolo ms_rettangoloE position-absolute">
        <div class="ms_lettera text-center mt-3">E</div>
        <div class="ms_puntatore">
            <div class="d-flex">
              <div class="ms_triangolosuperioresx"></div>
              <div class="ms_triangolosuperioredx"></div>
            </div>
            <div class="d-flex">
              <div class="ms_triangoloinferioresx"></div>
              <div class="ms_triangoloinferioredx"></div>
            </div>
          </div>
      </div>

      <div class="ms_rettangolo ms_rettangoloSe position-absolute">
        <div class="ms_puntatore2">
          <div class="d-flex">
            <div class="ms_triangolosuperioresx2"></div>
            <div class="ms_triangolosuperioredx2"></div>
          </div>
        </div>
      </div>

      <div class="ms_rettangolo ms_rettangoloS position-absolute">
        <div class="ms_lettera text-center mt-3">S</div>
          <div class="ms_puntatore">
            <div class="d-flex">
              <div class="ms_triangolosuperioresx"></div>
              <div class="ms_triangolosuperioredx"></div>
            </div>
            <div class="d-flex">
              <div class="ms_triangoloinferioresx"></div>
              <div class="ms_triangoloinferioredx"></div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
}
</script>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
.ms_background{
  background-image: url(../assets/seatop.jpg);
  background-size: cover;
  width: 100%;
  /* transform: scaleY(-1); */
  background-position: 0 20%;
  background-repeat: no-repeat;
}
.ms_container{
  max-width: 1150px;
  margin: 0 auto;
  height: 100vh;
}

.ms_frase{
  font-family: 'Patua One', cursive;
  font-size: 2rem;
}

.reveal-text,
.reveal-text::after {
	animation-delay: var(--animation-delay, 2s);
	animation-iteration-count: var(--iterations, 1);
	animation-duration: var(--duration, 800ms);
	animation-fill-mode: both;
	animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
}

.reveal-text {
	--animation-delay: var(--delay, 5s);
	--animation-duration: var(--duration, 800ms);
	--animation-iterations: var(--iterations, 1);
	position: relative;
	font-size: 3rem;
	animation-name: clip-text;
	color: #FF2C75;
	white-space: nowrap;
	cursor: default;
	
	&::after {
		content: "";
		position: absolute;
		z-index: 999;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #f2f98b;
		transform: scaleX(0);
		transform-origin: 0 50%;
		pointer-events: none;
		animation-name: text-revealer;
	}
	
}


@keyframes clip-text {
	from {
		clip-path: inset(0 100% 0 0);
	}
	to {
		clip-path: inset(0 0 0 0);
	}
}


@keyframes text-revealer {
	
	0%, 50% {
		transform-origin: 0 50%;
	}
	
	60%, 100% {
		transform-origin: 100% 50%;		
	}

	
	60% {
		transform: scaleX(1);
	}
	
	100% {
		transform: scaleX(0);
	}
}

/* .ms_macchinascrivere{
  color: #FF2C75;
  width: 410px;
  font-weight: bolder;
  font-size: 2rem;
  overflow: hidden;
  border-right: .15em solid orange;
  white-space: nowrap; 
  margin: 20px auto; 
  letter-spacing: .25em;
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite,
    lettera 2s forwards;
  animation-delay: 2s;
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .ms_macchinascrivere {
    width: 340px;
    font-size: 30px;
  }
}

@keyframes typing {
  from { width: 0 }
  to { width: 70% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: black; }
}

@keyframes opacity {
  10%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
} */

.ms_rettangolo{
  height: 200px;
  width: 80px;
  top: 10px;
  /* box-shadow: 0 0 0 0.2px lightgray; */
}
.ms_lettera{
  opacity: 0;
  animation: lettera 20s;
  animation-fill-mode: forwards;
}

@keyframes lettera {
  10%{
    opacity: 0;
  }
  20%{
    opacity: 1;
  }
  100%{
    opacity: 1;
  }
}

.ms_rettangoloSw{
  animation: inferiore-sinistra 20s ;  
  animation-fill-mode: forwards;
  z-index: 1;
}
.ms_rettangoloW{
  animation: superiore-sinistra 20s; 
  animation-fill-mode: forwards; 
  z-index: 2;
}
.ms_rettangoloNw{
  animation: superiore-sinistra2 20s;  
  animation-fill-mode: forwards;
  z-index: 1;
}
.ms_rettangoloN{
  animation: superiore 20s;
  animation-fill-mode: forwards;
  z-index: 2;
}
.ms_rettangoloNe{
  animation: superiore-destra 20s;
  animation-fill-mode: forwards;  
  z-index: 1;
}
.ms_rettangoloE{
  animation: superiore-destra2 20s;  
  animation-fill-mode: forwards;
  z-index: 3;
}
.ms_rettangoloSe{
  animation: inferiore-destra 20s; 
  animation-fill-mode: forwards;
  z-index: 1;
}
.ms_rettangoloS{
  animation: inferiore 20s;
  animation-fill-mode: forwards;
  z-index: 4; 
}



@keyframes superiore-sinistra{
  10%{
    transform: rotate(0deg);
    transform-origin: bottom;
    right: auto;
  }
  20%{
    transform: rotate(-90deg);
    transform-origin: bottom;
  }
  100%{
    transform: rotate(-90deg);
    transform-origin: bottom;
  }
}
@keyframes superiore-sinistra2{
  10%{
    transform: rotate(0deg);
    transform-origin: bottom;
    right: auto;
  }
  20% {
    transform: rotate(-45deg);
    transform-origin: bottom;
  }
  100% {
    transform: rotate(-45deg);
    transform-origin: bottom;
  }
}

@keyframes superiore-destra{
  10%{
    transform: rotate(0deg);
    transform-origin: bottom;
    right: auto;
  }
  20% {
    transform: rotate(45deg);
    transform-origin: bottom;
  }
  100% {
    transform: rotate(45deg);
    transform-origin: bottom;
  }
}
@keyframes superiore-destra2{
  10%{
    transform: rotate(0deg);
    transform-origin: bottom;
    right: auto;
  }
  20% {
    transform: rotate(90deg);
    transform-origin: bottom;
  }
  100% {
    transform: rotate(90deg);
    transform-origin: bottom;
  }
}
@keyframes inferiore-destra{
  10%{
    transform: rotate(0deg);
    transform-origin: bottom;
    right: auto;
  }
  20% {
    transform: rotate(135deg);
    transform-origin: bottom;
  }
  100% {
    transform: rotate(135deg);
    transform-origin: bottom;
  }
}
@keyframes inferiore{
  10%{
    transform: rotate(0deg);
    transform-origin: bottom;
    right: auto;
  }
  20% {
    transform: rotate(180deg);
    transform-origin: bottom;
  }
  100% {
    transform: rotate(180deg);
    transform-origin: bottom;
  }
}
@keyframes inferiore-sinistra{
  10%{
    transform: rotate(0deg);
    transform-origin: bottom;
    right: auto;
  }
  20% {
    transform: rotate(-135deg);
    transform-origin: bottom;
  }
  100% {
    transform: rotate(-135deg);
    transform-origin: bottom;
  }
}

.ms_triangolosuperioresx{
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 120px solid #0d2139;
}
.ms_triangolosuperioredx{
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 120px solid whitesmoke;
}
.ms_triangoloinferioresx{
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 0px solid transparent;
  border-top: 40px solid #0d2139;
}
.ms_triangoloinferioredx{
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 40px solid transparent;
  border-top: 40px solid whitesmoke;
}

.ms_puntatore2{
  position: absolute;
  bottom: 40px;
}
.ms_triangolosuperioresx2{
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 100px solid #0d2139;
  margin-left: 20px;
}
.ms_triangolosuperioredx2{
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 100px solid whitesmoke;
}




//cerchio
.ms_cerchio{
  background-image: url(../assets/infinito.jpg);
  background-size: cover;
  background-position: bottom;
  border-radius: 50%;
  animation: opacity 20s;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes opacity {
  10%{
    opacity: 1;
  }
  100%{
    opacity: 1;
  }
}

.ms_boxcerchio {
  position: relative!important;
  min-width: 420px;
  width: 420px;
  height: 420px;
  margin: 50px auto;
  position: relative;
}

.ms_involucrocerchio {
  width: 210px;
  height: 420px;
  position: absolute;
  top: 0;
  overflow: hidden;
}

.ms_involucrocerchiodx {
  right: 0;
  margin-right: 1px;
}

.ms_involucrocerchiosx {
  left: 0;
  margin-left: -0.1px;
}

.ms_cerchiointero {
  width: 420px;
  height: 420px;
  border: 20px solid transparent;
  border-radius: 50%;
  position: absolute;
  top: 0;
  transform: rotate(-135deg);
}

.ms_cerchiodx {
  border-top: 20px solid #BF953F;
  border-right: 20px solid #BF953F;
  right: 0;
  animation: cerchio-destra 20s linear;
  animation-fill-mode: forwards;
}


.ms_cerchiosx {
  border-bottom: 20px solid teal;
  border-left: 20px solid teal;
  left: 0;
  animation: cerchio-sinistra 20s linear;
  animation-fill-mode: forwards;
}

@keyframes cerchio-destra {
  0% {
    transform: rotate(-135deg);
  }
  10% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(45deg);
    opacity: 1;
  }
}

@keyframes cerchio-sinistra {
  10% {
    transform: rotate(-135deg);
  }
  20% {
    -webkit-transform: rotate(45deg);
  }
  100% {
    -webkit-transform: rotate(45deg);
    opacity: 1;
  }
}





@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}

#pointer {
	width: 50px; 
  height: 25px;
	z-index: 6;
	/* Centering it */
	left: 50%; top: 50%;
	transform: translate(-50%, -50%);
	
	/*background: black;*/
	animation: rotate 5s cubic-bezier(1,.2,.5,1) infinite alternate, lettera 20s;
  opacity: 0;
  animation-fill-mode: forwards;
}

/* Now the trick i wanna use to create a diamond
shaped pointer is to skew the #pointer

But for some reason that did'nt work hence I did it
on #pointer:before */

#pointer:before {
	content: '';
	
	position: absolute;
	left: 0; right: 0;
	top: 0; bottom: 0;
	background: red;
	/* background: linear-gradient(
		-63deg,
		rgba(79,188,242,1) 1%,
		rgba(26,110,206,1) 50%,
		rgba(216,216,216,1) 51%,
		rgba(244,94,80,1) 53%,
		rgba(255,45,45,1) 100%
	); */
	
	transform: skewX(60deg);
}

/* Looks good, lets make the pointer's joint now */

#pointer:after {
	content: '';
	
	width: 10px; height: 10px;
	background: #4781c0;
	border-radius: 50%;
	box-shadow:
		inset 0 0 4px 2px #4d4d4d,
		0 0 5px 1px white;
	
	/* centering it */
	position: absolute;
	left: 50%; top: 50%;
	margin-left: -5px; margin-top: -5px;
}
</style>
