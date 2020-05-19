const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');


const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const { createUser, login } = require('./controllers/users');
const auth = require('./middlewares/auth');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());

// роуты регистрации и логина
app.post('/signin', login);
app.post('/signup', createUser);

// авторизация
app.use(auth);

// роуты доступа к информации о пользователях и карточках
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
});

const catchErrorMIddleware = ((err, req, res, next) => {
  if (err instanceof SyntaxError) {
    console.error(err);
    return res.status(err.status).send({ status: err.status, message: err.message });
  }
  // if (err.status(500)) {
  //     return res.status(500).send({ message: err.message });
  // }
  return next();
});

app.use(catchErrorMIddleware);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
