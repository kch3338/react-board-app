import React, {Component} from "react";
import './App.css';
import Header from "./Header";
import BoardList from "./BoardList";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) { // 초기화
        super(props);
        this.state = {
            mode: "list",
            lastContentsId: 4,
            page: 1,
            contents: [
                { id: 1, title: '11111', author: 'louis', createDate: '2024-05-30' },
                { id: 2, title: '22222', author: 'louis', createDate: '2024-05-23' },
                { id: 3, title: '33333', author: 'louis', createDate: '2024-05-16' },
                { id: 4, title: '44444', author: 'louis', createDate: '2024-05-09' }
            ]
        }
    }

    getContent() {
        let content;
        let mode = this.state.mode;
        switch(mode) {
            case 'list':
                content = <>
                            <Header onChangeMode={ function() {
                                this.setState({
                                    mode: 'create'
                                });
                            }.bind(this) } />
                            <BoardList
                                contents={ this.state.contents }
                                page={ this.state.page }
                            />
                            <Footer />
                          </>
                break;
            case 'create':
                content = <div>create</div>
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
