import express from 'express';
import fsP from 'node:fs/promises'

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('i work')
})

app.get('/todos', async (req, res) => {
    const todos = await fsP.readFile('./todo.json')
    res.send(JSON.parse(todos))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})