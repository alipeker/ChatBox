import React from 'react';

class ChatContent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div id="chatTitle" style={{ textAlign: "center", backgroundColor: "#28a745", color: "white" }}>
                    Chat
                </div>
                <div id="chat" style={{ overflowY: "scroll", height: 400}}>
                    <a className="person media" href="#">
                            <div className="media-left">
                                <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" className="media-object" style={{ width: "60px" }} />
                            </div>
                            <div className="media-body">
                                <h5 className="media-heading"> John Doe</h5>
                                <p> Lorem ipsum...</p>
                            </div>
                    </a>
                    <a className="person media" href="#">
                            <div className="media-left">
                                <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" className="media-object" style={{ width: "60px" }} />
                            </div>
                            <div className="media-body">
                                <h5 className="media-heading"> John Doe</h5>
                                <p> Lorem ipsum...</p>
                            </div>
                    </a>
                    <a className="person media" href="#">
                            <div className="media-left">
                                <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" className="media-object" style={{ width: "60px" }} />
                            </div>
                            <div className="media-body">
                                <h5 className="media-heading"> John Doe</h5>
                                <p> Lorem ipsum...</p>
                            </div>
                    </a>
                    <a className="person media" href="#">
                            <div className="media-left">
                                <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" className="media-object" style={{ width: "60px" }} />
                            </div>
                            <div className="media-body">
                                <h5 className="media-heading"> John Doe</h5>
                                <p> Lorem ipsum...</p>
                            </div>
                    </a>
                    
                    <div className="media" style={{ color: "black", backgroundColor: "white", borderBottom: "1px solid #DCDFE1" }}>
                        <div className="media-body">
                            <h5 className="media-heading">John Doe</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="media-right">
                            <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" className="media-object" style={{ width: "60px" }} />
                        </div>
                    </div>
                    <div className="media" style={{ color: "black", backgroundColor: "white", borderBottom: "1px solid #DCDFE1" }}>
                        <div className="media-left">
                            <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" className="media-object" style={{ width: "60px" }} />
                        </div>
                        <div className="media-body">
                            <h5 className="media-heading">John Doe</h5>
                            <p>Lorem ipsum...</p>
                        </div>
                    </div>
                    <div className="media" style={{ color: "black", backgroundColor: "white", borderBottom: "1px solid #DCDFE1" }}>
                        <div className="media-body">
                            <h5 className="media-heading">John Doe</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="media-right">
                            <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" className="media-object" style={{ width: "60px" }} />
                        </div>
                    </div>
                    <div className="media" style={{ color: "black", backgroundColor: "white", borderBottom: "1px solid #DCDFE1" }}>
                        <div className="media-left">
                            <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" className="media-object" style={{ width: "60px" }} />
                        </div>
                        <div className="media-body">
                            <h5 className="media-heading">John Doe</h5>
                            <p>Lorem ipsum...</p>
                        </div>
                    </div>
                    <div className="media" style={{ color: "black", backgroundColor: "white", borderBottom: "1px solid #DCDFE1" }}>
                        <div className="media-body">
                            <h5 className="media-heading">John Doe</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="media-right">
                            <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" className="media-object" style={{ width: "60px" }} />
                        </div>
                    </div>
                </div>
                <textarea className="form-control" placeholder="Enter your message"></textarea>
            </div>
        );
    }
}

class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            showStatus: false
        };
    }

    onClick(e) {
        e.preventDefault();
        this.setState({ showStatus: !this.state.showStatus });
    }

    render() {
        return (
            <div style={{ position: "fixed", right: -1, bottom: -1, width: 320, border: "1px solid #dddddd" }}>
                {this.state.showStatus && <ChatContent />}
                <div>
                    <button onClick={this.onClick.bind(this)} className="btn btn-success" style={{ width: 320 }}><i className="fas fa-comments"></i> <span className="badge badge-light"> 4</span></button>
                </div>
            </div>
        )
    }
}

export default Chat;