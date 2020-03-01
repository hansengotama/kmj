<template>
    <div class="background">
        <div class="login-container">
            <div class="title">Sign In</div>
            <div class="input-container">
                <div class="input-email">
                    <input type="text" placeholder="Email Address" v-model="email">
                </div>
                <div class="input-password">
                    <input type="text" placeholder="Nomor Hp" v-model="password" @keyup.enter="validate()">
                </div>
                <div class="button-container">
                    <button @click="validate()">SUBMIT</button>
                </div>
                <div style="text-align: center; color: red;">
                    {{ error.text }}
                </div>
                <div style="margin-top: 20px; text-align: center">
                    Atau belum punya akun? <span @click="register()" style="color: blue; cursor: pointer"><u>Daftar Sekarang</u></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import request from "../../../helper/request"
    import validator from "../../../helper/validator";
    import VueCookies from "vue-cookies";

    export default {
        props: ['accessToken'],
        data() {
            return {
                email: "",
                password: "",
                error: {
                    text: ""
                },
            }
        },
        mounted() {


            if(this.accessToken != null) {
                this.$router.push({
                    name: "User Home"
                })
            }
        },
        methods: {
            login() {
                request.post("/api/login", {
                    email: this.email,
                    password: this.password
                })
                .then((response) => {
                    if (response.status == 200) {
                        VueCookies.set('usertoken', response.data.success.token)
                        this.$emit('getAccessToken')
                        let role = response.data.success.role

                        if(role == "user") {
                            this.$router.push({
                                name: "User Home"
                            })
                        }

                        if(role == "cashier") {
                            this.$router.push({
                                name: "Cashier Home"
                            })
                        }

                        if(role == "admin") {
                            this.$router.push({
                                name: "User"
                            })
                        }
                    }
                    else this.error.text = "Mohon cek kembali password dan email anda"
                })
                .catch(() => {
                    this.error.text = "Mohon cek kembali password dan email anda"
                })
            },
            validate() {
                if(validator.required(this.password)) {
                    this.error.text = "Password harus diisi"
                }else {
                    this.error.text = ""
                }

                if(validator.required(this.email)) {
                    this.error.text = "Email harus diisi"
                }else {
                    this.error.text = ""
                }

                if(this.error.text == "") {
                    this.login()
                }
            },
            register() {
                this.$router.push({
                    name: "Register"
                })
            }
        }
    }
</script>

<style lang="stylus">
    .background
        background rgb(152,222,251)
        background linear-gradient(0deg, rgba(152,222,251,1) 0%, rgba(5,172,246,1) 100%)
        height 100%
        width 100%
        display flex
        align-items center
        justify-content center

    .login-container
        width 30%
        min-width 250px
        background white
        border-radius 15px
        padding 25px

    .title
        text-align center

    .input-container
        padding-top 2em

    .input-email
        display flex

    .input-email > input,
    .input-password > input
        border-radius 20px
        padding 10px 15px
        width 80%
        margin 0 auto
        border 3px solid #eaeaea

    .button-container
        display flex
        padding-top 2.5em

    .input-password
        display flex
        padding-top 1.3em

    .button-container > button
        border-radius 20px
        padding 10px 0
        width 80%
        margin 0 auto
        background rgba(5,172,246,1)
        color white
        cursor pointer
        border none
</style>
