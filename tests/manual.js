import * as dotenv from 'dotenv';
import { wgApi } from '../lib/index.js';

dotenv.config();

const apiKey = process.env.WG_API_KEY
console.log(process.env.WG_API_KEY);

const api = new wgApi(apiKey)


// api.apiKey


// const query = 'MuffinKing'
// const paramsEU = {
//   game: 'wotblitz',
//   region: 'eu',
//   type: 'player-search'
// }
// const paramsNA = {
//   game: 'worldoftanks',
//   region: 'na',
//   type: 'player-search',
// }

// console.log(api.linker.createLink(paramsNA, query, apiKey),
//   api.linker.createLink(paramsEU, query, apiKey));

// api.searchPlayer({
//   game: 'wotblitz',
//   query: 'Holly_Carbonara',
//   region: 'eu'
// }).then(res => {
//   console.log(res);
// })

// api.getPlayerData({
//   game: 'wotblitz',
//   id: 594863503,
//   region: 'eu'
// }).then(res => {
//   console.log(res);
// })

// api.getPlayerAchievements({
//   game: 'wotblitz',
//   id: 594863503,
//   region: 'eu'
// }).then(res => {
//   console.log(res);
// })

const dummy = (id) => {
  return new Promise(resolve => {
    api.getPlayerAchievements({
      game: 'wotblitz',
      id: 594863503,
      region: 'eu'
    }).then(res => {
      res['status'] === 'ok' ? resolve(`${++id} Success`) : resolve(`${++id} Fail`)
    })
  })
}
const bulk = []

const amountOfCalls = 51

for (let i = 0; i < amountOfCalls; i++) {
  bulk.push(dummy(i))
}
console.log(`Начинаем звонить в WraGAYming ${amountOfCalls} раз`);
console.time(`Обзвон ${amountOfCalls} раз за`)

Promise.all(bulk).then(res => {
  console.log(res);
  console.timeEnd(`Обзвон ${amountOfCalls} раз за`)
})
