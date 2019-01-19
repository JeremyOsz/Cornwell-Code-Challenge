import React from "react";
import PageHeader from "./components/PageHeader/PageHeader";
import GoogleMap from "./components/GoogleMap/GoogleMap";
import Instagram from "./components/Instagram/Instagram";

const App = () => (
    <div>
        <PageHeader>About us</PageHeader>
        <GoogleMap />
        <Instagram />
    </div>
);

export default App;
