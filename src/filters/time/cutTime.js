//截取时间
let cutTime = (time, num) => {
    if (!time) return;
    let newTime = time.replace(" ", ":").replace(/\:/g, '-').split("-");
    switch (num) {
        case 1:
            return newTime[0] + '-' + newTime[1] + '-' + newTime[2];//年月日
            break;
        case 2:
            return newTime[1] + '-' + newTime[2];//月日
            break;
        case 3:
            return newTime[3] + ':' + newTime[4] + ':' + newTime[5];//时分秒
            break;
        case 4:
            return newTime[1] + '-' + newTime[2] + ' ' + newTime[3] + ':' + newTime[4];//月日 时分
            break;
        case 5:
            return newTime[1] + '-' + newTime[2] + ' ' + newTime[3] + ':' + newTime[4] + ':' + newTime[5];//月日 时分秒
            break;
        default:
            break;
    }
}

export default cutTime;
