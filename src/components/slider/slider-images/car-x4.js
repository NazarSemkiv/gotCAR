import React from "react"
import { StaticQuery } from 'gatsby';

class SliderX4 extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      SliderX4: file(relativePath: { eq: "slider-car/image-x4.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.SliderX4.publicURL}/>
                )}
            />
        );
    }
}

export default SliderX4

