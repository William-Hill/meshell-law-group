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
              <a href="family-immigration">
                <p className="title">Practice Areas</p>
                <img src={ !!practiceAreasImage.childImageSharp ? practiceAreasImage.childImageSharp.fluid.src : practiceAreasImage} alt="Practice Areas" />
              </a>
              <p style={{marginTop: "1rem"}}>{data.markdownRemark.frontmatter.practiceAreasText}</p>
            </div>
            <div className="column has-text-centered">
              <a href="community-workshop">
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
