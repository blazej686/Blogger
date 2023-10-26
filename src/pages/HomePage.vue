<template>
  <div class="container-fluid">
    <section class="row justify-content-around p-3">
      <div v-for="blog in blogs" :key="blog.id" class=" col-8 card p-3 my-2">
        <BlogComponent :blogProp="blog" />

      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js'
import { AppState } from '../AppState.js'
import BlogComponent from '../components/BlogComponent.vue';

export default {
  setup() {
    onMounted(() => {
      getBlogs();
    });
    async function getBlogs() {
      try {
        await blogsService.getBlogs();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    return {
      blogs: computed(() => AppState.blogs)
    };
  },
  components: { BlogComponent }
}
</script>

<style scoped lang="scss"></style>
