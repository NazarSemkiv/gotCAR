import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/header/header';
import SliderSection from '../components/slider/slider';
import Benefits from '../components/benefits/benefits';
import Schema from '../components/schema/schema';
import WhyToBuy from '../components/why-to-buy/why-to-buy';
import Faq from '../components/faq/faq';
import Contacts from '../components/contacts/contacts';
import ThanksModal from "../components/thanks-modal/thanks-modal";

class IndexPage extends React.Component {

      constructor(props) {
          super(props);
          this.state = {
            ...this.state,
            loading: true
          }
      }

      componentDidMount = async () => {
        this.loaderTimeOut().then(() => {
          this.setState({
            loading: false
          })
        })
      };

    render() {
      const { loading } = this.state;
      if (loading) {
        return (
          <div className="preloader">
            <div className="preloader__row">
                <div className="preloader__item"></div>
                <div className="preloader__item"></div>
            </div>
        </div>
        )
      }
          return (
            <Layout  >
                <SEO title="GotCAR" />
                    <Header/>
                    <SliderSection/>
                    <Benefits/>
                    <Schema/>
                    <WhyToBuy/>
                    <Faq/>
                    <Contacts/>

            </Layout>
          )
      }

      loaderTimeOut = () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(), 2500)
      })
      }
}

export default IndexPage
