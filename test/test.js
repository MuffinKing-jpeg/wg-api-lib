import { wgApi } from '../lib/index.js';

const apiKey = 'f2r323d2'

const api = new wgApi(apiKey)

test('Set API key', () => {
  expect(api.apiKey).toBe(apiKey);
});
