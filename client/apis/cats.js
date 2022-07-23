import request from 'superagent'

const rootUrl = '/api/v1'

// export function getFruits() {
//   return request.get(rootUrl + '/fruits').then((res) => {
//     return res.body.fruits
//   })
// }
export function getNorris() {
  return request.get(rootUrl + '/norris').then((res) => {
    //console.log(res.body)
    return res.body.value
  })
}
export function getCats() {
  return request.get(rootUrl + '/cats').then((res) => {
    //console.log(res.body)
    return res.body[0].url
  })
}

// [
//   {
//   breeds: [ ],
//   id: "7aj",
//   url: "https://cdn2.thecatapi.com/images/7aj.jpg",
//   width: 500,
//   height: 332
//   }
// ]
