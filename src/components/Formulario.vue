<template>
  <form class="uk-width-1-1 uk-margin">
    <div class="uk-flex">
      <input
        class="uk-input"
        v-model="tarefa"
        type="text"
        placeholder="Tarefa"
      />
      <button
        :disabled="tarefa.length <= 3"
        @click.prevent="adicionaTarefa(tarefa)"
        class="uk-button uk-button-primary"
      >
        add
      </button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      tarefa: ""
    }
  },
  methods: {
    adicionaTarefa(event) {
      const valor = event;
      this.tarefa = "";
      this.$emit("valor", valor);
    }
  }
};
</script>
