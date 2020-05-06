import React from "react"
import { StaticQuery } from 'gatsby';

class FaqLogo extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                      faqLogo: file(relativePath: { eq: "faq-logo.svg" }) {
        publicURL
      },
                }
              `}
        render={data => (
          <img className="faq-img-logo" src={data.faqLogo.publicURL}/>
        )}
      />
    );
  }
}

export default FaqLogo

