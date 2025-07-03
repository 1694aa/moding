<template>
    <div class="MainS">

        <div class="Prod">
            <el-image src="../../public/img/ human.png"></el-image>
            <h2 style="margin: 10px;">人</h2>
            <p class="PScrip">-明确营销对象</p>

        </div>

        <div v-if="userselect === '2'" class="ProdGroup">
            <div style="display: flex; align-items: flex-start; gap: 20px;">
                <!-- 左侧：标题和按钮 -->
                <div style="margin-left: 75px;">
                    <p class="PScrip" style="text-align: center; margin-bottom: 15px;">选择会员分组</p>
                    <el-button type="default" class="ButtonClass">2月正价核心会员群 &gt;</el-button>
                </div>

                <!-- 右侧：单选框 -->
                <div class="mb-2 ml-4">
                    <el-radio-group v-model="userselect" class="custom-radio"
                        style="display: flex; flex-direction: column; gap: 8px;">
                        <el-radio value="1" size="large" style="margin-right: 0;">AI选</el-radio>
                        <el-radio value="2" size="large">自选</el-radio>
                    </el-radio-group>
                </div>
            </div>
            <el-icon size="34px" class="ArrowClasstop">
                <ArrowDownBold />
            </el-icon>
            <el-icon size="34px" class="ArrowClassbottom">
                <ArrowDownBold />
            </el-icon>

            <el-table :data="tableData3" style="width: 430px" class="ProdTableClass" cell-class-name="custom-cell">
                <el-table-column prop="groupVip" label="分组会员" width="108">
                    <template #default="scope">
                        {{ scope.row.groupVip.toLocaleString() }}
                    </template>
                </el-table-column>
                <el-table-column prop="card" label="开卡率" width="108">
                    <template #default="scope">
                        {{ scope.row.card.toLocaleString() }}%
                    </template>
                </el-table-column>
                <el-table-column prop="mainType" label="主类型" width="108">
                    <template #default="scope">
                        {{ scope.row.mainType.toLocaleString() }}
                    </template>
                </el-table-column>
                <el-table-column label="年龄段" width="108">
                    <template #default="scope">
                        {{ scope.row.agemin.toLocaleString() }}-{{ scope.row.agemax.toLocaleString() }}
                    </template>
                </el-table-column>
            </el-table>

            <el-table :data="tableData4" style="width: 430px" class="ProdTableClass" cell-class-name="custom-cell">
                <el-table-column prop="repurchaseRate" label="复购率" width="108">
                    <template #default="scope">
                        {{ scope.row.repurchaseRate }}%
                    </template>
                </el-table-column>
                <el-table-column label="RFM" width="108">
                    <template #default="scope">
                        {{ scope.row.RFM.toLocaleString() }}
                    </template>
                </el-table-column>
                <el-table-column prop="avgDiscount" label="平均折扣" width="108">
                    <template #default="scope">
                        {{ scope.row.avgDiscount.toLocaleString() }} %
                    </template>
                </el-table-column>
                <el-table-column prop="unitValue" label="客单价" width="128">
                    <template #default="scope">
                        ￥{{ scope.row.unitValue }}
                    </template>
                </el-table-column>
            </el-table>
            <div style="display: flex;align-items: center;">
                <el-button type="success" round="true">指标洞察</el-button>
                <el-button type="warning" round="true">会员分析</el-button>

            </div>

        </div>



        <div v-if="userselect === '1'" class="ProdGroup">
            <!-- 右侧：单选框 -->
            <div class="mb-2 ml-4" style="margin-left: 290px;">
                <el-radio-group v-model="userselect" class="custom-radio"
                    style="display: flex; flex-direction: column; gap: 8px;">
                    <el-radio value="1" size="large" style="margin-right: 0;">AI选</el-radio>
                    <el-radio value="2" size="large">自选</el-radio>
                </el-radio-group>
            </div>
            <div>
                <el-image src="../../public/img/image.png.png"></el-image>
                <p>点击右方匹配按钮，立即生成方案~</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const tableData3 = ref([
    {
        groupVip: 9213,
        card: 34,
        mainType: "老会员",
        agemin: 30,
        agemax: 50

    }])

const tableData4 = ref([
    {
        repurchaseRate: 12,
        RFM: "重要发展",
        avgDiscount: 87,
        unitValue: 1213.9,

    }
])


const userselect = ref('2')
</script>
<style lang="scss">
.MainS {
    width: 50%;

    margin-top: -300px;
}

.Prod {

    margin-left: 35px;
    display: flex;
    align-items: center;
    height: 50px;

    .ProdIcon {
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

    .PScrip {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 25.2px;
        color: rgba(10, 31, 55, 1);
        text-align: left;
        margin: 0px;
    }
}

.ProdGroup {

    display: grid;
    place-items: center;
    /* 简写居中属性 */
    gap: 8px;
    height: 100px;

    .PScrip {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 25.2px;
        color: rgba(10, 31, 55, 1);
        text-align: left;
        margin: 10px;
    }
}

.ButtonClass {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 22.4px;
    color: rgba(10, 31, 55, 1);
    text-align: left;
    vertical-align: top;

}

.ArrowClasstop {

    width: 34.01px;
    height: 34px;
    opacity: 1;
    margin-bottom: 0;
    color: rgba(112, 135, 250, 0.5);
}

.ArrowClassbottom {

    width: 34.01px;
    height: 34px;
    opacity: 1;
    margin-top: 0;
    margin-bottom: 20px;
    color: rgba(112, 135, 250, 1);
}

i.el-icon.ArrowClasstop {
    height: 10PX;
}

i.el-icon.ArrowClassbottom {
    height: 10PX;
}

.ProdTableClass {
    margin: 50px;
    margin-left: 50px;
    /* 隐藏所有边框和线 */
    --el-table-border-color: transparent;
    --el-table-border: none;


    .custom-cell {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 32px;
        color: rgba(0, 0, 0, 0.9);
        text-align: left;
        vertical-align: top;
    }
}

.dashed-divider {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 2px;
    border-right: 2px dashed #ccc;
    margin: 0 10px;
    height: 100%;
}

.myImg {
    width: 50px;
    margin-top: 100px;
    cursor: pointer;
    transition: transform 1s ease;
    /* 平滑过渡效果 */
}

.rotate-animation {
    transform: rotate(360deg);
}


/* 默认情况下的样式 */
.custom-radio .el-radio__label {
    color: rgba(37, 207, 130, 1);
    ;
    /* 默认字体颜色 */
}

/* 选中时的样式 */
.custom-radio .el-radio__input.is-checked .el-radio__inner {
    border-color: rgba(37, 207, 130, 1);
    background-color: rgba(37, 207, 130, 1);
}

.custom-radio .el-radio__input.is-checked .el-radio__inner::after {
    background-color: #FFF;
}

.custom-radio .el-radio__input.is-checked+.el-radio__label {
    color: rgba(37, 207, 130, 1);
    /* 选中时的字体颜色 */
}
</style>