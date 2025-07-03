<template>
    <div class="Aicontain">
        <div class="AITitle">
            <el-image src="../../public/img/robotsmall.png" class="AIIcon">
            </el-image>
            <h2>AI匹配</h2>
            <p class="AIP">-智能生成匹配方案</p>
        </div>
        <button class="AIButton">按店推荐 </button>

        <ul class="checklist">
            <li v-for="(item, index) in AIscript" :key="index">
                <span>{{ item }}</span>
                <el-tooltip :disabled="disabled" placement="left" effect="light">
                    <el-button type="warning" plain round="true" v-if="index === 0"
                        style="width: 94px; height: 32px;margin-left: 10px;">更换算法
                        <el-icon>
                            <ArrowDownBold />
                        </el-icon>
                    </el-button>
                    <!-- 自定义 Tooltip 内容 -->
                    <template #content>
                        <div class="custom-tooltip-content">
                            <h4 style="text-align: center;">人货匹配算法</h4>
                            <div style="display: flex;flex-direction: column;align-items: center;">
                                <el-button
                                    style="width: 100%;margin-left: 10px;border: none;">UCF-从人找人再找货</el-button>
                                <el-button
                                    style="width: 100%;border: none;">UCF-从货找人再找货</el-button>
                                <el-button
                                    style="width: 100%;border: none;">从标签找标签</el-button>
                            </div>
                        </div>
                    </template>
                </el-tooltip>
                <p v-if="index === 1" style="margin-left: 70px;color: rgba(10, 31, 55, 0.6);">推荐{{ peoplenum }}人</p>
            </li>
        </ul>
        <div style="display: flex;">
            <div class="progressclass">
                <div class="progressclasscell">
                    <text style="width: 40px;color: rgba(10, 31, 55, 0.6);">畅销</text>
                    <el-progress :percentage="70" stroke-width="10" style="width: 150px; ">
                        <text>12款</text>
                    </el-progress>
                </div>
                <div class="progressclasscell">
                    <text style="width: 40px;color: rgba(10, 31, 55, 0.6);">滞销</text>
                    <el-progress :percentage="50" stroke-width="10" style="width: 150px; ">
                        <text>5款</text>
                    </el-progress>
                </div>
                <div class="progressclasscell">
                    <text style="width: 40px;color: rgba(10, 31, 55, 0.6);">平销</text>
                    <el-progress :percentage="80" stroke-width="10" style="width: 150px; ">
                        <text>15款</text>
                    </el-progress>
                </div>
            </div>

            <div class="progressclass" style="margin-left: 40px;">
                <div class="progressclasscell">
                    <text style="width: 70px;color: rgba(10, 31, 55, 0.6);">重要价值</text>
                    <el-progress :percentage="80" stroke-width="10" style="width: 150px; ">
                        <text>2000人</text>
                    </el-progress>
                </div>
                <div class="progressclasscell">
                    <text style="width: 70px;color: rgba(10, 31, 55, 0.6);">重要挽留</text>
                    <el-progress :percentage="50" stroke-width="10" style="width: 150px; ">
                        <text>1300人</text>
                    </el-progress>
                </div>
                <div class="progressclasscell">
                    <text style="width: 70px;color: rgba(10, 31, 55, 0.6);">一般价值</text>
                    <el-progress :percentage="70" stroke-width="10" style="width: 150px; ">
                        <text>1800人</text>
                    </el-progress>
                </div>
                <div class="progressclasscell">
                    <text style="width: 70px;color: rgba(10, 31, 55, 0.6);">一般挽留</text>
                    <el-progress :percentage="30" stroke-width="10" style="width: 150px; ">
                        <text>821人</text>
                    </el-progress>
                </div>
            </div>
        </div>
        <el-button type="warning" round style="margin-left: 190px;margin-top: 15px;">查看方案明细
            <el-icon>
                <ArrowRightBold />
            </el-icon>
        </el-button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const shopnum = ref(23);
const resnum = ref(1344);
const peoplenum = ref(6921)
const AIscript = ref([
    `已使用ICF算法为${shopnum.value}家门店生成人货匹配方案`,
    `推荐38款商品（${resnum.value}件库存）`
]);

</script>

<style lang="scss">
.Aicontain {
    position: relative; // 关键：为绝对定位的子元素提供参考
    left: 46px;
    top: 140px;
    width: 560px;
    height: 353px;
    opacity: 1;
    border-radius: 8px;
    background: rgba(252, 253, 255, 1);

    border: 1px solid rgba(189, 209, 255, 1);

}

.AITitle {

    display: flex;
    align-items: center;
    /* 关键：垂直居中对齐 */
    gap: 8px;
    margin: 35px;
    margin-top: 20px;
    margin-bottom: 0;

    .AIIcon {
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

    .AIP {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 25.2px;
        color: rgba(10, 31, 55, 1);
        text-align: left;
    }

}

.AIButton {
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

.checklist {
    list-style: none;
    /* 移除默认的列表样式 */
    padding: 0;
    /* 移除默认的内边距 */
    /** 文本1 */
    margin-top: -10px;
    margin-left: 20px;

}

.checklist li {
    display: flex;
    /* 使用 Flexbox 布局 */
    align-items: center;
    /* 垂直居中对齐 */
    margin-bottom: 0;
    /* 列表项之间的间距 */
    height: 32px;

}

.checklist li::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    border-radius: 50%;
    background-color: #67C23A;
    color: white;
    text-align: center;
    line-height: 16px;
    font-size: 10px;
    content: '✓';
    /* 对号 */
}

.checklist li span {
    color: rgba(10, 31, 55, 0.6);
    /* 文本颜色 */
    font-size: 12px;
    /* 文本大小 */
}

.progressclass {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .progressclasscell {
        display: flex;
        margin-left: 30px;

    }
}
</style>