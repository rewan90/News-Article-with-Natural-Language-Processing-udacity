import { isValidURL } from '../src/client/js/urlValidator';

describe('isValidURL', () => {
  it('returns false for invalid URL format', () => {
    expect(isValidURL('invalid url')).toBe(false);
  });

  it('returns false for localhost URL', () => {
    expect(isValidURL('http://localhost')).toBe(false);
  });

  it('returns true for valid URL', () => {
    expect(isValidURL('https://example.com')).toBe(true);
  });
});