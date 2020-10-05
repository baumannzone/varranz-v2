<template>
  <div class="three-block">
    <div class="block-1">
      <img src="./img/eventos.svg" alt="hola" width="45px">

      <h3>Eventos</h3>
      <p>Celebración de todo tipo de eventos. Raciones para llevar o degustar. Tapas de Ibéricos.</p>
    </div>
    <div class="row">
      <div class="col block-2">
        <h3>Horario</h3>
        <ul class="list">
          <li v-for="{day, hours} in scheduling">
            <div class="day">{{ day }}</div>
            <div class="hour">{{ hours }}</div>
          </li>
        </ul>

      </div>
      <div class="col block-3">
        <h3>Ubicación</h3>
      </div>
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
.list
  list-style none
  padding-left 0

  li
    display flex
    justify-content space-between
    border-bottom 1px solid #eaeaea
    margin-bottom 5px

    .day,
    .hour
      padding 0 10px


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
