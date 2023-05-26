const React = require("react");
const connect = require("react-redux").connect;
const actions = require("../actions/actions.jsx");

const AppView = (props) => {

    return <h1>Hello world!</h1>;

}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        currentUser: state.user
    }
}

module.exports = connect(mapStateToProps, actions)(AppView);