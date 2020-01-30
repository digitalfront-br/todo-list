<template>
  <div class="uk-padding uk-height-expand">
    <dfFormulario @valor="mostraItem($event)" />
    <dfLista />
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
  methods: {
    mostraItem(s) {
      console.log(s);
    }
  }
};
</script>
