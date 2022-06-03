<template>
<div>   
    <h2>Beer List</h2>
        <transition-group name="post-list">
        <post-item class="post" 
        :key="post.id"
        v-for="post in posts"
        :post="post"
        />
        </transition-group>

</div>
</template>

<script>
import PostItem from "@/components/PostItem.vue"
export default {
    components: {PostItem},
    props: {
        posts: {
            type: Array,
            require: true
        }
    },

}

</script>

<style scoped>
.post-list-move {
  transition: transform 0.2s ease;
}
</style>