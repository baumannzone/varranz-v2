<template>
  <div>
    <div class="block block-2">
      <div class="header-container">
        <div class="col-1">
          <img src="./img/llamada.svg" alt="Icono llamada" width="45px">
        </div>
        <div class="col-2">
          <h2>Reservas</h2>
        </div>
      </div>
      <div class="contact">
        <p>
          Teléfono: <strong>91 261 25 03</strong>
          <br>
          Abrimos de <strong>martes</strong> a <strong>domingo</strong>, de <strong>10:00</strong> a <strong>23:45</strong>.
        </p>
      </div>
    </div>
    <br>
    <div class="block block-3">
      <div class="header-container">
        <div class="col-1">
          <img src="./img/mapa.svg" alt="Icono mapa" width="45px">
        </div>
        <div class="col-2">
          <h2>Ubicación</h2>
        </div>
      </div>
      <div class="contact">
        <address class="address">
          Paseo de María de Maeztu, 7 <br>
          San Sebastián de los Reyes, Madrid (28702) <br>
          <abbr title="Teléfono">Telf:</abbr> 91 261 25 03
        </address>

        <div class="map">
          <iframe
              title="Mapa V. Arranz"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.1097087689864!2d-3.624656784963432!3d40.56125447934856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cdf60b755f9%3A0x2437c7a6e1c9eb7!2sV.+Arranz!5e0!3m2!1sen!2ses!4v1474846566728"
              width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <a href="https://www.google.com/maps/place/V.+Arranz+-+Bar+Restaurante/@40.5613807,-3.6231759,17z/data=!4m12!1m6!3m5!1s0x0:0x2437c7a6e1c9eb7!2sV.+Arranz+-+Bar+Restaurante!8m2!3d40.5613889!4d-3.6225!3m4!1s0x0:0x2437c7a6e1c9eb7!8m2!3d40.5613889!4d-3.6225">
          Abrir en Google Maps
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">
.header-container
  position relative
  display flex
  flex-direction row
  align-items center
  margin-bottom 30px

  &:after
    position absolute
    content ""
    width 100px
    height 4px
    background-color #EC5975
    bottom -10px
    left 0

  .col-1
    width auto
    margin-right 20px

  .col-2
    width auto

    h2
      margin 0
      font-size 1.35rem
      border-bottom 0

.contact
  margin-top 20px

  .map
    padding 20px 0

  a
    display block
    text-align center
    color #823d3d
</style>
