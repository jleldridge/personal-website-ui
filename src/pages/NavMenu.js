import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {items: props.items};
    }

    render() {
        const listItems = this.state.items.map((item) => 
            <li><NavLink exact to={item.href}>{item.name}</NavLink></li>
        );
        return (
            <ul className="nav navbar-nav">
                {listItems}
            </ul>
        );
    }
}

export default NavMenu;