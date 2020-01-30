<template>
  <ul class="uk-list uk-list-striped">
    <li>
      <div class="uk-flex  uk-flex-between">
        <div class="uk-text-bold">tarefa</div>
        <div class="uk-text-bold">status</div>
      </div>
    </li>
    <li v-for="item in lista" :key="item.id">
      <div class="uk-flex  uk-flex-between">
        <div>{{ item.tarefa }}</div>
        <div>
          <input class="uk-checkbox" type="checkbox" :checked="item.status" />
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      lista: [
        { id: 1, tarefa: "Desenhar", status: false },
        { id: 2, tarefa: "Fazer Cafe", status: false },
        { id: 3, tarefa: "Assistir desenho", status: true },
        { id: 4, tarefa: "comprar Pão", status: false }
      ]
    }
  },
  methods: {
    mostraItem(s) {
      console.log(s);
    }
  }
};
</script>
