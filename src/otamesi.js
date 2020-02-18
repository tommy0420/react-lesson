// mapメソッドについて
// →配列を処理するためのメソッド

// 配列.map(関数)

// 配列.map(() => {
// })

// const sum = x => x * 2

const ary = [1, 2, 3]

const newAry = ary.map(x => x * 2)

console.log(ary) // [1,2,3] 
console.log(newAry)//[2, 4, 6]
