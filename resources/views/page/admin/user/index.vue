<template>
    <div>
        <div style="color: #555; font-weight: lighter">
            Kelola Pengguna
        </div>
        <div style="padding-top: 3em; position: relative">
            <div class="table-title">
                <div style="padding: 15px;">Data Pengguna</div>
                <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Data pengguna dengan peran donatur dan cashier</div>
            </div>
            <div class="content-container">
                <div class="content-place">
                    <div class="additional-container">
                        <div class="search-bar">
                            <input type="text" placeholder="Cari berdasarkan nama.." v-model="filter.text" @keyup.enter="getUser()">
                            <i class="fa fa-search" @click="getUser()"></i>
                        </div>
                        <div class="add-button">
                            <button @click="addUser">Tambah Pengguna</button>
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
                                <th>Aksi</th>
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
                                    <span>
                                        <i class="fa fa-edit" @click="editUser(data)"></i>
                                        <i class="fa fa-trash" @click="deleteUser(data)"></i>
                                    </span>
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
                    text: ""
                }
            }
        },
        mounted() {
            this.getUser(1, 10)
        },
        components: {
            Paginate: () => import('./../../../../components/paginate/index.vue')
        },
        methods: {
            getUser(page, per_page) {
                request.get(
                    "/api/user?filter[name]=" + this.filter.text + "&filter[page]=" + page + "&filter[per_page]=" + per_page,
                    this.accessToken
                )
                .then((response) => {
                    if(response)
                        this.user = response.data
                })
            },
            changePaginate(current) {
                this.getUser(current.page, current.per_page)
            },
            addUser() {
                this.$router.push({
                    name: "Add User"
                })
            },
            editUser(data) {
                this.$router.push({
                    name: "Edit User",
                    params: data
                })
            },
            deleteUser(data) {
                alert.confirmation('Apakah anda yakin menghapus ' + data.name, 'Hapus', 'Batal')
                .then((response) => {
                    if(response.value) {
                        alert.loading()

                        request.get("/api/user/delete/"+ data.id, this.accessToken)
                        .then((response) => {
                            this.getUser()
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
