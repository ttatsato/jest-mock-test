// mockを使ったuser.jsのテスト
import user from '@/components/models/user'
jest.mock('@/components/models/user')
test('if mock user model', () => {
  expect(user.getAuthenticated()).toEqual({age: 622, name: 'Mock name'})
})
