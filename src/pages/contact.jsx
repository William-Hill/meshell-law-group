import React from 'react';
import { Form } from 'react-form';

class ContactPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="about_us_header" className="hero is-info has-text-centered">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Contact Us
              </h1>
            </div>
          </div>
        </section>
        <Form>
          {formApi => (
            <section className="section">
            <div className="container">
              <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input" name="name" type="text" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" name="_replyTo" type="email" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className="textarea" name="message" placeholder="Textarea" />
                  </div>
                </div>
                <div className="field">
                  <p className="control">
                    <button type="submit" className="button is-success">
                      Send
                    </button>
                  </p>
                </div>
              </form>
            </div>
            </section>
          )}
        </Form>
      </React.Fragment>
    );
  }
}

export default ContactPage;
