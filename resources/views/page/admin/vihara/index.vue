<template>
    <div>
        <div style="color: #555; font-weight: lighter">
            Kelola Vihara
        </div>
        <div style="padding-top: 3em; position: relative">
            <div class="table-title">
                <div style="padding: 15px;">Data Vihara</div>
                <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Vihara lombok yang akan dibantu</div>
            </div>
            <div class="content-container">
                <div class="content-place">
                    <div class="additional-container" style="float: right">
<!--                        <div class="search-bar">-->
<!--                            <input type="text" placeholder="Cari berdasarkan nama..">-->
<!--                            <i class="fa fa-search"></i>-->
<!--                        </div>-->
                        <div class="add-button">
                            <button @click="addVihara()">Tambah Vihara</button>
                        </div>
                    </div>
                    <div class="table-container">
                        <table>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Limit Donasi</th>
                                <th>Aktif</th>
                                <th>Aksi</th>
                            </tr>
                            <tr v-if="vihara.data.length <= 0">
                                <td colspan="5" style="text-align: center">Data Kosong</td>
                            </tr>
                            <tr v-for="(vihara, index) in vihara.data" v-else>
                                <td>{{ index+1 }}</td>
                                <td>{{ vihara.name }}</td>
                                <td>{{ vihara.limit }}</td>
                                <td>
                                    <i class="fa fa-check" style="color: green" v-if="vihara.is_active"></i>
                                    <i class="fa fa-times" style="color: red" v-else></i>
                                </td>
                                <td>
                                    <span>
                                        <i class="fa fa-edit" @click="editVihara(vihara)"></i>
                                        <i class="fa fa-trash" @click="deleteVihara(vihara.id)"></i>
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
                vihara: {
                    data: []
                }
            }
        },
        mounted() {
            this.getVihara()
        },
        methods: {
            getVihara() {
                request.get("/api/vihara", this.accessToken)
                .then((response) => {
                    this.vihara = response.data
                })
            },
            addVihara() {
                this.$router.push({
                    name: "Add Vihara"
                })
            },
            editVihara(data) {
                this.$router.push({
                    name: "Edit Vihara",
                    params: data
                })
            },
            deleteVihara(id) {
                alert.loading()

                request.get("/api/vihara/delete/"+id, this.accessToken)
                .then((response) => {
                    this.getVihara()
                    alert.success()
                })
                .catch((error) => {
                    alert.error()
                })
            },
        }
    }
</script>

<style lang="stylus" scoped>

</style>
