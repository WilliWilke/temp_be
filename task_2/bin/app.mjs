import express   from 'express';
import csv2json  from './csv2json.mjs';

const app = express();

app.listen(3000, () => console.log('Code: 3000, Message:Ready sir!'));

app.use(express.text({type: 'text/*'}));

app.post('/', async (request, response) => {

  if (request.accepts('json')) {
    response.status(200).send(csv2json(request.body));
  } else {
    response.sendStatus(406);
  }

});