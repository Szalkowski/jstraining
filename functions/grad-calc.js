const gradCalc = function (score, possibleScore = 100) {
    const percent = score / possibleScore * 100
    let letterGrade = ''
    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `You got ${letterGrade} (${percent})`
}

console.log(gradCalc(15, 20))