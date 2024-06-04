import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import './BoardView.css';

class BoardView extends Component {
    isAuthor() {
        return this.props.loginId === this.props.content.author;
    }

    render() {
        const content = this.props.content;

        return (
            <div>
                <div className="content_title">
                    <h3>{ content.title }</h3>
                </div>
                <div className="content_info">
                    <span>{ content.author }</span>
                </div>
                <div className="content">
                    { content.content }
                </div>
                <div className="button_list">
                    { this.isAuthor() &&
                        <>
                        <Button variant="secondary"
                                size="sm">수정</Button>
                        <Button variant="danger"
                                size="sm"
                                onClick={ function() {
                                    this.props.deleteBoard(content.id);
                                }.bind(this) }>삭제</Button>
                        </>
                    }
                    <Button variant="secondary"
                            size="sm"
                            onClick={ function() {
                                this.props.onChangeMode();
                            }.bind(this) }>목록</Button>

                </div>
            </div>
        )
    }
}

export default BoardView;