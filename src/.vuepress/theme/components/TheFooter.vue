<template>
  <footer class="footer">
    <div class="theme-default-content content__default">
      <div class="row">
        <div class="col col-1">
          <img src="/logo-v-arranz.png" alt="V. Arranz logo" width="100px">
          <p>
            <small>
              Restaurante de comida tradicional
            </small>
          </p>
        </div>
        <div class="col col-2">
          <ul>
            <li>
              <a href="/protocolo-covid/">Protocolo Covid</a>
            </li>
            <li>
              <a href="/carta/">Carta</a>
            </li>
            <li>
              <a href="/contacto/">Contacto</a>
            </li>
          </ul>
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

  .col-1
    p
      color #999999

</style>
