import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import './Header.css';

class Header extends Component {
    render() {
        const loginId = this.props.loginId;
가
        return (
            <div className="header_app">
                <div className="header_title">
                    <h1>공부합시다</h1>
                </div>
                <div className="header_content">
                    <div className="header_button">
                        { loginId &&
                            <Button variant="primary"
                                    size="sm"
                                    onClick={ function() {
                                        this.props.onChangeMode();
                                    }.bind(this) }>작성하기</Button>
                        }
                    </div>
                    <div className="header_login_info">
                        { loginId ?
                            <>
                                <span className="header_login_id">{ loginId }</span>
                                <Button variant="danger"
                                        size="sm"
                                        onClick={ function() {
                                            this.props.doLogout();
                                        }.bind(this) }>로그아웃</Button>
                            </> :
                            <Button variant="primary"
                                    size="sm"
                                    onClick={ function() {
                                        this.props.doLogin();
                                    }.bind(this) }>로그인</Button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;