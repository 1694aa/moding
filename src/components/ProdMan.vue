<template>
  <div class="containPM" :class="{ 'swapped': isSwapped }">
    <ProdS class="prod-section" />
    
    <div class="dashed-divider" @click="swapComponents">
      <el-image 
        class="myImg" 
        src="../../public/img/f0118e13ea0ad272fedecbfc0d0584c9.png"
        :class="{ 'rotate-animation': isRotating }"
      />
    </div>
    
    <MainS class="main-section" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import MainS from './MainS.vue';
import ProdS from './ProdS.vue';

const isRotating = ref(false);
const isSwapped = ref(false);

const swapComponents = () => {
  isSwapped.value = !isSwapped.value;
  isRotating.value = true;
  setTimeout(() => isRotating.value = false, 1000);
};



</script>

<style lang="scss">
.containPM {
  display: flex;
  align-items: center;
  position: relative;
  left: 46px;
  top: 219px;
  width: 1082px;
  height: 540px;
  opacity: 1;
  border-radius: 8px;
  background: rgba(252, 253, 255, 1);
  border: 1px solid rgba(189, 209, 255, 1);
  transition: all 0.5s ease; // 添加布局过渡效果

  .prod-section {
    order: 1;
    width: 50%;
  }

  .main-section {
    order: 3;
    width: 50%;
  }

  .dashed-divider {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 2px;
    border-right: 2px dashed #ccc;
    margin: 0 10px;
    height: 100%;
  }

  &.swapped {
    .prod-section {
      order: 3;
    }
    .main-section {
      order: 1;
    }
  }
}

.myImg {
  width: 50px;
  margin-top: 100px;
  cursor: pointer;
  transition: transform 1s ease;
}

.rotate-animation {
  transform: rotate(360deg);
}


</style>