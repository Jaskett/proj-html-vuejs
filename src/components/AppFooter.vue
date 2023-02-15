<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            addressInfo: [
                {
                    location: '382 NE 191st St #87394 Miami, FL 33179-3899',
                    phone: '+1(305)547-9909 (9am - 5pm EST, Monday - Friday)',
                    mail: 'suuport@maxcoach.com'
                }
            ],
            exploreInfo: [
                'Start here',
                'Blog',
                'About us',
                'Success story',
                'Courses',
                'Contact us'
            ],
            informationInfo: [
                'Membership',
                'Purchase guide',
                'Privacy policy',
                'Terms of service'
            ]
        }
    }
}
</script>

<template>
    <div>
        <div class="container p-2 pt-5">
            <div class="row">
                <div class="col-6 mb-5" v-for="(address, index) in addressInfo" :key="index + 'k'">
                    <h5 class="mb-4 fw-bold">Address</h5>

                    <div id="address-info">
                        <p>{{ address.location }}</p>
                        <p>{{ address.phone }}</p>
                        <p class="mb-4">{{ address.mail }}</p>

                        <div class="icons">
                            <font-awesome-icon icon="fa-brands fa-facebook" class="me-3 fs-4"/>
                            <font-awesome-icon icon="fa-brands fa-twitter" class="me-3 fs-4"/>
                            <font-awesome-icon icon="fa-brands fa-instagram" class="me-3 fs-4"/>
                            <font-awesome-icon icon="fa-brands fa-linkedin" class="me-3 fs-4"/>
                        </div>
                    </div>
                </div>

                <div class="col-3">
                    <h5 class="mb-4 fw-bold">Explore</h5>

                    <div class="d-flex flex-column flex-wrap" id="explore-info">
                        <a href="#" v-for="(info, index) in exploreInfo" :key="index + 'l'">{{ info }}</a>
                    </div>
                </div>

                <div class="col-3">
                    <h5 class="mb-4 fw-bold">Information</h5>

                    <div class="d-flex flex-column flex-wrap" id="information-info">
                        <a href="#" v-for="(info, index) in informationInfo" :key="index + 'm'">{{ info }}</a>
                    </div>
                </div>

                <div class="col-12 text-center p-5">
                    <a href="#"><font-awesome-icon icon="fa-solid fa-copyright"/> 2023 Maxcoach, All Rights reserved</a>
                </div>
            </div>

            <a href="#" class="fs-1 p-4 text-white shadow-lg position-absolute" id="return-to-top">
                <font-awesome-icon icon="fa-solid fa-arrow-up-long" />
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/reset.scss' as *;

#address-info {
    color: $CodGrey;
}

.icons {
    color: $Edward;
}

#explore-info {
    height: 95px;

    a {
        color: $CodGrey;
        text-decoration: none;
    }
}

#information-info {
    a {
        color: $CodGrey;
        text-decoration: none;
    }
}

.col-12 {
    a {
        color: $Edward;
        text-decoration: none;
    }
}

#return-to-top {
    bottom: 2%;
    right: 2%;
    height: 80px;
    width: 80px;
    background-color: $JungleGreen;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>