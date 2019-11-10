<template>
  <div id="app">
    <cascade v-for="(item, index) in list" :key="index" :data="item" :index="index"></cascade>
  </div>
</template>

<script>
import cascade from './components/cascade.vue'

export default {
  name: 'app',
  components: {
    cascade
  },
  data () {
    return {
      list: [
        {
          name: 'aa/bb',
          aliasName: 'bb',
          des: '发件箱',
          rank:1,
          children: [
            {
              name: 'aa/bb/cc',
              aliasName: 'cc',
              des: '发件箱',
              rank:2
            },
            {
              name: 'aa/bb/yy',
              aliasName: 'yy',
              des: '发件箱',
              rank:2
            }
          ]
        },
        {
          name: 'a活动室',
          aliasName: 'a活动室',
          des: '发件箱',
          rank:1
        },
        {
          name: '大美女',
          aliasName: '大美女',
          des: '发件箱',
          rank:1,
          children:[
            {
              name: '大美女/小美女',
              aliasName: '小美女',
              des: '发件箱',
              rank:2,
              children: [
                {
                  name: '大美女/小美女/小可爱',
                  aliasName: '小可爱',
                  des: '发件箱',
                  rank:3,
                }
              ]
            }, 
            {
              name: '大美女/小萝莉',
              aliasName: '小萝莉',
              des: '发件箱',
              rank:2,
            }
          ]
        },
        {
          name: '地区',
          aliasName: '地区',
          des: '发件箱',
          rank:1,
          children: [
            {
              name: '地区/jj/出差/北京',
              aliasName: '北京',
              des: '发件箱',
              rank:2,
              children: [
                {
                  name: '地区/jj/出差/canada',
                  aliasName: 'canada',
                  des: '发件箱',
                  rank:3
                }
              ]
            },
          ]
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
