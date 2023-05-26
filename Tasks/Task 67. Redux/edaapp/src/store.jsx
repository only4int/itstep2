/*
state = {
    products: [
        {
            id,
            name,
            price,
            quantity
        }
    ],
    user: {
        name,
        age
    },

    lastIdProduct //- id последнего добавленного продукта
}
*/
const reducer = require("./reducer/reducer.jsx");
const redux = require("redux");

const store = redux.createStore(reducer);

module.exports = store;
