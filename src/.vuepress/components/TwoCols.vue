<template>
  <div class="row">
    <div class="col col-1">
      <div class="inner">
        <slot name="col-1"></slot>
      </div>
    </div>

    <div class="col col-2">
      <div class="inner">
        <slot name="col-2"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.row
  display flex
  flex-wrap wrap

  .col
    width 100%

    .inner
      padding 10px
      text-align center


@media (min-width: 576px)
  .row
    .col
      flex-basis 0
      -webkit-box-flex 1
      -ms-flex-positive 1
      flex-grow 1
      max-width 100%

      .inner
        text-align left

</style>
