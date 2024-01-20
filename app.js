const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const sequelize = require('./src/configs/database');
const initAssociations = require('./src/models/index');
const routes = require('./src/routes/index');
const User = require('./src/models/User');
const Course = require('./src/models/Course');

const app = express();
const PORT = process.env.PORT || 3000;

/** Middlewares */
app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200,
  })
);

/** Initalize Relations */
initAssociations();

/** Routes */
app.get('/', (req, res) => {
  res.send('Hello World!');
});

routes(app);

/** Database Connection and Starting Server */
sequelize.sync({ force: false }).then(async () => {
  /** Admin */
  // await User.create({
  //   username: 'oktayparlak',
  //   password: '$2a$10$WN1eXKVbc7CQZAFTDclJROJ6Fxxi/xTihle4zSU3W8jRZtY2ztebC',
  //   type: 'ADMIN',
  // });
  // /** User */
  // await User.create({
  //   username: 'mehmetparlak',
  //   password: '$2b$10$.L9d4S1ecivHP4Q7oWGHHexTl2wvKB1lV/iL85Xxol8cbCWq6rpne',
  //   type: 'USER',
  // });
  // await Course.create({
  //   code: 'CSE101',
  //   name: 'Introduction to Computer Engineering',
  //   credit: 3,
  //   ects: 5,
  //   compulsory: true,
  // });
  // await Course.create({
  //   code: 'CSE102',
  //   name: 'Introduction to Software Engineering',
  //   credit: 3,
  //   ects: 5,
  //   compulsory: true,
  // });
  // await Course.create({
  //   code: 'CSE103',
  //   name: 'Introduction to Computer Science',
  //   credit: 3,
  //   ects: 5,
  //   compulsory: true,
  // });
  console.log('Database connected!');
  /** Server */
  app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
  });
});
