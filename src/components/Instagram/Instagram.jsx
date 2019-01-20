import React, { Component } from "react";
import InstaFeedWrapper from "./InstaFeedWrapper";
import InstaPost from "./InstaPost";
import FollowButton from "../FollowButton/FollowButton";

const API_KEY = process.env.APIKEY_Instagram;
const count = 3;

export class InstagramContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            link: "https://www.instagram.com/jeremyosz/"
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
        const { images, link } = this.state;
        return (
            <InstaFeedWrapper key={images}>
                {images.map(img => (
                    <InstaPost
                        src={img.images.standard_resolution.url}
                        alt={img.caption.text}
                        link={img.link}
                        key={img.id}
                    />
                ))}
                <FollowButton link={link} text="Follow Us" />
            </InstaFeedWrapper>
        );
    }
}

export default InstagramContainer;
