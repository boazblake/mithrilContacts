/* global firebase */
/* eslint no-undef: "error" */

const UserRef = firebase.database().ref("users/")
const Task = require("data.task")

const makeArray = obj => {
  let res = Object.keys(obj)
  return res.map(k => {
    return [k, obj[k]]
  })
}

const getUsers =
  new Task((rej, res) => {
    UserRef.once("value")
      .then(z => z.val())
      .then(x => makeArray(x))
      .then(res, rej)
  })

module.exports = {getUsers}

//
// [["-KmZavjsmTkGfRT71zlo",{"firstName":"rome","id":"-KmZavjsmTkGfRT71zlo","lastName":"ulos","profilePic":"http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"}],["-KmZb7L5Yz98yem4tVD0",{"firstName":"rome","id":"-KmZb7L5Yz98yem4tVD0","lastName":"ulos","profilePic":"http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"}],["-KmZbCIazHZPwOmFq8m-",{"firstName":"rome","id":"-KmZbCIazHZPwOmFq8m-","lastName":"ulos","profilePic":"http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"}],["-KmZbGV1xiS5ywWXrxMU",{"firstName":"rome","id":"-KmZbGV1xiS5ywWXrxMU","lastName":"ulos","profilePic":"http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"}],["-KmZbI1DpFFXQRGBCkXT",{"firstName":"rome","id":"-KmZbI1DpFFXQRGBCkXT","lastName":"ulos","profilePic":"http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"}],["-KmZbRVZlb_nE0vDGl11",{"firstName":"rome","id":"-KmZbRVZlb_nE0vDGl11","lastName":"ulos","profilePic":"http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"}],["-KmZbVzi5XRjmIk_V5CI",{"firstName":"rome","id":"-KmZbVzi5XRjmIk_V5CI","lastName":"ulos","profilePic":"http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"}],["-KmZbeSiy0uKkFZ4DWPO",{"firstName":"rome","id":"-KmZbeSiy0uKkFZ4DWPO","lastName":"ulos","profilePic":"http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"}],["-KmZbgs119dWZl1IzGrt",{"firstName":"rome","id":"-KmZbgs119dWZl1IzGrt","lastName":"ulos","profilePic":"http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"}]]
