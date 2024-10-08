// utils/otp.ts
export const generateOtp = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendOtp = async (email: string, otpCode: string) => {
  console.log(email,otpCode)
  try {
    const response = await fetch('/api/events/sendOtp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otpCode }),
    });

    const data = await response.json();
    console.log(data);
    if (response.ok) {
      console.log('OTP sent successfully:', data.message);
    } else {
      console.error('Failed to send OTP:', data.message);
    }
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
