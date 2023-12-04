import React, { Component } from "react";

export default class Pract4 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const cardStyle = {
            width: "18rem",
        };

        return (
            <div>
                <div className="card" style={cardStyle}>
                    <img
                        className="card-img-top"
                        src={this.props.img}
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text"> {this.props.desc} </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
