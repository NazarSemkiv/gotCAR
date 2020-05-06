import React from "react"
import { StaticQuery } from 'gatsby';

class ContactsMap extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                      contactsMap: file(relativePath: { eq: "contacts-map.svg" }) {
        publicURL
      },
                }
              `}
        render={data => (
          <img src={data.contactsMap.publicURL}/>
        )}
      />
    );
  }
}

export default ContactsMap

