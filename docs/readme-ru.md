# WG-API-Lib

Доступно на:

[**EN**](https://muffinking-jpeg.github.io/wg-api-lib/) | [**UA**](https://muffinking-jpeg.github.io/wg-api-lib/readme-ua) | [**RU**](https://muffinking-jpeg.github.io/wg-api-lib/readme-ru)

## Описание

Этот модуль для NodeJS создан что бы упростить работу API Wargaming.net.
На текущий момент библиотека поддерживает только World Of Tanks и World of Tanks Blitz
> **ВАЖНО!**
> Начиная с 14-го октября 2022 года работа .ru (раньше СНГ) региона будет остановлена.  
> Этот пакет не поддерживает Lesta Games API (и скорей всего не будет поддерживать его никогда)

## Установка

Для установки нужно написать в консоль:

```sh
npm i @muffinking-jpeg/wg-api-lib
```

## Использование

### Инициализация

Что бы начать использовать модуль нужно подключить по синтаксису ES6 (Нет поддержки для CommonJS. Давайте развиваться.) с использованием вашего ключа API.

```js
import { wgApi } from '@muffinking-jpeg/wg-api-lib';

...

const api = new wgApi('Put your WG key here')
```

Хорошем тоном считается использование переменных среды или файла `.env` для хранения ключей ваших API

Файл `.env`:

```js
...
WG_API_KEY = "YourApiKey"
...
```

Ваш код:

```js
import * as dotenv from 'dotenv';
import { wgApi } from '@muffinking-jpeg/wg-api-lib';
...

dotenv.config();

const apiKey = process.env['WG_API_KEY']
const api = new wgApi(apiKey)
//Я слишком ленивый что бы сделать проверку на undefined ...
//Берегите себя
...
```

### Методы

#### .searchPlayer(paramsObject)

>Для поиска игрока мо нику.

| Параметры|              Типы данных        |        Значение        |
|--------- |-------------------------------- |----------------------- |
| game:    | 'wotb' \| 'worldoftanks'        | Выбор игры             |
| region:  | 'eu' \| 'ru' \| 'na' \| 'asia'  | Выбор региона          |
| query:   |             string              | Ник игрока             |

#### .getPlayerData(paramsObject)

>Для загрузки данных игрока.

| Параметры|              Типы данных        |        Значение        |
|--------- |-------------------------------- |----------------------- |
| game:    | 'wotb' \| 'worldoftanks'        | Выбор игры             |
| region:  | 'eu' \| 'ru' \| 'na' \| 'asia'  | Выбор региона          |
| id:      |             number              | Id игрока              |

#### .getPlayerAchievements(paramsObject)

>Для загрузки достижений игрока.

| Параметры|              Типы данных        |        Значение        |
|--------- |-------------------------------- |----------------------- |
| game:    | 'wotb' \| 'worldoftanks'        | Выбор игры             |
| region:  | 'eu' \| 'ru' \| 'na' \| 'asia'  | Выбор региона          |
| id:      |             number              | Id игрока               |

### Примеры

#### Как найти игрока по нику

```js
api.searchPlayer({
    game: 'wotblitz',
    query: 'Holly_Carbonara',
    region: 'eu'
  }).then(res => {
    //Обработчик кода здесь
  })
```

#### Get player's stats

```js
api.getPlayerData({
    game: 'wotblitz',
    id: 594863503,
    region: 'eu'
  }).then(res => {
    //Обработчик кода здесь
  })
```

#### Get player's achievements

```js
api.getPlayerAchievements({
    game: 'wotblitz',
    id: 594863503,
    region: 'eu'
  }).then(res => {
    //Обработчик кода здесь
  })
```

## TODO

- Сделать проверку ключа API на undefined.
- Расширить методы для загрузки статистики по технике\кораблях.
- Добавить поддержку для WOWS и WOT Console.
- Реализовать весь функционал с [справочника Wargaming API](https://developers.wargaming.net/reference/all)
- Улучшить readme
- ~~Перевести readme на несколько языков~~

## НИКОГДА НЕ БУДЕТ РЕАЛИЗОВАНО

- Поддержка Lesta Games API
- Поддержка для авторизации Wargaming (Возможно будет сделано отдельным модулем. Этот функционал требует HTTP сервер)
