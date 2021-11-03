<template>
    <v-app>
        <v-app-bar
            app
            elevate-on-scroll
            elevation="0"
            color="white"
            class="accent--text"
            height="50"
        >
            <div>
                <v-tabs
                    hide-slider
                    slider-color="accent"
                    height="45"
                    background-color="white"
                    optional
                >
                    <v-avatar
                        color="primary"
                        size="45"
                    >
                        <span class="white--text"> logo</span>
<!--                        <v-img src="">-->
<!--                            -->
<!--                        </v-img>-->
                    </v-avatar>

                    <v-tab
                        class="font-weight-bold"
                        :class="$vuetify.breakpoint.mdAndUp ? '':'caption' "
                        to="/"
                        text
                    >
                        <span>Acceuil</span>
                    </v-tab>
                    <v-tab
                        to="/"
                        class="font-weight-bold"
                        :class="$vuetify.breakpoint.mdAndUp ? '':'caption' "
                        text
                    >
                        <span>Témoigner</span>
                    </v-tab>
                    <v-tab
                        to="/"
                        class="font-weight-bold "
                        :class="$vuetify.breakpoint.mdAndUp ? '':'caption' "
                        text
                    >
                        <span>Statistiques</span>
                    </v-tab>
                </v-tabs>
            </div>
        </v-app-bar>
        <section id="hero">
            <v-row no-gutters>
                <!--          :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"-->
                <v-carousel
                    cycle
                    height="500"
                    hide-delimiter-background
                    show-arrows-on-hover
                >
                    <v-carousel-item
                        v-for="(slide, i) in slides"
                        :key="i"
                    >
                        <v-sheet
                            height="100%"
                        >
                            <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                            >
                                <v-img
                                    transition="slide-x-transition"
                                    height="500"
                                    :gradient="gradient"
                                    color="#45516b"
                                    :src="srcImage[i]"
                                >
                                    <v-theme-provider>
                                        <v-container fill-height>
                                            <v-row
                                                class="mx-auto"
                                                justify="center"
                                            >
                                                <v-col
                                                    class="text-center"
                                                >
                                                  <span>
                                                    <p /><div class="lead">{{ slides[i] }}</div>
                                                    <div class="tagline">Faite le savoir !</div>
                                                      </p>

                                                      <v-btn
                                                          class="mx-2"
                                                          large
                                                          color="primary"
                                                          @click="$vuetify.goTo('#about-us')"
                                                      >
                                                      <span class="white--text">Témoigner</span>
                                                    </v-btn>

                                                  </span>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-theme-provider>
                                </v-img>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-row>
        </section>

        <section >
            <div class="py-2" />

            <v-container class="">
                STOP CORRUPTION 221 est une platforme en ligne qui vise a informer et denoncer la corruption sous toutes ses formes. <br/>
                Témoignez rapidement, de façon totalement <strong>annonyme</strong> et sans vous déplacer.
                Si vous avez assisté ou avez été victime de corruption faite le savoir à tout le monde via STOP CORRUPTION 221
            </v-container>

            <div class="py-2" />
        </section>
        <section id="features" class="accent feature-section py-6 img-fluid">
            <div class="container">
                <div class="">
                    <div class="row">
                        <div class=" pa-4 heading-main heading-main-white">
                            <h2 class="heading">
                                Témoignages
                            </h2>
                            <v-responsive
                                class=""
                                width="56"
                            >
                                <v-divider class="mb-1 white pb-1" />
                            </v-responsive>
                        </div>
                    </div>

                    <v-row dense>
                        <v-col  class="pa-4 white--text text-center"
                               v-for="(item, index) in temoignages"
                               :key="index"
                        >
                            <div
                                class="pa-1 font-weight-bold title"
                            >
                                {{item.stat}}
                            </div>

                            <div
                                class="pa-1"
                            >
                                {{item.title}}
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </section>


    </v-app>
</template>

<script>
import {
    HexToRGBA,
    RGBAtoCSS
} from 'vuetify/lib/util/colorUtils'

export default {

    filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix
            } else {
                return text
            }
        }
    },
    components: {

    },
    props: {
        source: String
    },
    data () {
        return{
            srcImage: [
                'https://picsum.photos/1920/1080?random',
                'https://picsum.photos/1920/1080?random',
            ],
            slides: [
                'Vous avez été victime de corruption ?',
                'Vous avez assisté à une scène de corruption ?',
            ],
            temoignages: [
                {
                    title: 'Rapports reçus',
                    stat: 123
                },
                {
                    title: 'Montant payés',
                    stat: 123
                },
                {
                    title: 'Pots de vin',
                    stat: 123
                },
                {
                    title: 'Refus de payer',
                    stat: 123
                }
            ]
        }
    },

    computed: {
        gradient () {
            const color = `${this.$vuetify.theme.themes.light.gradient}CC`
            const overlay = RGBAtoCSS(HexToRGBA(color))

            return `to top, ${overlay}, ${overlay}`
        }
    },
    mounted () {
    },

    methods: {
        onfeatures (value) {
            switch (value) {
                case 0:
                    this.v_cons = 0
                    break
                case 1:
                    this.v_immo = 0
                    break
                case 2:
                    this.v_electro = 0
                    break
                default:
                    this.onfeatureLeave()
            }
        },
        onfeatureLeave () {
            this.v_cons = null
            this.v_immo = null
            this.v_electro = null
        },
        showService (service) {
            switch (service) {
                case 1:
                    this.showSC = true
                    this.showSCT = false
                    break
                case 2:
                    this.showSI = true
                    this.showSIT = false
                    break
            }
        }

    }
}
</script>

<style>
.f-ul {
    list-style-type: none;
}
.f-li:before {
    content: '- ';
}

/*h1, h2, h3, h4, h5, h6 {*/
/*    color: #ffffff;*/
/*}*/
a, a:hover, a:focus, a:active {
    text-decoration: none;
    outline: none;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.heading {
    margin-top: 0px;
}
.separator {
    position: relative;
    display: inline-block;
    text-transform: capitalize;
    margin-bottom: 30px;
}
.separator:after,
.separator:before {
    position: absolute;
    content: "";
    width: 50px;
    height: 2px;
    background: #353535;
    top: 50%;
}

.separator i {
    color: #353535;
}

.separator:after {
    right: 140%;
}

.separator:before {
    left: 140%;
}
.heading-main-white {
    color: #fff;
}

.heading-main-white .separator {
    color: #fff;
}

.heading-main-white .separator:before, .heading-main-white .separator:after {
    background: #2962FF;
}

.heading-main-white .separator i {
    color: #2962FF;
}

.feature-section {
    background-image: url("/img/feature-section-image.png");
    background-position: 50% 50%;
    background-size: cover;
    background-color: #2962FF;
    background-repeat: no-repeat;
    padding: 60px 0;
    /*min-height: 100vh;*/
}

.feature-section2 {

    padding: 60px 0;

}

.features-div {
}
.feature-back:hover {
    color: #fff !important;
    background-color: #ffffff1c;
    border-radius: 11px;
}
.feature-back {
    color: #fff !important;
    padding: 18px;
}
.feature-back2:hover {
    background-color: #2962FF;
    color: #fff !important;
    border-radius: 11px;
}
.feature-back2 {
    padding: 18px;
}
.features-title {

    font-size: 30px;
    letter-spacing: 0.5px;
    text-align: center;
    color: #fff;
}
.below-line-feature {
    border-top: 2px solid #fff;
    display: inline-block;
    bottom: auto;
    left: auto;
    margin: auto auto auto 0;
    font-size: 16px;
    color: #fff;
    padding-left: 50px;
    padding-top: 4px;
}
.features-div i {
    color: #2962FF;
    /*font-size: 48px !important;*/
    float: left;
    padding-right: 18px;
    padding-top: 15px;
}
.features-heading {
    font-size: 19.98px;
    letter-spacing: 0.5px;
}

.features-heading2 {
    font-size: 13.98px;
    letter-spacing: 0.5px;
}

.features-div p {
    font-size: 14px;
    color: #fff;
    padding-left: 40px;
    line-height: 2;
}
.lead {
    font-family:"Open sans", Helvetica, Arial,serif;
    font-size:44px;
    margin-bottom:6px;
    color:white;
    line-height:1.15em;
}
.tagline {
    color:rgba(255,255,255,0.75);
}

</style>
