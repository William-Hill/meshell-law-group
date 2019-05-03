import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    console.log("data:", data)
    const image = data.markdownRemark.frontmatter.image
    console.log("image:", image)

    const title = data.markdownRemark.frontmatter.title
    console.log("title:", title)
    const practiceAreasImage = data.markdownRemark.frontmatter.practiceAreasImage;
    const communityImage = data.markdownRemark.frontmatter.communityImage;
    const caseEvaluationImage = data.markdownRemark.frontmatter.caseEvaluationImage;
    const bioImage = data.markdownRemark.frontmatter.bioImage;
    const bannerStyle = {
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ !!image.childImageSharp ? image.childImageSharp.fluid.src : image })center center`,
      backgroundSize: "cover"
    }

<script type="application/ld+json">
{"@context":"http:\/\/schema.org",
"@type":"LegalService",
"@id":" kg:/g/11g8txx5q4",
"additionalType": 
[
"https://en.wikipedia.org/wiki/Immigration_law",
"https://www.wikidata.org/wiki/Q231147"],
"url":"https://mlgimmigrationlaw.com/",
"name":"Meshel Law Group",
"alternatename":"Dallas Immigration Lawyer",
"disambiguatingdescription":"Dallas's best immigration lawyer, combining passion, legal experience, and activism to get the best results for clients and society.",
"mainEntityOfPage":"https://www.google.com/search?q=MESHEL-LAW-GROUP&kponly&kgmid=/g/11g8txx5q4",
"areaServed":{
"@type": "City",
"name": "Dallas",
"url": "https://www.wikidata.org/wiki/Q16557"},
"description":" We are Dallas's trusted immigration law firm. We have been in business in Dallas since 2017. Our attorneys represent individuals seeking to obtain legal immigration status or to apply for numerous types of available visas. We assist clients in naturalization, nonimmigrant visa approvals, and can represent in deportation hearings.",
"paymentAccepted":"Cash, Visa, Mastercard, American Express, Debit, PayPal, Apple Pay",
"sameAs":["https://www.facebook.com/mlgimmigration/, https://goo.gl/maps/ydJ6upXt1aB2"],
"image":" https://lh5.googleusercontent.com/p/AF1QipOYlr1jUDwpgLom74Z08-YgUeyLH5KcGS3Uv-bb=w309-h100-k-no","priceRange":"$-$$$","hasMap":"https://drive.google.com/open?id=1RutPua1Ij7NF5HMNM56iSiKDr1jLDFcA&usp=sharing","email":"cmw@meshellawgroup.com","telephone":"469-333-3008",
"aggregateRating":
{"@type":"AggregateRating","ratingValue":"5","reviewCount":"3"},
"foundingDate": "2017",
 "founders": [
 {
 "@type": "Person",
 "name": "Christy White",
 "sameas":["https://www.linkedin.com/in/christy-white-51523b108", "https://www.texasbar.com/attorneys/member.cfm?id=343126"]
 } ],
"address":
{"@type": "PostalAddress",
"addressLocality": "Dallas",
"addressRegion": "TX",
"postalCode":"75226",
"streetAddress": "3106 Commerce St"},
"contactPoint": {
 "@type": "ContactPoint",
 "contactType": "Customer Support",
 "telephone": "[+469-333-3008]",
 "email": "cmw@meshellawgroup.com"
 },
"geo":{
"@type":"GeoCoordinates",
"latitude":" 32.7839333 ",
"longitude":" -96.778135 "}}</script>

    return (
      <Layout>
        <section className="hero is-large has-bg-img" style={bannerStyle}>
            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title has-text-light">{data.markdownRemark.frontmatter.heroHeader}</h1>
                <a className="button is-link" href="contact">Schedule a Consultation</a>
              </div>
            </div>
        </section>

        <section className="section">
          <div className="container has-text-centered">
            <h2 className="subtitle">{ data.markdownRemark.frontmatter.subtitle }</h2>
            <h1 className="title">{ data.markdownRemark.frontmatter.headerTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></p>
          </div>

          <div className="container has-text-centered">
            <a className="button is-link" href="practice" style={{marginTop: "1rem"}}>Learn More</a>
          </div>
        </section>

        <section className="section" style={{backgroundColor: "whitesmoke"}}>
          <div className="columns is-centered">
            <div className="column has-text-centered">
              <a href="practice">
                <p className="title">Practice Areas</p>
                <img src={ !!practiceAreasImage.childImageSharp ? practiceAreasImage.childImageSharp.fluid.src : practiceAreasImage} alt="Practice Areas" />
              </a>
              <p style={{marginTop: "1rem"}}>{data.markdownRemark.frontmatter.practiceAreasText}</p>
            </div>
            <div className="column has-text-centered">
              <a href="contact">
                <p className="title">Community Workshops</p>
                <img src={ !!communityImage.childImageSharp ? communityImage.childImageSharp.fluid.src : communityImage } alt="Community Workshops" />
              </a>
              <p style={{marginTop: "1rem"}}>{data.markdownRemark.frontmatter.communityText}</p>
            </div>
            <div className="column has-text-centered">
              <a href="contact">
                <p className="title">Case Evaluation</p>
                <img src={!!caseEvaluationImage.childImageSharp ? caseEvaluationImage.childImageSharp.fluid.src : caseEvaluationImage} alt="Case Evaluation" />
              </a>
              <p style={{marginTop: "1rem"}}>{data.markdownRemark.frontmatter.caseEvaluationText}</p>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container has-text-centered">
            <article class="media">
              <figure class="media-left" style={{flexBasis: "20%", marginRight: "2rem"}}>
                <p class="image">
                  <img class="is-rounded" src={!!bioImage.childImageSharp ? bioImage.childImageSharp.fluid.src : bioImage} alt="Christy White" />
                </p>
              </figure>
              <div class="media-content" style={{marginTop: "1rem"}}>
                <div class="content">
                  <p>
                    <strong>{data.markdownRemark.frontmatter.bioHeader}</strong>
                    <br></br>
                    {data.markdownRemark.frontmatter.bioIntro}
                  </p>
                  <p>{data.markdownRemark.frontmatter.bioBody}</p>
                  <a className="button is-link" href="about">Learn More</a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "index"}}) {
      html
      frontmatter {
        title
        heroHeader
        subtitle
        headerTitle
        practiceAreasText
        practiceAreasImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        communityText
        communityImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        caseEvaluationText
        caseEvaluationImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bioHeader
        bioIntro
        bioBody
        bioImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
