import React from "react";
import EmailIcon from '@mui/icons-material/Email';
function Contact(props) {
    if (!props.resumeData) return null;

    const name = props.resumeData.name;
    const street = props.resumeData.address.street;
    const city = props.resumeData.address.city;
    const state = props.resumeData.address.state;
    const zip = props.resumeData.address.zip;
    const phone = props.resumeData.phone;
    const message = props.resumeData.contactmessage;

    return (
        <section id="contact">
            <div className="row section-head">
                <div className="two columns">
                <EmailIcon style={{width: "100px", height:"100px"} } />
                </div>
                <div className="ten columns">
                    <p className="lead">{message}</p>
                </div>
            </div>

            <div className="row">
                <div className="eight columns">
                    <form action="" method="post" id="contactForm" name="contactForm">
                        <fieldset>
                            <div>
                                <label htmlFor="contactName">
                                    Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue=""
                                    size="35"
                                    id="contactName"
                                    name="contactName"
                                    // onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="contactEmail">
                                    Email <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue=""
                                    size="35"
                                    id="contactEmail"
                                    name="contactEmail"
                                    // onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="contactSubject">Subject</label>
                                <input
                                    type="text"
                                    defaultValue=""
                                    size="35"
                                    id="contactSubject"
                                    name="contactSubject"
                                    // onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="contactMessage">
                                    Message <span className="required">*</span>
                                </label>
                                <textarea
                                    cols="50"
                                    rows="15"
                                    id="contactMessage"
                                    name="contactMessage"
                                ></textarea>
                            </div>

                            <div>
                                <button className="submit">Submit</button>
                                <span id="image-loader">
                      <img alt="" src="images/loader.gif"/>
                    </span>
                            </div>
                        </fieldset>
                    </form>

                    <div id="message-warning"> Error boy</div>
                    <div id="message-success">
                        <i className="fa fa-check"></i>Your message was sent, thank you!
                        <br/>
                    </div>
                </div>

                <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">
                        <h4>Address and Phone</h4>
                        <p className="address">
                            {name}
                            <br/>
                            {street} <br/>
                            {city}, {state} {zip}
                            <br/>
                            <span>{phone}</span>
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
}

export default Contact;