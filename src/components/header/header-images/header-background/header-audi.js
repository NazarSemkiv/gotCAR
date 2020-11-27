import React from "react"
import { StaticQuery } from 'gatsby';

class HeaderAudi extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      HeaderAudi: file(relativePath: { eq: "image13.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.HeaderAudi.publicURL}/>
                )}
            />
        );
    }
}

export default HeaderAudi

