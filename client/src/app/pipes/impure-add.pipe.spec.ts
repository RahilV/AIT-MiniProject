import { ImpureAddPipe } from './impure-add.pipe';

describe('ImpureAddPipe', () => {
  it('create an instance', () => {
    const pipe = new ImpureAddPipe();
    expect(pipe).toBeTruthy();
  });
});
