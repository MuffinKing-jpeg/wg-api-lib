import * as dotenv from 'dotenv';
import { wgApi } from '../src/index';
import { CreateLinkInterface } from '../src/interfaces/createLink.interface';

dotenv.config();

const apiKey = process.env['WG_API_KEY']
console.log(process.env['WG_API_KEY']);

const api = new wgApi(apiKey)

console.log(api);

const query = 'MuffinKing'
const paramsEU: CreateLinkInterface  = {
  game: 'wotblitz',
  region: 'eu',
  type: 'player-search'
}
const paramsNA : CreateLinkInterface = {
  game: 'worldoftanks',
  region: 'na',
  type: 'player-search',
}
console.log(api.linker.createLink(paramsEU, query, 'test12345'));
console.log(api.linker.createLink(paramsNA, query, 'test12345'));
