import React from "react"
import { StaticQuery } from 'gatsby';

class SliderSport extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      SliderSport: file(relativePath: { eq: "slider-car/image-sport.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.SliderSport.publicURL}/>
                )}
            />
        );
    }
}

export default SliderSport

