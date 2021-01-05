import React from "react"
import { StaticQuery } from 'gatsby';

class SliderCorolla extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      SliderCorolla: file(relativePath: { eq: "slider-car/image-corolla.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.SliderCorolla.publicURL}/>
                )}
            />
        );
    }
}

export default SliderCorolla

