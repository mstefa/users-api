import { AuthBackendApp } from './AuthBackendApp';

try {
  new AuthBackendApp().start();
} catch (e) {
  console.error(e);
  process.exit(1);
}

process.on('uncaughtException', err => {
  console.error('uncaughtException', err);
  process.exit(1);
});
