// テスト対象コンポーネントが、他のコンポーネントの関数（user.js）を呼ぶ時、その呼びだす関数をモックかできるか
import callbackFunction from '@/components/callbackFunction'

test('callback mock', () => {
  const mockCallback = jest.fn()
  callbackFunction.forEach([0, 1], mockCallback)
  expect(mockCallback.mock.calls.length).toBe(2)
})
