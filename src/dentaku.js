let okane = {
  yachin: 4.75,
  mobile: 1,
  water: 0.15,
  elec: 0.5,
  gass: 0.4,
  net: 0.2,
  smoke: 1,
  food: 2,
}
let total = 0
// console.log(Object.keys(okane))
// for (let k of Object.keys(okane)) {
//   console.log(k)
//    console.log(okane)
// }
for (let k of Object.keys(okane)) {
  total = total + okane[k]
}
console.log(`foodまで：${total * 10000}円`)

let okane2 = {
  ...okane,
  nenkin: 1.7,
  hokenn: 1.5,
  jumin: 1,
}
total = 0
for (let k of Object.keys(okane2)) {
  total = total + okane2[k]
}
console.log(`foodまで：${total * 10000}円`)

// 1日あたりの飲食費(仕事ある日)
// 飲み物：2~3本→300円
// 食べ物：平均300~400円
// 計(下限)：400円
// 計(上限？)：700円
// 平均計：550円くらい？
// 勤務日数20日
let okane3 = {
  ...okane2,
  syokuhiPerMon: 0.055 * 20
}
total = 0
for (let k of Object.keys(okane3)) {
  total = total + okane3[k]
}
console.log(`foodまでと税金とかと1日あたりの飲食全て合わせて：${total * 10000}円`)
