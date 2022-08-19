## Task 2

- Install the node modules `npm install` (should install express)
- The server is bin/app.mjs and listens on port 3000
- The test command with curl to send the `test.csv` is: `curl --data-binary @test/asset/test.csv -H 'Content-Type: text/csv' 'localhost:3000/'`
- The result of this call should be the like the file `test/asset/result.json`
- The input of the request is the text of `test.csv`
- The function in `csv2json.mjs` needs its implemenation
- The input csv should be returned as a json (every csv should work)

#### Tips

- csv is of type string
- Strings can be "splitted" at specific characters using mystring.split('your_character')
- Result is an array of strings splitted by this character

### Bonus points

- Also support transformation csv2xml
- Also support json2csv
- When using json2csv stream the lines instead of writing the whole response string