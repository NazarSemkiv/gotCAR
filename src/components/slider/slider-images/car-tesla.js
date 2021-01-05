import React from "react"
import { StaticQuery } from 'gatsby';

class SliderTesla extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      SliderTesla: file(relativePath: { eq: "slider-car/image-tesla.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.SliderTesla.publicURL}/>
                )}
            />
        );
    }
}

export default SliderTesla

