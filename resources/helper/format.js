import moment from 'moment'

export default {
    number(value){
        value = (value/1).toFixed(0).replace('.', ',')
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    remove(value) {
        return parseInt(value.replace(/\./g, ""))
    },
    date(date) {
        return moment(date).format('D MMM Y')
    }
}
