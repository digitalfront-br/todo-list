<template>
  <div class="uk-padding uk-height-expand">
    <dfFormulario @valor="mostraItem($event)" />
    <dfLista :dfData="tarefas" />
  </div>
</template>

<script>
import dfFormulario from "@/components/Formulario";
import dfLista from "@/components/Lista";
export default {
  components: {
    dfFormulario,
    dfLista
  },
  data() {
    return {
      tarefas: []
    };
  },
  methods: {
    mostraItem(s) {
      var idItem = this.tarefas.length;
      return this.tarefas.push({
        id: idItem,
        tarefa: s,
        status: false
      });
    }
  }
};
</script>
