<script>
import HeroMain from './HeroMain.vue';
import OnlineCourses from './OnlineCourses.vue';
import Tutoring from './Tutoring.vue';
import TopLearners from './TopLearners.vue';

export default {
    name: 'AppMain',
    components: {
        HeroMain,
        OnlineCourses,
        Tutoring,
        TopLearners
    }
}
</script>

<template>
    <HeroMain />
    <OnlineCourses />
    <Tutoring />
    <TopLearners />
</template>

<style lang="scss" scoped>

</style>