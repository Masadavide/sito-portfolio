<template>
  <div>
    Footer
    <div class="circle__box">
      <div class="circle__wrapper circle__wrapper--right">
        <div class="circle__whole circle__right"></div>
      </div>
      <div class="circle__wrapper circle__wrapper--left">
      <div class="circle__whole circle__left"></div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>


<style scoped lang="scss">
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
