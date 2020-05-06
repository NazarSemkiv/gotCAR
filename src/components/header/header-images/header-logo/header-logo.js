import React from "react"
import { StaticQuery } from 'gatsby';

class HeaderLogo extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                      headerLogo: file(relativePath: { eq: "GotCAR-logo.svg" }) {
        publicURL
      },
                }
              `}
        render={data => (
          <img src={data.headerLogo.publicURL}/>
        )}
      />
    );
  }
}

export default HeaderLogo

