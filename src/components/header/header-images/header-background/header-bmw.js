import React from "react"
import { StaticQuery } from 'gatsby';

class HeaderBmw extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <StaticQuery
                query={graphql`
                query {
                      HeaderBmw: file(relativePath: { eq: "image18.png" }) {
        publicURL
      },
                }
              `}
                render={data => (
                    <img src={data.HeaderBmw.publicURL}/>
                )}
            />
        );
    }
}

export default HeaderBmw

