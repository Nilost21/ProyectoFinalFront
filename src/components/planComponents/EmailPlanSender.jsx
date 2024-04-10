/* import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailPlanSender = ({ name, lastName, email, phone, message }) => {
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (!emailSent) {
      // Enviar correo al destinatario
      emailjs.send(
        'service_fsmi4tm',
        'template_0q7zmpm',
        {
          name: name,
          lastName: lastName,
          email: email,
          phone: phone,
          message: message
        },
        'hogPQ3aXzDYTe-4XH'
      );

      // Enviar respuesta automática al remitente
      emailjs.send(
        'service_fsmi4tm',
        'template_a7wqcem',
        {
          name: name,
          email: email
        },
        'hogPQ3aXzDYTe-4XH'
      );

      setEmailSent(true);
    }
  }, [name, lastName, email, phone, message, emailSent]);

  return null;
};

export default EmailPlanSender; */