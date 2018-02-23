import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {items: props.items};
    }

    render() {
        const listItems = this.state.items.map((item) => 
            <li><Link to={item.href}>{item.name}</Link></li>
        );
        return (
            <ul className="Horizontal-menu">
                {listItems}
            </ul>
        );
    }
}

export default NavMenu;