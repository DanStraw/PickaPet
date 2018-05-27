import React from 'react';
import Header from '../header/index.jsx';
import Footer from '../footer/index.jsx';
import Title from '../title/title.jsx';
import Description from '../description/description.jsx';
import Map from '../map/index.jsx';
import MapScript from '../map/mapscript.jsx';

class SurveyLayout extends React.Component {
    render() {
        return(
            <div className="surveyLayout">
                <Header />
                <Title />
                <Map />
                <Footer />
                {/* <MapScript /> */}
            </div>
        );
    }
}

export default SurveyLayout;