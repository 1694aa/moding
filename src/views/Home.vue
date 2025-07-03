<template>
    <div>
        <Shop class="fixed-top-left"></Shop>

        <ProdMan class="fixed-bottom-left"></ProdMan>
        <AiMatch class="fixed-top-right" v-if="isActive"></AiMatch>
        <Active class="fixed-bottom-right" v-if="isActive"></Active>
    </div>
    <el-button type="warning" class="circle-button" @click="startSequence" :disabled="isAnimating">
        <!-- 动态内容区域 -->
        <div class="content-wrapper">
            <!-- 初始文字 -->
            <span v-if="currentPhase === 0">匹配</span>

            <!-- 第一阶段图片 -->
            <el-image v-else-if="currentPhase === 1" src="../../public/img/robot.png" class="phase-image"></el-image>

            <!-- 第二阶段图片 -->
            <el-image v-else src="../../public/img/路径 1.png" class="phase-image"></el-image>
        </div>
    </el-button>
</template>
<script setup>
import Shop from '../components/Shop.vue';
import ProdMan from '../components/ProdMan.vue';
import AiMatch from '../components/AiMatch.vue';
import Active from '../components/Active.vue';
import { ref } from 'vue';

const phases = [
    { type: 'text', duration: 300 },   // 初始文字（点击后立即切换）
    { type: 'image1', duration: 300 }, // 第一阶段图片
    { type: 'image2', duration: 0 }    // 最后定格（duration 0表示永久显示）
];

const currentPhase = ref(0);
const isAnimating = ref(false);
const isActive = ref(true)

const startSequence = () => {
    if (isAnimating.value) return;

    isAnimating.value = true;
    currentPhase.value = 0; // 重置状态
    isActive.value = false;

    // 立即切换到第一阶段图片
    setTimeout(() => {
        currentPhase.value = 1;

        // 300ms后切换到第二阶段图片
        setTimeout(() => {
            currentPhase.value = 2;
            isAnimating.value = false;
            isActive.value = true;
        }, 300);

    }, 300);
    
};
</script>
<style scoped>
.fixed-top-left {
    position: fixed;
    left: 0;
    top: 0;
    margin: 20px 10px;
}

.fixed-bottom-left {
    position: fixed;
    left: 0;
    bottom: 0;
    /* 关键：从 top 改为 bottom */
    margin: 10px 10px;
    
    /* 调整 margin: 上 右 下 左 */
}

.fixed-top-right {
    position: fixed;
    right: 0;
    top: 0;
    margin: 20px 1070px;
}

.fixed-bottom-right{
        position: fixed;
    right: 0;
    top: 0;
    margin: 390px 1070px;
}

.circle-button {
    border-radius: 50% ;
    width: 80px;
    /* 需要固定宽高才能形成正圆 */
    height: 80px;
    padding: 0;
    /* 移除内边距 */
    margin-top: 160px;
    margin-left: 1060px;

    position: fixed;
    z-index: 1000;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 42px;
    color: rgba(189, 84, 23, 1);
    text-align: left;
    
}

.phase-image {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    object-fit: contain;

}


</style>
