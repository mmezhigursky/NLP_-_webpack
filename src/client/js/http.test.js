// const { textAnalysator } = require ("./http.js");
jest.mock('./http'); // This line is important!
const {textAnalysator} = require('./http');
import "babel-polyfill"

test('should return some data',() => {
  textAnalysator('https://www.google.com/').then(label=>{
      expect(label).toBe('preventative medicine')
  });

});
