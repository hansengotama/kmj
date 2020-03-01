<template>
    <div style="background: #eaeaea; height: 100%">
        <div style="margin: 0 20px;">
            <div style="padding-top: 3em; position: relative">
                <div class="table-title">
                    <div style="padding: 15px;">Verifikasi Data</div>
                    <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Mohon untuk melakukan verifikasi data sebelum simpan</div>
                </div>
                <div class="content-container">
                    <div class="content-place">
                        <div>
                            <div style="color: #3e95a9; text-transform: uppercase; margin-bottom: 18px">Data Diri</div>
                            <div class="form-custom-container">
                                <div class="form-custom-title">
                                    Nama : {{ userInfo.name }}
                                </div>
                            </div>
                            <div class="form-custom-container">
                                <div class="form-custom-title">
                                    Email : {{ userInfo.email }}
                                </div>
                            </div>
                            <div class="form-custom-container">
                                <div class="form-custom-title">
                                    Nomor Hp : {{ userInfo.phone_number }}
                                </div>
                            </div>
                            <div class="form-custom-container">
                                <div class="form-custom-title">
                                    NPWP : <span v-if="userInfo.npwp != null || userInfo.npwp != ''">{{ userInfo.npwp }}</span>
                                    <span v-else>-</span>
                                </div>
                            </div>
                        </div>
                        <div class="submit-container">
                            <button @click="verification()">Verifikasi</button>
                            <button style="background: red" @click="back()">Balik</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import request from "../../../helper/request";
    import VueCookies from "vue-cookies";
    import alert from "../../../helper/alert";

    export default {
        data() {
            return {
                userInfo: {
                    name: "",
                    email: "",
                    phone_number: "",
                    npwp: ""
                },
            }
        },
        mounted() {
            this.initData()
        },
        methods: {
            initData() {
                let userInfo = VueCookies.get('userInfo')

                if(userInfo == null) {
                    this.$router.push({
                        name: "Home"
                    })
                    return false
                }else this.userInfo = userInfo
            },
            verification() {
                if(window.confirm("Apakah anda yakin?")) {
                    if(VueCookies.get('userInfo') != null) VueCookies.remove('userInfo')

                    request.post("/api/register", this.userInfo)
                    .then((response) => {
                        this.$router.push({
                            name: "Login"
                        })
                    })
                }
            },
            back() {
                this.$router.push({
                    name: "Register"
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>

    @media (max-width 800px)
        .table-title
            width 94%
            left 3%
            right 3%

        .content-place
            padding-left 3%
            padding-right 3%
</style>
