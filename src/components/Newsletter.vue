<script>
export default {
    name: 'Newsletter'
}
</script>

<template>
    <div class="bg-white py-5">
        <div class="container p-2 bg-white">
            <div class="row text-center justify-content-center position-relative">
                <div class="col-12 align-items-center d-flex flex-column">
                    <h3 class="fw-bold mb-4">Subscribe <span class="fw-normal">Newsletters</span></h3>

                    <p class="fw-bold mb-5">Enter your email address to register to our newsletter subscription delivered on a regular basis!</p>

                    <div class="input-group mb-3">
                        <input type="text" class="form-control py-2" placeholder="Enter your email">

                        <button class="input-group-text text-white fw-bold py-2">Subscribe</button>
                    </div>

                    <img class="position-absolute my-left" src="../assets/img/maxcoach-shape-01.png" alt=".">
                    <img class="position-absolute my-right" src="../assets/img/maxcoach-shape-02.png" alt=".">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/reset.scss' as *;

.col-12 {
    h3 {
        color: $grey;

        span {
            color: $aqua;
        }
    }

    p {
        color: $light_grey;
    }

    .my-left,
    .my-right {
        bottom: 0%;
    }

    .my-left {
        left: 10%;
    }

    .my-right {
        right: 10%;
    }

    .input-group {
        width: 40%;

        input {
            background-color: $dark_white;
            border: none;
        }

        ::placeholder {
            background-color: $dark-white;
        }

        button {
            width: 30%;
            background-color: $aqua;
            color: white;
            font-weight: 700;
            padding: .5rem 2rem;
        }

        button:hover {
            background-color: $purple;
            color: white;
        }
    }
}
</style>