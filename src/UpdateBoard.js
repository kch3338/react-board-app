import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./UpdateBoard.css";

function UpdateBoard({ content, viewBoard, updateBoard }) {
    const [board, setBoard] = useState({
        id: content.id,
        title: content.title,
        content: content.content
    });

    const formHandler = (e) => {
        setBoard({
            ...board,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        updateBoard({
            id: board.id,
            title: board.title,
            content: board.content
        });
    }

    const onViewBoard = (id) => {
        viewBoard(id);
    }

    return (
        <div>
            <div className="update_form">
                <Form onSubmit={ onSubmit }>
                    <Form.Group className="mb-3" controlId="1">
                        <Form.Label>제목</Form.Label>
                        <Form.Control name="title"
                                      type="text"
                                      placeholder="제목을 입력하세요."
                                      value={ board.title }
                                      onChange={ formHandler }
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>내용</Form.Label>
                        <Form.Control name="content"
                                      as="textarea"
                                      placeholder="내용을 입력하세요."
                                      value={ board.content }
                                      onChange={ formHandler }
                        ></Form.Control>
                    </Form.Group>
                    <div className="button_list">
                        <Button type="submit"
                                variant="primary"
                                size="sm">수정</Button>
                        <Button variant="danger"
                                size="sm"
                                onClick={ () => onViewBoard(board.id) }>취소</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default UpdateBoard;