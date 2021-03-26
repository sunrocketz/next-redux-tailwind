module.exports = {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.{ts?(x),css}': (filenames) =>
    'yarn prettier --write ' + filenames.join(' '),
}
