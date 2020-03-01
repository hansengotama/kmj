<template>
    <div style="background: #eaeaea; height: 100%;">
        <div style="margin: 0 20px;">
            <div style="padding-top: 3em; position: relative">
                <div class="table-title">
                    <div style="padding: 15px;">Data Donasi</div>
                    <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Donasi tersebut harus blablabla</div>
                </div>
                <div class="content-container">
                    <div class="content-place">
                        <div v-if="transactions.length <= 0">
                            Belum melakukan Donasi
                        </div>
                        <div class="donation-data-container" v-else>
                            <div class="donation-container" v-for="transaction in transactions">
                                <div class="title">{{ transaction.donors_name }}</div>
                                <div style="padding: 10px; display: flex">
                                    <div style="flex: 1">Nominal</div>
                                    <div style="flex: 1">Rp. {{ transaction.nominal | filterNumber }}</div>
                                </div>
                                <div style="padding: 10px; display: flex">
                                    <div style="flex: 1">Metode Pembayaran</div>
                                    <div style="flex: 1">{{ transaction.payment_type.name }}</div>
                                </div>
                                <div style="padding: 10px; display: flex">
                                    <div style="flex: 1">Donasi Ke</div>
                                    <div style="flex: 1">
                                        <span v-if="transaction.vihara">{{ transaction.vihara.name }}</span>
                                        <span v-else>Bebas</span>
                                    </div>
                                </div>
                                <div style="padding: 10px; display: flex">
                                    <div style="flex: 1">Status Pembayaran</div>
                                    <div style="flex: 1">
                                        <span style="color: green" v-if="transaction.is_payment_success">LUNAS</span>
                                        <span style="color: red" v-else>BELUM LUNAS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import request from "../../../../helper/request";
    import format from "../../../../helper/format";

    export default {
        props: ['accessToken'],
        data() {
            return {
                transactions: []
            }
        },
        mounted() {
            this.getTransactionData()
        },
        methods: {
            getTransactionData() {
                request.get("/api/asuser/get-transaction", this.accessToken)
                .then((response) => {
                    this.transactions = response.data
                })
            },

        },
        filters: {
            filterNumber: function(value) {
                return format.number(value)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .donation-data-container
        display grid
        grid-gap 1em
        grid-template-columns repeat(3, 1fr)
        width 100%

    .donation-container
        border-radius 3px
        width 100%
        border 1px solid black
        box-shadow 0 4px 8px 0 rgba(0,0,0,0.2)


    .donation-container > .title
        padding 10px
        text-transform uppercase
        color #4995a9

    @media (max-width 800px)
        .table-title
            width 94%
            left 3%
            right 3%

        .content-place
            padding-left 3%
            padding-right 3%

    @media (max-width 1250px)
        .donation-data-container
            grid-template-columns repeat(2, 1fr)

    @media (max-width 820px)
        .donation-data-container
            grid-template-columns 1fr
</style>

