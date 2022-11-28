export const elemToPoints = (elemValue: number) => {
    if(elemValue <= 100) {
        return elemValue
    } else if(elemValue <= 200) {
        return 100 + (elemValue - 100) * 2
    } else if(elemValue <= 300){
        return 300 + (elemValue - 200) * 3
    } else {
        return 600 + (elemValue - 300) * 4
    }
}


export const pointsToElem = (points: number) => {
    let rest = 0

    if(points <= 100) {
        return {stats: points, rest: 0}
    } else if(points <= 300) {
        let pointsOver = points - 100
        while(pointsOver % 2 != 0) {
            rest = rest + 1
            pointsOver = pointsOver - 1
        }
        return {
            stats: 100 + pointsOver / 2,
            rest
        }
    } else if(points <= 600) {
        let pointsOver = points - 300
        while(pointsOver % 3 != 0) {
            rest = rest + 1
            pointsOver = pointsOver - 1
        }
        return {
            stats: 200 + pointsOver / 3,
            rest
        }
    } else {
        let pointsOver = points - 600
        while(pointsOver % 4 != 0) {
            rest = rest + 1
            pointsOver = pointsOver - 1
        }
        return {
            stats: 300 + pointsOver / 4,
            rest
        }
    }

}