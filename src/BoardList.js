import React, {Component} from "react";
import './BoardList.css';

class BoardList extends Component{
    isEmptyContents(contents) {
        return contents.length === 0;
    }

    getEmptyRow() {
       return <div className="board_list_body_empty">등록된 게시물이 없습니다.</div>;
    }

    getBoardRow(contents) {
        let list = [];
        for(let content of contents) {
            list.push(
                <>
                    <div className="title_body" key={ content.id }>
                        <a href={ /board/ + content.id } onClick={ function(e) {
                            e.preventDefault();
                            alert("id : " + content.id);
                        } }>{ content.title }</a>
                    </div>
                    <div className="author_body">{ content.author }</div>
                    <div className="createDate_body">{ content.createDate }</div>
                </>
            )
        }

        return list;
    }

    render() {
        let contents = this.props.contents;
        let body = this.isEmptyContents(contents) ?
                        this.getEmptyRow() :
                        this.getBoardRow(contents);

        return (
            <div className="board_list">
                <div className="board_list_header">
                    <div className="title_header">글 제목</div>
                    <div className="author_header">작성자</div>
                    <div className="create_date_header">작성일</div>
                </div>
                <div className="board_list_body">
                    { body }
                </div>
            </div>
        )
    }
}

export default BoardList;