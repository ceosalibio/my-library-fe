import moment from "moment";

export const dateString = (date) =>{
    return moment(date).format('MMMM D, YYYY, hh:mm:ss')
}