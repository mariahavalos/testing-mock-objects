module.exports = {
    testMatch: ['**/+(*.)+(test).+(ts|js)?(x)'],
    "transform": {
        "^.+\\.js$": "babel-jest",
        "^.+\\.jsx$": "babel-jest"
      },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageReporters: ['json', 'html', 'cobertura', 'text-summary']
  };