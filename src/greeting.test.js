import { greeting } from "./greeting";

describe('greeting', () => {
  it('correctly outputs hello name string', () => {
    expect(greeting('world')).toEqual('Hello world!')
  });
})
