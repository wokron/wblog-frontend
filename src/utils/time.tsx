function toDateFormat(isoDatetime: string) {
    const datetime = new Date(isoDatetime);
    return formatDate(datetime, "yyyy.MM.dd")
}

function toDateTimeFormat(isoDatetime: string) {
    const datetime = new Date(isoDatetime);
    return formatDate(datetime, "yyyy.MM.dd , HH:mm")
}

function formatDate(date: Date, format: string = "yyyy-MM-dd HH:mm:ss") {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const formatMap: { [key: string]: any } = {
        yyyy: year.toString(),
        MM: month.toString().padStart(2, '0'),
        dd: day.toString().padStart(2, '0'),
        HH: hour.toString().padStart(2, '0'),
        mm: minute.toString().padStart(2, '0'),
        ss: second.toString().padStart(2, '0')
    }
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (match) => formatMap[match])
}

export { toDateFormat, toDateTimeFormat, formatDate };
