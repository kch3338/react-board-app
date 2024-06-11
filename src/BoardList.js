import './BoardList.css';
import EmptyBoard from "./EmptyBoard";
import BoardItem from "./BoardItem";

function BoardList({ contents, page, viewBoard }) {

    const onViewBoard = (id) => {
        viewBoard(id);
    }

    return (
        <div className="board_list">
            <div className="board_list_count">
                총 { contents.length } 건
            </div>
            <div className="board_list_header">
                <div className="title_header">글 제목</div>
                <div className="author_header">작성자</div>
                <div className="create_date_header">작성일</div>
            </div>
            <div className="board_list_body">
                { contents.length === 0 ? (
                    <EmptyBoard />
                ) : (
                    <div className="board_list_body_contents">
                        { contents.map((item) =>
                            <BoardItem content={ item } onViewBoard={ () => onViewBoard(item.id) } />
                        ) }
                    </div>
                )}
            </div>
        </div>
    )
}

export default BoardList;