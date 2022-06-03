<template>
    <div class="row">
        <div class="col p-3">
            <div><strong>Название:</strong> {{post.name}} </div>
            <div><strong>Сорт:</strong> {{post.tagline}} </div>
            <div><strong>Создатель:</strong> {{post.contributed_by}}</div>
            <div><strong>Описание:</strong> {{post.description}}</div>
        </div>
        <div class="col p-3">
            <img class="postImg" :src="`${post.image_url}`">    
        </div> 
    </div>
</template>

<script>
export default{
    props: {
        post: {
            type: Object,
            require: true
        }
    },
}
</script>

<style scoped>
.postImg{
    max-height: 150px;
}
</style>