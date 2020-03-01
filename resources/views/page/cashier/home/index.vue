<template>
    <div style="display: flex; align-items: center; justify-content: center; margin-top: 5em; flex-direction: column">
        <img :src="'/image/search.gif'" width="300px">
        <div style="width: 40%; margin-top: 2em; position: relative">
            <div style="width: 100%; height: 2em">
                <input type="text" class="cashier-input" placeholder="cari berdasarkan nomor transaksi" onkeyup.enter="search()">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            search() {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .cashier-input
        padding 8px 12px
        width 100%
        height 100%
</style>
