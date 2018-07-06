// callbackを返す関数
export default {
  forEach: function (items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index])
    }
  }
}
