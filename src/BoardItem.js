function BoardItem({ content, onViewBoard }) {
    const viewBoard = (e) => {
        e.preventDefault();
        onViewBoard();
    }

    return (
        <>
            <div className="title_body" key={ content.id }>
                <a href={ /board/ + content.id } onClick={ viewBoard }>{ content.title }</a>
            </div>
            <div className="author_body">{ content.author }</div>
            <div className="createDate_body">{ content.createDate }</div>
        </>
    );
}

export default BoardItem;