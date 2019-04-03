import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Layout>
      <section className="hero is-info has-text-centered" style={{backgroundColor: '#293b5b'}}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Contact
            </h1>
          </div>
        </div>
      </section>
    </Layout>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};
