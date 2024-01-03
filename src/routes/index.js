module.exports = (app) => {
  app.use('/api/auths', require('./auth.route'));
  app.use('/api/users', require('./user.route'));
  app.use('/api/courses', require('./course.route'));
  app.use('/api/applications', require('./application.route'));
  app.use('/api/surveys', require('./survey.route'));
};
