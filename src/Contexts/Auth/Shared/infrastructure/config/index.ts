import convict from 'convict';

const moocConfig = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  jwtSecret: {
    doc: 'The token secret to sign JWTs',
    format: String,
    default: 'SuperSecret',
    env: 'JWT_SECRET'
  },
  mongo: {
    url: {
      doc: 'The Mongo connection URL',
      format: String,
      env: 'MONGO_URL',
      default: 'mongodb://localhost:27017/auth-backend-dev'
    }
  }
});

moocConfig.loadFile([__dirname + '/default.json', __dirname + '/' + moocConfig.get('env') + '.json']);

export default moocConfig;
