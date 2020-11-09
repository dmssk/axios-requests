<template>
  <div class="pa-5">
    <h1>Home</h1>
    <p>..You can find here some info..</p>

    <Carousel/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel";
export default {
  name: 'Home',
  components: {
    Carousel
  }
}
</script>
