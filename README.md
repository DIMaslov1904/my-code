# Мой код

[GitHub page](https://dimaslov1904.github.io/my-code/)


## 🚀 Структура проекта

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight ищет файлы `.md` или `.mdx` в директории `src/content/docs/`. Каждый файл становится доступным как маршрут на основе его имени.

Изображения можно добавлять в `src/assets/` и встраивать в Markdown с помощью относительной ссылки.

Статические ресурсы, такие как фавиконки, можно размещать в директории `public/`.

## 🧞 Команды

Все команды выполняются из корневой директории проекта через терминал:

| Команда                   | Действие                                           |
| :------------------------ | :------------------------------------------------- |
| `npm install`             | Устанавливает зависимости                         |
| `npm run dev`             | Запускает локальный сервер на `localhost:4321`    |
| `npm run build`           | Создает продакшн-сборку сайта в `./dist/`         |
| `npm run preview`         | Предпросмотр сборки локально перед деплоем        |
| `npm run astro ...`       | Запуск CLI команд типа `astro add`, `astro check` |
| `npm run astro -- --help` | Получить помощь по использованию Astro CLI        |