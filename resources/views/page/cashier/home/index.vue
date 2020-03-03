<template>
    <div style="display: flex; align-items: center; justify-content: center; margin-top: 5em; flex-direction: column">
        <img :src="'/image/search.gif'" width="300px">
        <div style="width: 40%; margin-top: 2em; position: relative">
            <div style="width: 100%; height: 2em">
                <input type="text" class="cashier-input" placeholder="cari berdasarkan nomor transaksii" @keyup.enter="search()" v-model="form.id">
            </div>
        </div>
    </div>
</template>

<script>
    import request from "../../../../helper/request";
    import alert from "../../../../helper/alert";

    export default {
        props: ['accessToken'],
        data() {
            return {
                form: {
                    id: ""
                }
            }
        },
        methods: {
            search() {
                request.post("/api/ascashier/check-transaction", this.form, this.accessToken)
                .then((response) => {
                    if(response.data == 1) {
                        this.$router.push({
                            name: "Cashier Transaction Detail",
                            params: {
                                "transaction_id": this.form.id
                            }
                        })
                    }else alert.error("Kode transaksi tidak ditemukan")
                })
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
