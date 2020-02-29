import axios from "axios"

export default {
    getBaseUrl() {
        return this.url = window.location.origin
    },

    get(url) {
        return new Promise((resolve) => {
            axios.get(this.getBaseUrl() + url, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                resolve(error)
            })
        })
    },

    post(url, data) {
        return new Promise((resolve) => {
            let headers = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            axios.post(this.getBaseUrl() + url, data, headers)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                resolve(error)
            })
        })
    },
}
