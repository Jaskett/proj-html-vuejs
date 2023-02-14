<script>
import HeroMain from './HeroMain.vue';
import OnlineCourses from './OnlineCourses.vue';
import Tutoring from './Tutoring.vue';
import TopLearners from './TopLearners.vue';
import BestBlog from './BestBlog.vue';

export default {
    name: 'AppMain',
    components: {
        HeroMain,
        OnlineCourses,
        Tutoring,
        TopLearners,
        BestBlog
    }
}
</script>

<template>
    <HeroMain />
    <OnlineCourses />
    <Tutoring />
    <TopLearners class="bg-red" />
    <BestBlog class="bg-red" />
</template>

<style lang="scss" scoped>

</style>