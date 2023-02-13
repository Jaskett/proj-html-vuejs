<script>
import { def } from '@vue/shared';

export default {
    name: 'NavbarHeader',
    data() {
        return {
            links: [
                {
                    text: 'Home',
                    link: '#'
                },
                {
                    text: 'Pages',
                    link: '#'
                },
                {
                    text: 'Courses',
                    link: '#'
                },
                {
                    text: 'Features',
                    link: '#'
                },
                {
                    text: 'Blog',
                    link: '#'
                },
                {
                    text: 'Shop',
                    link: '#'
                }
            ]
        }
    }
}
</script>

<template>
    <nav>
        <div class="container">
            <ul class="d-flex justify-content-between">
                <li>
                    <a href="#"><img src="../assets/img/dark-logo.png" alt=""></a>
                </li>

                <li v-for="link in links">
                    <a href="#">
                        {{ link.text }} <i class="fa-solid fa-caret-down"></i>
                    </a>
                </li>

                <li>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-user"></i>
                </li>

                <li>
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
* {
    color: #3f3a64;
}

nav {
    background-color: #f5f1ed;
    height: 100px;
    padding-top: 35px;

    img {
        height: 25px;
    }
}
</style>