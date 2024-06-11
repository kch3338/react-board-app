import Form from "react-bootstrap/Form";
import "./Footer.css";
import Button from "react-bootstrap/Button";

function Footer({ doSearch }) {
    const search = (e) => {
        e.preventDefault();
        doSearch(e.target.searchTarget.value, e.target.searchValue.value);
    }

    return (
        <div className="footer_app">
            <Form onSubmit={ search }>
                <Form.Select className="footer_search_select_box"
                             name="searchTarget"
                             size="sm">
                    <option value="title">제목</option>
                    <option value="author">작성자</option>
                </Form.Select>
                <Form.Control className="footer_search_text"
                              name="searchValue"
                              type="text"
                              size="sm" />
                <Button type="submit"
                        className="footer_search_btn"
                        variant="primary"
                        size="sm">검색</Button>
            </Form>
        </div>
    )
}

export default Footer;