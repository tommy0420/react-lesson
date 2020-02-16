// const ary = ["りんご", "ゴリラ", "ラッパ"]
// // 各要素に1足した新しい配列を
// // mapを用いて作成

// x => x + 1

// const newAry = []
// for (let i = 0; i < ary.length; i++){
//   newAry[i] = ary[i] + 1
// }
// ary[0] + 1
// ary[1] + 1
// ary[2] + 1
// ary[3] + 1

// const newAry = ary.map(x => x + 1)

// りんご + 1
// 2 + 1
// 3 + 1
// 4 + 1
// 5 + 1



// [2, 3, 4, 5, 6]

// stateが配列やオブジェクトだった場合にやっちゃいけないこと
// やり方

const ary = [1, 2, 3, 4, 5, 6, 7, 8]
// やっちゃいけないこと
// ary.push(4)
// console.log(ary)
// 原本を汚染してはならない

const ary2 = ary.slice()
ary2.push(4)
console.log(ary2)

setTodos(ary2)