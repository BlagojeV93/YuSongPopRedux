export const messageFunction = (score) => {
    switch (score) {
        case 1:
            return 'DOBAR'
        case 2:
            return 'ODLIŠN'
        case 3:
            return 'U BRE'
        case 4:
            return 'UUUU BRE'
        case 5:
            return 'FF'
        default:
            return 'I BOGALJU'
    }
}

export const calculatePoints = (time, points) => {
    let calculatedPoints = null;
    if (time < 1) {
        calculatedPoints = points + 6000
    } else {
        calculatedPoints = points + (1 / time * 6000)
    }
    return Math.round(calculatedPoints);
}

export const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}