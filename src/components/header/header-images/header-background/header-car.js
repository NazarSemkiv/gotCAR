import React from "react"
import { StaticQuery } from 'gatsby';

class HeaderCar extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                      HeaderCar: file(relativePath: { eq: "header-car.svg" }) {
        publicURL
      },
                }
              `}
        render={data => (
          <img src={data.HeaderCar.publicURL}/>
        )}
      />
    );
  }
}

export default HeaderCar

