// utils/otp.ts
import emailjs from 'emailjs-com';

export const generateOtp = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendOtp = async (email: string, otpCode: string): Promise<void> => {
  const templateParams = {
    user_email: email,
    otp: otpCode,
  };

  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''
    );
    console.log('OTP sent successfully', response.status, response.text);
  } catch (err) {
    console.error('Failed to send OTP', err);
    throw new Error('Failed to send OTP. Please try again.');
  }
};

export const verifyOtp = (inputOtp: string, generatedOtp: string): boolean => {
  if (inputOtp === generatedOtp) {
    console.log('OTP verified successfully');
    return true;
  } else {
    console.log('Invalid OTP. Please try again.');
    return false;
  }
};
