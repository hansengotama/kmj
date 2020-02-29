<template>
    <div style="background: #eaeaea; height: 100%">
        <div style="margin: 0 20px;">
            <div style="padding-top: 3em; position: relative">
                <div class="table-title">
                    <div style="padding: 15px;">Data Donasi</div>
                    <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Donasi tersebut harus blablabla</div>
                </div>
                <div class="content-container">
                    <div class="content-place">
                        <div class="form-custom-container">
                            <div class="form-custom-title">
                                Nominal <span class="red-text">*</span>
                            </div>
                            <div class="form-custom-input" style="text-align: right">
                                <input type="number" placeholder="Nominal" :class="error.class.nominal" v-model="form.nominal" @input="inputNominal($event)" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                                <div class="error-text">{{ error.message.nominal }}</div>
                            </div>
                        </div>
                        <div class="form-custom-container">
                            <div class="form-custom-title">
                                Cara Pembayaran <span class="red-text">*</span>
                            </div>
                            <div class="form-custom-input" style="text-align: right">
                                <select v-model="form.paymentType" :class="error.class.paymentType">
                                    <option :value="data.id" v-for="data in transactionTypes">{{ data.name}}</option>
                                </select>
                                <div class="error-text">{{ error.message.paymentType }}</div>
                            </div>
                        </div>

                        <div>
                            Donasi Ke
                            <div style="margin-top: 10px; margin-bottom: 25px">
                                <div>
                                    <div style="margin-bottom: 10px">
                                        <input type="radio" v-model="form.transferTo" id="bebas" value="bebas">
                                        <label for="bebas">Bebas (Akan dibagi ke blabla)</label>
                                    </div>
                                    <div>
                                        <input type="radio" v-model="form.transferTo" id="vihara" value="vihara">
                                        <label for="vihara">Pilih Vihara</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="submit-container">
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
    import validator from "../../../../helper/validator"
    import format from "../../../../helper/format"
    import request from "../../../../helper/request"
    import VueCookies from "vue-cookies"

    export default {
        data() {
            return {
                form: {
                    nominal: 0,
                    paymentType: "",
                    transferTo: "bebas"
                },
                error: {
                    class: {
                        nominal: "",
                        paymentType: ""
                    },
                    message: {
                        nominal: "",
                        paymentType: ""
                    }
                },
                transactionTypes: [],

            }
        },
        async mounted() {
            await this.getPaymentType()
            this.initData()
        },
        methods: {
            initData() {
                let donationInfo = VueCookies.get('donationInfo')
                let userInfo = VueCookies.get('userInfo')
                if(userInfo.name == null) {
                    this.back()
                    return false
                }
                if(donationInfo != null) {
                    if(donationInfo.nominal != null) this.form.nominal = donationInfo.nominal
                    if(donationInfo.paymentType != null) this.form.paymentType = donationInfo.paymentType
                    if(donationInfo.transferTo != null) this.form.transferTo = donationInfo.transferTo
                }
            },
            getPaymentType() {
                return request.get("/api/asuser/payment-type")
                .then((response) => {
                    this.transactionTypes = response.data
                    this.form.paymentType = this.transactionTypes[0]['id']
                })
            },
            validateNonimal() {
                let success = true

                if(validator.required(this.form.nominal)) {
                    success = false
                    this.error.class.nominal = "error-input"
                    this.error.message.nominal = "Nominal harus diisi"
                }else {
                    this.error.class.nominal = ""
                    this.error.message.nominal = ""
                }

                return success
            },
            validatePaymentType() {
                let success = true

                if(validator.required(this.form.paymentType)) {
                    success = false
                    this.error.class.paymentType = "error-input"
                    this.error.message.paymentType = "Cara Pemmbayaran harus diisi"
                }else {
                    this.error.class.paymentType = ""
                    this.error.message.paymentType = ""
                }

                return success
            },
            next() {
                let validateSuccess = true

                if (!this.validateNonimal()) validateSuccess = false
                if (!this.validatePaymentType()) validateSuccess = false

                console.log(validateSuccess)
                if(validateSuccess) {
                    VueCookies.set('donationInfo', this.form)

                    this.$router.push({
                        name: "Vihara Form"
                    })
                }
            },
            inputNominal(event) {
                let price = event.target.value
                price = format.remove(price)
                if(isNaN(price)) {
                    price = 0
                }
                this.form.nominal = format.number(price)
            },
            back() {
                this.$router.push({
                    name: "Form"
                })
            }

        }
    }
</script>

<style lang="stylus" scoped>
    .form-custom-container
        align-items center
        padding-bottom 12px
        padding-top 10px

    @media (max-width 800px)
        .table-title
            width 94%
            left 3%
            right 3%

        .content-place
            padding-left 3%
            padding-right 3%

</style>
