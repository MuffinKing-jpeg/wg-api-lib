# WG-API-Lib

## Description

This is NodeJS package for easy work with Wargaming.net API.
In current version supports only World of Tanks and World of Tanks Blitz.
> IMPORTANT!
> Starting from october 14th support for .ru (CIS earlier) will be deprecated.  
> This package do not support Lesta Games API (and probably will not)

## Installing

To install package type in console:

```sh
npm i @muffinking-jpeg/wg-api-lib
```

## Usage

### Initialization

To start using package import this as ES6 module (No support for CommonJS) and initialize object with your WG api key.

```js
import { wgApi } from '@muffinking-jpeg/wg-api-lib';

...

const api = new wgApi('Put your WG key here')
```

Best practice is to use environment variables or `.env` file to store api keys

`.env` file:

```js
...
WG_API_KEY = "YourApiKey"
...
```

Your code:

```js
import * as dotenv from 'dotenv';
import { wgApi } from '@muffinking-jpeg/wg-api-lib';
...

dotenv.config();

const apiKey = process.env[WG_API_KEY]
const api = new wgApi(apiKey)
//I'm too lazy to make check fo undef, so... be careful 
...
```

### Methods

#### .searchPlayer(paramsObject)

>For searching players by name.

| Params   |              Types              |        Meaning         |
|--------- |:------------------------------: |:---------------------: |
| game:    | 'wotb' \| 'worldoftanks'        | Choosing the game      |
| region:  | 'eu' \| 'ru' \| 'na' \| 'asia'  | Choose region of game  |
| query:   |             string              | Player's name          |

#### .getPlayerData(paramsObject)

>For loading player's statistics.

| Params   |              Types              |        Meaning         |
|--------- |:------------------------------: |:---------------------: |
| game:    | 'wotb' \| 'worldoftanks'        | Choosing the game      |
| region:  | 'eu' \| 'ru' \| 'na' \| 'asia'  | Choose region of game  |
| id:      |             number              | Player's id            |

#### .getPlayerAchievements(paramsObject)

>For loading player's achievements.

| Params   |              Types              |        Meaning         |
|--------- |:------------------------------: |:---------------------: |
| game:    | 'wotb' \| 'worldoftanks'        | Choosing the game      |
| region:  | 'eu' \| 'ru' \| 'na' \| 'asia'  | Choose region of game  |
| id:      |             number              | Player's id            |

### Examples

#### How to get players list

```js
api.searchPlayer({
    game: 'wotblitz',
    query: 'Holly_Carbonara',
    region: 'eu'
  }).then(res => {
    //Your response handler here
  })
```

#### Get player's stats

```js
api.getPlayerData({
    game: 'wotblitz',
    id: 594863503,
    region: 'eu'
  }).then(res => {
    //Your response handler here
  })
```

#### Get player's achievements

```js
api.getPlayerAchievements({
    game: 'wotblitz',
    id: 594863503,
    region: 'eu'
  }).then(res => {
    //Your response handler here
  })
```

## TODO

- Check for undef and\or incorrect API key.
- Expand methods availability for tanks\ships.
- Add WOWS and WOT Console support.
- Implementing every feature from [Wargaming API reference](https://developers.wargaming.net/reference/all)
- Better readme
- Translating readme to more languages

## NEVER PLANED

- Support for Lesta Games API
- Support for wargaming authentication (Maybe it will be another module. This feature requires http server)
