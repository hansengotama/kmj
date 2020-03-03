<template>
    <div style="background: #eaeaea; height: 100%">
        <div style="margin: 0 20px;">
            <div style="padding-top: 3em; position: relative">
                <div class="table-title">
                    <div style="padding: 15px;">Informasi</div>
                    <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Terima kasih pendaftaran donasi telah berhasil</div>
                </div>
                <div class="content-container">
                    <div class="content-place">
                        <div style="margin-top: 20px">
                            <div style="padding: 10px; border: 1px solid; border-radius: 3px">
                                <div style="color: #3e95a9; text-transform: uppercase; margin-bottom: 18px; display: flex; justify-content: space-between">
                                    <div>Form Donasi</div>
                                </div>
                                <div class="form-custom-container" style="margin-bottom: 2em">
                                    <div class="form-custom-title">
                                        <div>No. Transaksi : <b style="color: #3e95a9"> LOMBOK-{{ transaction.id | donationNumber }} </b></div>
                                    </div>
                                </div>
                                <div class="form-custom-container">
                                    <div class="form-custom-title">
                                        Nama : {{ user.name }}
                                    </div>
                                </div>
                                <div class="form-custom-container">
                                    <div class="form-custom-title">
                                        Email : {{ user.email }}
                                    </div>
                                </div>
                                <div class="form-custom-container">
                                    <div class="form-custom-title">
                                        Nomor Hp : {{ user.phone_number }}
                                    </div>
                                </div>
                                <div class="form-custom-container">
                                    <div class="form-custom-title">
                                        Nama Donatur : {{ transaction.donors_name }}
                                    </div>
                                </div>
                                <div class="form-custom-container">
                                    <div class="form-custom-title">
                                        Nominal : Rp. {{ transaction.nominal | filterNumber }}
                                    </div>
                                </div>
                                <div class="form-custom-container">
                                    <div class="form-custom-title">
                                        Metode Pembayaran : {{ transaction.payment_type.name }}
                                    </div>
                                </div>
                                <div class="form-custom-container">
                                    <div class="form-custom-title">
                                        Donasi ke vihara :
                                        <span v-if="transaction.vihara == null">Umum (Bebas)</span>
                                        <span v-else>{{ transaction.vihara.name }}</span>
                                    </div>
                                </div>
                                <div style="color: #4995a9; font-size: 12px;">* Form donasi telah dikirimkan ke email yang terdaftar</div>
                            </div>
                        </div>
                        <div style="margin-top: 10px; font-size: 12px">
                            Silahkan menyelesaikan transaksi sesuai metode pembayaran yang telah dipilih, cara pembayaran dapat di lihat
                            <span style="color: blue" @click="goToHowToPay()"><u>di sini</u></span>
                        </div>
                        <div class="submit-container">
                            <button style="background: red" @click="back()">Kembali</button>
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
                transaction_id: null,
                transaction: {
                    nominal: "",
                    payment_type: {
                        name: ""
                    },
                    vihara: null
                },
                user: {
                    name: "",
                    phone_number: "",
                    email: ""
                }
            }
        },
        mounted() {
            this.initData()
        },
        filters: {
            donationNumber: function(value) {
                if(value < 10) {
                    return "0000" + value
                }
                if(value < 100) {
                    return "000" + value
                }
                if(value < 1000) {
                    return "00" + value
                }
                if(value < 10000) {
                    return "0" + value
                }
                if(value < 100000) {
                    return value
                }
            },
            filterNumber: function(value) {
                return format.number(value)
            }
        },
        methods: {
            async initData() {
                // this.$router.params.transaction_id = 17
                //
                // if(this.$router.params.transaction_id == null) {
                //     this.back()
                //     return false
                // }

                // this.transaction_id = this.$router.params.transaction_id
                this.transaction_id = 17
                await this.getTransactionDetail()
                await this.getUserDetail()
            },
            getTransactionDetail() {
                return request.get('/api/asuser/get-transaction-detail/' + this.transaction_id, this.accessToken)
                .then((response) => {
                    this.transaction = response.data
                })
            },
            getUserDetail() {
                return request.get('/api/check/user-from-access-token', this.accessToken)
                .then((response) => {
                    this.user = response.data
                })
            },
            back() {
                this.$router.push({
                    name: "User Home"
                })
            },
            goToHowToPay() {
                this.$router.push({
                    name: "How To Pay"
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>

    .submit-container
        margin-top 2em

    @media (max-width 800px)
        .table-title
            width 94%
            left 3%
            right 3%

        .content-place
            padding-left 3%
            padding-right 3%
</style>

