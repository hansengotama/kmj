<template>
    <div>
        <div style="color: #555; font-weight: lighter">
            <span class="pointer" @click="back()">
                <i class="fa fa-arrow-left"></i> Balik
            </span>
        </div>
        <div style="padding-top: 3em; position: relative">
            <div class="table-title">
                <div style="padding: 15px;">Tambah Vihara</div>
                <div style="font-size: 12px; color: hsla(0,0%,100%,.62); padding: 0 15px 15px 15px">Vihara lombok yang akan dibantu</div>
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
                            Limit Donasi
                        </div>
                        <div class="form-custom-input">
                            <input type="text" placeholder="Limit" :class="error.class.limit" v-model="form.limit">
                            <div class="error-text">{{ error.message.limit }}</div>
                        </div>
                    </div>
                    <div class="form-custom-container">
                        <div class="form-custom-title">
                            Aktif
                        </div>
                        <div class="form-custom-input">
                            <select v-model="form.is_active" :class="error.class.is_active">
                                <option :value=true>Aktif</option>
                                <option :value=false>TIdak Aktif</option>
                            </select>
                            <div class="error-text">{{ error.message.is_active }}</div>
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
        props: ['accessToken'],
        data() {
            return {
                error: {
                    class: {
                        name: "",
                        limit: "",
                        is_active: ""
                    },
                    message: {
                        name: "",
                        limit: "",
                        is_active: ""
                    }
                },
                form: {
                    name: "",
                    limit: "",
                    is_active: true
                }
            }
        },
        methods: {
            back() {
                this.$router.push({
                    name: "Vihara"
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
            validateLimit() {
                let success = true

                if(validator.required(this.form.limit)) {
                    success = false
                    this.error.class.limit = "error-input"
                    this.error.message.limit = "Limit Donasi harus diisi"
                }else {
                    this.error.class.limit = ""
                    this.error.message.limit = ""
                }

                return success
            },
            add() {
                let validateSuccess = true
                if(! this.validateName()) validateSuccess = false
                if(! this.validateLimit()) validateSuccess = false

                if(validateSuccess) {
                    alert.loading()

                    request.post("/api/vihara/create", this.form, this.accessToken)
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
                this.form.limit = ""
                this.form.is_active = true
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
