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
        <OnlineCourses class="bg-azure" />
        <Tutoring />
        <TopLearners class="bg-azure" />
        <BestBlog class="bg-azure" />
        <Newsletter />
    </main>
</template>

<style lang="scss" scoped>

</style>