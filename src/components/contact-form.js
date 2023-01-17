import { Box, Label, Input, Textarea, Button } from 'theme-ui';
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
        return;
      }
    console.log(fullname, email, phone, company, message);
  };



  return (
    <Box as="form" onSubmit={handleSubmit}>
          <Label htmlFor="fullname" sx={styles.forms.label}>Full Name</Label>
          <Input name="fullname" id="fullname" mb={3} sx={styles.forms.input} />
          <Label htmlFor="email" sx={styles.forms.label}>Email Address</Label>
          <Input type="email" name="email" id="email" mb={3} sx={styles.forms.input} />
          <Label htmlFor="phone" sx={styles.forms.label}>Phone Number</Label>
          <Input type="phone" name="phone" id="phone" mb={3} sx={styles.forms.input} />
          <Label htmlFor="company" sx={styles.forms.label} >Company/ Practice/ Hospital Name</Label>
          <Input name="company" id="company" mb={3} sx={styles.forms.input} />
          <Label htmlFor="message" sx={styles.forms.label}>Message</Label>
          <Textarea name="message" id="message" rows={6} mb={3} sx={styles.forms.textarea}/>
          <Button sx={styles.forms.button}>Send Message</Button>
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
