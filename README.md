# Find-Movie

Приложение для поиска фильмов и сериалов на данных OMDb API. Можно искать по названию, смотреть подробности о фильме и собирать свои списки: избранное и просмотренное.

**Демо:** https://find-movie-xi-ecru.vercel.app


## Возможности

- Поиск по названию с задержкой ввода (debounce), чтобы не слать запрос на каждую букву
- Карточки результатов с постером, названием и годом
- Окно с подробностями: жанр, рейтинг IMDb, описание
- Списки «Избранное» и «Просмотренные», которые не сбрасываются при новом поиске
- Подсветка кнопок у фильмов, которые уже добавлены в списки
- Обработка загрузки, ошибок сети и пустой выдачи

## Стек

- React и TypeScript
- Vite
- OMDb API
- Чистый CSS (без UI-библиотек)

## Запуск локально

1. Склонируй репозиторий и установи зависимости:

   ```bash
   git clone https://github.com/Nezzah13/Find-Movie.git
   cd Find-Movie
   npm install
   ```

2. Получи бесплатный ключ на [omdbapi.com](https://www.omdbapi.com/apikey.aspx). Ключ приходит на почту, его нужно активировать по ссылке из письма.

3. Создай файл `.env` в корне проекта по образцу `.env.example` и впиши ключ:

   ```
   VITE_OMDB_API_KEY=твой_ключ
   ```

4. Запусти проект:

   ```bash
   npm run dev
   ```

## Структура проекта

- `src/Hooks` — `useDebounce`, `useMovieSearch`, `useMovieDetails`
- `src/Components` — `SearchBar`, `MovieList`, `MovieCard`, `MovieDetails`, `Sidebar`, `FavoriteList`, `ViewedList`
- `src/Styles` — стили компонентов
