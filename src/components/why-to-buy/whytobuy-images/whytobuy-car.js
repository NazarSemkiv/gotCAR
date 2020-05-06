import React from "react"
import { StaticQuery } from 'gatsby';

class WhyToBuyCar extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                      whyToBuyCar: file(relativePath: { eq: "whytobuy-car.svg" }) {
        publicURL
      },
                }
              `}
        render={data => (
          <img src={data.whyToBuyCar.publicURL}/>
        )}
      />
    );
  }
}

export default WhyToBuyCar

