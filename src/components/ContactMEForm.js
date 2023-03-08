import React from "react";
import Form from "react-bootstrap/Form";


function ContactMEForm() {
    return (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Please conatct Me" />
            <Form.Text className="text-muted">
              I look forward to hearing from you. Thank you!.
            </Form.Text>
          </Form.Group>
        </Form>
    )
}

export default ContactMEForm;