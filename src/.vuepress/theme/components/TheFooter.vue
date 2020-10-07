<template>
  <footer class="footer">
    <div class="theme-default-content content__default">
      <div class="row">
        <div class="col col-1">
          <img src="/logo-v-arranz.png" alt="V. Arranz logo" width="200px">
          <p>Restaurante de comida tradicional</p>
        </div>
        <div class="col col-2">
          2222
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="stylus" scoped>
footer.footer
  background-color #fafafa
  border-top 1px solid #eeeeee

  .row
    display flex
    flex-wrap nowrap
    justify-content space-between

    .col
      width 50%
</style>
