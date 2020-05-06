import React from "react"
import { StaticQuery } from 'gatsby';

class HeaderBackgroundCircle extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                      headerBackgroundCircle: file(relativePath: { eq: "header-background-circle.svg" }) {
        publicURL
      },
                }
              `}
        render={data => (
          <img className="header-background-img-circle" src={data.headerBackgroundCircle.publicURL}/>
        )}
      />
    );
  }
}

export default HeaderBackgroundCircle

