'use strict';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if(this.state.liked) {
            return `You liked comment number ${this.props.commentId}`;
        }

        return (
            <button onClick={() => this.setState({ liked: true })}>
                Like    
            </button>
        );
    }
}

document.querySelectorAll('.like_button_container')
.forEach(domContainer => {
    const commentId = parseInt(domContainer.dataset.commentid, 10);

    ReactDOM.render(
        <LikeButton commentId={commentId} />,
        domContainer
    );
});
