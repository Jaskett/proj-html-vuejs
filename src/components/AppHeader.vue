<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            searchBar: [
                'Home',
                'Pages',
                'Courses',
                'Features',
                'Blog',
                'Shop'
            ]
        }
    }
}
</script>

<template>
    <header>
        <div class="container p-2 d-flex align-items-center">
            <div class="row row-cols-auto align-items-center justify-content-between container-fluid p-0">
                <!-- Logo Section -->
                <div class="col">
                    <img class="img-logo" src="../assets/img/dark-logo.png" alt="Logo">
                </div>

                <div class="col">
                    <ul class="d-flex m-0 align-items-center">
                        <li v-for="(element, index) in searchBar" :key="index" class="px-3">
                            <a href="#">
                                {{ element }}
                                <font-awesome-icon icon="fa-solid fa-chevron-down ms-1"/>      
                            </a>
                        </li>

                        <li class="px-3">
                            <a href="#">
                                <font-awesome-icon icon="fa-regular fa-circle-user"/>
                            </a>
                        </li>

                        <li>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search..." >
                                
                                <span class="input-group-text" id="addon-wrapping">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/reset.scss' as *;

header {
    .img-logo {
        width: 150px;
    }

    li {
        list-style: none;

        a {
            text-decoration: none;
            color: $grey;

            i {
                font-size: smaller;
            }
        }
    }

    .input-group {
        width: 70%;

        input,
        span {
            background-color: $dark_white;
            border: none;
            cursor: pointer;
        }

        input {
            font-size: 1.2rem;
            font-weight: 600;
        }

        span {
            color: $aqua;
        }
    }
}
</style>