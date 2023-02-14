<script>
export default {
    name: 'TopLearners',
    data() {
        return {
            elementActive: 0,
            teacherCards: [
                {
                    title: 'It\'s a choise of quality for people with special needs',
                    text: 'I\'m a very strict person so require everything to be organized and neat. Then, I\'ll be able to make things right and shine. MaxCoach guys just got me.',
                    name: 'Florence themes',
                    job: 'Multimedia Admin',
                    img: ('../src/assets/img/testimonial-avata-03.jpg'),
                    clicked: false
                },
                {
                    title: 'High level of efficency and scientific teaching methods',
                    text: 'I am free to learn at my own space, follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.',
                    name: 'mina hollace',
                    job: 'Freelancer',
                    img: ('../src/assets/img/testimonial-avata-02.jpg'),
                    clicked: true
                },
                {
                    title: 'Professional team of specialists and passionate mentors at reach',
                    text: 'I need to get certification for English proficiency and MaxCoaching is my best choice. Their tutors are smart and professional when dealing with students.',
                    name: 'madley pondor',
                    job: 'IT Specialist',
                    img: ('../src/assets/img/testimonial-avata-01.jpg'),
                    clicked: false
                }
            ],
            certificationCards: [
                {
                    text: 'Successfully trained',
                    num: 1790,
                    description: 'enrolled learners'
                },
                {
                    text: 'Proudly Received',
                    num: 19,
                    description: 'countrywide awards'
                },
                {
                    text: 'Firmly Established ',
                    num: 24,
                    description: 'local branches'
                },
                {
                    text: 'Getting feautured on',
                    num: 1090,
                    description: 'blog posts'
                }
            ]
        }
    },
    created: function() {
        setInterval(this.scrollFunction, 5000);
    },
    methods: {
        scrollFunction() {
            if(this.elementActive >= this.teacherCards.length) {
                this.elementActive = -1;
            }
            this.elementActive++;
        }
    }
}
</script>

<template>
    <div>
        <div class="container-fluid p-2">
            <div class="row text-center my-5 p-0">
                <div class="col-12">
                    <h6 class="text-uppercase fw-bold">great awords about maxcoach</h6>
                    <h3 class="fw-bold">Our <span>Top Learners' </span>verbatim</h3>
                </div>
            </div>

            <div class="row g-3 justify-content-evenly">
                <div class="col-3 bg-white rounded teacher-wrapped p-5 mb-4" v-for="(teacher, index) in teacherCards" :key="index + 'f'" :class="(index === elementActive) ? ' active ' : ''" @click="elementActive = index">
                    <h5 class="fw-bold mb-3">{{ teacher.title }}</h5>
                    <p class="fw-bold">{{ teacher.text }}</p>
                    <div class="d-flex" id="teacher-min-card">
                        <img :src="teacher.img" :alt="teacher.job" class="rounded-circle me-3">

                        <div>
                            <p class="text-uppercase mb-2 fw-bold fs-7">{{ teacher.name }}</p>
                            <p>/ {{ teacher.job }}</p>
                        </div>
                    </div>
                </div>

                <div class="col-12 text-center selected-teacher-circle mb-5">
                    <font-awesome-icon icon="fa-solid fa-circle " class="fa me-3" v-for="(teacher, index) in teacherCards" :key="index + ''" :class="(index === elementActive) ? ' active ' : ''" @click="elementActive = index"></font-awesome-icon>
                </div>
            </div>

            <div class="row text-center positione-relative free-trial">
                <div class="col-12">
                    <h6 class="text-uppercase fw-bold">Start today for getting <span>Online certification</span></h6>
                    <h3 class="fw-bold">You can be your own guiding star with our help!</h3>
                    <button class="btn my-3 px-5 text-white fw-bold">Get started now</button>
                    <img class="position-absolute my-left" src="../assets/img/maxcoach-shape-01.png" alt=".">
                    <img class="position-absolute my-right" src="../assets/img/maxcoach-shape-02.png" alt=".">
                </div>
            </div>

            <div class="row text-center bg-white certification-row justify-content-center">
                <div class="col-2 p-5 border-end border-start" v-for="(card, index) in certificationCards" :key="index + 'h'">
                    <h5 class="fw-bold ">{{ card.text }}</h5>
                    <h2 class="fw-bold my-4 ">{{ card.num }}</h2>
                    <h5 class="fw-bold text-uppercase">{{ card.description }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/reset.scss' as *;

.container-fluid {
    width: calc(100% - 8px);

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
    }

    .selected-teacher-circle {
        font-size: small;
        cursor: pointer;
        filter: opacity(50%);
    }

    .teacher-wrapper {
        cursor: pointer;
        filter: opacity(50%);

        #teacher-min-card {
            img {
                height: 75px;
                width: 75px;
            }
        }

        h5 {
            color: $GunPowder;
        }

        p {
            color: $Edward;
        }

        #teacher-min-card {
            p:first-child {
                color: $GunPowder;
            }
        }
    }

    .teacher-wrapper.active{
        filter: opacity(100);
    }

    .selected-teacher-circle
    .fa.active{
        filter: opacity(100);
        font-size: medium;
    }

    .free-trial{
        margin-bottom: 6rem;
        
        h6{
            color: $GunPowder;
            
            span{
                color: $JungleGreen;
            }
        }
        
        button{
            background-color: $JungleGreen;
            color: white;
            font-weight: 700;
            padding: .5rem 2rem;
            width: 280px;
        }
        
        button:hover{
            background-color: $GunPowder;
            color: white;
        }
        
        h3{
            color: $GunPowder;
        }

        div{
            
            .my-left{
                left: 20%;
            }
            .my-right{
                right: 20%;
            }
        }
    }

    .certification-row{
        border-color: $HintOfRed;
        
        h5{
            color: $ShadyLady;
        }

        h5:first-child{
            color: $GunPowder;
        }

        h2{
            color: $JungleGreen;
        }
    }
}
</style>