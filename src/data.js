// Le fichier data.js est notre base de données

// Les Articles sont définis par :
//  - Un identifiant unique
//  - Une image (source en url)
//  - Un titre
//  - Une description
//  - Un prix

const data = {
    productData:[
//Ici on définit les différents articles ici ce sont des figurines POP
        {
            id: 1,
            img: "https://www.placedespop.com/img/produits/1404/thumbs/harry-potter-08-harry-potter-quidditch-1-1547215882_0x460.jpg",
            title: 'Harry Potter',
            desc: 'Harry Potter - 1',
            price: 15,
        },
        {
            id: 2,
            img: "https://www.placedespop.com/img/produits/2311/thumbs/harry-potter-61-mimi-geignarde-brillant-dans-le-noir-1-1631008522_0x460.jpg",
            title: 'Mimi Geignarde',
            desc: 'Banane',
            price: 4,
        },
        {
            id: 3,
            img: "https://www.placedespop.com/img/produits/10376/thumbs/harry-potter-127-patronus-albus-dumbledore-1-1611133933_0x460.jpg",
            title: 'Patronus Albus Dumbuldore',
            desc: 'Harry Potter - 3',
            price: 7,
        }
    ],
};

export default data;