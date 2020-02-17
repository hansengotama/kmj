<template>
    <div>
        <div style="color: #555; font-weight: lighter">
            Kelola Pengguna
        </div>
        <div style="padding-top: 3em; position: relative">
            <div class="table-title">
                <div style="padding: 15px;">Data Pengguna</div>
                <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Data pengguna dengan peran donatur dan cashier</div>
            </div>
            <div class="content-container">
                <div class="content-place">
                    <div class="additional-container">
                        <div class="search-bar">
                            <input type="text" placeholder="Cari berdasarkan nama..">
                            <i class="fa fa-search"></i>
                        </div>
                        <div class="add-button">
                            <button>Tambah Pengguna</button>
                        </div>
                    </div>
                    <div class="table-container">
                        <table>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>Peran</th>
                                <th>Nomor Telepon</th>
                                <th>NPWP</th>
                            </tr>
                            <tr v-for="a in 10">
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" scoped>
    .table-title
        background rgb(62, 149, 169)
        width 98%
        color white
        top 30px
        font-weight lighter
        position absolute
        left 1%
        right 1%
        border-radius 3px
        box-shadow 0 12px 20px -10px rgba(62, 149, 169, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(62, 149, 169, .2)

    .content-container
        width 100%
        background white
        box-shadow 0 1px 4px 0 rgba(0,0,0,.14)
        padding-top 80px

    .content-place
        padding-left 1%
        padding-right 1%

    .additional-container
        display flex
        justify-content space-between
        align-items center

    .add-button > button
        padding 8px 14px
        color white
        background rgb(62, 149, 169)
        border-radius 4px
        box-shadow 0 12px 20px -10px rgba(62, 149, 169, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(62, 149, 169, .2)
        cursor pointer

    .search-bar
        display flex

    .search-bar > input
        padding 8px 14px
        border-radius 4px
        border 1px solid #eaeaea
        border-bottom-right-radius 0
        border-top-right-radius 0
        border-right none
        width 150px

    .search-bar > i
        padding 6px
        border 1px solid #eaeaea
        border-left none
        border-radius 4px
        border-top-left-radius 0
        border-bottom-left-radius 0

    .table-container
        margin-top 20px
        font-weight lighter !important
        width 100%

    .table-container > table
        width 100%
        padding-bottom 20px

    table > tr > th,
    table > tr > td
        font-weight lighter !important

    table > tr > th
        color rgb(62, 149, 169)
        text-align left
        padding-bottom 10px

    table > tr > td
        padding-top 12px
        padding-bottom 12px
        border-top 1px solid #eaeaea
        font-size 14px

</style>
