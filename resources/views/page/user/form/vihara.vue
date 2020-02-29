<template>
    <div style="background: #eaeaea; height: 100%">
        <div style="margin: 0 20px;">
            <div style="padding-top: 3em; position: relative">
                <div class="table-title">
                    <div style="padding: 15px;">Pilih Vihara</div>
                    <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Vihara yang dipilih hanya 1</div>
                </div>
                <div class="content-container">
                    <div class="content-place">
                        <div class="test">
                            <div v-for="vihara in viharas" :class="(vihara.id == selectedVihara.id) ? 'active' : ''" @click="selectVihara(vihara)">
                                <div style="padding: 10px">
                                    <div>{{ vihara.name }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="submit-container" style="margin-top: 1.5em">
                            <button @click="next()">Lanjut</button>
                            <button @click="back()" style="background: red">Balik</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import request from "../../../../helper/request";
    import VueCookies from "vue-cookies";

    export default {
        data() {
            return {
                viharas: [],
                selectedVihara: "",
            }
        },
        async mounted() {
            await this.getVihara()
            this.initData()
        },
        methods: {
            initData() {
                let donationInfo = VueCookies.get('donationInfo')
                let userInfo = VueCookies.get('userInfo')
                let selectedVihara = VueCookies.get('selectedVihara')

                if(donationInfo.nominal == null) {
                    this.back()
                    return false
                }

                if(userInfo.name == null) {
                    this.$router.push({
                        name: "Form"
                    })

                    return false
                }

                if(donationInfo != null) {
                    this.selectedVihara = selectedVihara
                    this.$forceUpdate()
                }
            },
            getVihara() {
                return request.get("/api/asuser/vihara")
                .then((response) => {
                    this.viharas = response.data

                    this.selectedVihara = this.viharas[0]
                })
            },
            selectVihara(data) {
                this.selectedVihara = data
            },
            back() {
                this.$router.push({
                    name: "Donation Form"
                })
            },
            next() {
                VueCookies.set('selectedVihara', this.selectedVihara)

                this.$router.push({
                    name: "Verification Form"
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .test
        display grid
        grid-gap 1em
        grid-template-columns repeat(3, 1fr)
        cursor pointer
        margin 0 1em

    .test > div
        width 100%
        border 1px solid #3e95a9
        border-radius 3px

    .test > div.active
        background #d3e1e4

    @media (max-width 800px)
        .table-title
            width 94%
            left 3%
            right 3%

        .content-place
            padding-left 3%
            padding-right 3%

    @media (max-width: 800px)
        .test
            grid-template-columns repeat(2, 1fr)

    @media (max-width: 600px)
        .test
            grid-template-columns 1fr
</style>
