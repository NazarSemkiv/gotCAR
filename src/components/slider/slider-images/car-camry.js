
import React from "react"
import { StaticQuery } from 'gatsby';

class SliderCamry extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      SliderCamry: file(relativePath: { eq: "slider-car/image-camry.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.SliderCamry.publicURL}/>
                )}
            />
        );
    }
}

export default SliderCamry

