<template>
  <div id="app">
    <nav>
      <ul>
        <li v-for="route in routes" :key="route.name">
          <router-link :to="route.path">{{route.name}}</router-link>
        </li>
      </ul>
    </nav>
    <main>
      <router-view :key="$route.fullPath" />
    </main>
  </div>
</template>

<script>
import routes from '@/specialRoutes/routes'

export default {
  data: () => ({ routes }),
}
</script>

<style lang="css">


html, body {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  color: #212121;
  background: #eceff1;
}
#app {
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
#app main {
  flex: 1 100%;
  overflow: hidden;
}
nav {
  background: #455a64;
}
nav ul li {
  display: inline-block;
  padding: 0.5rem;
}
nav ul li a {
  color: #fafafa;
  text-decoration: none;
  padding: 0.5rem 1rem;
}
nav ul li a:hover {
  text-decoration: underline;
}

</style>
