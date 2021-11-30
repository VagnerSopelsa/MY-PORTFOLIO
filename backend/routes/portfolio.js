const router = require('express').Router();

router.get('/', (req, res) => {
    //acess db
    const data = [ {
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
        data
    });
});

router.get('/:detalhe' , (req, res) => {
    console.log("Este é o id informado:", req.params.detalhe);

    res.json({
        success: true,
        id: req.params.detalhe
    })  
})

router.post('/',(req, res) => {
    res.json(req.body)
})

module.exports = router