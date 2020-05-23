 

# Яндекс.Практикум
  
## Проектная работа 15_v1.0.0
 
## Backend deployment

### Краткая информация о проекте

Создание удаленного сервера, привязка домена и развертка на сервере приложения для работы с проектом Mesto.
В работе применяются базы данных MongoDB для разработки бэкенда проекта Mesto и разработки API, согласно принципам REST.

### Ссылки

- [Фронтенд проекта: projectmesto.site](https://projectmesto.site){:target="_blank"}
- <a href="https://api.projectmesto.site" target="_blank">Бэкенд проекта: api.projectmesto.site</a>
- <a href="https://github.com/Lsnsky/Yandex.Praktikum_Project_15_Backend_deployment" target="_blank">Актуальная версия проекта на Github - v1.0.0</a>

### ПО для выполнения задания:

<li>
Git
<li>
Node.js
<li>
MongoDB
<li>
NPM-пакеты:

eslint, eslint-config-airbnb-base, eslint-plugin-import, express, mongoose, body-parser, validator, bcryptjs, jsonwebtoken, dotenv, helmet celebrate joi winston express-winston
  

### Инструкция по сборке:
- сервер запускается командой **npm run start** по адресу **localhost:3000**
- Node.js приложение подключается к серверу Mongo по адресу **mongodb://localhost:27017/mestodb**
- при отправке запросов в заголовок **authorization** нужно записать схему аутентификации (используем **Bearer**) и токен через пробел: 
  - **GET/users** возвращает всех пользователей из базы
  - **GET/users/:userId** возвращает конкретного пользователя
  - **POST/signup** создаёт пользователя. В теле POST-запроса на создание пользователя передается JSON-объект с пятью полями: **name**, **about**, **avatar**, **email**, **password**
  - **POST/signin** производит авторизацию пользователя. Если успешно - токен возвращается в ответе и записыватеся в cookie с включенной опцией httpOnly. В теле POST-запроса на создание пользователя передается JSON-объект с двумя полями: **email**, **password**
  - **GET/cards** возвращает все карточки всех пользователей
  - **POST/cards** создаёт карточку. В теле POST-запроса на создание карточки передается JSON-объект с двумя полями: **name** и **link**.
  - **DELETE/cards/:cardId** удаляет карточку по идентификатору
  - **PATCH/users/me** — обновляет профиль
  - **PATCH/users/me/avatar** — обновляет аватар
  - **PUT/cards/:cardId/likes** — поставить лайк карточке
  - **DELETE/cards/:cardId/likes** — убрать лайк с карточки
 
  
### Итоги проектной работы:

- создан бесплатный удаленный сервер на базе <a href="https://cloud.yandex.ru/" target="_blank">Яндекс Облако</a>. К серверу привязан домен.
- сервер отвечает на запросы при обращении к <a href="https://api.projectmesto.site" target="_blank">api</a> и отдает фронтенд проекта <a href="https://projectmesto.site" target="_blank">Место</a>.
