const express = require('express');
const https = require('https');

const app = express();
app.use(express.json());

// GET (pakai get data dari pokemon api  https://pokeapi.co/)
app.get('/pokemon/:id', (req, res) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${req.params.id}`;

    https.get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            res.json(JSON.parse(data));
        });

    }).on('error', (err) => {
        res.status(500).json({ message: 'Error retrieving data' });
    });
});

// POST (insert pokemon, lalu mengembalikan print json insert pokemon)
app.post('/pokemon', (req, res) => {
    const newPokemon = req.body;

    res.status(201).json(newPokemon);
});

// PUT 
app.put('/pokemon/:id', (req, res) => {
    res.send('This is a PUT operation');
});

// PATCH 
app.patch('/pokemon/:id', (req, res) => {
    res.send('This is a PATCH operation');
});

// DELETE 
app.delete('/pokemon/:id', (req, res) => {
    res.send('This is a DELETE operation');
});

// HEAD 
app.head('/pokemon/:id', (req, res) => {
    res.send('This is a HEAD operation');
});

// OPTIONS 
app.options('/pokemon', (req, res) => {
    res.send('This is an OPTIONS operation');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
