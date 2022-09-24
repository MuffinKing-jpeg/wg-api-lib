# WG-API-Lib

Доступно на:

[**EN**](https://muffinking-jpeg.github.io/wg-api-lib/) | [**UA**](https://muffinking-jpeg.github.io/wg-api-lib/readme-ua) | [**RU**](https://muffinking-jpeg.github.io/wg-api-lib/readme-ru)

## Description

Пакет для NodeJS який спрощує роботу з API від Wargaming.net.
Поки що є підтримка лиже для World of Tanks and World of Tanks Blitz.
> **ВАЖЛИВО!**  
> Починаючи з 14 жовтня 2022 року підтримка .ru регіону (СНД раніше) буде зупинена.  
> Цей пакет не підтримує Lesta Games API (Та скоріше за все не будет підтримувати)

## Встановлення

Для встановлення потрібно написати у консолі:

```sh
npm i @muffinking-jpeg/wg-api-lib
```

## Використання

### Ініціалізація

Для використання потрібно імпортувати модуль за синтаксисом ES6 (Підтримки синтаксису CommonJS відсутня. Давайте рухатись далі.) та ініціалізувати об'єкт з вашим ключем API.

```js
import { wgApi } from '@muffinking-jpeg/wg-api-lib';

...

const api = new wgApi('Put your WG key here')
```

Хорошим тоном вважається використання змінних середовища або `.env` файл для зберігання ключів.

`.env` Файл:

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
//Я надто лінивий та не зробив перевірку на undefined тому... 
//Бережіть себе 
...
```

### Методи

#### .searchPlayer(paramsObject)

>Для пошуку гравця по імені.

| Параметри|            тип даних            |        Значення        |
|--------- |:------------------------------: |----------------------- |
| game:    | 'wotb' \| 'worldoftanks'        | Вибір гри              |
| region:  | 'eu' \| 'ru' \| 'na' \| 'asia'  | Вибір регіону          |
| query:   |             string              | Ім'я гравця            |

#### .getPlayerData(paramsObject)

>Для завантаження статистики гравця.

| Параметри|            тип даних            |        Значення        |
|--------- |:------------------------------: |----------------------- |
| game:    | 'wotb' \| 'worldoftanks'        | Вибір гри              |
| region:  | 'eu' \| 'ru' \| 'na' \| 'asia'  | Вибір регіону          |
| id:      |             number              | id гравця              |

#### .getPlayerAchievements(paramsObject)

>Для завантаження досягнень гравця.

| Параметри|            тип даних            |        Значення        |
|--------- |-------------------------------- |----------------------- |
| game:    | 'wotb' \| 'worldoftanks'        | Вибір гри              |
| region:  | 'eu' \| 'ru' \| 'na' \| 'asia'  | Вибір регіону          |
| id:      |             number              | id гравця              |

### Приклади

#### Як отримати id гравця по імені

```js
api.searchPlayer({
    game: 'wotblitz',
    query: 'Holly_Carbonara',
    region: 'eu'
  }).then(res => {
    //Обробка відповіді тут
  })
```

#### Як отримати статистику гравця

```js
api.getPlayerData({
    game: 'wotblitz',
    id: 594863503,
    region: 'eu'
  }).then(res => {
    //Обробка коду ось тут
  })
```

#### Отримати досягнення гравця

```js
api.getPlayerAchievements({
    game: 'wotblitz',
    id: 594863503,
    region: 'eu'
  }).then(res => {
    //Обробка коду ось тут
  })
```

## TODO

- Зробити перевірку ключа API.
- Розширити методи для перегляду статистики по техніці.
- Добавити підтримку WOWS та WOT Console.
- Реалізувати кожну функцію із [документації Wargaming](https://developers.wargaming.net/reference/all)
- Поліпшити readme
- ~~Переклад readme на інші мови~~

## НІКОЛИ НЕ БУДЕ РЕАЛІЗОВАНО

- Підтримка Lesta Games API
- Підтримка авторизації Wargaming (Можливо буде зроблено як окремий модуль. Ця функція потребує HTTP сервер)
