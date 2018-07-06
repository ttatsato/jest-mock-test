// テスト対象コンポーネントが、他のコンポーネントの関数（user.js）を呼ぶ時、その呼びだす関数をモックかできるか
import callUser from '@/components/models/callUser'
jest.mock('@/components/models/user')
test('テスト対象コンポから呼び出すコンポをモック化できるか？', () => {
  expect(callUser.methods.getUserInfo()).toEqual({age: 622, name: 'Mock name'})
})
