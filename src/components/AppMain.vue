<script>
import HeroMain from './HeroMain.vue';
import OnlineCourses from './OnlineCourses.vue';
import Tutoring from './Tutoring.vue';
import TopLearners from './TopLearners.vue';
import BestBlog from './BestBlog.vue';
import Newsletter from './Newsletter.vue';

export default {
    name: 'AppMain',
    components: {
        HeroMain,
        OnlineCourses,
        Tutoring,
        TopLearners,
        BestBlog,
        Newsletter
    }
}
</script>

<template>
    <main>
        <HeroMain />
        <OnlineCourses />
        <Tutoring />
        <TopLearners class="bg-red" />
        <BestBlog class="bg-red" />
        <Newsletter />
    </main>
</template>

<style lang="scss" scoped>

</style>