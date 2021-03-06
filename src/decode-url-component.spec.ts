import { describe, expect, it } from '@jest/globals';
import { decodeURLComponent } from './decode-url-component';

describe('decodeURLComponent', () => {
  it('decodes `+` signs as spaces', () => {
    expect(decodeURLComponent('abc+%2b+def')).toEqual('abc + def');
  });
});
