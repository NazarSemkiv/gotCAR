import React from "react"
import { StaticQuery } from 'gatsby';

class SliderFocus extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      SliderFocus: file(relativePath: { eq: "slider-car/image-foucus.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.SliderFocus.publicURL}/>
                )}
            />
        );
    }
}

export default SliderFocus

