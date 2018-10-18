import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import practice_areas from '../img/practice-areas-ico.png'
import community from '../img/community-ico.png'
import case_evaluation from '../img/case-ico.png'
import christy_white from '../img/christy-white.jpg'
import logo from '../img/logo.png'

export default class IndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
          <section className="hero is-large has-bg-img">
            <div className="hero-body">
              <div className="container has-background-grey-darker has-text-centered">
                <h1 className="title has-text-light has-background-info">
                  Clear, Concise Immigration Council
                </h1>
                <a className="button is-link">Schedule a Consultation</a>
              </div>
            </div>
          </section>

        <section class="section">
          <div class="container has-text-centered">
            <h2 class="subtitle">Welcome to</h2>
            <h1 class="title">The Meshel Law Group, PLLC</h1>
            <p><strong>The Meshel Law Group, PLLC</strong>, a nationwide full
              service immigration legal firm. Located in the heart of Dallas,
              we specialize in employment, family, humanitarian, and removal
              immigration relief.</p>

            <p><strong>Meshel Law Group (MLG)</strong> stands for improving our
              clients&#39; position in society. It does not matter if you are
              applying for lawful permanent residence through an employer or
              family based petition, if we are fighting to keep your immigration
              status, or if we are protecting immigrants against deportation.
              At MLG, we encourage and empower our clients to come out from the
              shadows of unlawful status and strive for not only their legal
              rights, but a better quality of life.
            </p>
          </div>

          <div class="container has-text-centered">
            <a className="button is-link" style={{marginTop: "1rem"}}>Learn More</a>
          </div>
    </section>

    <section className="section" style={{backgroundColor: "whitesmoke"}}>
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <a href="family-immigration">
            <p className="title">Practice Areas</p>
            <img src={practice_areas} alt="Practice Areas" />
          </a>
          <p style={{marginTop: "1rem"}}>Family members including children, parents, spouses, and fiancé(e)s may qualify for permanent residence based on their relationship to a U.S. citizen or lawful permanent resident.</p>
          <a className="button is-link" href="family-immigration" style={{marginTop: "1rem"}}>Read More</a>
        </div>
        <div className="column has-text-centered">
          <a href="community-workshop">
            <p className="title">Community Workshops</p>
            <img src={community} alt="Community Workshops" />
          </a>
          <p style={{marginTop: "1rem"}}>We will hold quarterly Know your rights/community workshop date, time, location and sign up sheet, we also post photos from previous workshops. </p>
          <a className="button is-link" href="community-workshop" style={{marginTop: "1rem"}}>Read More</a>
        </div>
        <div className="column has-text-centered">
          <a href="contact">
            <p className="title">Case Evaluation</p>
            <img src={case_evaluation} alt="Case Evaluation" />
          </a>
          <p style={{marginTop: "1rem"}}>Whatever your particular legal concerns may be, you can be confident that the we are here to help. If you would like to request a case evaluation, please email us or call our office at <strong>469.333.3008</strong></p>
          <a className="button is-link" href="contact" style={{marginTop: "1rem"}}>Read More</a>
        </div>
      </div>

    </section>

    <section class="section">
      <div class="container has-text-centered">
        <article class="media">
          <figure class="media-left" style={{flexBasis: "20%", marginRight: "2rem"}}>
            <p class="image">
              <img class="is-rounded" src={christy_white} alt="Christy White" />
            </p>
          </figure>
          <div class="media-content" style={{marginTop: "1rem"}}>
            <div class="content">
              <p>
                <strong>Christy White</strong>
                <br></br>
                Christy M. White practices immigration law exclusively. Ms. White is the co-founder and managing partner of The Meshel Law Group, PLLC.
              </p>
              <p>Ms. White was born and raised in Canton, Mississippi, an impoverished and underprivileged city. Eager not to become a statistic of the environment, she excelled in academia and developed a passion for liberating others. Therefore, at the age of 10 she knew she wanted to become an attorney.</p>
              <a className="button is-link" href="about">Learn More</a>
            </div>
          </div>
        </article>

      </div>
    </section>

    </React.Fragment>
    )
  }
}
