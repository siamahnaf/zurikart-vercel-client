import uniqid from "uniqid";

//Create UniqueId
export const UniqId = () => {
    const date = new Date();
    const components = [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ];
    const id = components.join("");
    return uniqid() + id + uniqid();
}

export const formateNumber = (num: number) => {
    if (num < 1000) {
        return num.toString();
    } else if (num < 1000000) {
        return Math.floor(num / 1000) + "k";
    } else if (num < 1000000000) {
        return Math.floor(num / 1000000) + "M";
    } else if (num < 1000000000000) {
        return Math.floor(num / 1000000000) + "B";
    } else {
        return Math.floor(num / 1000000000000) + "T";
    }
}