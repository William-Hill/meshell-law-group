import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class PracticePage extends React.Component {
  render() {
    const { data } = this.props
    console.log("data:", data)
    return (
      <Layout>
        <section className="hero is-info has-text-centered" style={{backgroundColor: '#293b5b'}}>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Practice Areas</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container" id="tabContainer">
            <Tabs>
              <TabList>
              {data.allMarkdownRemark.edges.map(tabTitles => {
                if (tabTitles.node.frontmatter.section !== "index"){
                  return(<Tab>{tabTitles.node.frontmatter.title}</Tab>)
                }
              }
              )}
              </TabList>
              {data.allMarkdownRemark.edges.map(tabHtml => {
                console.log("tabHtml:", tabHtml)
                if (tabHtml.node.frontmatter.section !== "index"){
                  return (
                    <TabPanel data-name={tabHtml.node.frontmatter.section} dangerouslySetInnerHTML={{ __html: tabHtml.node.html }}></TabPanel>
                  )
                }
              }
              )}
            </Tabs>
          </div>
        </section>
      </Layout>
    )
  }
};


export const pageQuery = graphql`
  query PracticeQuery {
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "practice" } }}, sort: {
      	fields: [frontmatter___title]
      	order: ASC
    	}) {
      edges {
        node {
         html
         frontmatter {
          title
          section
        }

        }
      }
    }
  }
`
