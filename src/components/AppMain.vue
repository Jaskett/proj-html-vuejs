<script>
import HeroMain from './HeroMain.vue';
import OnlineCourses from './OnlineCourses.vue';
import Tutoring from './Tutoring.vue';

export default {
    name: 'AppMain',
    components: {
        HeroMain,
        OnlineCourses,
        Tutoring
    }
}
</script>

<template>
    <HeroMain />
    <OnlineCourses />
    <Tutoring />
</template>

<style lang="scss" scoped>

</style>