<script>
export default {
    name: 'BestBlog',
    data() {
        return {
            blogInstructions: [
                'Become a Better Blogger: Content Planning' , 
                'Promoting your Online Buisness on Pintarest', 
                'Gamification and Game-Based Learning',
                'Designing an Online Course from Expert\'s Perspective',
                'Why Online Courses Are the Future of Education'
            ],
            artistBlog: [
                {
                    img: ('../src/assets/img/artist-blog-03-480x352.jpeg'),
                    job: 'artist',
                    text: 'Brush Strokes Energize Trees in Paintings',
                    date: 'May 15, 2020',
                    views: 688
                },
                {
                    img: ('../src/assets/img/artist-blog-01-480x352.jpg'),
                    job: 'artist',
                    text: 'Poked-Sized Notebooks Hold Miniature Paintings',
                    date: 'May 15, 2020',
                    views: 603 
                }
            ]
        }
    }
}
</script>

<template>
    <div>
        <div class="container p-2 py-5">
            <div class="row g-4 justify-content-around">
                <div class="col-4">
                    <p class="text-uppercase fw-bold text-uppercase">
                        enjoyable insights
                    </p>

                    <h2 class="fw-bold mb-5">Most Viewed <span class="fw-normal">Best Blogs</span></h2>

                    <div class="row">
                        <div class="col-12 d-flex" v-for="(text, index) in blogInstructions" :key="index + 'j'">
                            <font-awesome-icon icon="fa-solid fa-right-long" class="me-3 mt-1" /> 
                            <p class="fw-bold mb-3">{{text}}</p>
                        </div>
                    </div>
                </div>

                <div class="col-3 d-flex mb-5 rounded card p-0 " v-for="(card, index) in artistBlog" :key="index +'i'">
                    <img :src="card.img" alt="card.price" class="card-img-top">
                    <div class="ms-3 card-body">
                        <h6 class="fw-bold card-title text-uppercase">{{card.job}}</h6>
                        <p class="fw-bold fs-5 card-text">{{card.text}}</p>
                        <span class="me-3"><font-awesome-icon icon="fa-solid fa-calendar" /> {{card.date}} Lessons</span>
                        <span><font-awesome-icon icon="fa-solid fa-eye" /> {{ card.views }} views</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/reset.scss' as *;

.col-4 {
    p {
        color: $Edward;
    }

    h2 {
        color: $GunPowder;

        span {
            color: $JungleGreen;
        }
    }

    .col-12 {
        p,
        i {
            color: $GunPowder;
        }
    }
}

.card {
    border: none;

    h6,
    span {
        color: $Edward;
    }

    p {
        color: $GunPowder;
    }
}
</style>