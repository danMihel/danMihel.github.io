<template>
<div>
  <my-input
  v-model="searchQuery"
  placeholder="Search..."
  />
  <my-button/>
  <paginator
    @change="changePage"
    :page="page"
    :totalPage="totalPage"
  />
  <select-form
    v-model="selectedSort"
    :options="sortOptions"
  />
  <post-list 
    :posts="sortedAndSearchedPosts"
    v-if="!postLoading"
  />
  <div v-else><p>Loading</p></div>

</div>
</template>

<script>
import axios from 'axios';
import Paginator from '@/components/Paginator.vue'
import PostList from '@/components/PostList.vue'; 
import SelectForm from '@/components/SelectForm.vue';
import MyInput from '@/components/UI/MyInput.vue';
import MyButton from '@/components/UI/MyButton.vue';

export default {
    components: { 
              PostList, 
              SelectForm,
              Paginator,
              MyInput,
              MyButton,
              },
    data() {
        return {
            posts: [],
            postLoading: false,
            selectedSort: '',
            searchQuery:'',
            page: 1,
            limit: 25,
            totalPage: 0,
            totalPosts: 325,
            sortOptions: [
              {value: 'name', name: 'По названию'},
              {value: 'tagline', name: 'По сорту'},
              {value: 'contributed_by', name: 'По создателю'},
            ]
        };
    },
    methods: {
      changePage(pageNumber){
        this.page = pageNumber;
        this.fetchBeer()
        
      },
      async fetchBeer(){
        console.log('fetching')
        try{
          this.postLoading = true
          const res = await axios.get('https://api.punkapi.com/v2/beers', {
            params:{
              page: this.page,
              per_page: this.limit
            }
          });
         this.totalPage = Math.ceil(this.totalPosts / this.limit)
          this.posts = res.data
        } catch(e){
          console.error(e);
        } finally{
          this.postLoading = false;
        }
      },
    },
    mounted(){
      this.fetchBeer()  
    },
    computed: {
      sortPosts(){
        return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
      },
      sortedAndSearchedPosts(){
        return this.sortPosts.filter(post => post.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
    },
    watch: {
      page() {
        this.fetchBeer();
      }
    }
}

</script>

<style>

</style>
