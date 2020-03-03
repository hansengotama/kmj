<template>
    <div style=" margin: 0 4em; margin-top: 2em">
        <div style="color: #555; font-weight: lighter">
            <span class="pointer" @click="back()">
                <i class="fa fa-arrow-left"></i> Balik
            </span>
        </div>
        <div style="padding-top: 3em; position: relative;">
            <div class="table-title">
                <div style="padding: 15px;">Data Transaksi {{ userData.name }}</div>
                <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Data para donatur</div>
            </div>
            <div class="content-container">
                <div class="content-place">
                    <div class="table-container">
                        <table>
                            <tr>
                                <th>No</th>
                                <th>Id</th>
                                <th>Nama Donatur</th>
                                <th>Vihara</th>
                                <th>Tipe Pembayaran</th>
                                <th>Nominal</th>
                                <th>Status</th>
                                <th>Detil</th>
                            </tr>
                            <tr v-if="transactions.data.length <= 0">
                                <td colspan="8" style="text-align: center">Data Kosong</td>
                            </tr>
                            <tr v-for="(transaction, index) in transactions.data" v-else>
                                <td>{{ index+1 }}</td>
                                <td>{{ transaction.id }}</td>
                                <td>{{ transaction.donors_name }}</td>
                                <td>
                                    <span v-if="transaction.vihara != null">{{ transaction.vihara.name }}</span>
                                    <span v-else>-</span>
                                </td>
                                <td>{{ transaction.payment_type.name }}</td>
                                <td>{{ transaction.nominal }}</td>
                                <td>
                                    <i class="fa fa-check" style="color: green" v-if="transaction.is_payment_success"></i>
                                    <i class="fa fa-times" style="color: red" v-else></i>
                                </td>
                                <td>
                                    <span v-if="transaction.is_payment_success">
                                        <i class="fa fa-print" style="background: red"></i>
                                    </span>
                                    <span v-else>
                                        <i class="fa fa-info" @click="detailTransaction(transaction)"></i>
                                    </span>
                                </td>
                            </tr>
                        </table>
                        <paginate :data="transactions" @changePaginate="changePaginate"></paginate>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import request from "../../../../helper/request";

    export default {
        props: ['accessToken'],
        data() {
            return {
                transactions: {
                    data: []
                },
                userData: {
                    name: ""
                }
            }
        },
        mounted() {
            this.initData()
        },
        components: {
            Paginate: () => import('./../../../../components/paginate/index.vue')
        },
        methods: {
            async initData() {
                if(this.$route.params.user_id == null) {
                    this.back()
                    return false
                }

                await this.getUserData(this.$route.params.user_id)
                this.getUserTransaction(1, 10)
            },
            getUserData(user_id) {
                return request.get("/api/user/" + user_id, this.accessToken)
                .then((response) => {
                    this.userData = response.data
                })
            },
            getUserTransaction(page, per_page) {
                request.get(
                    "/api/ascashier/user-transaction?filter[user_id]=" + this.userData.id + "&filter[page]=" + page + "&filter[per_page]=" + per_page,
                    this.accessToken
                )
                .then((response) => {
                    this.transactions = response.data
                })
            },
            back() {
                this.$router.push({
                    name: "Cashier User"
                })
            },
            changePaginate(current) {
                this.getUserTransaction(current.page, current.per_page)
            },
            detailTransaction(data) {
                this.$router.push({
                    name: "Cashier Transaction Detail",
                    params: {
                        "transaction_id": data.id,
                        "user_id": this.userData.id
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
