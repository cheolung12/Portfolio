'use server';

import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';
import React from 'react';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  // server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'cheolung97@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      //   text: message as string, 너무 밋밋해서 안 씀 -> react-email 사용!
      // <ContactFormEmail message={message} senderEmail={senderEmail} /> 과 같다.
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
