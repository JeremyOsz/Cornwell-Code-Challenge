import React from "react";

// Import Google Map elements
import { Map, GoogleApiWrapper, Marker, Polygon } from "google-maps-react";

// Import mapWrapper
import MapWrapper from "./MapWrapper";

// Set Default Map Styling
const mapStyles = {
    width: "890px",
    height: "60VH",
    position: "relative",
    margin: "auto"
};

const initialLocation = {
    lat: -37.8113046,
    lng: 144.9689237
};

// Set Coordinates for Polygon
const polyCoords = [
    { lat: -37.81121, lng: 144.96878 },
    { lat: -37.81119, lng: 144.969 },
    { lat: -37.8114, lng: 144.969 },
    { lat: -37.81145, lng: 144.968889 }
];

// Load custom styling assets
const styles = require("./GoogleMapStyles.json");
const logo = require("../../icons/GodspeedLogo.png");

const MapContainer = ({ google }) => {
    return (
        <MapWrapper>
            <Map
                className="googleMap"
                google={google}
                zoom={18}
                style={mapStyles}
                styles={styles}
                initialCenter={initialLocation}
                zoomControl={false}
                mapTypeControl={false}
                scaleControl={false}
                streetViewControl={false}
                rotateControl={false}
                fullscreenControl={false}
            >
                <Marker
                    name="Godspeed"
                    icon={{
                        url: logo,
                        anchor: new google.maps.Point(15, 15),
                        scaledSize: new google.maps.Size(32, 32)
                    }}
                />
                <Polygon
                    className="Polygon"
                    paths={polyCoords}
                    strokeColor="#fff"
                    strokeOpacity={0.8}
                    strokeWeight={2}
                    fillColor="#fddb00"
                    fillOpacity={0.75}
                />
            </Map>
        </MapWrapper>
    );
};

export default GoogleApiWrapper({
    apiKey: process.env.APIKEY_Google
})(MapContainer);
