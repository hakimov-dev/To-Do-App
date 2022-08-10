<template>
      <ul class="list">
        <h3 class="list-item" v-for="(note, idx) in 3">
          {{ idx + 1 }} - Hello world
          <button class="btn danger">
            Delete
          </button>
        </h3>
      </ul>
</template>

<script>
export default {
    name: 'list-Item'
}
</script>