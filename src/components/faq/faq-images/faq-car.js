import React from "react"
import { StaticQuery } from 'gatsby';

class FaqCar extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                      faqCar: file(relativePath: { eq: "car-mustang.png" }) {
        publicURL
      },
                }
              `}
        render={data => (
          <img className="faq-img-car" src={data.faqCar.publicURL}/>
        )}
      />
    );
  }
}

export default FaqCar

