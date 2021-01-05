
import React from "react"
import { StaticQuery } from 'gatsby';

class SliderQ5 extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      SliderQ5: file(relativePath: { eq: "slider-car/image-q5.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.SliderQ5.publicURL}/>
                )}
            />
        );
    }
}

export default SliderQ5

