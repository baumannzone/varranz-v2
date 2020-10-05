<template>
  <div class="separator" :class="color">♦</div>
</template>

<script>
const colorList = ['red', 'grey']
export default {
  props: {
    color: {
      type: String,
      default: colorList['red'],
      validator: (val) => colorList.indexOf(val) !== -1
    },
  },
}
</script>

<style scoped lang="stylus">
red = 123123
.separator
  width 60%
  text-align center
  margin 0 auto
  font-size 10px

  &:before
    float left

  &:after
    float right

  &:before,
  &:after
    display: block
    width: 35%
    content: " "
    margin-top: 7px
    border-width 1px
    border-style solid


  &.red
    color #e78b90

  &.grey
    color #ddd
</style>
