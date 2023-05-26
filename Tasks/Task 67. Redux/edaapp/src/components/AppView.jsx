const React = require("react");
const connect = require("react-redux").connect;
const actions = require("../actions/actions.jsx");
const UserInfo = require("./UserInfo.jsx");

const AppView = (props) => { //props.products, props.currentUser

    return <>
        <UserInfo user={props.currentUser}/>
    </>;

}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        currentUser: state.user
    }
}

module.exports = connect(mapStateToProps, actions)(AppView);