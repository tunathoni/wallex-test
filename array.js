let a = [
    1, 2, 0, 5, 8, 1, 3
]

let b = [
    3, 0, 5, 1
]

async function checkArray(a, b) {
    let allCorrect = b.length
    let nowCorrect = 0
    await b.map(v => {
        let check = a.find(y => {
            return y === v
        })
        if (typeof check !== 'undefined') {
            nowCorrect++
        }
    })
    if (nowCorrect === allCorrect) {
        return true
    }
    return false
}


checkArray(a, b)
 .then(v => {
     console.log(`The result is ${v}`)
 })
