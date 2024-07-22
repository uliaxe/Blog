const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/articles', (req, res) => {
    fs.readFile('articles.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading articles');
        } else {
            res.send(JSON.parse(data));
        }
    });
});

app.get('/api/articles/:id', (req, res) => {
    fs.readFile('articles.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading articles');
        } else {
            const articles = JSON.parse(data);
            const article = articles[req.params.id];
            if (article) {
                res.send(article);
            } else {
                res.status(404).send('Article not found');
            }
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
