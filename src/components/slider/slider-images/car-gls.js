import React from "react"
import { StaticQuery } from 'gatsby';

class SliderGls extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      SliderGls: file(relativePath: { eq: "slider-car/image-gls.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.SliderGls.publicURL}/>
                )}
            />
        );
    }
}

export default SliderGls

