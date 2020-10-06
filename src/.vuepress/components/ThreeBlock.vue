<template>
  <div class="three-block">
    <div class="block block-1">
      <div class="header-container">
        <div class="col-1">
          <img src="./img/eventos.svg" alt="hola" width="45px">
        </div>
        <div class="col-2">
          <h3>Eventos</h3>
        </div>
      </div>
      <p>
        <b> Bar Restaurante V. Arranz</b> es el lugar perfecto para la celebración de todo tipo de eventos.
        <br>
        Una carta bien pensada con una selección de recetas de cocina inspiradas principalmente en la tradición
        culinaria de nuestro país.
      </p>
    </div>

    <div class="block block-3">
      <div class="header-container">
        <div class="col-1">
          <img src="./img/mapa.svg" alt="hola" width="45px">
        </div>
        <div class="col-2">
          <h3>Ubicación</h3>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.1097087689864!2d-3.624656784963432!3d40.56125447934856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cdf60b755f9%3A0x2437c7a6e1c9eb7!2sV.+Arranz!5e0!3m2!1sen!2ses!4v1474846566728"
              width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <a href="https://www.google.com/maps/place/V.+Arranz+-+Bar+Restaurante/@40.5613807,-3.6231759,17z/data=!4m12!1m6!3m5!1s0x0:0x2437c7a6e1c9eb7!2sV.+Arranz+-+Bar+Restaurante!8m2!3d40.5613889!4d-3.6225!3m4!1s0x0:0x2437c7a6e1c9eb7!8m2!3d40.5613889!4d-3.6225">
          Abrir en Google Maps
        </a>
      </div>
    </div>

    <div class="block block-2">
      <div class="header-container">
        <div class="col-1">
          <img src="./img/horario.svg" alt="hola" width="45px">
        </div>
        <div class="col-2">
          <h3>Horario</h3>
        </div>
      </div>
      <ul class="list">
        <li v-for="{day, hours} in scheduling">
          <div class="day">
            {{ day }}
          </div>
          <div class="hour" :class="{monday: day.toLowerCase() === 'lunes'}">{{ hours }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThreeBlock",
  data() {
    return {
      scheduling: [
        {day: 'Lunes', hours: 'Cerrado'},
        {day: 'Martes', hours: '10:00 - 23:45'},
        {day: 'Miércoles', hours: '10:00 - 23:45'},
        {day: 'Jueves', hours: '10:00 - 23:45'},
        {day: 'Viernes', hours: '10:00 - 23:45'},
        {day: 'Sábado', hours: '10:00 - 23:45'},
        {day: 'Domingo', hours: '10:00 - 23:45'},
      ]
    }
  },
}
</script>

<style scoped lang="stylus">
.block
  margin-bottom 30px

.list
  list-style none
  padding-left 0

  li
    display flex
    justify-content space-between
    margin-bottom 5px

    &:not(:last-child)
      border-bottom 1px solid #eaeaea

    .day,
    .hour
      padding 0 10px

    .hour.monday
      color #aaa

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

    h3
      margin 0

.contact
  margin-top 20px

  .map
    padding 20px 0

  a
    display block
    text-align center

</style>
