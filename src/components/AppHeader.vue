<script>
import NavbarHeader from './NavbarHeader.vue';
import JumbotronHeader from './JumbotronHeader.vue';

export default {
    name: 'AppHeader',
    components: {
        NavbarHeader,
        JumbotronHeader
    }
}
</script>

<template>
    <NavbarHeader />
    <JumbotronHeader />
</template>

<style lang="scss" scoped>

</style>