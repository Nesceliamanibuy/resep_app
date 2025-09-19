const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;
const DATA_PATH = path.join(__dirname, 'data', 'recipes.json');


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'client')));


function readData(){
try{
const raw = fs.readFileSync(DATA_PATH);
return JSON.parse(raw);
} catch(e){
return [];
}
}
function writeData(data){
fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}


// GET all
app.get('/api/recipes', (req, res) => {
const data = readData();
res.json(data);
});


// GET by id
app.get('/api/recipes/:id', (req, res) => {
const data = readData();
const recipe = data.find(r => r.id === req.params.id);
if(!recipe) return res.status(404).json({error: 'Not found'});
res.json(recipe);
});


// POST create
app.post('/api/recipes', (req, res) => {
const data = readData();
const newRecipe = Object.assign({}, req.body, { id: Date.now().toString() });
data.push(newRecipe);
writeData(data);
res.status(201).json(newRecipe);
});


// PUT update
app.put('/api/recipes/:id', (req, res) => {
const data = readData();
const idx = data.findIndex(r => r.id === req.params.id);
if(idx === -1) return res.status(404).json({error: 'Not found'});
data[idx] = Object.assign({}, data[idx], req.body);
writeData(data);
res.json(data[idx]);
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));