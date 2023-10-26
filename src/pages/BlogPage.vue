<template>
    <div class="container-fluid">
        <section class="row">
            <div v-if="activeBlog" class="col-12 d-flex flex-column">
                <img class="blog-pic" :src="activeBlog.imgUrl" :alt="activeBlog.title">

                <img class="profile-pic rounded-circle" :src="activeBlog.creator.picture" :alt="activeBlog.creator.name">


                <h2>{{ activeBlog.title }}</h2>
                <h5>{{ activeBlog.creator.name }}</h5>
                <h5>{{ activeBlog.createdAt.toLocaleDateString() }}</h5>
                <p>{{ activeBlog.body }}</p>
                <p>
                    {{ activeBlog.tags }}
                </p>

            </div>
        </section>
    </div>
</template >


<script>
import { AppState } from '../AppState';
import { computed, onMounted } from 'vue';
import { blogsService } from '../services/BlogsService.js';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
export default {
    setup() {
        onMounted(() => {
            getBlogById()

        })
        const route = useRoute()

        async function getBlogById() {
            const blogId = route.params.blogId
            await blogsService.getBlogById(blogId)
            logger.log(blogId)

        }
        return {
            activeBlog: computed(() => AppState.activeBlog)
        }
    }
};
</script>


<style lang="scss" scoped>
.blog-pic {
    height: 25vh;
    width: 80%;
    object-fit: cover;
    object-position: center;
}

.profile-pic {
    height: 9vh;
    width: 9vh;
    object-fit: cover;
    object-position: center;

}
</style>
