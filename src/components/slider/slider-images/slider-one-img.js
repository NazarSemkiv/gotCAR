import React from "react"
import { StaticQuery } from 'gatsby';

class SliderOneImg extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                      sliderOneImg: file(relativePath: { eq: "slider-car/image-jetta.png" }) {
        publicURL
      },
                }
              `}
        render={data => (
          <img src={data.sliderOneImg.publicURL}/>
        )}
      />
    );
  }
}

export default SliderOneImg

