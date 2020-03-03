<template>
    <div style=" margin: 0 4em; margin-top: 2em">
        <div style="color: #555; font-weight: lighter">
            <span class="pointer" @click="back()">
                <i class="fa fa-arrow-left"></i> Balik
            </span>
        </div>
        <div style="padding-top: 3em; position: relative;">
            <div class="table-title">
                <div style="padding: 15px;">Data Detil Transaksi</div>
                <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Data para donatur</div>
            </div>
            <div class="content-container">
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
                    <button @click="submit()">Pembayaran Diterima</button>
                    <button @click="back()">Batal</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import request from "../../../../helper/request";
    import validator from "../../../../helper/validator";
    import alert from "../../../../helper/alert";

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
                    donors_name: "",
                    vihara_id: "",
                    payment_type_id: "",
                    nominal: "",
                    id: null
                },
                viharas: [{
                    id: null,
                    name: "Bebas"
                }],
                paymentTypes: [],
                user_id: null,
                transaction: {}
            }
        },
        async mounted() {
            await this.initData()
        },
        methods: {
            async initData() {
                if(this.$route.params.transaction_id == null) {
                    this.back()
                    return false
                }

                this.user_id = this.$route.params.user_id

                await this.findTransaction(this.$route.params.transaction_id)

                await this.getPaymentType()
                await this.getVihara()
            },
            findTransaction(transaction_id) {
                return request.get("/api/transaction/" + transaction_id, this.accessToken)
                .then((response) => {
                    this.transaction = response.data

                    this.form.id = response.data.id
                    this.form.donors_name = response.data.donors_name
                    this.form.nominal = response.data.nominal
                })
            },
            back() {
                if(this.user_id == null) {
                    this.$router.push({
                        name: "Cashier Home"
                    })
                }else {
                    this.$router.push({
                        name: "Cashier Transaction",
                        params: {
                            "user_id": this.user_id
                        }
                    })
                }
            },
            getVihara() {
                return request.get("/api/get-vihara", this.accessToken)
                .then((response) => {
                    for (let i = 0; i < response.data.length; i++) {
                        this.viharas.push(response.data[i])
                    }
                    this.form.vihara_id = (this.transaction.vihara_id == null) ? null : this.transaction.vihara_id
                })
            },
            getPaymentType() {
                return request.get("/api/get-payment-type", this.accessToken)
                .then((response) => {
                    this.paymentTypes = response.data
                    this.form.payment_type_id = this.transaction.payment_type_id
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
            submit() {
                alert.confirmation('Mohon cek kembali data-datanya', 'Ya', 'Batal')
                .then((response) => {
                    if(response.value) {
                        alert.loading()
                        request.post("/api/ascashier/approve-transaction", this.form, this.accessToken)
                        .then((response) => {
                            alert.success()
                            this.back()
                        })
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .content-container
        padding-left 1%
        padding-right 1%
</style>
