<script>
export default {
    name: 'HeroMain'
}
</script>

<template>
    <section id="hero-main">
        <div class="wrapped-container d-flex position-relative">
            <div id="left-section">
                <h2 class="fw-bold">Distant learning for further expansion</h2>

                <p>Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.</p>

                <button class="rounded py-3 px-5 text-white fw-bold">
                    <font-awesome-icon icon="fa-solid fa-download"/> Download free guide
                </button>

                <p>Have more question? <span class="green fw-bold">Get free sample -></span> </p>
            </div>

            <img src="../assets/img/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="About Me" class="about-me">
        </div>

        <div class="wrapped-container d-flex justify-content-around clients">
            <img src="../assets/img/client-logo-01.png" alt="" class="client">
            <img src="../assets/img/client-logo-02.png" alt="" class="client">
            <img src="../assets/img/client-logo-03.png" alt="" class="client">
            <img src="../assets/img/client-logo-04.png" alt="" class="client">
            <img src="../assets/img/client-logo-05.png" alt="" class="client">
            <img src="../assets/img/client-logo-06.png" alt="" class="client">
        </div>

        <div class="lateral-options position-absolute text-center fs-4 rounded-2">
            <font-awesome-icon icon="fa-solid fa-ruler"/>
            <font-awesome-icon icon="fa-solid fa-atom"/>
            <font-awesome-icon icon="fa-solid fa-book"/>
            <font-awesome-icon icon="fa-solid fa-cart-shopping"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/reset.scss' as *;

section#hero-main {
    padding-top: 150px;
}

#left-section {
    width: 45%;
    height: 45%;
    margin: 0 5rem;
    padding: 8rem;

    p {
        color: $p-color;
    }

    button {
        background-color: $button;
        border: transparent;
        font-size: .8rem;
        margin-bottom: 1rem;
    }

    .green {
        color: $txt-color;
        border: 1px solid $marked;
        cursor: pointer;
    }
    
    img.client {
        width: 50px;
        height: 50px;
    }
}

img.about-me {
    background-image: url(../assets/img/maxcoach-shape-07-150x150.png);
    border-radius: 50%;
    width: 450px;
    height: 450px;
}

.lateral-options {
    height: 135px;
    width: 35px;
    background-color: white;
    right: 0;
    top: 20%;
}
</style>