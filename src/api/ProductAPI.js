const PlayerAPI = {
    products: [{
        "id": "5163b1b8-f557-426d-8b19-94c46cd39d3d",
        "name": "Oil - Peanut",
        "description": "sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis",
        "imgUrl": "http://dummyimage.com/300x300.bmp/dddddd/000000"
    }, {
        "id": "a9554b5f-1c11-4a9e-9983-eaa8c78951f0",
        "name": "Chinese Lemon Pork",
        "description": "ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet ",
        "imgUrl": "http://dummyimage.com/300x300.jpg/cc0000/ffffff"
    }, {
        "id": "bcc3ce9a-d7d3-46bf-8fca-6fba0239540c",
        "name": "Bread - Corn Muffaleta Onion",
        "description": "donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique",
        "imgUrl": "http://dummyimage.com/300x300.jpg/ff4444/ffffff"
    }, {
        "id": "8086607b-de5f-4023-883e-e7df0e46ceb7",
        "name": "Olives - Nicoise",
        "description": "nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes",
        "imgUrl": "http://dummyimage.com/300x300.bmp/cc0000/ffffff"
    }, {
        "id": "06a0d26c-f8c7-4ddf-bd23-9bd74df8c365",
        "name": "Pastry - Apple Muffins - Mini",
        "description": "turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam",
        "imgUrl": "http://dummyimage.com/300x300.png/cc0000/ffffff"
    }, {
        "id": "b151d0cc-1c1a-4f85-ad42-abadf9208f18",
        "name": "Miso - Soy Bean Paste",
        "description": "malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer",
        "imgUrl": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff"
    }, {
        "id": "ca69775c-14b1-4e6e-8c1a-dd8f03ebb646",
        "name": "Zucchini - Yellow",
        "description": "ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum",
        "imgUrl": "http://dummyimage.com/300x300.png/cc0000/ffffff"
    }, {
        "id": "1dbc5947-3020-46a8-8e0c-56341dcb9cf3",
        "name": "Chocolate - Sugar Free Semi Choc",
        "description": "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi",
        "imgUrl": "http://dummyimage.com/300x300.jpg/dddddd/000000"
    }, {
        "id": "a8dd8ee9-0737-45c3-b42f-82e62b4d2d51",
        "name": "Easy Off Oven Cleaner",
        "description": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices",
        "imgUrl": "http://dummyimage.com/300x300.png/5fa2dd/ffffff"
    }, {
        "id": "63b46bee-68b6-49a3-94a0-1fd1c7ce344b",
        "name": "Wine - Zinfandel Rosenblum",
        "description": "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam portti",
        "imgUrl": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff"
    }, {
        "id": "7d22a3d1-871e-4c33-b243-4c38da7e95f2",
        "name": "Lobster - Cooked",
        "description": "sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui",
        "imgUrl": "http://dummyimage.com/300x300.bmp/5fa2dd/ffffff"
    }, {
        "id": "a259ff62-e532-4576-8371-fe4b2a5798fb",
        "name": "Oil - Peanut",
        "description": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis",
        "imgUrl": "http://dummyimage.com/300x300.bmp/ff4444/ffffff"
    }, {
        "id": "92d6416e-5291-42cf-a16b-c5d94f2ce9b4",
        "name": "Numi - Assorted Teas",
        "description": "mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt ",
        "imgUrl": "http://dummyimage.com/300x300.jpg/cc0000/ffffff"
    }, {
        "id": "40eb6db8-78a1-43ae-bce0-b738fffa1e9f",
        "name": "Pate - Liver",
        "description": "in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor",
        "imgUrl": "http://dummyimage.com/300x300.png/5fa2dd/ffffff"
    }, {
        "id": "ecef2f9e-86d2-4933-8bc7-218d084cd009",
        "name": "Brandy - Orange, Mc Guiness",
        "description": "dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida",
        "imgUrl": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff"
    }, {
        "id": "163039fb-e280-47a2-9c43-67b53868f5c8",
        "name": "Beer - Camerons Auburn",
        "description": "congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam",
        "imgUrl": "http://dummyimage.com/300x300.jpg/cc0000/ffffff"
    }, {
        "id": "0cfc18c9-30d8-4a69-81d7-b35d7ea6a894",
        "name": "Cup - Translucent 7 Oz Clear",
        "description": "quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa",
        "imgUrl": "http://dummyimage.com/300x300.bmp/cc0000/ffffff"
    }, {
        "id": "207850ab-22b7-4eba-b647-12a4c742f310",
        "name": "Lemon Balm - Fresh",
        "description": "eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi",
        "imgUrl": "http://dummyimage.com/300x300.bmp/5fa2dd/ffffff"
    }, {
        "id": "ddcf71c5-b613-44a2-a12e-dee48db0274b",
        "name": "Chocolate - Unsweetened",
        "description": "pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien",
        "imgUrl": "http://dummyimage.com/300x300.jpg/ff4444/ffffff"
    }, {
        "id": "b2d78358-ed18-49aa-8a29-046b666e194e",
        "name": "Vaccum Bag 10x13",
        "description": "at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac",
        "imgUrl": "http://dummyimage.com/300x300.bmp/cc0000/ffffff"
    }, {
        "id": "a16ed3bf-a229-4c66-ac8e-8c3dd18e5f9f",
        "name": "Gatorade - Lemon Lime",
        "description": "ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices",
        "imgUrl": "http://dummyimage.com/300x300.jpg/ff4444/ffffff"
    }, {
        "id": "55145926-4f93-4efb-b7f5-09b1485ac139",
        "name": "Snapple - Iced Tea Peach",
        "description": "duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec",
        "imgUrl": "http://dummyimage.com/300x300.bmp/dddddd/000000"
    }, {
        "id": "d87a2f4b-f990-4711-813f-b88bd17fa00a",
        "name": "Cheese - Brick With Pepper",
        "description": "aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam",
        "imgUrl": "http://dummyimage.com/300x300.jpg/cc0000/ffffff"
    }, {
        "id": "742d4f42-47d1-4d5e-9a91-4b1823e699d4",
        "name": "Wine - Red, Gamay Noir",
        "description": "sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu",
        "imgUrl": "http://dummyimage.com/300x300.png/cc0000/ffffff"
    }, {
        "id": "89eab0d3-e92d-49ea-ae2a-5b3bfe09fada",
        "name": "Garbage Bag - Clear",
        "description": "mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh",
        "imgUrl": "http://dummyimage.com/300x300.bmp/cc0000/ffffff"
    }, {
        "id": "581d41e5-3ba3-4024-a1e4-8777e258e55a",
        "name": "Rice Wine - Aji Mirin",
        "description": "in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis",
        "imgUrl": "http://dummyimage.com/300x300.bmp/ff4444/ffffff"
    }, {
        "id": "0c145a00-9b42-4f79-894e-8d44c80ddf39",
        "name": "Lamb - Shoulder, Boneless",
        "description": "tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non",
        "imgUrl": "http://dummyimage.com/300x300.jpg/ff4444/ffffff"
    }, {
        "id": "b990bec5-2c48-4c63-a291-66cac4f67caf",
        "name": "Pan Grease",
        "description": "nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id",
        "imgUrl": "http://dummyimage.com/300x300.jpg/cc0000/ffffff"
    }, {
        "id": "e25468b9-0198-424c-ab4f-f833682ed12a",
        "name": "Bag Clear 10 Lb",
        "description": "donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit",
        "imgUrl": "http://dummyimage.com/300x300.bmp/cc0000/ffffff"
    }, {
        "id": "8d758d86-8ac5-4de8-82bd-0494c1c56ed4",
        "name": "Wine - Toasted Head",
        "description": "suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut",
        "imgUrl": "http://dummyimage.com/300x300.jpg/cc0000/ffffff"
    }],
    all: function () { return this.products },
    get: function (id) {
        const isProduct = p => p.id === id
        return this.products.find(isProduct)
    }
}

export default PlayerAPI;