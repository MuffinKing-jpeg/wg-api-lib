import * as dotenv from 'dotenv';
import { wgApi } from '../lib/index.js';

dotenv.config();

const apiKey = process.env.WG_API_KEY
console.log(process.env.WG_API_KEY);

const api = new wgApi.wgApi(apiKey)

console.log(api.apiKey);

const query = 'MuffinKing'
const paramsEU = {
  game: 'wotblitz',
  region: 'eu',
  type: 'player-search'
}
const paramsNA = {
  game: 'worldoftanks',
  region: 'na',
  type: 'player-search',
}
const paramsPathWOT = {
  game: 'worldoftanks',
  type: 'player-search'
}

console.log(api.linker.getApiPath(paramsPathWOT));
console.log(api.linker.createLink(paramsEU, query, apiKey));
console.log(api.linker.createLink(paramsNA, query, apiKey));

api.getPlayerData({
  game: 'wotblitz',
  id: 594863503,
  region: 'eu'
}).then(res => {
  console.log(res);
})
