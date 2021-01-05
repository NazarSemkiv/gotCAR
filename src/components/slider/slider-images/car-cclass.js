
import React from "react"
import { StaticQuery } from 'gatsby';

class SliderCClass extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      SliderCClass: file(relativePath: { eq: "slider-car/image-c.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.SliderCClass.publicURL}/>
                )}
            />
        );
    }
}

export default SliderCClass

