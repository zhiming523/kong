module.exports = {
    "transform": { "\\.js$": "babel-jest" },
    "moduleNameMapper":{
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
   },
   "setupFiles": ["./setup-jest.js"],
   "testEnvironment": 'jsdom',
}