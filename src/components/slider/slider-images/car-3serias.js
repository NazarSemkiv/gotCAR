import React from "react"
import { StaticQuery } from 'gatsby';

class Slider3Serias extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      Slider3Serias: file(relativePath: { eq: "slider-car/image-3.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.Slider3Serias.publicURL}/>
                )}
            />
        );
    }
}

export default Slider3Serias

