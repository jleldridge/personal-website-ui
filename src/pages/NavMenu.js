import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';

class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {items: props.items};
    }

    render() {
        const listItems = this.state.items.map((item) => 
            <li><NavLink exact to={item.href} className="Navmenu-item" activeClassName="Navmenu-item-active">{item.name}</NavLink></li>
        );
        return (
            <ul className="Navmenu">
                {listItems}
            </ul>
        );
    }
}

export default NavMenu;