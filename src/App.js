import React, {Component} from "react";
import './App.css';
import Header from "./Header";
import BoardList from "./BoardList";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterBoard from "./RegisterBoard";
import BoardView from "./BoardView";

const loginId = "louis";

class App extends Component {
    constructor(props) { // 초기화
        super(props);
        this.state = {
            mode: "list",
            loginId: loginId,
            lastContentId: 4,
            page: 1,
            contents: [
                { id: 4, title: 'React', author: 'louis', content: 'React, NextJs', createDate: '2024-05-30' },
                { id: 3, title: 'JavaScript', author: 'louis', content: 'JavaScript', createDate: '2024-05-23' },
                { id: 2, title: 'CSS', author: 'louis', content: 'CSS', createDate: '2024-05-16' },
                { id: 1, title: 'HTML', author: 'louis', content: 'HTML', createDate: '2024-05-09' }
            ],
            currentContent: {}
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

    viewBoard(contentId) {
        const content = this.state.contents.find((content) => content.id === contentId);
        this.setState({
            mode: "view",
            content: content
        });
    }

    deleteBoard(contentId) {
        if(window.confirm("삭제하시겠습니까?")) {
            let deletedContents = this.state.contents.filter((content) => content.id !== contentId);
            this.setState({
                mode: "list",
                contents: deletedContents,
                page: 1,
                currentContent: {}
            });
        }
    }

    getDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');

        return year + "-" + month + "-" + day;
    }

    login() {
        this.setState({
            loginId: loginId
        });
    }

    logout() {
        this.setState({
            loginId: null
        });
    }

    getContent() {
        let content;
        let mode = this.state.mode;
        switch(mode) {
            case 'list':
                content = <>
                            <Header
                                loginId={ this.state.loginId }
                                onChangeMode={ this.changeModeToCreate.bind(this) }
                                doLogin={ this.login.bind(this) }
                                doLogout={ this.logout.bind(this) }
                            />
                            <BoardList
                                contents={ this.state.contents }
                                page={ this.state.page }
                                viewBoard={ this.viewBoard.bind(this) }
                            />
                            <Footer />
                          </>
                break;
            case 'view':
                content = <>
                            <Header
                                loginId={ this.state.loginId }
                                onChangeMode={ this.changeModeToCreate.bind(this) }
                                doLogin={ this.login.bind(this) }
                                doLogout={ this.logout.bind(this) }
                            />
                            <BoardView
                                loginId={ this.state.loginId }
                                content={ this.state.content }
                                onChangeMode={ this.changeModeToList.bind(this) }
                                deleteBoard={ this.deleteBoard.bind(this) }
                            />
                          </>
                break;
            case 'create':
                content = <RegisterBoard registerBoard={ this.registerBoard.bind(this) } />
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
