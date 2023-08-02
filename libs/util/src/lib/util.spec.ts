import * as utils from './util';

describe('utils', () => {
  it('should work truncate function', () => {
    utils.truncate('test', 2);
    expect(utils.truncate('test', 2)).toEqual('te ...');
  });
});
