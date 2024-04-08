import emailjs from '@emailjs/browser';
import { useEffect } from 'react';

const EmailPlanSender = ({ name, lastName, email, phone, message }) => {
    useEffect(() => {
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
    }, []);

    return null;
};

export default EmailPlanSender;
