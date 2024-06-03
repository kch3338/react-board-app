import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header_app">
                <Button variant="primary"
                        size="sm"
                        onClick={ function() {
                   this.props.onChangeMode();
                }.bind(this) }>작성하기</Button>
            </div>
        )
    }
}

export default Header;