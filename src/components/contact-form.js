import { Box, Label, Input, Textarea, Button, Message, Alert, Close } from 'theme-ui';
import React, {useState} from 'react';
import List from './list';

export default function ContactForm(
) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (company.length <= 0) {
      tempErrors["company"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          phone: phone,
          company: company,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      console.log(fullname, email, phone, company, message);
      // Reset form fields
      setFullname("");
      setEmail("");
      setPhone("");
      setCompany("");
      setMessage("");
    }
  };


  return (
    <Box as="form" onSubmit={handleSubmit}>
          <Label htmlFor="fullname" sx={styles.forms.label}>Full Name</Label>
          <Input name="fullname" id="fullname" mb={3} sx={styles.forms.input} 
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}/>
          {errors?.fullname && (
          <Alert variant="secondary">
            Full name cannot be empty.
          </Alert>)}
          <Label htmlFor="email" sx={styles.forms.label}>Email Address</Label>
          <Input type="email" name="email" id="email" mb={3} sx={styles.forms.input} 
          value={email}
          onChange={(e) => {
              setEmail(e.target.value);
            }}/>
          {errors?.email && (
          <Alert variant="secondary">
            Email field cannot be empty.
          </Alert>)}
          <Label htmlFor="phone" sx={styles.forms.label}>Phone Number</Label>
          <Input type="phone" name="phone" id="phone" mb={3} sx={styles.forms.input}
          value={phone} 
          onChange={(e) => {
            setPhone(e.target.value);
          }}/>
          <Label htmlFor="company" sx={styles.forms.label} >Company/ Practice/ Hospital Name</Label>
          <Input name="company" id="company" mb={3} sx={styles.forms.input}
          value={company} 
          onChange={(e) => {
            setCompany(e.target.value);
          }}/>
          <Label htmlFor="message" sx={styles.forms.label}>Message</Label>
          <Textarea name="message" id="message" rows={6} mb={3} sx={styles.forms.textarea}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}/>
          {errors?.message && (
          <Alert variant="secondary">
            Message body cannot be empty.
          </Alert>)}
          <Button sx={styles.forms.button}>{buttonText}</Button>
            {showSuccessMessage && (
              <Message>
                Thank you! Your Message has been delivered.
              </Message>
            )}
            {showFailureMessage && (
              <Message>
                Oops! Something went wrong, please try again.
              </Message>
            )}
          </Box>
  );
}

const styles = {
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
      color: 'white',
    },
    input: {
      backgroundColor: 'white',
      borderColor: 'grey',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      backgroundColor: 'white',
      borderColor: 'white',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    button: {
      m: '5px',
      backgroundColor: 'white',
      color: 'primary'
    }

  },
};
