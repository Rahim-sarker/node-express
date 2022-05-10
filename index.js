const express = require('express');
const res = require('express/lib/response');
const app = express()
const cors = require('cors')
const port = 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("WOWWWW thi is my node server");
})

const users = [
    { id: 0, name: 'Rahim Sarker', email: 'rahim@gmail.com', phone: 1945820385 },
    { id: 1, name: 'Sumon Sarker', email: 'rahim@gmail.com', phone: 1945820385 },
    { id: 2, name: 'Dipa Sarker', email: 'rahim@gmail.com', phone: 1945820385 },
    { id: 3, name: 'Maruf khan', email: 'rahim@gmail.com', phone: 1945820385 },
    { id: 4, name: 'Din Islam', email: 'dinu@gmail.com', phone: 1945820385 },
    { id: 5, name: 'Nusrat jahan', email: 'nusrat@gmail.com', phone: 1945820385 }
]

app.get('/users', (req, res) => {
    const search = req.query.search;

    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits/mango/fazli', (req, res) => {
    res.send("Fazli mango is not so sweet")
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hitting the post", req.body);
    //res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.listen(port, () => {
    console.log('Listening to port', port);
})