import React from "react"
import { StaticQuery } from 'gatsby';

class SliderCC extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      SliderCC: file(relativePath: { eq: "slider-car/image-cc.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.SliderCC.publicURL}/>
                )}
            />
        );
    }
}

export default SliderCC

