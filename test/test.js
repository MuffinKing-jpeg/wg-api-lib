import * as dotenv from 'dotenv';
import { wgApi } from '../lib/index.js';

dotenv.config();

const apiKey = process.env.WG_API_KEY

const api = new wgApi(apiKey)

test('Set API key', () => {
  console.log(process.env);
  expect(api.apiKey).toBe(apiKey);
});
