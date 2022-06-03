<template>
    <select v-model="modelValue" @change="changeOption">
        <option disabled value="">Выбрать из списка</option>
        <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value"
            >
        {{option.name}}
        </option>
    </select>
  
</template>

<script>
export default {
    name: 'select-form',
    props:{
        modelValue:{
            type: String
        },
        options:{
            type: Array,
            defaulyt: () => []
        }
    },
    methods:{
        changeOption(event){
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>

<style>

</style>