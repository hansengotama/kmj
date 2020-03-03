<template>
    <div style=" margin: 0 4em; margin-top: 2em">
        <div style="color: #555; font-weight: lighter">
            User
        </div>
        <div style="padding-top: 3em; position: relative;">
            <div class="table-title">
                <div style="padding: 15px;">Data User</div>
                <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Data para donatur</div>
            </div>
            <div class="content-container">
                <div class="content-place">
                    <div class="additional-container">
                        <div class="search-bar">
                            <input type="text" placeholder="Cari berdasarkan nama.." v-model="filter.text" @keyup.enter="getUser()">
                            <i class="fa fa-search" @click="getUser()"></i>
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
                                <th>Lihat Transaksi</th>
                            </tr>
                            <tr v-if="user.data.length <= 0">
                                <td colspan="7" style="text-align: center">Data Kosong</td>
                            </tr>
                            <tr v-for="(data, index) in user.data" v-else>
                                <td>{{ index+1 }}</td>
                                <td>{{ data.name }}</td>
                                <td>{{ data.email }}</td>
                                <td>
                                    <span v-if="data.role == 'admin'">Admin</span>
                                    <span v-if="data.role == 'cashier'">Kasir</span>
                                    <span v-if="data.role == 'user'">Donatur</span>
                                </td>
                                <td>{{ data.phone_number }}</td>
                                <td>{{ data.npwp }}</td>
                                <td>
                                    <i class="fa fa-info" @click="viewTransaction(data)"></i>
                                </td>
                            </tr>
                        </table>
                        <paginate :data="user" @changePaginate="changePaginate"></paginate>
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
                user: {
                    data: []
                },
                filter: {
                    text: "",
                    page: 1,
                    per_page: 10
                }
            }
        },
        mounted() {
            this.getUser()
        },
        components: {
            Paginate: () => import('./../../../../components/paginate/index.vue')
        },
        methods: {
            getUser() {
                request.get(
                    "/api/ascashier/donors?filter[name]=" + this.filter.text + "&filter[page]=" + this.filter.page + "&filter[per_page]=" + this.filter.per_page,
                    this.accessToken
                )
                .then((response) => {
                    if(response)
                        this.user = response.data
                })
            },
            changePaginate(current) {
                this.filter.page = current.page
                this.filter.per_page = current.per_page

                this.getUser()
            },
            viewTransaction(data) {
                this.$router.push({
                    name: "Cashier Transaction",
                    params: {
                        user_id: data.id
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
