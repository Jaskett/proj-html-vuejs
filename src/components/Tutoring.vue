<script>
export default {
    name: 'Tutoring',
    data() {
        return {
            smartCard: [
                {
                    img: ('../src/assets/img/home-2-image-box-01.png'),
                    title: 'Customize Preferences',
                    paragraph: 'Learning are given the right to arrange and customize their study schedule and timetable based on preferences.',
                    start: 'Start here'
                },
                {
                    img: ('../src/assets/img/about-us-02-image-box-02.png'),
                    title: 'Cloud storage',
                    paragraph: 'You can store online lessons via online cloud or download to your device and revise lessons on the way.',
                    start: 'Get Free Quote'
                },
                {
                    img: ('../src/assets/img/home-2-image-box-03.png'),
                    title: 'Multimedia Channels',
                    paragraph: 'We provide study materials with varius formats: video, audio, sliades, doc, prints, book and applications.',
                    start: 'Start now'
                }
            ],
            bgTutoring: [
                {
                    img: ('../src/assets/img/maxcoach-shape-05-150x150.png'),
                    class: 'f-bg'
                },
                {
                    img: ('../src/assets/img/maxcoach-shape-07-150x150.png'),
                    class: 's-bg'
                },
                {
                    img: ('../src/assets/img/icon-youtube-play.png'),
                    class: 't-bg'
                }
            ]
        }
    }
}
</script>

<template>
    <div class="shadow">
        <div class="container p-2">
            <!-- Titolo -->
            <div class="row text-center mb-4">
                <div class="col-12">
                    <h6 class="text-uppercase fw-bold">maxcoach available courses</h6>
                    <h3 class="fw-bold">Access <span>Smart Tutoring</span> Program For Benefits.</h3>
                </div>
            </div>

            <div class="row mb-5">
                <div class="col-12 d-flex justify-content-around">
                    <div class="card" v-for="(card, index) in smartCard" :key="index + 'c'">
                        <img :src="card.img" class="card-img-top" :alt="card.title">

                        <div class="card-body">
                            <h5 class="card-title fw-bold">{{ card.title }}</h5>
                            <p class="card-text">{{ card.paragraph }}</p>
                            <a class="card-start" href="#">{{ card.start }} <font-awesome-icon icon="fa-solid fa-right-long"/></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-4 px-5">
                <div class="col-7 text-center position-relative">
                    <img :src="element.img" alt="Background Photo Profile" class="position-absolute" :class="element.class" v-for="(element, index) in bgTutoring" :key="index + 'd'">

                    <img src="../assets/img/home-2-popup-video-poster.jpg" alt="popup photo poster" id="photo-poster" class="position-relative p-4 ">
                </div>

                <div class="col-5 p-4 position-relative p-5">
                    <div id="my-circle" class="rounded-pill position-absolute"></div>

                    <h6 class="text-uppercase fw-bold mt-3">get started <span>effortlesly</span></h6>

                    <h1 class="fw-bold fs-1">
                        Enjoy our <span class="fw-normal">Companionship</span>
                    </h1>

                    <p>Sneek peek into what has in store for you on our online teaching and mentoring portal. Seek for some hidden hints of early-bird rewords as well.</p>

                    <span class="fw-bold text-decoration-underline">Download free guidebook <font-awesome-icon icon="fa-solid fa-right-long"/></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/reset.scss' as *;

.col-12 {
    h6 {
        color: $ShadyLady;
    }

    h3 {
        color: $GunPowder;

        span {
            color: $JungleGreen;
        }
    }

    .card {
        border: none;
        width: 18rem;

        img {
            width: 150px;
            height: 132px;
        }

        .card-body {
            .card-title {
                color: $GunPowder;
            }

            .card-text {
                color: $Edward;
            }

            a {
                text-decoration: none;
                color: $ShadyLady;
            }

            span {
                cursor: pointer;
            }
        }
    }
}

.col-7 {
    #photo-poster {
        z-index: 3;
        border-radius: 30px;
    }

    .f-bg {
        top: 10%;
        left: 0%;
    }

    .s-bg {
        bottom: -6%;
        right: 0%;
    }
    
    .t-bg {
        z-index: 5;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }
}

.col-5 {
    #my-circle {
        height: 80px;
        width: 80px;
        border: 10px solid $Eunry;
        left: 2%;
        top: -10%;
    }

    h6 {
        color: $ShadyLady;

        span {
            color: $GunPowder;
        }
    }

    h1 {
        color: $GunPowder;

        span {
            color: $JungleGreen;
        }
    }

    span {
        color: $JungleGreen;
        cursor: pointer;
    }

    p {
        color: $Edward;
    }
}
</style>