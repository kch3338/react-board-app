import Button from "react-bootstrap/Button";
import './BoardView.css';

function BoardView({ loginId, content, onChangeModeToList, onChangeModeToUpdate, deleteBoard }) {
    const isAuthor = () => {
        return loginId === content.author;
    }

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
                { isAuthor &&
                    <>
                    <Button variant="secondary"
                            size="sm"
                            onClick={ () => onChangeModeToUpdate(content) }>수정</Button>
                    <Button variant="danger"
                            size="sm"
                            onClick={ () => deleteBoard(content.id) }>삭제</Button>
                    </>
                }
                <Button variant="secondary"
                        size="sm"
                        onClick={ onChangeModeToList }>목록</Button>
            </div>
        </div>
    )
}

export default BoardView;