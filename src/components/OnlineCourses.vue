<script>
export default {
    name: 'OnlineCourses',
    data() {
        return {
            courses: [
                {
                    img: ('../src/assets/img/course-02-480x298.jpg'),
                    price: '$40.00',
                    text: 'Learning to Write as a Professional Author',
                    lessons: 20,
                    students: 50
                },
                {
                    img: ('../src/assets/img/stock-full-hd-03-480x298.jpg'),
                    price: 'Free',
                    text: 'Customer-centric Info-Tech Strategies',
                    lessons: 24,
                    students: 769
                },
                {
                    img: ('../src/assets/img/stock-full-hd-04-480x298.jpg'),
                    price: '$19.00',
                    text: 'Open Programming Courses for Everyone: Python',
                    lessons: 17,
                    students: 62
                },
                {
                    img: ('../src/assets/img/stock-full-hd-06-480x298.jpg'),
                    price: '$26.00',
                    text: 'Academic Listening and Note-taking',
                    lessons: 14,
                    students: 67
                },
                {
                    img: ('../src/assets/img/course-featured-image-01-480x298.jpg'),
                    price: '$39.00',
                    text: 'Master jQuery in a Short Period of Time',
                    lessons: 6,
                    students: 51 
                },
                {
                    img: ('../src/assets/img/stock-full-hd-05-480x298.jpg'),
                    price: '$59.00',
                    text: 'Intoduction to Javascript for Beginners',
                    lessons: 14,
                    students: 76
                }
            ]
        }
    }
}
</script>

<template>
    <div id="online-wrapper">
        <div class="container p-2 py-5">
            <div class="row text-center mb-5">
                <div class="col-12">
                    <p class="text-uppercase fw-bold">
                        stimulated to learn?
                    </p>
                </div>

                <div class="col-12">
                    <h2 class="fw-bold">Featured Online Courses</h2>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-6 d-flex mb-5 rounded" v-for="(card, index) in courses" :key="index + 'e'">
                    <img :src="card.img" alt="Card Img">

                    <div class="ms-3">
                        <h4 class="fw-bold">{{ card.price }}</h4>
                        <p class="fw-bold fs-5">{{ card.text }}</p>
                        <span class="me-3"><font-awesome-icon icon="fa-solid fa-file"/> {{ card.lessons }} Lessons</span>
                        <span><font-awesome-icon icon="fa-regular fa-circle-user"/> {{ card.students }} Students</span>
                    </div>
                </div>
            </div>

            <div class="row text-center">
                <div class="col-12">
                    <button class="btn my-3 px-5 text-white fw-bold">
                        View All Courses <font-awesome-icon icon="fa-solid fa-right-long"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/reset.scss' as *;

.col-12 {
    p {
        color: $light_grey;
    }

    h2 {
        color: $grey;
    }
}

.col-6 {
    padding: 1rem;
    cursor: pointer;

    img {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        object-fit: cover;
    }

    h4 {
        color: $aqua;
    }

    p {
        color: $grey;
    }

    span {
        color: $light_grey;
    }
}

.col-6:hover {
    background-color: $white;

    p {
        color: $aqua;
    }
}

button {
    background-color: $aqua;
    color: white;
    font-weight: 700;
    padding: .5rem 2rem;
    width: 280px;
}

button:hover {
    background-color: $purple;
    color: white;
}
</style>