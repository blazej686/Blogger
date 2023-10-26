<template>
    <section class="row">
        <RouterLink :to="{ name: 'activeBlog', params: { blogId: blogProp.id } }">
            <div class="col-8 border">
                <p>{{ blogProp.body.toString(5) }}</p>
            </div>
        </RouterLink>
        <div class="col-4">
            <img :src="blogProp.imgUrl" :alt="blogProp.title">
        </div>

    </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Blog } from '../models/Blog.js';
import { RouterLink } from 'vue-router';
export default {
    props: { blogProp: { type: Blog, required: true } },
    setup(props) {
        return {};
    },
    components: { RouterLink }
};
</script>


<style lang="scss" scoped>
img {
    height: 20vh;
    width: 100%;
    object-fit: cover;
    object-position: center;
}
</style>