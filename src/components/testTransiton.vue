<template>
  <div class="trans">
    <transition name="fadeUp">
      <div class="header1" v-show="visiable">
        一 长街长，烟花繁，你挑灯回看
      </div>
    </transition>
    
    <transition name="fadeDown" >
      <div class="header2"  v-show="!visiable">
        二 终是谁使弦断，花落肩头，恍惚迷离
      </div>
    </transition>

    <ul class="content">
      <li>听弦断，断那三千痴缠。坠花湮，湮没一朝风涟。花若怜，落在谁的指尖</li>
      <li>蓄起亘古的情丝，揉碎殷红的相思</li>
      <li>寄君一曲，不问曲终人聚散</li>
      <li>听弦断，断那三千痴缠。坠花湮，湮没一朝风涟。花若怜，落在谁的指尖</li>
      <li>江水孤寂，两岸墨绿，到处站的都是你的身影</li>
      <li>山有木兮木有枝，心悦君兮君不知</li>
    </ul>
    <div class="change"  v-shake @click="change">
      change
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visiable: true
    }
  },
  methods: {
    change () {
      this.visiable = !this.visiable
    }
  }

}
</script>

<style>
.trans {
  width: 100%;
  height: 100%;
}

 .header1 {
    width: 100%;
    height: 50px;
    color: saddlebrown;
    font-size: 20px;
    background-color: darkcyan;
    text-align: center;
    line-height: 50px;
    position: fixed;
    top:50px;
  }
  
  .header2 {
    width: 100%;
    height: 50px;
    background-color: cornflowerblue;
    text-align: center;
    line-height: 50px;
    position: fixed;
    top:50px;

  }
  ul {

  }
  li {
    width: 100%;
    height: 50px;
    border-bottom: solid 1px #999;
    line-height: 50px;
  }
  .change {
    width: 30%;
    height: 30px;
    background-color: salmon;
    text-align: center;
    border-radius:8px;
    margin: auto;
  }
  .fadeUp-enter,   .fadeUp-leave-to{
    opacity: 0;
  }
  .fadeUp-enter-active,  .fadeUp-leave-active{
    transition: all 2s ease;
  }
  .fadeDown-enter,   .fadeDown-leave-to{
    opacity: 0;
    /* transform: translateY(-100%); */
  }
  .fadeDown-enter-active,  .fadeDown-leave-active{
    transition: all 2s ease;
  }
  .shake {
    animation: shake 0.2s cubic-bezier(.36, .07, .19, .97) both;
  }
   @keyframes shake {
      0%{transform: translate(0, 1px);}

      10% {transform: translate(-1px, 3px);}
 }
</style>