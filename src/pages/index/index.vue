<template>
  <view class="">
    <navigator
      hover-class="none"
      :url="'/pages/index/' + item.name"
      class="rounded-8 shadow p m flex justify-between"
      :class="'bg-' + item.color + '-light'"
      :style="[{ animation: 'show ' + ((index + 1) * 0.2 + 1) + 's 1' }]"
      navigateTo
      v-for="(item, index) in list"
      :key="index"
    >
      <view class="">{{ item.title }}</view>
      <view class="text-Abc">{{ item.name }}</view>
    </navigator>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: '布局',
          name: 'layout',
          color: 'purple'
        },
        {
          title: '弹性',
          name: 'flex',
          color: 'red'
        },
        {
          title: '网格',
          name: 'grid',
          color: 'orange'
        },
        {
          title: '间距',
          name: 'spacing',
          color: 'yellow'
        },
        {
          title: '尺寸',
          name: 'dimension',
          color: 'green'
        },
        {
          title: '排版',
          name: 'typography',
          color: 'blue'
        },
        {
          title: '背景',
          name: 'background',
          color: 'cyan'
        },
        {
          title: '边框',
          name: 'border',
          color: 'pink'
        },
        {
          title: '其它',
          name: 'other',
          color: 'olive'
        },
        {
          title: '演示',
          name: 'demo',
          color: 'brown'
        }
      ]
    }
  },
  onLoad() {},
  methods: {}
}
</script>

<style>
@keyframes show {
  0% {
    transform: translateY(-50px);
  }

  60% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0px);
  }
}

@-webkit-keyframes show {
  0% {
    transform: translateY(-50px);
  }

  60% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
