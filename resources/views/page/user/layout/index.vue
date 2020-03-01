<template>
    <div style="height: 100%">
        <div class="custom-navbar">
            <div class="custom-navbar-content">
                <div>
                    <img :src="'/image/logo.jpeg'" alt="" height="40px">
                </div>
                <div style="display: flex; height: 100%; align-items: center" class="long-menu">
                    <div class="custom-navbar-menu">
                        <router-link :to="{ name: 'User Home' }" class="navbar-name">Beranda</router-link>
                    </div>
                    <div class="custom-navbar-menu">
                        <router-link :to="{ name: 'Donation Form' }" class="navbar-name">Donasi</router-link>
                    </div>
                    <div class="custom-navbar-menu">
                        <router-link :to="{ name: 'How To Use' }" class="navbar-name">Cara Pemakaian</router-link>
                    </div>
                    <div class="custom-navbar-menu">
                        <router-link :to="{ name: 'How To Pay' }" class="navbar-name">Cara Pembayaran</router-link>
                    </div>
                    <div class="custom-navbar-menu">
                        <div class="navbar-logout" @click="logout()">Keluar</div>
                    </div>
                </div>
                <div style="cursor: pointer" class="burger-boss" @click="triggerShowMenu()" v-if="!showMenu">
                    <i class="fa fa-bars"></i>
                </div>
                <div style="cursor: pointer" class="burger-boss" @click="triggerHideMenu()" v-else>
                    <i class="fa fa-times"></i>
                </div>
            </div>
        </div>
        <div v-if="!showMenu">
            <router-view :accessToken="accessToken"></router-view>
        </div>
        <div v-else style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-top: 2em">
            <div style="padding: 10px" @click="triggerHideMenu()">
                <router-link :to="{ name: 'User Home' }" class="short-menu" >Beranda</router-link>
            </div>
            <div style="padding: 10px" @click="triggerHideMenu()">
                <router-link :to="{ name: 'Donation Form' }" class="short-menu">Donasi</router-link>
            </div>
            <div style="padding: 10px" @click="triggerHideMenu()">
                <router-link :to="{ name: 'How To Use' }" class="short-menu">Cara Pemakaian</router-link>
            </div>
            <div style="padding: 10px" @click="triggerHideMenu()">
                <router-link :to="{ name: 'How To Pay' }" class="short-menu">Cara Pembayaran</router-link>
            </div>
            <div style="padding: 10px" @click="logout()">
                Keluar
            </div>
        </div>
    </div>
</template>

<script>
    import VueCookies from "vue-cookies";

    export default {
        props: ['accessToken'],
        data() {
            return {
                showMenu: false
            }
        },
        created() {
            this.getAccessToken()
        },
        mounted() {
            if(this.accessToken == null) {
                this.$router.push({
                    name: "Login"
                })
            }
        },
        methods: {
            triggerShowMenu() {
                this.showMenu = true
            },
            triggerHideMenu() {
                this.showMenu = false
            },
            async logout() {
                await VueCookies.remove('donationInfo')
                await VueCookies.remove('selectedVihara')
                await VueCookies.remove('usertoken')
                this.getAccessToken()

                this.$router.push({
                    name: "Login"
                })
            },
            getAccessToken() {
                this.$emit('getAccessToken')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .custom-navbar
        width 100%
        height 4em
        background white
        -webkit-box-shadow 0 5px 5px 0 #bebebf
        -moz-box-shadow 0 5px 5px 0 #bebebf
        box-shadow 0 5px 5px 0 #bebebf
        position relative

    .custom-navbar-content
        display flex
        align-items center
        justify-content space-between
        margin 0 29px
        height 100%

    .custom-navbar-menu
        margin-left 20px

    .custom-navbar-menu > .navbar-name
        cursor pointer
        padding 10px
        border-radius 10px
        text-decoration none
        color black

    .custom-navbar-menu > .navbar-name.router-link-active
        color #3e95a9

    .custom-navbar-menu > .navbar-logout
        cursor pointer
        padding 10px

    .burger-boss
        display none
        padding 10px


    .short-menu
        padding 10px
        text-decoration none
        color black

    .short-menu.router-link-active
        color #3e95a9

    @media (max-width: 710px)
        .long-menu
            display none !important

        .burger-boss
            display block

</style>
