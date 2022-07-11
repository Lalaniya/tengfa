<template>
  <div class="side">
    <ul>
      <li>
        <p><img
            src="https://www.tf2sc.cn/static/img/yingyong.png"
            alt=""
          ></p>
        <p>APP</p>
        <div>
          <p><img
              src="https://img9.vilipix.com/picture/pages/regular/2021/03/24/18/11/88725085_p0_master1200.jpg?x-oss-process=image/resize,m_fill,w_1000"
              alt=""
            ></p>
          <p></p>
        </div>
      </li>
      <li>
        <p><img
            src="https://www.tf2sc.cn/static/img/xiaochengxu.png"
            alt=""
          ></p>
        <p>小程序</p>
        <div>
          <p><img
              src="https://img9.vilipix.com/picture/pages/regular/2021/03/24/18/11/88725085_p0_master1200.jpg?x-oss-process=image/resize,m_fill,w_1000"
              alt=""
            ></p>
          <p></p>
        </div>
      </li>
      <li>
        <p><img
            src="https://www.tf2sc.cn/static/img/dianhua.png"
            alt=""
          ></p>
        <p>电话</p>
        <div>
          <p><img
              src="https://img9.vilipix.com/picture/pages/regular/2021/03/24/18/11/88725085_p0_master1200.jpg?x-oss-process=image/resize,m_fill,w_1000"
              alt=""
            ></p>
          <p></p>
        </div>
      </li>
      <li @click="goTop">
        <p><img
            src="https://www.tf2sc.cn/static/img/dingbu.png"
            alt=""
          ></p>
        <p>回到顶部</p>
      </li>
    </ul>
  </div>
</template>

<script setup>

const goTop = () => {
    document.documentElement.scrollTop=0
}
</script>

<style lang="scss" scoped>
.side {
  height: 100vh;
  width: 67px;
  background-color: #fff;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 99;
  ul {
    height: 330px;
    width: 100%;
    background-color: #fff;
    margin-top: calc(50vh - 175px);
    text-align: center;
    font-size: #333;
    font-size: 12px;
    li {
      margin-bottom: 30px;
      position: relative;
      p {
        margin-bottom: 10px;
      }
      div {
        position: absolute;
        padding: 5px 8px;
        left: -130px;
        top: 0px;
        display: none;
        p {
          width: 110px;
          height: 110px;
          overflow: hidden;
          img {
            width: 110px;
          }
        }
      }
    }
    li:hover{
        cursor: pointer;
        div{
            display: block;
        }
    }
  }
}
</style>