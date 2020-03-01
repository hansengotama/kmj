import axios from "axios"

export default {
    getBaseUrl() {
        return this.url = window.location.origin
    },

    get(url, accessToken) {
        return new Promise((resolve) => {
            axios.get(this.getBaseUrl() + url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
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

    post(url, data, accessToken) {
        return new Promise((resolve) => {
            let headers = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
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
