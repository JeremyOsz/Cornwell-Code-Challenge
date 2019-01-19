import React, { Component } from "react";

const API_KEY = process.env.APIKEY_Instagram;
const count = 3;

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        fetch(
            `https://api.instagram.com/v1/users/self/media/recent/?access_token=${API_KEY}&count=${count}`
        )
            .then(response => response.json())
            .then(myJSON => {
                this.state = myJSON;
                console.log(this.state);
            })
            .catch(e => console.log(e));
    }

    render() {
        return <div />;
    }
}

export default MapContainer;
