import React, { Component } from "react";
import $ from 'jquery';

class SmoothScrollAnchor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            href: props.href,
            children: props.children,
            className: props.className
        };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <a onClick={this.handleClick} className={this.state.className} href={this.state.href}>{this.state.children}</a>
        );
    }

    handleClick(e) {
        e.preventDefault();
        var hash = this.state.href;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 
        300, 
        function(){
            window.location.hash = hash;
        });
    }
}

export default SmoothScrollAnchor;