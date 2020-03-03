<template>
    <div>
        <div style="color: #555; font-weight: lighter">
            <span class="pointer" @click="back()">
                <i class="fa fa-arrow-left"></i> Balik
            </span>
        </div>
        <div style="padding-top: 3em; position: relative">
            <div class="table-title">
                <div style="padding: 15px;">Ubah Transaksi</div>
                <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Transaksi yang dibuat oleh para user</div>
            </div>
            <div class="content-container">
                <div class="content-place">
                    <div class="form-custom-container">
                        <div class="form-custom-title">
                            Vihara
                        </div>
                        <div class="form-custom-input">
                            <select v-model="form.vihara_id">
                                <option :value="vihara.id" v-for="vihara in viharas">{{ vihara.name }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-custom-container">
                        <div class="form-custom-title">
                            Metode Pembayaran
                        </div>
                        <div class="form-custom-input">
                            <select v-model="form.payment_type_id">
                                <option :value="paymentType.id" v-for="paymentType in paymentTypes">{{ paymentType.name }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-custom-container">
                        <div class="form-custom-title">
                            Nama Donatur
                        </div>
                        <div class="form-custom-input">
                            <input type="text" placeholder="Nama Donatur" :class="error.class.donors_name" v-model="form.donors_name">
                            <div class="error-text">{{ error.message.donors_name }} </div>
                        </div>
                    </div>
                    <div class="form-custom-container">
                        <div class="form-custom-title">
                            Nominal
                        </div>
                        <div class="form-custom-input">
                            <input type="text" :class="error.class.nominal" v-model="form.nominal">
                            <div class="error-text">{{ error.message.nominal }} </div>
                        </div>
                    </div>
                    <div class="submit-container">
                        <button @click="edit()">Ganti</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import validator from "../../../../helper/validator";
    import alert from "../../../../helper/alert";
    import request from "../../../../helper/request";

    export default {
        props: ['accessToken'],
        data() {
            return {
                error: {
                    class: {
                        donors_name: "",
                        nominal: "",
                        payment_type: "",
                        vihara: ""
                    },
                    message: {
                        donors_name: "",
                        nominal: "",
                        payment_type: "",
                        vihara: ""
                    }
                },
                form: {
                    id: null,
                    donors_name: "",
                    nominal: "",
                    payment_type_id: null,
                    vihara_id: null
                },
                viharas: [{
                    id: null,
                    name: "Bebas"
                }],
                paymentTypes: [],
                paramData: {}
            }
        },
        async mounted() {
            await this.initData()
        },
        methods: {
            async initData() {
                this.paramData = this.$route.params

                if(this.paramData.id == null) {
                    this.back()
                    return false
                }

                await this.getPaymentType()
                await this.getVihara()

                this.form.id = this.paramData.id
                this.form.donors_name = this.paramData.donors_name
                this.form.nominal = this.paramData.nominal
            },
            getVihara() {
                return request.get("/api/get-vihara", this.accessToken)
                .then((response) => {
                    for (let i = 0; i < response.data.length; i++) {
                        this.viharas.push(response.data[i])
                    }
                    this.form.vihara_id = (this.paramData.vihara == null) ? null : this.paramData.vihara.id
                })
            },
            getPaymentType() {
                return request.get("/api/get-payment-type", this.accessToken)
                .then((response) => {
                    this.paymentTypes = response.data
                    this.form.payment_type_id = this.paramData.payment_type.id
                })
            },
            back() {
                this.$router.push({
                    name: "Transaction"
                })
            },
            validateDonorsName() {
                let success = true

                if(validator.required(this.form.donors_name)) {
                    success = false
                    this.error.class.donors_name = "error-input"
                    this.error.message.donors_name = "Nama Donatur harus diisi"
                }else {
                    this.error.class.donors_name = ""
                    this.error.message.donors_name = ""
                }

                return success
            },
            validateNominal() {
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
            edit() {
                alert.loading()
                request.post("/api/transaction/update", this.form, this.accessToken)
                .then((response) => {
                    alert.success()

                    this.$router.push({
                        name: "Transaction"
                    })
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
