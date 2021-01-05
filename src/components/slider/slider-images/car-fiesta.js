import React from "react"
import { StaticQuery } from 'gatsby';

class SliderFiesta extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      SliderFiesta: file(relativePath: { eq: "slider-car/image-fiesta.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.SliderFiesta.publicURL}/>
                )}
            />
        );
    }
}

export default SliderFiesta

