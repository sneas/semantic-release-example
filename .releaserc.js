module.exports = {
  branches: ['main'],
  ci: true,
  plugins: [
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/git'
  ],
}
