<template>
    <div style="background: #eaeaea; height: 100%">
        <div style="margin: 0 20px;">
            <div style="padding-top: 3em; position: relative">
                <div class="table-title">
                    <div style="padding: 15px;">Data Diri</div>
                    <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Email dan Nomor Handphone hanya dapat digunakan 1 kali</div>
                </div>
                <div class="content-container">
                    <div class="content-place">
                        <div class="form-custom-container">
                            <div class="form-custom-title">
                                Nama <span class="red-text">*</span>
                            </div>
                            <div class="form-custom-input" style="float: right; text-align: right;">
                                <input type="text" placeholder="Nama Lengkap" :class="error.class.name" v-model="form.name">
                                <div class="error-text">{{ error.message.name }}</div>
                            </div>
                        </div>
                        <div class="form-custom-container">
                            <div class="form-custom-title">
                                Email <span class="red-text">*</span>
                            </div>
                            <div class="form-custom-input" style="float: right; text-align: right;">
                                <input type="text" placeholder="Email yang aktif" :class="error.class.email" v-model="form.email">
                                <div class="error-text">{{ error.message.email }}</div>
                            </div>
                        </div>
                        <div class="form-custom-container">
                            <div class="form-custom-title">
                                Nomor HP <span class="red-text">*</span>
                            </div>
                            <div class="form-custom-input" style="float: right; text-align: right;">
                                <input type="text" placeholder="Nomor Handphone" :class="error.class.phone_number" v-model="form.phone_number">
                                <div class="error-text">{{ error.message.phone_number }}</div>
                            </div>
                        </div>
                        <div class="form-custom-container">
                            <div class="form-custom-title">
                                NPWP
                            </div>
                            <div class="form-custom-input" style="float: right; text-align: right;">
                                <input type="text" placeholder="npwp (jika diperlukan)" v-model="form.npwp">
                            </div>
                        </div>
                        <div class="submit-container">
                            <button @click="save()">simpan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueCookies from 'vue-cookies'
    import validator from "../../../helper/validator";
    import request from "../../../helper/request";

    export default {
        props: ['accessToken'],
        data() {
            return {
                form: {
                    name: "",
                    phone_number: "",
                    email: "",
                    npwp: "",
                },
                error: {
                    class: {
                        name: "",
                        phone_number: "",
                        email: "",
                        npwp: "",
                    },
                    message: {
                        name: "",
                        phone_number: "",
                        email: "",
                        npwp: "",
                    }
                }
            }
        },
        mounted() {
            if(this.accessToken != null) {
                this.$router.push({
                    name: "User Home"
                })
            }
            this.initData()
        },
        methods: {
            initData() {
                let userInfo = VueCookies.get('userInfo')

                if(userInfo != null) {
                    if(userInfo.name != null) this.form.name = userInfo.name
                    if(userInfo.email != null) this.form.email = userInfo.email
                    if(userInfo.phone_number != null) this.form.phone_number = userInfo.phone_number
                    if(userInfo.npwp != null) this.form.npwp = userInfo.npwp
                }
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
            async validateEmail() {
                let success = true

                if(validator.required(this.form.email)) {
                    success = false
                    this.error.class.email = "error-input"
                    this.error.message.email = "Email harus diisi"
                } else if(validator.emailFormat(this.form.email)) {
                    success = false
                    this.error.class.email = "error-input"
                    this.error.message.email = "Email harus sesuai format"
                } else if(await this.checkUserEmail() == 1) {
                    success = false
                    this.error.class.email = "error-input"
                    this.error.message.email = "Email tidak bisa dipakai"
                } else {
                    this.error.class.email = ""
                    this.error.message.email = ""
                }

                return success
            },
            checkUserEmail() {
                let data = {}
                data.email = this.form.email

                return request.post('/api/asuser/user/check', data)
                .then((response) => {
                    return response.data
                })
            },
            checkUserPhoneNumber() {
                let data = {}
                data.phone_number = this.form.phone_number

                return request.post('/api/asuser/user/check', data)
                .then((response) => {
                    return response.data
                })
            },
            async validatePhoneNumber() {
                let success = true

                if(validator.required(this.form.phone_number)) {
                    success = false
                    this.error.class.phone_number = "error-input"
                    this.error.message.phone_number = "Nomor telepon harus diisi"
                } else if(await this.checkUserPhoneNumber() == 1) {
                    success = false
                    this.error.class.phone_number = "error-input"
                    this.error.message.phone_number = "Nomor telepon tidak bisa dipakai"
                } else{
                    this.error.class.phone_number = ""
                    this.error.message.phone_number = ""
                }

                return success
            },
            async save() {
                let validateSuccess = true

                let validatePhoneNumber = await this.validatePhoneNumber()
                let validateEmail = await this.validateEmail()
                if (!this.validateName()) validateSuccess = false
                if (!validateEmail) validateSuccess = false
                if (!validatePhoneNumber) validateSuccess = false

                if(validateSuccess) {
                    VueCookies.set('userInfo', this.form)

                    this.$router.push({
                        name: "Register Verification"
                    })
                }
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .form-custom-container
        align-items start
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
