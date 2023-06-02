const React = require("react");
const connect = require("react-redux").connect;
const actions = require("../actions/actions.jsx");
const UserInfo = require("./UserInfo.jsx");
const FormAdd = require("./FormAdd.jsx");
const List = require("./List.jsx");

const AppView = (props) => { //props.products, props.currentUser

    return <>
        <UserInfo user={props.currentUser}/>
        <FormAdd onProductAdd={props.addProduct}/>
        <List products={props.products} onProductDelete={props.deleteProduct} onProductFavorite={props.favoriteProduct} onProductUnfavorite={props.unfavoriteProduct}/>
    </>;

}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        currentUser: state.user
    }
}

module.exports = connect(mapStateToProps, actions)(AppView);