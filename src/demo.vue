<template>
  <div>
    <z-cascader
      :source="source"
      popover-height="200px"
      :selected="selected"
      @update:selected="selected = $event"
    ></z-cascader>
  </div>
</template>

<script>
import Cascader from './cascader'

export default {
  name: 'demo',
  components: {
    'z-cascader': Cascader
  },
  data() {
    return {
      selected: [],
      source: [
        {
          name: '浙江',
          children: [
            {
              name: '杭州',
              children: [
                {
                  name: '西湖'
                }
              ]
            },
          ],
        },
        {
          name: '江苏',
          children: [
            {
              name: '南京',
              children: [
                {
                  name: '江宁区'
                }
              ]
            },
          ],
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
</style>
