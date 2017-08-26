<template>
  <div id="header">
    <div class="header">
      <big class="nameplate">pms</big>
      <div class="support">support tel: 010-000111000
      </div>
    </div>
    <div class="topbar">
      <span>{{ username }} 你好！</span>
      <span class="separator"></span>
      <span>您有{{ count }}个待办！</span>
      <span class="separator"></span>
      <span>提示：{{ msg }}</span>
      <span class="separator"></span>
      <span>设置</span>
      <span class="separator"></span>
      <span>退出</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      username: 'test',
      count: 0,
      msg: 'test message, welcom to send us that if you have any idea.'
    }
  }
}
</script>

<style>
  .header {
    left: 0;
    top: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    background: linear-gradient(#6483a2, #5c7894);
    color: #fff;
  }
  .nameplate {
    width: 200px;
    line-height: 44px;
    height: 44px;
    padding-left: 30px;
  }
  .support {
    float: right;
    line-height: 44px;
    height: 44px;
  }
  .topbar {
    border-top: 1px solid #3d5a8f;
    line-height: 28px;
    height: 28px;
    /*background: linear-gradient(#7997b5, #577593);*/
    background: #f0f4f5 url(../index/assets/topbar-background.png) repeat-x top left;
    color: #fff;
    font-size: 12px;
    font-family: "微软雅黑","宋体";
  }
  .separator {
    height: 26px;
    line-height: 26px;
    width: 6px;
    display: inline-block;
    background: url(../index/assets/separator.gif) no-repeat center;
    vertical-align: middle;
  }
</style>