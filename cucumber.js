const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const auth_backend = [
  ...common,
  'tests/apps/auth/backend/features/**/*.feature',
  '--require tests/apps/auth/backend/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  auth_backend
};
