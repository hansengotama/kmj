<template>
    <div>

    </div>
</template>

<script>
    export default {
        props: ['accessToken'],
        mounted() {
            if(this.accessToken == null) {
                this.$router.push({
                    name: "Login"
                })
            }else {
                this.$router.push({
                    name: "User Home"
                })
            }
        }
    }
</script>
