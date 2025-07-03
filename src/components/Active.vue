<template>
    <div class="Activecontain">
        <div class="useractive">
            <div class="ActiveTitle">
                <el-image src="../../public/img/mofan.png" class="ActiveIcon">
                </el-image>
                <h2>场</h2>
                <p class="ActiveP">-营销活动配置</p>
            </div>
            <button class="ActiveButton">精准营销</button>
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;" class="custom-radio-group">
                <el-radio-button :value="1">活动</el-radio-button>
                <el-radio-button :value="2">互动</el-radio-button>
                <el-radio-button :value="3">内容</el-radio-button>
            </el-radio-group>

            <div class="circle-cont">
                <div class="btn-item" v-for="(item, index) in tabItems" :key="index">
                    <el-button class="circle-btn" circle @click="changeTab1(index)"
                        :class="{ 'active-btn': activeIndex1 === index }">
                        <el-image :src="activeIndex1 === index ? item.activeIcon : item.inactiveIcon"></el-image>
                    </el-button>
                    <span class="btn-label" :class="{ 'active-label': activeIndex1 === index }">{{ item.label }}</span>
                </div>
            </div>
        </div>

        <div class="useractive">
            <div class="ActiveTitle">
                <el-image src="../../public/img/get in touch.png" class="ActiveIcon">
                </el-image>
                <h2>触达</h2>
                <p class="ActiveP">-多点触达提高转化率</p>
            </div>

            <div class="circle-cont2" style="margin-top: 20px;">
                <div class="btn-item" v-for="(item, index) in tabItems2" :key="index">
                    <el-button class="circle-btn" circle @click="changeTab2(index)"
                        :class="{ 'active-btn': activeIndex2 === index }">
                        <el-image :src="activeIndex2 === index ? item.activeIcon : item.inactiveIcon"></el-image>
                    </el-button>
                    <span class="btn-label" :class="{ 'active-label': activeIndex2 === index }">{{ item.label }}</span>
                </div>
            </div>

        </div>
    </div>


</template>
<script setup>
import { ref } from 'vue';
const isCollapse = ref(1)

const activeIndex1 = ref(0); // 第一组按钮状态
const activeIndex2 = ref(0); // 第二组按钮状态

const changeTab1 = (index) => {
    activeIndex1.value = index;
};

const changeTab2 = (index) => {
    activeIndex2.value = index;
};

const tabItems = ref([
    {
        label: '权益',
        inactiveIcon: '/img/皇冠 (1).png',
        activeIcon: '/img/皇冠.png'
    },
    {
        label: '优惠劵',
        inactiveIcon: '/img/优惠劵 (1).png',
        activeIcon: '/img/优惠劵.png'
    },
    {
        label: '促销',
        inactiveIcon: '/img/促销 (1).png',
        activeIcon: '/img/促销.png'
    },
    {
        label: '常态化',
        inactiveIcon: '/img/打勾 (1).png',
        activeIcon: '/img/打勾.png'
    },
    {
        label: '引流到店',
        inactiveIcon: '/img/引流到店 (1).png',
        activeIcon: '/img/引流到店.png'
    }
]);

const tabItems2 = ref([
    {
        label: '导购任务',
        inactiveIcon: '/img/任务 (1).png',
        activeIcon: '/img/任务.png'
    },
    {
        label: '企微群发',
        inactiveIcon: '/img/群发 (1).png',
        activeIcon: '/img/群发.png'
    },
    {
        label: '订阅消息',
        inactiveIcon: '/img/需求订阅 (1).png',
        activeIcon: '/img/需求订阅.png'
    },
    {
        label: '短信',
        inactiveIcon: '/img/发送短信 (1).png',
        activeIcon: '/img/发送短信.png'
    },
    {
        label: '智能触达',
        inactiveIcon: '/img/系统 (1).png',
        activeIcon: '/img/系统.png'
    }
]);


</script>

<style lang="scss">
.Activecontain {

    left: 46px;
    top: 140px;
    width: 560px;
    height: 383px;
    opacity: 1;
    border-radius: 8px;
    background: rgba(252, 253, 255, 1);

    border: 1px solid rgba(189, 209, 255, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.useractive {
    position: relative; // 关键：为绝对定位的子元素提供参考
    margin: 0;
    width: 100%;
    height: 60%;
    border-radius: 8px;
    background: rgba(252, 253, 255, 1);
    border: 1px solid rgba(189, 209, 255, 1);
}

.ActiveTitle {

    display: flex;
    align-items: center;
    /* 关键：垂直居中对齐 */
    gap: 8px;
    margin: 0 35px;


    .ActiveIcon {
        display: flex;
        /* 确保图标自身居中 */
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        font-size: 32px;
        /* 调整图标实际大小 */
        color: rgba(112, 135, 250, 1);
    }

    h2 {
        margin: 0;
        line-height: 1;
        /* 避免行高影响垂直居中 */
    }

    .ActiveP {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 25.2px;
        color: rgba(10, 31, 55, 1);
        text-align: left;
    }

}

.ActiveButton {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 100px;
    height: 36px;
    opacity: 1;
    border-radius: 0 8px 8px 0;
    background: rgba(112, 135, 250, 1);
    border: none;

    /* 文字居中方案 */
    display: flex;
    /* 启用flex布局 */
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */

    /* 移除原文字定位属性 */
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
}

.custom-radio-group {
    margin-left: 110px;

    /* 调整整体大小 */
    .el-radio-button {
        width: 100px;
        /* 宽度 */
        height: 20px;
        /* 高度 */

    }

    /* 调整内部文字 */
    .el-radio-button__inner {
        width: 100%;
        height: 100%;
        display: flex;
        /* 新增：启用flex布局 */
        align-items: center;
        /* 新增：垂直居中 */
        justify-content: center;
        /* 新增：水平居中 */
        font-size: 12px;
        /* 根据需求调整 */
        padding: 0;
        /* 清除默认padding */

    }
}

.circle-cont {
    width: 100%;
    height: 60px;
    display: flex;
    border: none;

    .circle-btn {
        margin-left: 0;
        width: 40px;
        height: 40px;

    }

    .btn-item {
        display: flex;
        flex-direction: column;
        /* 垂直排列 */
        align-items: center;
        width: 45px;
        padding: 0;
        /* 水平居中 */
        margin: 0 30px;
        /* 调整间距 */
    }

    .circle-btn.active-btn {
        background-color: rgba(255, 241, 220, 1);
        ;
        /* 按钮激活时的背景色 */
    }

    .btn-label {
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5px;
        font-size: 12px;
        text-align: center;
        color: #666;
        /* 默认文字颜色 */
        transition: all 0.3s ease;
    }

    .btn-label.active-label {
        color: #FF9552;
        /* 激活时文字颜色 */
        font-weight: bold;
    }

}

.circle-cont2 {
    width: 100%;
    height: 60px;
    display: flex;
    border: none;

    .circle-btn {
        margin-left: 0;
        width: 40px;
        height: 40px;

    }

    .btn-item {
        display: flex;
        flex-direction: column;
        /* 垂直排列 */
        align-items: center;
        width: 45px;
        padding: 0;
        /* 水平居中 */
        margin: 0 30px;
        /* 调整间距 */
    }

    .circle-btn.active-btn {
        background-color: rgba(251, 225, 255, 1);
        ;
        /* 按钮激活时的背景色 */
    }

    .btn-label {
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5px;
        font-size: 12px;
        text-align: center;
        color: #666;
        /* 默认文字颜色 */
        transition: all 0.3s ease;
    }

    .btn-label.active-label {
        color: #BD50D3;
        /* 激活时文字颜色 */
        font-weight: bold;
    }

}
</style>