// 関数内で他コンポの関数を呼び出す
import user from '@/components/models/user.js'
export default {
  methods: {
    getUserInfo () {
      return user.getAuthenticated()
    }
  }
}
