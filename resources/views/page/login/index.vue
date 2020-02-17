<template>
    <div class="background">
        <div class="login-container">
            <div class="title">Sign In</div>
            <div class="input-container">
                <div class="input-email">
                    <input type="text" placeholder="Email Address" v-model="email">
                </div>
                <div class="input-password">
                    <input type="password" placeholder="Password" v-model="password">
                </div>
                <div class="button-container">
                    <button @click="login">SUBMIT</button>
                </div>
                <div style="text-align: center; color: red;">
                    {{ error.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import request from "../../../helper/request"

    export default {
        data() {
            return {
                email: "",
                password: "",
                error: {
                    text: ""
                },
                token: ""
            }
        },
        methods: {
            login() {
                request.post("/api/login", {
                    email: this.email,
                    password: this.password
                })
                .then((response) => {
                    if (response.status == 200)
                        this.token = response.data.success.token
                    else {
                        this.error.text = "Mohon cek kembali password dan email anda"
                    }
                })
                .catch(() => {
                    this.error.text = "Mohon cek kembali password dan email anda"
                })
            },
            validate() {
                if(this.password.length < 1) {
                    this.error.text = "Password harus diisi"
                }else {
                    this.error.text = ""
                }

                if(this.email.length < 1) {
                    this.error.text = "Email harus diisi"
                }else {
                    this.error.text = ""
                }

                // this.login()
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
