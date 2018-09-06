import React from 'react'
import PropTypes from 'prop-types'

function handleClick(foo, data){
  console.log("clicked li:", foo.currentTarget.className)

  // tablinks = document.getElementsByClassName("is-active");
  // console.log(tablinks)
  // console.log("data:", data)
  // $(e.currentTarget).attr('data-id')
}

class ProductPageTemplate extends React.Component{
  render(){
    return(
      <React.Fragment>
        console.log("hello")
        <section id="about_us_header" class="hero is-info has-text-centered">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Practice Areas
              </h1>
            </div>
          </div>
        </section>

        <div class="tabs is-centered">
          <ul>
            <li class="is-active"><a className="tablinks">Family Immigration</a></li>
            <li><a className="deportation" onClick={(e) => handleClick(e)}>Deportation and Removal Defense</a></li>
            <li><a className="tablinks">DACA</a></li>
            <li><a className="tablinks">Crime Victims</a></li>
            <li><a className="tablinks">Temporary Protected Status</a></li>
            <li><a className="tablinks">Citizenship and Naturalization</a></li>
            <li><a className="tablinks">Employment Immigration</a></li>
          </ul>
      </div>
      </React.Fragment>
    );
  }
}

ProductPageTemplate.propTypes = {
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  tabs: PropTypes.shape({
    tablist: PropTypes.array,
  })
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <ProductPageTemplate
      intro={frontmatter.intro}
      tabs={frontmatter.tabs}
    />
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        tabs {
          tablist {
            tab
            content
          }
        }
        intro {
          blurbs {
            image
            text
          }
        }
      }
    }
  }
`
