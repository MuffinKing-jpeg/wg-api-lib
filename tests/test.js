import * as dotenv from 'dotenv';
import { wgApi } from '../lib/index';

dotenv.config();

const apiKey = process.env.WG_API_KEY
console.log(process.env.WG_API_KEY);

const api = new wgApi(apiKey)

test('Set API key', () => {
  expect(api.apiKey).toBe(apiKey);
});

test('Bad api key', () => {
  expect(() => { const badApi = new wgApi(''); badApi }).toThrow();
  expect(() => {
    const badApi = new wgApi('остолопок'); badApi
  }).toThrow();
  expect(() => { const badApi = new wgApi('c226ff9f0e61fbcb434e03c238f'); badApi }).toThrow();
});

test('Create link', () => {
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
  const paramsPathWOTB = {
    game: 'wotblitz',
    type: 'player-search'
  }

  expect(api.linker.getApiPath(paramsPathWOT)).toBe('wot/account/list/');
  let apiPath = api.linker.getApiPath(paramsPathWOTB)
  expect(api.linker.createLink(paramsEU, query, apiKey)).toBe(
    `https://api.wotblitz.eu/${apiPath}?application_id=${apiKey}&search=MuffinKing`
  );
  apiPath = api.linker.getApiPath(paramsPathWOT)
  expect(api.linker.createLink(paramsNA, query, apiKey)).toBe(
    `https://api.worldoftanks.com/${apiPath}?application_id=${apiKey}&search=MuffinKing`
  );
});

test('Search player', () => {
  return api.searchPlayer({
    game: 'wotblitz',
    query: 'Holly_Carbonara',
    region: 'eu'
  }).then(res => {
    console.log(res);
    expect(res).toBeDefined()
  })
})

test('Get data', () => {
  return api.getPlayerData({
    game: 'wotblitz',
    id: 594863503,
    region: 'eu'
  }).then(res => {
    console.log(res);
    expect(res).toBeDefined()
  })
})

test('Get Achievements', () => {
  return api.getPlayerAchievements({
    game: 'wotblitz',
    id: 594863503,
    region: 'eu'
  }).then(res => {
    console.log(res);
    expect(res).toBeDefined()
  })
})

afterAll(() => clearInterval(api.getData.emitterTimer))
