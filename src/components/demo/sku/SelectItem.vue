<template lang="html">
  <div class="selectItem">
    <span>{{typeName}}:</span>
    <span v-for="item in selectType"
        :class="{disabled: item.state === 2, active: item.state === 1}"
        @click="selectItemClick(typeName , item)">
    {{item.type}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'selectItem',
  props:['selectType','typeName'],
  data(){
    return {}
  },
  created(){
    
  },
  methods:{
    selectItemClick(title , item){
      this.$emit('type-select-change' , title , item);
    }
  }
}
</script>

<style lang="css" scoped>
.selectItem{
  width: 100%;
}
.selectItem span:nth-child(n+2){
  display: inline-block;
  /* width: 70px; */
  text-align: center;
  border: 0.02rem solid #000;
  margin: 0.05rem;
  padding: 0.03rem 0.05rem;
  cursor: pointer;
  font-size: 0.28rem;
}
.selectItem span.active{
  border-color: red;
  color: red;
}
.selectItem span.disabled{
  border: 0.02rem dashed #ccc;
  color: #ccc;
}
</style>
