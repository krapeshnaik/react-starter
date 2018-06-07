import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { header } from './header.scss';

// actions
import { updateHeaderAction, getHeaderAction } from './header.actions';

class Header extends PureComponent {
    render() {
        return (
            <header className={header}>
                <div>Header comp</div>
                <div>{this.props.data}</div>
                <button onClick={this.props.updateHeader}>Click</button>
                <button onClick={this.props.getHeader}>Click</button>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.header
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateHeader: () => {
            dispatch(updateHeaderAction());
        },

        getHeader: () => {
            dispatch(getHeaderAction());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);