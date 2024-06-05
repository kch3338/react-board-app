import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./UpdateBoard.css";

class UpdateBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.content.id,
            title: this.props.content.title,
            content: this.props.content.content
        }
    }

    formHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="update_form">
                    <Form onSubmit={ function(e) {
                        e.preventDefault();
                        this.props.updateBoard({
                            id: this.state.id,
                            title: this.state.title,
                            content: this.state.content
                        });
                    }.bind(this) }>

                        <Form.Group className="mb-3" controlId="1">
                            <Form.Label>제목</Form.Label>
                            <Form.Control name="title"
                                          type="text"
                                          placeholder="제목을 입력하세요."
                                          value={ this.state.title }
                                          onChange={ this.formHandler.bind(this) }
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>내용</Form.Label>
                            <Form.Control name="content"
                                          as="textarea"
                                          placeholder="내용을 입력하세요."
                                          value={ this.state.content }
                                          onChange={ this.formHandler.bind(this) }
                            ></Form.Control>
                        </Form.Group>
                        <div className="button_list">
                            <Button type="submit"
                                    variant="primary"
                                    size="sm">수정</Button>
                            <Button variant="danger"
                                    size="sm"
                                    onClick={ function() {
                                        this.props.viewBoard(this.state.id);
                                    }.bind(this) }>취소</Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default UpdateBoard;