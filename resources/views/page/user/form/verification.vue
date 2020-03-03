<template>
    <div style="background: #eaeaea; height: 100%">
        <div style="margin: 0 20px;">
            <div style="padding-top: 3em; position: relative">
                <div class="table-title">
                    <div style="padding: 15px;">Verifikasi Data</div>
                    <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Mohon untuk melakukan verifikasi data sebelum simpan</div>
                </div>
                <div class="content-container">
                    <div class="content-place">
                        <div style="margin-top: 20px">
                            <div style="color: #3e95a9; text-transform: uppercase; margin-bottom: 18px">Data Donasi</div>
                            <div class="form-custom-container">
                                <div class="form-custom-title">
                                    Nama Donatur : {{ donationInfo.donationName }}
                                </div>
                            </div>
                            <div class="form-custom-container">
                                <div class="form-custom-title">
                                    Nominal : Rp. {{ donationInfo.nominal }}
                                </div>
                            </div>
                            <div class="form-custom-container">
                                <div class="form-custom-title">
                                    Metode Pembayaran : {{ donationInfo.paymentType.name }}
                                </div>
                            </div>
                            <div class="form-custom-container">
                                <div class="form-custom-title">
                                    Donasi ke vihara : <span v-if="selectedVihara == null">Umum (Bebas)</span>
                                    <span v-else>{{ selectedVihara.name }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="submit-container">
                            <button @click="verification()">Verifikasi</button>
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
    import VueCookies from "vue-cookies";
    import format from "../../../../helper/format";

    export default {
        props: ['accessToken'],
        data() {
            return {
                donationInfo: {
                    nominal: "",
                    paymentType: {
                        name: ""
                    },
                    donationName: "",
                },
                selectedVihara: null
            }
        },
        mounted() {
            this.initData()
        },
        methods: {
            initData() {
                let donationInfo = VueCookies.get('donationInfo')
                let selectedVihara = VueCookies.get('selectedVihara')

                if(donationInfo == null) {
                    this.back()

                    return false
                }else this.donationInfo = donationInfo

                if(selectedVihara != null) this.selectedVihara = selectedVihara
            },
            back() {
                this.$router.push({
                    name: "Donation Form"
                })
            },
            async verification() {
                if(window.confirm("Apakah anda yakin?")) {
                    let data = {}
                    data.vihara_id = (this.selectedVihara == null) ? null : this.selectedVihara.id
                    data.payment_type_id = this.donationInfo.paymentType.id
                    data.donors_name = this.donationInfo.donationName
                    data.nominal = format.remove(this.donationInfo.nominal)

                    await request.post("/api/asuser/create-transaction", data, this.accessToken)
                    .then(async (response) => {
                        await VueCookies.remove('donationInfo')
                        await VueCookies.remove('selectedVihara')

                        console.log(response.id)

                        this.$router.push({
                            name: "Information Form",
                            params: {
                                "transaction_id": response.id
                            }
                        })
                    })
                }
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
