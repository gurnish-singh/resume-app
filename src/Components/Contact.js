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
        </section>
    );
}

export default Contact;
