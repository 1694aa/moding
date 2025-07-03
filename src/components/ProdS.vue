<template>
            <div class="ProdS">
            <div class="Prod">
                <el-icon class="ProdIcon">
                    <GoodsFilled />
                </el-icon>
                <h2 style="margin: 10px;">货</h2>
                <p class="PScrip">-限定卖货范围</p>

            </div>

            <div class="ProdGroup">
                <p class="PScrip">选择商品分组</p>
                <el-button type="default" class="ButtonClass">2023年春夏款库存充足 &gt;</el-button>
                <el-icon size="34px" class="ArrowClasstop">
                    <ArrowDownBold />
                </el-icon>
                <el-icon size="34px" class="ArrowClassbottom">
                    <ArrowDownBold />
                </el-icon>

                <el-table :data="tableData1" style="width: 470px" class="ProdTableClass" cell-class-name="custom-cell">
                    <el-table-column prop="money" label="款数" width="108">
                        <template #default="scope">
                            {{ scope.row.money.toLocaleString() }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="resNum" label="库存" width="180">
                        <template #default="scope">
                            {{ scope.row.resNum.toLocaleString() }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="resAge" label="库龄" width="108">
                        <template #default="scope">
                            {{ scope.row.resAge.toLocaleString() }} 年
                        </template>
                    </el-table-column>
                    <el-table-column prop="Saled" label="售罄率" width="108">
                        <template #default="scope">
                            {{ scope.row.Saled.toLocaleString() }} %
                        </template>
                    </el-table-column>
                </el-table>

                <el-table :data="tableData2" style="width: 470px" class="ProdTableClass" cell-class-name="custom-cell">
                    <el-table-column prop="mainProd" label="主要商品" width="108">
                        <template #default="scope">
                            {{ scope.row.mainProd }}
                        </template>
                    </el-table-column>
                    <el-table-column label="价格带" width="180">
                        <template #default="scope">
                            ￥{{ scope.row.moneyIntemin.toLocaleString() }}-{{ scope.row.moneyIntemax.toLocaleString() }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="discount" label="折扣率" width="108">
                        <template #default="scope">
                            {{ scope.row.discount.toLocaleString() }} %
                        </template>
                    </el-table-column>
                    <el-table-column prop="salesStatus" label="销售状态" width="108">
                        <template #default="scope">
                            {{ scope.row.salesStatus.toLocaleString() }}
                        </template>
                    </el-table-column>
                </el-table>
                <el-button type="warning" round="true">商品明细</el-button>
            </div>
        </div>
</template>
<script setup>
import { ref } from 'vue';

const tableData1 = ref([
    {
        money: 834,
        resNum: 29234,
        resAge: 3,
        Saled: 60,

    }
]);
const tableData2 = ref([
    {
        mainProd: "T恤",
        moneyIntemin: 1000,
        moneyIntemax: 3000,
        discount: 56,
        salesStatus: "畅销",

    }
])
</script>
<style lang="scss">


.ProdS {
    width: 50%;

    margin-top: -300px;
}

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


</style>