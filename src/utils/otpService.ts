import { sendEventOtp } from '@/services/eventsService';

// utils/otp.ts
export const generateOtp = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendOtp = async (email: string, otpCode: string) => {
  try {
    await sendEventOtp(email, otpCode);
  } catch (error) {
    console.error('Error sending OTP:', error);
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
