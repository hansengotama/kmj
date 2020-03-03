<template>
    <div>
        <div style="color: #555; font-weight: lighter">
            Kelola Tipe Transaksi
        </div>
        <div style="padding-top: 3em; position: relative">
            <div class="table-title">
                <div style="padding: 15px;">Data Tipe Transaksi</div>
                <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Tipe Transaksi yang digunakan untuk pembayaran</div>
            </div>
            <div class="content-container">
                <div class="content-place">
                    <div class="additional-container" style="float: right">
                        <div class="add-button">
                            <button @click="addTransactionType()">Tambah Tipe Transaksi</button>
                        </div>
                    </div>
                    <div class="table-container">
                        <table>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Cicilan</th>
                                <th>Aksi</th>
                            </tr>
                            <tr v-if="transactionType.data.length <= 0">
                                <td colspan="4" style="text-align: center">Data Kosong</td>
                            </tr>
                            <tr v-for="(transactionType, index) in transactionType.data" v-else>
                                <td>{{ index+1 }}</td>
                                <td>{{ transactionType.name }}</td>
                                <td>
                                    <i class="fa fa-check" style="color: green" v-if="transactionType.is_installment"></i>
                                    <i class="fa fa-times" style="color: red" v-else></i>
                                </td>
                                <td>
                                    <span>
                                        <i class="fa fa-edit" @click="editTransactionType(transactionType)"></i>
                                        <i class="fa fa-trash" @click="deleteTransactionType(transactionType)"></i>
                                    </span>
                                </td>
                            </tr>
                        </table>
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
                transactionType: {
                    data: []
                }
            }
        },
        mounted() {
            this.getTransactionType()
        },
        methods: {
            getTransactionType() {
                request.get("/api/payment-type", this.accessToken)
                .then((response) => {
                    if(response)
                        this.transactionType = response.data
                })
            },
            addTransactionType() {
                this.$router.push({
                    name: "Add Payment Type"
                })
            },
            editTransactionType(data) {
                this.$router.push({
                    name: "Edit Payment Type",
                    params: data
                })
            },
            deleteTransactionType(data) {
                alert.confirmation('Apakah anda yakin menghapus ' + data.name, 'Hapus', 'Batal')
                .then((response) => {
                    if(response.value) {
                        alert.loading()

                        request.get("/api/payment-type/delete/"+ data.id, this.accessToken)
                        .then((response) => {
                            this.getTransactionType()
                            alert.success()
                        })
                        .catch((error) => {
                            alert.error()
                        })
                    }
                })
            },
        }
    }
</script>

<style lang="stylus" scoped>

</style>
