import React from 'react'
import PropTypes from 'prop-types'

function handleClick(foo, data){
  console.log("clicked li:", foo.currentTarget.className)
}

const Tab = (props) => {

  const { name } = props.tab;
  const { activeTab, changeActiveTab } = props;

  return (
    <li className={name === activeTab && "is-active"} onClick={() => changeActiveTab(name)}>
      <a>
        <span>{name}</span>
      </a>
    </li>
  );
};

class Tabs extends React.Component {
  static propTypes = {
    tabList: React.PropTypes.array.isRequired,
    activeTab: React.PropTypes.string,
    changeActiveTab: React.PropTypes.func
  };

  render() {
    return (
      <div className="tabs">
        <ul>
          { this.props.tabList.map(tab =>
              <Tab  tab={tab}
                    key={tab.tab}
                    activeTab={this.props.activeTab}
                    changeActiveTab={this.props.changeActiveTab}
              />
           )}
        </ul>
      </div>
    );
  }
}
const ActiveTabContent = (props) => <div>{props.content}</div>;

class ProductPageTemplate extends React.Component{
  static propTypes = {
    immigration: PropTypes.string,
    immigrationText: PropTypes.string,
    intro: PropTypes.shape({
      blurbs: PropTypes.array,
    }),
    tabs: PropTypes.shape({
      tablist: PropTypes.array,
    })
  }
  constructor(props) {
     super(props);

     this.state = {
       activeTab: "Pictures"
     };
   }

   changeActiveTab(tab) {
     this.setState({ activeTab: tab });
   }

   activeTabContent() {
     const activeIndex = this.props.tabs.tablist.findIndex((tab) => {
       return tab.tab === this.state.activeTab;
     });

     return tabList[activeIndex].content;
   }

  render(){
    return(
      <React.Fragment>
        console.log("hello")
        <section id="about_us_header" className="hero is-info has-text-centered">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Practice Areas
              </h1>
            </div>
          </div>
        </section>

<<<<<<< Updated upstream
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
=======
        <section className="section">
        <div className="container">
          <Tabs tabList={tabs.tablist}
                activeTab={this.state.activeTab}
                changeActiveTab={this.changeActiveTab.bind(this)}
           />

            <ReactCSSTransitionGroup
              className="tabs-content"
              component="div"
              transitionName="fade"
              transitionEnterTimeout={0}
              transitionLeaveTimeout={150}
            >
              <ActiveTabContent key={this.state.activeTab} content={this.activeTabContent()} />
            </ReactCSSTransitionGroup>

        </div>
      </section>

>>>>>>> Stashed changes
      </React.Fragment>
    );
  }
}

<<<<<<< Updated upstream
ProductPageTemplate.propTypes = {
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  tabs: PropTypes.shape({
    tablist: PropTypes.array,
  })
}

=======
>>>>>>> Stashed changes
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
