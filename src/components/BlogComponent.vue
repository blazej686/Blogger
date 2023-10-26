<template>
    <section class="row">
        <div class="col-8 border">
            <p>{{ blogProp.body }}</p>
        </div>
        <div class="col-4">
            <img :src="blogProp.imgUrl" :alt="blogProp.title">
        </div>
    </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Blog } from '../models/Blog.js';
export default {
    props: { blogProp: { type: Blog, required: true } },


    setup(props) {
        return {}
    }
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