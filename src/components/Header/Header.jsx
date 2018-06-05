import React, { Component } from 'react';
import { header } from './header.scss';

export default class Header extends Component {
    render() {
        return (
            <header className={header}>Header comp</header>
        )
    }
}