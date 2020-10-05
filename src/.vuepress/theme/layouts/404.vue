<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">
        Llévame a casa.
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `Aquí no hay nada.`,
  `¿Cómo has llegado hasta aquí?`,
  `Esto es un cuatro-cero-cuatro.`,
  `Parece que tenemos hay algún problema.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
