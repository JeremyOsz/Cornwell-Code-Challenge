import React, { Component } from "react";

const API_KEY = process.env.APIKEY_Instagram;
const count = 3;

export class InstagramContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    }

    componentWillMount() {
        fetch(
            `https://api.instagram.com/v1/users/self/media/recent/?access_token=${API_KEY}&count=${count}`
        )
            .then(response => response.json())
            .then(myJSON => {
                this.setState({ images: myJSON.data });
            })
            .catch(e => console.log(e));
    }

    render() {
        // console.log(this.state);
        const { images } = this.state;
        return (
            <div key={images}>
                {images.map(img => {
                    return (
                        <img
                            src={img.images.standard_resolution.url}
                            alt={img.caption.text}
                        />
                    );
                })}
                <h1>Goodbye world</h1>
            </div>
        );
    }
}

export default InstagramContainer;
