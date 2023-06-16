const React = require("react");
const {Link, Router} = require("react-router-dom");

const Header = (props) => {
    return  <Router>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">
                            Главная
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/product">
                            Продукты
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/product/add">
                            Добавить
                        </Link>
                    </li>
                </ul>   
    </Router>;   
}

module.exports = Header;