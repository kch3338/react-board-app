import React, {Component} from "react";
import './App.css';
import Header from "./Header";
import BoardList from "./BoardList";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterBoard from "./RegisterBoard";
import BoardView from "./BoardView";
import UpdateBoard from "./UpdateBoard";

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

        this.changeModeToCreate = this.changeModeToCreate.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.changeModeToList = this.changeModeToList.bind(this);
        this.changeModeToUpdate = this.changeModeToUpdate.bind(this);
        this.registerBoard = this.registerBoard.bind(this);
        this.viewBoard = this.viewBoard.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
        this.deleteBoard = this.deleteBoard.bind(this);
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

    changeModeToUpdate() {
        this.setState({
            mode: "update"
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
            currentContent: content
        });
    }

    updateBoard(content) {
        let currentContent = this.state.currentContent;
        let contents = Array.from(this.state.contents);
        for(let i=0; i<contents.length; i++) {
            if(contents[i].id === content.id) {
                contents[i] = {
                    ...contents[i],
                    id: content.id,
                    title: content.title,
                    content: content.content
                }
                currentContent = contents[i];
                break;
            }
        }

        this.setState({
            mode: "view",
            contents: contents,
            currentContent: currentContent
        })
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
                                onChangeMode={ this.changeModeToCreate }
                                doLogin={ this.login }
                                doLogout={ this.logout }
                            />
                            <BoardList
                                contents={ this.state.contents }
                                page={ this.state.page }
                                viewBoard={ this.viewBoard }
                            />
                            <Footer />
                          </>
                break;
            case 'view':
                content = <>
                            <Header
                                loginId={ this.state.loginId }
                                onChangeMode={ this.changeModeToCreate }
                                doLogin={ this.login }
                                doLogout={ this.logout }
                            />
                            <BoardView
                                loginId={ this.state.loginId }
                                content={ this.state.currentContent }
                                onChangeModeToList={ this.changeModeToList }
                                onChangeModeToUpdate={ this.changeModeToUpdate }
                                deleteBoard={ this.deleteBoard }
                            />
                          </>
                break;
            case 'create':
                content = <RegisterBoard registerBoard={ this.registerBoard } />
                break;
            case 'update':
                content = <UpdateBoard
                                content={ this.state.currentContent }
                                viewBoard={ this.viewBoard }
                                updateBoard={ this.updateBoard }
                          />
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
