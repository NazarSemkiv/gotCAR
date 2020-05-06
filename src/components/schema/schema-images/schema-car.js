import React from "react"
import { StaticQuery } from 'gatsby';

class SchemaCar extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                      schemaCar: file(relativePath: { eq: "schema-car.svg" }) {
        publicURL
      },
                }
              `}
        render={data => (
          <img src={data.schemaCar.publicURL}/>
        )}
      />
    );
  }
}

export default SchemaCar

