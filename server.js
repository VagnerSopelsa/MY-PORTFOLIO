const express = require('express');

const app = express();

const PORT = 3080;

app.get('/',(req, res)=> {
    res.json({
        'sucess':true
    });
});

app.get('/portfolio', (req, res) => {
    //acess db
    const data = [{
        id: 1,
        name: 'My fist project',
        createdAt: '2020-12-01'
    },
    {
        id: 2,
        name: 'My second project',
        createdAt: '2020-01-06'
    },
    {
        id: 3,
        name: 'My other project',
        createdAt: '2021-01-25'
    },
    ];

    res.json({
        sucess: true,
        data: data
    })
})
app.listen(PORT);