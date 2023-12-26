import React from 'react';
import Header from "./Components/Header";
import BannerSection from "./Components/BannerSection";
import CardSection from "./Components/CardSection";
import GridSection from "./Components/GridSection";

const App = () => {
    return (
        <>
          <Header/>
            <BannerSection/>
            <CardSection/>
            <GridSection/>
        </>
    );
};

export default App;