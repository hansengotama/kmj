<template>
    <div>
        <div style="color: #555; font-weight: lighter">
            <span class="pointer" @click="back()">
                <i class="fa fa-arrow-left"></i> Balik
            </span>
        </div>
        <div style="padding-top: 3em; position: relative">
            <div class="table-title">
                <div style="padding: 15px;">Tambah Pengguna</div>
                <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Pengguna aplikasi donasi ini</div>
            </div>
            <div class="content-container">
                <div class="content-place">
                    <div class="form-custom-container">
                        <div class="form-custom-title">
                            Nama
                        </div>
                        <div class="form-custom-input">
                            <input type="text" placeholder="Nama" :class="error.class.name" v-model="form.name">
                            <div class="error-text">{{ error.message.name }}</div>
                        </div>
                    </div>
                    <div class="form-custom-container">
                        <div class="form-custom-title">
                            Email
                        </div>
                        <div class="form-custom-input">
                            <input type="text" placeholder="Email" :class="error.class.email" v-model="form.email">
                            <div class="error-text">{{ error.message.email }}</div>
                        </div>
                    </div>
                    <div class="form-custom-container">
                        <div class="form-custom-title">
                            Nomor Telepon
                        </div>
                        <div class="form-custom-input">
                            <input type="text" placeholder="Nomor Telepon" :class="error.class.phone_number" v-model="form.phone_number">
                            <div class="error-text">{{ error.message.phone_number }}</div>
                        </div>
                    </div>
                    <div class="form-custom-container">
                        <div class="form-custom-title">
                            NPWP
                        </div>
                        <div class="form-custom-input">
                            <input type="text" placeholder="npwp" :class="error.class.npwp" v-model="form.npwp">
                            <div class="error-text">{{ error.message.npwp }}</div>
                        </div>
                    </div>
                    <div class="form-custom-container">
                        <div class="form-custom-title">
                            Peran
                        </div>
                        <div class="form-custom-input">
                            <select v-model="form.role" :class="error.class.role">
                                <option value="user">Donatur</option>
                                <option value="admin">Admin</option>
                                <option value="cashier">Kasir</option>
                            </select>
                            <div class="error-text">{{ error.message.role }}</div>
                        </div>
                    </div>
                    <div class="submit-container">
                        <button @click="add()">Tambah</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import validator from "../../../../helper/validator";
    import alert from "../../../../helper/alert";
    import request from "../../../../helper/request";

    export default {
        data() {
            return {
                error: {
                    class: {
                        name: "",
                        email: "",
                        role: "",
                        phone_number: "",
                        npwp: ""
                    },
                    message: {
                        name: "",
                        email: "",
                        role: "",
                        phone_number: "",
                        npwp: ""
                    }
                },
                form: {
                    name: "",
                    email: "",
                    role: "user",
                    phone_number: "",
                    npwp: ""
                }
            }
        },
        methods: {
            back() {
                this.$router.push({
                    name: "User"
                })
            },
            validateName() {
                let success = true

                if(validator.required(this.form.name)) {
                    success = false
                    this.error.class.name = "error-input"
                    this.error.message.name = "Nama harus diisi"
                }else {
                    this.error.class.name = ""
                    this.error.message.name = ""
                }

                return success
            },
            async validateEmail() {
                let success = true

                if(validator.required(this.form.email)) {
                    success = false
                    this.error.class.email = "error-input"
                    this.error.message.email = "Email harus diisi"
                } else if(validator.emailFormat(this.form.email)) {
                    success = false
                    this.error.class.email = "error-input"
                    this.error.message.email = "Email harus sesuai format"
                } else if(await this.checkUserEmail() == 1) {
                    success = false
                    this.error.class.email = "error-input"
                    this.error.message.email = "Email tidak bisa dipakai"
                } else {
                    this.error.class.email = ""
                    this.error.message.email = ""
                }

                return success
            },
            checkUserEmail() {
                let data = {}
                data.email = this.form.email

                return request.post('/api/user/check', data)
                .then((response) => {
                    return response.data
                })
            },
            checkUserPhoneNumber() {
                let data = {}
                data.phone_number = this.form.phone_number

                return request.post('/api/user/check', data)
                .then((response) => {
                    return response.data
                })
            },
            validateRole() {
                let success = true

                if(validator.required(this.form.role)) {
                    success = false
                    this.error.class.role = "error-input"
                    this.error.message.role = "Peran harus diisi"
                }else {
                    this.error.class.role = ""
                    this.error.message.role = ""
                }

                return success
            },
            async validatePhoneNumber() {
                let success = true

                if(validator.required(this.form.phone_number)) {
                    success = false
                    this.error.class.phone_number = "error-input"
                    this.error.message.phone_number = "Nomor telepon harus diisi"
                } else if(await this.checkUserPhoneNumber() == 1) {
                    success = false
                    this.error.class.phone_number = "error-input"
                    this.error.message.phone_number = "Nomor telepon tidak bisa dipakai"
                } else{
                    this.error.class.phone_number = ""
                    this.error.message.phone_number = ""
                }

                return success
            },
            async add() {
                let validateSuccess = true

                let validatePhoneNumber = await this.validatePhoneNumber()
                let validateEmail = await this.validateEmail()
                if(! this.validateName()) validateSuccess = false
                if(!validateEmail) validateSuccess = false
                if(!this.validateRole()) validateSuccess = false
                if(!validatePhoneNumber) validateSuccess = false

                if(validateSuccess) {
                    alert.loading()

                    request.post("/api/user/create", this.form)
                    .then((response) => {
                        this.resetForm()
                        alert.success()
                    })
                    .catch((error) => {
                        alert.error()
                    })
                }
            },
            resetForm() {
                this.form.name = ""
                this.form.email = ""
                this.form.role = "user"
                this.form.phone_number = ""
                this.form.npwp = ""
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
