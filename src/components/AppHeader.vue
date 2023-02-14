<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header class="position-absolute w-100 py-3">
        <div class="wrapped-container d-flex justify-content-center">
            <img src="../assets/img/dark-logo.png" alt="Logo" id="main-logo">

            <nav>
                <ul class="m-0 d-flex">
                    <li>Home <font-awesome-icon icon="fa-solid fa-chevron-down"/></li>

                    <li>Pages <font-awesome-icon icon="fa-solid fa-chevron-down"/></li>

                    <li>Courses <font-awesome-icon icon="fa-solid fa-chevron-down"/></li>

                    <li>Features <font-awesome-icon icon="fa-solid fa-chevron-down"/></li>

                    <li>Blog <font-awesome-icon icon="fa-solid fa-chevron-down"/></li>

                    <li>Shop <font-awesome-icon icon="fa-solid fa-chevron-down"/></li>

                    <li><font-awesome-icon icon="fa-regular fa-circle-user"/></li>

                    <div class="searchbar">
                        <input class="search_input" type="text" placeholder="Search...">

                        <i><font-awesome-icon icon="fa-solid fa-magnifying-glass"/></i>
                    </div>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
img #main-logo {
    width: 200px;
}

nav ul {
    padding-top: .5rem;
    list-style-type: none;

    li {
        margin: 0 1.5rem;
    }
}
</style>