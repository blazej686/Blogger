<template>
    <div class="container-fluid">
        <section v-if="profile" class="row">

            <div class="col-12">
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
</template>


<script>
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';
import { computed, onMounted } from 'vue';
import { profileService } from '../services/ProfileService.js'
export default {
    setup() {
        onMounted(() => {
            getProfile()
        })
        const route = useRoute()
        async function getProfile() {
            const profileId = route.params.profileId
            await profileService.getProfile(profileId)
        }
        return {
            profile: computed(() => AppState.profile)
        }
    }
};
</script>


<style lang="scss" scoped></style>