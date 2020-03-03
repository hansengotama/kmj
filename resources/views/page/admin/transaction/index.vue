<template>
    <div>
        <div style="color: #555; font-weight: lighter">
            Kelola Transaksi
        </div>
        <div style="padding-top: 3em; position: relative">
            <div class="table-title">
                <div style="padding: 15px;">Data Transaksi</div>
                <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Transaksi yang dibuat oleh para user</div>
            </div>
            <div class="content-container">
                <div class="content-place">
                    <div class="additional-container">
                        <div class="search-bar">
                            <input type="text" placeholder="Cari berdasarkan nama.." v-model="filter.text" @keyup.enter="getTransaction()">
                            <i class="fa fa-search" @click="getTransaction()"></i>
                        </div>
                    </div>
                    <div class="table-container">
                        <table>
                            <tr>
                                <th>No</th>
                                <th>User</th>
                                <th>Nama Donatur</th>
                                <th>Vihara</th>
                                <th>Tipe Pembayaran</th>
                                <th>Nominal</th>
                                <th>Aksi</th>
                            </tr>
                            <tr v-if="transactions.data.length <= 0">
                                <td colspan="8" style="text-align: center">Data Kosong</td>
                            </tr>
                            <tr v-for="(transaction, index) in transactions.data" v-else>
                                <td>{{ index+1 }}</td>
                                <td>{{ transaction.user.name }}</td>
                                <td>{{ transaction.donors_name }}</td>
                                <td>
                                    <span v-if="transaction.vihara != null">{{ transaction.vihara.name }}</span>
                                    <span v-else>-</span>
                                </td>
                                <td>{{ transaction.payment_type.name }}</td>
                                <td>{{ transaction.nominal }}</td>
                                <td>
                                    <span>
                                        <i class="fa fa-edit" @click="editTransaction(transaction)"></i>
                                        <i class="fa fa-trash" @click="deleteTransaction(transaction)"></i>
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
    import alert from "../../../../helper/alert";

    export default {
        props: ['accessToken'],
        data() {
            return {
                transactions: {
                    data: []
                },
                filter: {
                    text: ""
                }
            }
        },
        mounted() {
            this.getTransaction(1, 10)
        },
        components: {
            Paginate: () => import('./../../../../components/paginate/index.vue')
        },
        methods: {
            getTransaction(page, per_page) {
                request.get(
                    "/api/transaction?filter[donors_name]=" + this.filter.text + "&filter[page]=" + page + "&filter[per_page]=" + per_page,
                    this.accessToken
                )
                .then((response) => {
                    if(response)
                        this.transactions = response.data
                })
            },
            editTransaction(data) {
                this.$router.push({
                    name: "Edit Transaction",
                    params: data
                })
            },
            deleteTransaction(data) {
                alert.confirmation('Apakah anda yakin menghapus transaksi nomor ' + data.id, 'Hapus', 'Batal')
                .then((response) => {
                    if(response.value) {
                        alert.loading()

                        request.get("/api/transaction/delete/"+ data.id, this.accessToken)
                        .then((response) => {
                            this.getTransaction()
                            alert.success()
                        })
                        .catch((error) => {
                            alert.error()
                        })
                    }
                })
            },
            changePaginate(current) {
                this.getTransaction(current.page, current.per_page)
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
