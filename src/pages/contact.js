import React from 'react'
import { Form, Text } from 'react-form';

class ContactPage extends React.Component{
  render(){
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
              <form action="https://dqzh778dzd.execute-api.us-west-2.amazonaws.com/dev/" method="post"  id="form1" className="mb-4">
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="e.g Alex Smith" />
                    <input type="hidden" name="_to" value="william.mj.hill@gmail.com" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input class="input" name="_replyTo" type="email" placeholder="e.g. alexsmith@gmail.com" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea class="textarea" name="message" placeholder="Textarea"></textarea>
                  </div>
                </div>
                <div class="field">
                  <p class="control">
                    <button type="submit" class="button is-success">
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

export default ContactPage
