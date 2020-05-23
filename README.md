 

# Яндекс.Практикум
  
## Проектная работа 15_v1.0.0
 
## Backend deployment

### Краткая информация о проекте

Создание удаленного сервера, привязка домена и развертка на сервере приложения для работы с проектом Mesto.
В работе применяются базы данных MongoDB для разработки бэкенда проекта Mesto и разработки API, согласно принципам REST.

### Ссылки

[Фронтенд проекта](projectmesto.site)
[Бэкенд проекта](api.projectmesto.site)
[Актуальная версия проекта (v1.0.0) на Github](https://github.com/Lsnsky/Yandex.Praktikum_Project_14_Authentication)

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
<li>
создан бесплатный удаленный сервер на базе [Яндекс Облако](https://cloud.yandex.ru/). К серверу привязан домен.
<li>
сервер отвечает на запросы при обращении к [api](https://api.projectmesto.site) и отдает фронтенд проекта [Место](https://projectmesto.site).
