import React from "react";
import Form from "react-bootstrap/Form";


function ContactMEForm() {
    return (
        <Form>
          <Form.Group className="mb-3" id="Contact">
            <Form.Label>Please provide Your Name Please</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name"/>
            <Form.Label>Please provide an Email</Form.Label>
            <Form.Control type="email" placeholder="Please contact Me" />
            <Form.Label>Please provide any comments or concerns you may have</Form.Label>
            <Form.Control type="text" maxLength="256" placeholder="Enter Comments"/>
            <Form.Text className="text-muted">
              I look forward to hearing from you. Thank you!.
            </Form.Text>
          </Form.Group>
        </Form>
    )
}

export default ContactMEForm;