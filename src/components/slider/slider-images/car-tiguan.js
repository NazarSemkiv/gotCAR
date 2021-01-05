import React from "react"
import { StaticQuery } from 'gatsby';

class SliderTiguan extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      SliderTiguan: file(relativePath: { eq: "slider-car/image-tiguan.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.SliderTiguan.publicURL}/>
                )}
            />
        );
    }
}

export default SliderTiguan

