import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './RegisterBoard.css';

function RegisterBoard({ registerBoard, onChangeModeToList }) {
    const onSubmit = (e) => {
        e.preventDefault();
        registerBoard(e.target.title.value, e.target.content.value);
    }

    return (
        <div>
            <div className="register_form">
                <Form onSubmit={ onSubmit }>
                    <Form.Group className="mb-3" controlId="1">
                        <Form.Label>제목</Form.Label>
                        <Form.Control name="title" type="text" placeholder="제목을 입력하세요."></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>내용</Form.Label>
                        <Form.Control name="content" as="textarea" placeholder="내용을 입력하세요."></Form.Control>
                    </Form.Group>
                    <div className="button_list">
                        <Button type="submit"
                                variant="primary"
                                size="sm">등록</Button>
                        <Button variant="secondary"
                                size="sm"
                                onClick={ onChangeModeToList }>목록</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default RegisterBoard;