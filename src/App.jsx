import React from "react";
import PageHeader from "./components/PageHeader/PageHeader";
import GoogleMap from "./components/GoogleMap/GoogleMap";
import Insta from "./components/Instagram/Instagram";

const App = () => (
    <div>
        <PageHeader>About us</PageHeader>
        <GoogleMap />
        <Insta count={3} />
    </div>
);

export default App;
