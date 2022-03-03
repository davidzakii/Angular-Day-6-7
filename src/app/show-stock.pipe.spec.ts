import { ShowStockPipe } from './show-stock.pipe';

describe('ShowStockPipe', () => {
  it('create an instance', () => {
    const pipe = new ShowStockPipe();
    expect(pipe).toBeTruthy();
  });
});
