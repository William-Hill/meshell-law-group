import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function handleClick(foo, data){
  console.log("clicked li:", foo.currentTarget.className)
}

class ProductPageTemplate extends React.Component{
  static propTypes = {
    intro: PropTypes.shape({
      blurbs: PropTypes.array,
    }),
    tabs: PropTypes.shape({
      tablist: PropTypes.array,
    })
  }
  render(){
    return(
      <React.Fragment>
        <section id="about_us_header" className="hero is-info has-text-centered">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Practice Areas
              </h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <Tabs className="has-text-centered">
              <TabList>
                <Tab>Family Immigration</Tab>
                <Tab>Deportation & Removal Defense</Tab>
                <Tab>DACA</Tab>
                <Tab>Crime Victims</Tab>
                <Tab>Temporary Protected Status (TPS)</Tab>
                <Tab>Citizenship and Naturalization</Tab>
                <Tab>Employment Immigration</Tab>
              </TabList>

              <TabPanel className="has-text-left">
                  <p className="is-size-6">Family members including children, parents, spouses, and fiancé(e)s may qualify for permanent residence based on their relationship to a  U.S. citizen or lawful permanent resident.</p>
                  <div className="has-text-left">
                    <h2 className="title is-6 has-text-left practice_area_header" style={{color: "#293b5b"}}>Relatives that Qualify for the Permanent Residence Petition</h2>
                    <p style={{paddingLeft:"2em"}}><strong>Immediate Relatives</strong>: Relatives of U.S. citizens are immediate relatives if they are spouses, children under 21, or parents of the U.S. citizen.</p>
                    <p style={{paddingLeft:"2em"}}>There is no wait to file for immediate relative visas. <a href="contact">Contact</a> The Meshel Law Group today to get started.</p>
                  </div>
                  <div className="has-text-left">
                    <h2 className="title is-6 has-text-left practice_area_header" style={{color: "#293b5b"}}>Other relatives are classified under the preference system:</h2>
                    <ul style={{paddingLeft:"2em"}}>
                      <li><strong>1st Preference:</strong> Unmarried sons and daughters (over 21) of a U.S. citizen.</li>
                      <li><strong>2nd Preference:</strong>
                        <ul>
                          <li style={{paddingLeft:"4em"}}>[2A] Spouses and children (under 21) of a permanent resident.</li>
                          <li style={{paddingLeft:"4em"}}>[2B] Unmarried  sons and daughters (over 21) of a permanent resident.</li>
                        </ul>
                      </li>
                      <li><strong>3rd Preference:</strong> Married sons and daughters (over 21) of a U.S. citizen.</li>
                      <li><strong>4th Preference:</strong> Brothers and sisters of a U.S. citizen.</li>
                    </ul>
                  </div>
                  <div className="has-text-left" style={{marginTop: "1em"}}>
                    <div>
                      <p>The first step is to file an immigrant visa petition. The immigrant visa petition for an alien relative can be filed at any time. </p>
                      <p>The Petitioner must show proof of U.S. citizenship or permanent residence and documentary evidence of the qualifying relationship to the Beneficiary.</p>
                    </div>
                    <div style={{marginTop: "1em"}}>
                      <p>For a Preference category petition, once the Relative Petition is approved, the Application for Permanent Residence can be filed if visas are available.</p>
                      <p>Visas are always available for immediate relatives of U.S. citizens.  *Beneficiaries under the preference system must wait until visas are available.</p>
                    </div>
                    <div style={{marginTop: "1em"}}>
                      <p>*At the time the Application for Permanent Residence is filed, the Beneficiary can apply for work authorization and permission to travel outside the U.S. while the application is processing.</p>
                    </div>
                    <div style={{marginTop: "1em"}}>
                      <a href="contact">Contact</a> Meshel Law Group and begin  planning for your family’s future.
                    </div>
                  </div>
              </TabPanel>
              <TabPanel className="has-text-left">
                <p>Facing deportation from the United States is one of the most frightening things that can happen in someone’s life.</p>
                <p>It is a very stressful, personal, and difficult process. It is important to find an attorney who can defend you in immigration court quickly.</p>
                <p>Undocumented  immigrants, expired visa holders, and even lawful permanent residents can be  placed in deportation proceedings for many reasons. </p>
                <div style={{marginTop: "1em"}}>
                  <p><strong>There are several ways to dispute a deportation including  some of the following:</strong></p>
                </div>

                 <ul style={{paddingLeft:"4em", listStyle: "disc"}}>
                   <li>Asylum/Withholding of Removal/Convention Against Torture</li>
                   <li>Adjustment of Status</li>
                   <li>Cancellation of Removal</li>
                   <li>Motion to Reopen Deportation/Reconsider</li>
                   <li>Waivers of Inadmissibility</li>
                   <li>Terminating or Administratively closing removal proceedings</li>
                   <li>Appeal of Deportation/Removal Order</li>
                   <li>Suspension of Deportation</li>
                   <li>Nicaraguan Adjustment and Central American Relief Act (NACARA)</li>
                   <li>Violence Against Women Act (VAWA)</li>
                   <li>Voluntary Departure</li>
                   <li>U Visa (Victims of Crimes)</li>
                   <li>Waivers of Inadmissibility</li>
                   <li>Prosecutorial  Discretion</li>
                 </ul>
               <br />
               <p>If you have received a Notice to Appear or Notice of Hearing, you are in deportation  proceedings. We highly recommend that you hire an immigration attorney to  represent you in immigration court. </p>
                 <p>The Meshel Law Group has an outstanding track record indeportation defense. <a href="contact">Contact us</a> today to begin representation. </p>

              </TabPanel>
              <TabPanel className="has-text-left">
                <h2 className="title is-6 has-text-left practice_area_header" style={{color: "#293b5b"}}>Deferred Action for Childhood Arrivals (DACA)</h2>
                <div style={{marginTop: "1em"}}>
                  <p>DACA gives undocumented immigrants  who came to the United States as children a path towards legal status, including the opportunity to obtain a work permit, Driver’s License, Social Security card, and a safeguard against deportation from the United States. <strong></strong></p>
                  <p style={{marginTop: "1em"}}>In order to be  eligible for deferred action and work authorization, you must meet ALL of the following requirements. You must:</p>
                </div>
                 <div>
                   <ul style={{paddingLeft:"4em", listStyle: "disc", marginTop: "1em"}}>
                     <li>be under 31 years of age as of June 15 2012</li>
                     <li>have come to the U.S. while under age of 16</li>
                     <li>have continuously resided in the U.S from June 15, 2007, to the present (for purposes of calculating this five-year period, brief and innocent absences from the United States for humanitarian reasons will not be included)</li>
                     <li>have entered the U.S. without inspection before June 15, 2012, or have had your lawful immigration status expire as of June 15, 2012</li>
                     <li>have been physically present in the United States on June 15, 2012, and at the time of making the request for consideration of deferred action with USCIS</li>
                     <li>be currently in school, have graduated from high school, have obtained a GED, or have been honorably discharged from the Coast Guard or armed forces</li>
                     <li>not have been convicted of a felony offense, a significant misdemeanor, or more than three misdemeanors and not pose a threat to national security or public safety.</li>
                   </ul>
                 </div>
                 <br />
                 <p>To apply, you must submit the required forms and fee. You must also provide documentary evidence to prove that you meet all of the criteria. Finally, you must complete and pass a biographic and biometric background check.</p>
                 <p style={{marginTop: "1em"}}>The Meshel Law Group specializes in determining whether you qualify for DACA. If you have any questions or you need help applying for DACA,&nbsp;please <a href="contact">contact</a> our office.</p>
              </TabPanel>
              <TabPanel className="has-text-left">
                <h2 className="title is-6 has-text-left practice_area_header" style={{color: "#293b5b"}}>U Visa</h2>
                   <p>The U nonimmigrant visa is designed specifically for victims of certain crimes that have caused them to suffer abuse (either mental or physical).<strong></strong></p>
                   <p style={{marginTop: "1em"}}>Immigrants who have  been the victims of assault, domestic violence, robbery, sexual abuse or exploitation, or any number of other crimes may qualify for a U visa if they  are willing to cooperate with law enforcement.</p>
                   <p style={{marginTop: "1em"}}><strong>You may be eligible for a U visa if you:</strong></p>
                   <ul style={{paddingLeft:"4em", listStyle: "disc", marginTop: "1em"}}>
                     <li>Suffered substantial physical or mental abuse as a result of having been a victim of a qualifying criminal activity.</li>
                     <li>Have information concerning that criminal activity.</li>
                     <li>Have been helpful,&nbsp;are being helpful, or are likely to be helpful in the investigation or prosecution of the crime.</li>
                     <li>The criminal activity violated U.S. laws.</li>
                   </ul>
                   <br />
                   <h2 className="title is-6 has-text-left practice_area_header" style={{color: "#293b5b"}}>T Visa</h2>
                   <p>In order to be eligible for a T visa you must be a victim of human trafficking. You must be in the United States or a US territory as a result of the trafficking. In  addition, you need to be willing and able to assist law enforcement with their  investigation. You may also qualify if you can demonstrate that being removed  from the United States would result in extreme hardship or direct harm. </p>
                   <p style={{marginTop: "1em"}}><strong>You may be eligible  for a T visa if you:</strong></p>
                   <ul style={{paddingLeft:"4em", listStyle: "disc", marginTop: "1em"}}>
                     <li>Are or were a victim of trafficking, as defined by law,</li>
                     <li>Are in the United States, American Samoa, the Commonwealth of the Northern Mariana Islands, or at a port of entry due to trafficking.</li>
                     <li>Comply with any reasonable request from a law enforcement agency for assistance in the investigation or prosecution of human trafficking (or you are under the age of 18, or you are unable to cooperate due to physical or psychological trauma)*.</li>
                     <li>Demonstrate that you would suffer extreme hardship involving unusual and severe harm if you were removed from the United States.</li>
                     <li>Are admissible to the United States or obtain a waiver of admissibility.</li>
                   </ul>
                   <br />
                   <h2 className="title is-6 has-text-left practice_area_header" style={{color: "#293b5b"}}>Violence Against Women Act (VAWA)</h2>
                   <p>The Violence Against Women Act (VAWA) created several options for immigrant victims abused at the  hands of U.S. citizens and permanent residents. There are three primary  categories of people who can qualify:</p>
                   <ul style={{paddingLeft:"4em", listStyle: "disc", marginTop: "1em"}}>
                     <li>Spouse –  The spouse of an abusive husband or wife who is either a US citizen or a  permanent resident will qualify. If a child is the direct victim of the abuse,  you the parent can still apply for yourself and your children as long as they  are unmarried and under 21 years old.</li>
                     <li>Parent –  Though less common, parents who are abused by their children may qualify under  VAWA.</li>
                     <li>Child –  Children who are under 21 years of age and unmarried can file for themselves if  they have been abused. In some cases, children between 21 and 25 years of age  can still qualify as long as they only delayed filing directly because of the  abuse.</li>
                   </ul><br />
              </TabPanel>
              <TabPanel className="has-text-left">
                <p>TPS is granted to  specific countries or regions of countries by the Secretary of Homeland  Security who are in armed conflict, experiencing environmental disaster or  other conditions that are extraordinary.</p>
                 <p style={{marginTop: "1em"}}><strong>TPS provides the  following benefits:</strong></p>
                 <ul style={{paddingLeft:"4em", listStyle: "disc", marginTop: "1em"}}>
                   <li>You will  not be removed from the United States if you are found preliminarily eligible;</li>
                   <li>You can  obtain an employment authorization document; and</li>
                   <li>You may  be given travel authorization.</li>
                 </ul>
                 <br />
                 <p><a href="contact">Contact</a> The Meshel Law Group today for a consultation  and determination of whether you are eligible for an immigration benefit. </p>
              </TabPanel>
              <TabPanel className="has-text-left">
                <p>If you have been living in the United States as a lawful permanent resident and you are interested in obtaining U.S. citizenship, you will need to go through the naturalization process.</p>
                <p style={{marginTop: "1em"}}><strong>Requirements for  Naturalization include:</strong></p>
                 <ul style={{paddingLeft:"4em", listStyle: "disc", marginTop: "1em"}}>
                   <li>Continuous residence in the US for the last five years (3 years if applying based on marriage to U.S. citizen).</li>
                   <li>Physical presence within the U.S. for a total of at least one half of the period of required continuous residence. </li>
                   <li>The ability to read, write and speak ordinary English unless they are physically unable to do so due to a disability such as  being blind or deaf, or suffer from a developmental disability or mental  impairment. *Exceptions for those over 50 years old.</li>
                   <li>A basic understanding the fundamentals of U.S. history and government.</li>
                   <li>Good moral character and an affinity for the  principles of the U.S. Constitution. The Government will consider your criminal  history.</li>
                   <li>Applicants should be at least 18 years of age at  the time of filing.</li>
                 </ul>
                 <p style={{marginTop: "1em"}}>Meshel Law Group will help prepare applications for filing, request and review the evidence required to support  your case, and prepare you for your interview.</p>
              </TabPanel>
              <TabPanel className="has-text-left">
                 <p>Whether you are an internationally recognized entertainer, business executive, professor, skilled worker, sports player, religious worker and you desire to come to the U.S. temporarily or permanently you may consult an attorney at our firm who has worked on many of these cases to determine which employment based category would be the appropriate for you.</p>
                 <p style={{marginTop: "1em"}}><strong>Temporary employment visas include:</strong></p>
                   <ul style={{paddingLeft:"4em", listStyle: "disc", marginTop: "1em"}}>
                     <li>E-1 and E-2 visas for treaty traders and treaty  investors. These visas are for skilled workers in supervisory or executive  capacities, or those who possess highly specialized skills. Treaty investors  often immigrate with E-2 visas to develop and direct enterprises.</li>
                     <li>H1-B visas for workers in specialty occupations.</li>
                     <li>L1-A and L1-B visas for managers, executives and  specialized knowledge personnel.</li>
                     <li>O-1 visas for workers of extraordinary ability  in the sciences, arts, education, business or athletics.</li>
                     <li>R-1 visas for religious workers.</li>
                     <li>P-1 visas for athletes.</li>
                   </ul>

                   <p style={{marginTop: "1em"}}><strong>Employment-based  green cards include:</strong></p>
                   <ul style={{paddingLeft:"4em", listStyle: "disc", marginTop: "1em"}}>
                     <li>Persons of extraordinary ability, outstanding  researchers and professors, and multinational executives and managers</li>
                     <li>National interest waivers and persons with  advanced degrees</li>
                     <li>Professionals, skilled workers and religious  workers</li>
                   </ul>
                   <br />
                   <p>If your goal is to enter the U.S. for temporary or permanent  employment, Meshel Law Group will assist you. </p>
              </TabPanel>
            </Tabs>
        </div>
      </section>
      </React.Fragment>
    );
  }
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
