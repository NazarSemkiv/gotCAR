import React from "react"
import { StaticQuery } from 'gatsby';

class SliderGolf extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      SliderGolf: file(relativePath: { eq: "slider-car/image-golf.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.SliderGolf.publicURL}/>
                )}
            />
        );
    }
}

export default SliderGolf

