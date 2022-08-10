<template>
      <ul class="list">
        <h3 class="list-item" v-for="(note, idx) in $store.state.notes">
          {{ idx + 1 }} - {{ note }}
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