<template>
    <div>
        <div style="color: #555; font-weight: lighter">
            <span class="pointer" @click="back()">
                <i class="fa fa-arrow-left"></i> Balik
            </span>
        </div>
        <div style="padding-top: 3em; position: relative">
            <div class="table-title">
                <div style="padding: 15px;">Ubah Tipe Pembayaran</div>
                <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Tipe Transaksi yang digunakan untuk pembayaran</div>
            </div>
            <div class="content-container">
                <div class="content-place">
                    <div class="form-custom-container">
                        <div class="form-custom-title">
                            Cicilan
                        </div>
                        <div class="form-custom-input">
                            <select v-model="form.is_installment">
                                <option :value=true>Iya</option>
                                <option :value=false>Tidak</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-custom-container">
                        <div class="form-custom-title">
                            Nama
                        </div>
                        <div class="form-custom-input">
                            <input type="text" placeholder="Nama" :class="error.class.name" v-model="form.name">
                            <div class="error-text">{{ error.message.name }} </div>
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
                        is_installment: "",
                        name: ""
                    },
                    message: {
                        is_installment: "",
                        name: ""
                    }
                },
                form: {
                    is_installment: "",
                    id: "",
                    name: ""
                }
            }
        },
        mounted() {
            this.initData()
        },
        methods: {
            initData() {
                let data = this.$route.params

                if(data.id == null) {
                    this.back()
                    return false
                }

                this.form.id = data.id
                this.form.name = data.name
                if(data.is_installment == 0) this.form.is_installment = false
                else this.form.is_installment = true
            },
            back() {
                this.$router.push({
                    name: "Payment Type"
                })
            },
            validateName() {
                let success = true

                if(validator.required(this.form.name)) {
                    success = false
                    this.error.class.name = "error-input"
                    this.error.message.name = "Nama harus diisi"
                }else {
                    this.error.class.name = ""
                    this.error.message.name = ""
                }

                return success
            },
            edit() {
                if(this.validateName()) {
                    alert.loading()

                    request.post("/api/payment-type/update", this.form, this.accessToken)
                    .then((response) => {
                        alert.success()
                        this.back()
                    })
                    .catch((error) => {
                        alert.error()
                    })
                }
            },
        }
    }
</script>

<style lang="stylus" scoped>

</style>
