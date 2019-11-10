<template>
<div>
  <ul>
    <li>
      <div :style="{'margin-left': data.rank * 20 + 'px'}"
          style="font-size: 18px">
          <div :class="`index-${index}`"
          class="icon"
          @click="toggle" 
          v-if="data.children"></div>
          {{ data.aliasName }}
      </div>
      <div v-if="data.children && data.children.length > 0" v-show="open">
        <cascade v-for="(item, index) in data.children" :key="index" :data="item"></cascade>
      </div>
    </li>
  </ul>
   
</div>
</template>

<script>
export default {
  name: 'cascade',
  props: {
        'data': {
          type: Object,
          required: true
        },
        'index': {
          type: [String, Number]
        }
  },
  data () {
    return  {
      casadeList: [],
      // 原始列表， 根据 name 组装树形结构
      list: [
        {
          name: 'aa/bb',
          aliasName: 'bb',
          des: '发件箱',
          rank:1
        },
        
        {
          name: 'aa/bb/cc',
          aliasName: 'cc',
          des: '发件箱',
          rank:1
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
          rank:1
        },
        {
          name: '大美女/小美女',
          aliasName: '小美女',
          des: '发件箱',
          rank:1
        },
        
        {
          name: '小可爱999',
          aliasName: '小可爱999',
          des: '发件箱',
          rank:1
        },
        
        {
          name: '大美女/小美女/小可爱',
          aliasName: '小可爱',
          des: '发件箱',
          rank:1
        },
        
        {
          name: '小可爱999/jj/出差/北京',
          aliasName: '北京',
          des: '发件箱',
          rank:1
        },
        {
          name: '小可爱999/jj/出差/canada',
          aliasName: 'canada',
          des: '发件箱',
          rank:1
        }
      ],
      // 是否展开
      open: false
    }
  },
  mounted () {
    //  this.init()
    window.console.log(this.data, 'data')
  },
  methods: {
    /**
     * 处理是否可以点击
     */
    toggle () {
      if (!this.data.children) {
        return false
      } else {
        this.open = !this.open
        if (this.open) {
          document.querySelector('.index-'+ this.index).style.transform = 'rotate(180deg)'
        } else {
          document.querySelector('.index-'+ this.index).style.transform = 'rotate(0)'
        }
      }
    },
    init () {
      let sortList = this.list.sort((a, b) => {
        return a.name - b.name
      })
      
      window.console.log(sortList, '排序后')
      // 将原始数据组装成 树形结构
      let casadeList = [sortList[0]]
      for (let i = 1; i < sortList.length; i++) {
        // 
        this.setCascade(casadeList, sortList[i])
        // 如果没找到过
        if (sortList[i].rank === 1) {
          casadeList.push(sortList[i])
        }
      }
      this.casadeList = casadeList
      window.console.log(this.casadeList, 'dd')
    },
    setCascade(casadeList, item) {
      // 提高效率
      if (item.rank !== 1) {
        return
      }
      for (let j = 0; j < casadeList.length; j++) {
          if(casadeList[j].children) {
            // 递归调用
            this.setCascade(casadeList[j].children, item)
            let _isChild = item.name.indexOf(casadeList[j].name + '/') > -1
            // 如果没找到过父级
            if (_isChild && item.rank === 1) {
              // 一定有children
              // if(!casadeList[j].children)  {
              //   casadeList[j] = Object.assign({}, casadeList[j], { 'children': [] })
              // }
              item.rank = casadeList[j].rank + 1
              casadeList[j].children.push(item)
            }
          } else {
            let _isChild = item.name.indexOf(casadeList[j].name + '/') > -1
            if (_isChild) {
              casadeList[j] = Object.assign({}, casadeList[j], { 'children': [] })
              // 一定没有children
              // if(!casadeList[j].children)  {
              //   casadeList[j] = Object.assign({}, casadeList[j], { 'children': [] })
              // }
              item.rank = casadeList[j].rank + 1
              casadeList[j].children.push(item)
            }
          }
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul, li {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
  line-height: 40px;
  font-size: 28px;

}
li:nth-child(2n) {
  background: #999;
}
.icon {
  display: inline-block;
  width: 0;
  height: 0;
  /* transform: rotate(-180deg); */
  transform-origin: center;
  transition: all .3 linear;
  border-top: 5px solid #000;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
</style>
