<template>
    <div class="admin-page-container">
        <div class="sidebar">
            <div class="menu-container">
                <div class="menu">
                    <div class="title">
                        <div style="padding: 8px; background: white; border-radius: 100%">
                            <img :src="'/image/user_logo.png'" alt="" width="25px" height="25px">
                        </div>
                        <span style="margin-left: 10px;">ADMIN</span>
                    </div>
                    <hr width="210px" align="left" style="margin-bottom: 20px; border: 0; border-top: 1px solid #eaeaea; height: 1px">
                    <router-link to="user">
                        <div class="menu-text">
                            Pengguna
                        </div>
                    </router-link>
                    <router-link to="transaction">
                        <div class="menu-text">
                            Transaksi
                        </div>
                    </router-link>
                    <router-link to="payment-type">
                        <div class="menu-text">
                            Tipe Pembayaran
                        </div>
                    </router-link>
                    <router-link to="vihara">
                        <div class="menu-text">
                            Vihara
                        </div>
                    </router-link>
                </div>
                <div class="logout">
                    <div class="menu-text">
                        Keluar
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .admin-page-container
        width 100%
        height 100%
        display flex

    .sidebar
        width 260px
        background-image linear-gradient( rgba(0, 0, 0, 0.5), rgba(27,27,27,.87) ), url("/image/sidebar-bg.jpg")
        box-shadow 0 10px 30px -12px rgba(0,0,0,.42), 0 4px 25px 0 rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2)
        background-size cover
        background-position 50%
        height 100%
        position fixed
        z-index 1
        color white
        font-weight 300

    .content
        padding-left 300px
        padding-top 28px
        padding-right 40px
        width 100%
        background #eaeaea

    .menu
        padding-left 20px
        padding-top 10px

    .logout
        padding-left 20px
        padding-bottom 30px

    .menu-container
        display flex
        height 100%
        max-height 100%
        flex-direction column
        justify-content space-between

    .menu-text
        padding 15px 8px
        margin-bottom 8px
        font-size 14px

    .menu-text:hover
        background rgba(62, 149, 169, .2)
        width 195px
        cursor pointer
        border-radius 2px

    .menu-text.active
        background rgb(62, 149, 169)

    .title
        padding 10px
        display flex
        align-items center

    .router-link-exact-active > .menu-text
        background rgb(62, 149, 169)
        width 195px
        border-radius 2px

    a
        text-decoration none
        color white
</style>


