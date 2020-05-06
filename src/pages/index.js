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

const IndexPage = () => (
  <Layout>
    <SEO title="GotCAR" />
    <Header/>
    <SliderSection/>
    <Benefits/>
    <Schema/>
    <WhyToBuy/>
    <Faq/>
    <Contacts/>
  </Layout>
);

export default IndexPage
