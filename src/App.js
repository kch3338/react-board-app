import React, {Component} from "react";
import './App.css';
import Header from "./Header";
import BoardList from "./BoardList";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterBoard from "./RegisterBoard";

class App extends Component {
    constructor(props) { // 초기화
        super(props);
        this.state = {
            mode: "list",
            loginId: "louis",
            lastContentId: 4,
            page: 1,
            contents: [
                { id: 4, title: 'React', author: 'louis', content: 'React, NextJs', createDate: '2024-05-30' },
                { id: 3, title: 'JavaScript', author: 'louis', content: 'JavaScript', createDate: '2024-05-23' },
                { id: 2, title: 'CSS', author: 'louis', content: 'CSS', createDate: '2024-05-16' },
                { id: 1, title: 'HTML', author: 'louis', content: 'HTML', createDate: '2024-05-09' }
            ]
        }
    }

    changeModeToCreate() {
        this.setState({
            mode: "create"
        });
    }

    changeModeToList() {
        this.setState({
            mode: "list"
        });
    }

    registerBoard(title, content) {
        let contentId = this.state.lastContentId + 1;
        let contents = this.state.contents.concat({
            id: contentId,
            title: title,
            author: this.state.loginId,
            content: content,
            createDate: this.getDate()
        }).sort(function(a, b) {
            return b["id"] - a["id"]
        });

        this.setState({
            mode: "list",
            lastContentsId: contentId,
            page: 1,
            contents: contents
        });
    }

    getDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');

        return year + "-" + month + "-" + day;
    }

    getContent() {
        let content;
        let mode = this.state.mode;
        switch(mode) {
            case 'list':
                content = <>
                            <Header onChangeMode={ this.changeModeToCreate.bind(this) } />
                            <BoardList
                                contents={ this.state.contents }
                                page={ this.state.page }
                            />
                            <Footer />
                          </>
                break;
            case 'create':
                content = <>
                            <RegisterBoard registerBoard={ this.registerBoard.bind(this) } />
                          </>
                break;
            default:
                break;
        }
        return content;
    }

    render() {
        return (
            <div className="board_app">
                { this.getContent() }
            </div>
        );
    }
}

export default App;
