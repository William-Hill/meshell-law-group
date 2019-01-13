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

    const bannerStyle = {
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ !!image.childImageSharp ? image.childImageSharp.fluid.src : image })center center`,

    }

    return (
      <Layout>
        <section className="hero is-large has-bg-img" style={bannerStyle}>
            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title has-text-light">
                  Clear, Concise Immigration Council
                </h1>
                <a className="button is-link" href="contact">Schedule a Consultation</a>
              </div>
            </div>
          </section>
      </Layout>
    )
  }
}

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

export const pageQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "index"}}) {
      frontmatter {
        title
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
