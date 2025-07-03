<template>
    <div class="contain">
        <div class="ShopTitle">
            <el-icon class="ShopIcon">
                <Shop />
            </el-icon>
            <h2>店</h2>
            <p class="ShopP">-选择门店，圈定人货范围，按店开展营销</p>

            <div class="PosiMain">
                <el-image src='../../public/img/ situation.png'></el-image>
                <p class="PosiP">主要区域：广州</p>
            </div>
        </div>
        <el-tooltip :disabled="disabled" placement="left" effect="light">
            <button class="ShopButton">圈选店人货 &#x21c3;&#x21be;</button>
            <!-- 自定义 Tooltip 内容 -->
            <template #content>
                <div class="custom-tooltip-content">
                    <h4 style="text-align: center;">营销模式</h4>
                    <p>店-人-货</p>
                    <hr style="border: 1px solid ;color: rgba(217, 217, 217, 1);">
                    <p>店-货-人</p>
                    <div class="markModelclass">
                        <label style="margin-right: 100px;">人-货</label>
                        <el-radio-group v-model="markModel">
                            <el-radio value="1" size="large">门店</el-radio>
                            <el-radio value="2" size="large">商城</el-radio>
                        </el-radio-group>
                    </div>

                    <div class="markModelclass">
                        <label style="margin-right: 100px;">货-人</label>
                        <el-radio-group v-model="markModel2">
                            <el-radio value="1" size="large">门店</el-radio>
                            <el-radio value="2" size="large">商城</el-radio>
                        </el-radio-group>
                    </div>
                </div>
            </template>
        </el-tooltip>
        <div style="display: flex;align-items: center;">
            <el-table :data="tableData" class="TableClass" cell-class-name="custom-cell">
                <el-table-column prop="seleShop" label="已选门店" width="180">
                    <template #default="scope">
                        {{ scope.row.seleShop }}
                    </template>
                </el-table-column>
                <el-table-column prop="vipNum" label="活跃会员数" width="180">
                    <template #default="scope">
                        {{ scope.row.vipNum.toLocaleString() }}
                    </template>
                </el-table-column>
                <el-table-column prop="avgSales" label="平均月销售额" width="180">
                    <template #default="scope">
                        ￥ {{ scope.row.avgSales.toLocaleString() }}
                    </template>
                </el-table-column>
                <el-table-column prop="avgSaled" label="平均售罄率" width="180">
                    <template #default="scope">
                        {{ scope.row.avgSaled.toLocaleString() }} %
                    </template>
                </el-table-column>
                <el-table-column prop="unitValue" label="客单价" width="180">
                    <template #default="scope">
                        ￥ {{ scope.row.unitValue.toLocaleString() }}
                    </template>
                </el-table-column>
            </el-table>
            <el-button type="warning" plain round="true"
                style="width: 94px; height: 32px;margin-left: 100px;">导入门店</el-button>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';
const tableData = ref([
    {
        seleShop: 23,
        vipNum: 232300,
        avgSales: 222423,
        avgSaled: 45,
        unitValue: 34544,

    }
])

const markModel = ref('1')
const markModel2 = ref('1')

</script>

<style lang="scss">
.contain {
    position: relative; // 关键：为绝对定位的子元素提供参考
    left: 46px;
    top: 140px;
    width: 1082px;
    height: 193px;
    opacity: 1;
    border-radius: 8px;
    background: rgba(252, 253, 255, 1);

    border: 1px solid rgba(189, 209, 255, 1);



}

.ShopTitle {

    display: flex;
    align-items: center;
    /* 关键：垂直居中对齐 */
    gap: 8px;
    margin: 35px;
    margin-top: 20px;
    margin-bottom: 0;

    .ShopIcon {
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

    .ShopP {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 25.2px;
        color: rgba(10, 31, 55, 1);
        text-align: left;
    }

    .PosiMain {
        display: flex;
        align-items: center;
        margin-left: 250px;

        .PosiP {
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 22.4px;
            color: rgba(10, 31, 55, 1);
            text-align: left;
            vertical-align: top;
        }
    }


}

.ShopButton {
    position: absolute; // 绝对定位
    right: 0px;
    top: 0px;
    width: 134px;
    height: 36px;
    opacity: 1;
    border-radius: 0 8px 8px 0;
    background: rgba(112, 135, 250, 1);
    border-radius: 0 8px 0 8px;
    border: none;

    /** 文本1 */
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 23.17px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
}

.TableClass {
    width: 80%;
    margin-top: 30px;
    /* 隐藏所有边框和线 */
    --el-table-border-color: transparent;
    --el-table-border: none;

    .custom-cell {
        font-size: 25px;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 32px;
        color: rgba(0, 0, 0, 0.9);
        text-align: left;
        vertical-align: top;
    }
}

div.contain.fixed-top-left {
    height: 193px;
}

.markModelclass {
    display: flex;
    align-items: center;
}
</style>