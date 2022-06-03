<template>
<div class=" d-flex flex-row">
    <div 
    v-for="pageNumber in this.totalPage" 
    :key="pageNumber"
    class="text-info"
    @click="changePage(pageNumber)"
    :class="{
      'text-danger': page === pageNumber
    }"
    >
      {{pageNumber}}&nbsp;
    </div>
</div>
</template>

<script>
export default{    
    props:{
        totalPage: {
            type: Number,
            require: true,
        },
        page: {
          type: Number,
          require: true,

        }
    },
    methods:{
        changePage(pageNumber){
        this.$emit('change', pageNumber)
        }
    },
}
</script>

<style>

</style>