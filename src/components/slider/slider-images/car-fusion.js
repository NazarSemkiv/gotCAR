import React from "react"
import { StaticQuery } from 'gatsby';

class SliderFusion extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      SliderFusion: file(relativePath: { eq: "slider-car/image-fusion.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.SliderFusion.publicURL}/>
                )}
            />
        );
    }
}

export default SliderFusion

