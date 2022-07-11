<template>
  <div class="text-box">
    <div class="title-h3"><h3>常见问题</h3></div>
    <SellText class="bg-1">
        <template #text-title>
            <p class="text-title">卖车需要准备哪些材料？</p>
        </template>
        <template #incar><p class="incar">需要先在网站提供您的联系电话，车辆品牌、型号等基本信息。待服务人员联系您后，在约定时间内准备好</p></template>
        <template #caiol>
            <ol>
                <li>1、身份证；&nbsp; 6、车示标（环保标、检字标、交强险标）；</li>
                <li>2、行驶证；&nbsp; 7、交强险单；</li>
                <li>3、车辆登记证；&nbsp; 8、购置税本及购置税发票；</li>
                <li>4、车辆钥匙；&nbsp; 9、购车发票/最近一次过户发票；</li>
                <li>5、说明书保养手册</li>
            </ol>
        </template>
    </SellText>
    <SellText class="bg-2">
        <template #text-title>
            <p class="text-title">通过腾发出售车辆需要什么费用？</p>
        </template>
        <template #incar><p class="incar">在腾发寄售车辆，卖车快，卖价高。整个服务过程透明。评估师给参考售价，明确收费内容，同意后签订寄售协议。卖出的车辆同样也享受腾发的质保服务。</p></template>
    </SellText>
    <SellText class="bg-3">
        <template #text-title>
            <p class="text-title">卖车具体的流程是怎么样的呢？</p>
        </template>
        <template #caiol>
            <ol>
                <li>1、提交资料及联系方式。</li>
                <li>2、预约开车到店检测车辆或直接来店检测车辆。</li>
                <li>3、现金交易结款。</li>
                <li>4、办理过户手续。</li>
            </ol>
        </template>
    </SellText>
    <SellText class="bg-4">
        <template #text-title>
            <p class="text-title">通过腾发卖车的好处？</p>
        </template>
        <template #incar><p class="incar">卖价高：3万余平的实体展厅，近5000平独立的售后服务中心。</p></template>
    </SellText>
  </div>
</template>

<script setup>
import SellText from './SellText.vue'
</script>

<style lang="scss" scoped>
.text-box{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 14px;
    color: #525b78;
    ol{
        margin-top: 18px;
    }
    .title-h3{
        width: 1200px;
        margin: 0 auto;
        font-size: 25px;
        margin-bottom: 18px;
        h3{
            width: 150px;
            margin: 0 auto;
            text-align: center;
            padding-bottom: 8px;
            color: #5685fe;
            border-bottom: 5px solid #5685fe;
        }
    }
    .text-title{
        font-size: 25px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    .incar{
        font-size: 14px;
        color: #525b78;
    }
    .text{
        background-size: 110% 110%;
        background-position: -59px -30px;
        cursor: pointer;
    }
    .bg-1{
        background-image: url('https://www.tf2sc.cn/static/img/sellCar_first.jpg');
    }
    .bg-2{
        background-image: url('https://www.tf2sc.cn/static/img/sellCar_second.jpg');
    }
    .bg-3{
        background-image: url('https://www.tf2sc.cn/static/img/sellCar_third.jpg');
    }
    .bg-4{
        background-image: url('https://www.tf2sc.cn/static/img/sellCar_forth.jpg');
    }
}
</style>