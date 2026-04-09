import styles from '@/styles/components/organisms/eventform.module.scss';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import OTPModal from './otpModel';
import { generateOtp, sendOtp, verifyOtp } from '@/utils/otpService'
import {
  checkEnrollmentEligibility,
  enrollInEvent,
  fetchInterestedCount as fetchInterestedCountService,
  incrementInterestedCount as incrementInterestedCountService,
  sendEventEmail,
} from '@/services/eventsService';
import ROUTES from '@/constants/routes';
import eventFormText from '@/constants/uiText/eventForm.json';
import { getErrorMessage } from '@/utils/errorUtils';

export interface Event {
  id: string;
  title: string;
  date: string;
  duration: string;
  interested: number;
  description: string;
  detailedDescription: string;
}
interface EventFormProps {
  event: Event;
}
interface FormData {
  name: string;
  email: string;
  occupation: string;
}

export default function EventForm({ event }: EventFormProps) {
  const [timeLeft, setTimeLeft] = useState('');
  const [interestedCount, setInterestedCount] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    occupation: '',
  });


  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [generatedOtp, setGeneratedOtp] = useState<string>('');
  const [inputOtp, setInputOtp] = useState<string>('');
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [interestedLoading, setInterestedLoading] = useState<boolean>(false);

  // Fetch the interested count when the component mounts or eventId changes
  useEffect(() => {
    if (event.id) {
      fetchInterestedCount(event.id);
    }
  }, [event.id]);

  // Function to fetch the interested count
  const fetchInterestedCount = async (eventId: string) => {
    setInterestedLoading(true);
    try {
      const count = await fetchInterestedCountService(eventId);
      setInterestedCount(count);
    } catch (err) {
      setError('Failed to fetch interested count');
    } finally {
      setInterestedLoading(false);
    }
  };

  // Function to increment the interested count
  const incrementInterestedCount = async () => {
    // setInterestedLoading(true);
    setInterestedCount(interestedCount+1);
    try {
      await incrementInterestedCountService(event.id, 1);
    } catch (err) {
      setError('Failed to update interested count');
    } 
    // finally {
    //   setInterestedLoading(false);
    // }
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleEnroll = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const { email } = formData;

    if (!email) {
      setError('Please provide a valid email.');
      return;
    }
    try {
      await checkEnrollmentEligibility(email, event.id);
      const otp = generateOtp();
      setGeneratedOtp(otp);
      await sendOtp(email, otp);
      setIsModalOpen(true);
      console.log(`Generated OTP: ${otp}`);
    } catch (err) {
      setError((err as Error).message || 'Failed to send OTP.');
    }
  };

  // Handle OTP verification
  const sendEnrollmentEmail = async (emailPayload: Record<string, string>) => {
    try {
      await sendEventEmail(emailPayload);
      return { success: true, message: 'Enrollment email sent successfully!' };
    } catch (error: unknown) {
      console.error('Error sending enrollment email:', error);
      return { success: false, message: getErrorMessage(error, 'Failed to send enrollment email.') };
    }
  };

  const handleVerifyOtp = async () => {
    setIsVerifying(true);
    setError('');
    setSuccess('');

    const isValid = verifyOtp(inputOtp, generatedOtp);

    if (isValid) {
      setSuccess('OTP verified successfully! Enrollment complete.');
      setIsModalOpen(false);
      console.log('Form Data:', formData);

      // Call your enroll API
      await enrollInEvent({ ...formData, event_id: event.id });

      setSuccess('Successfully enrolled! Sending confirmation email...');

      // Call the send email API after successful enrollment
      const emailResponse = await sendEnrollmentEmail({
        ...formData,
        event_id: event.id,
        email: formData.email,
        name: formData.name,
        date: event.date,
        eventName: event.title,
        time: "3:pm",
        link: "https://decodingml.substack.com/",
      });

      if (emailResponse.success) {
        setSuccess(emailResponse.message);
      } else {
        setError(emailResponse.message);
      }
    } else {
      setError('Invalid OTP. Please try again.');
    }

    setIsVerifying(false);
  };

  useEffect(() => {
    const eventDate = new Date(event.date).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference <= 0) {
        setTimeLeft("The event has started!");
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    // Initial call to set the countdown and then set interval
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [event.date]);

  return (
    <>
      <div className={styles.webinar_main} id="main">
        <div className={styles.sections}>
          <a href="#event" className={styles.arrowButton}>
            <div><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.20011 12.9196C6.29579 12.9197 6.39047 12.939 6.4786 12.9763C6.56672 13.0136 6.64652 13.068 6.71331 13.1366L11.9895 18.4825L17.3355 13.2063C17.4743 13.0786 17.6574 13.0098 17.846 13.0144C18.0347 13.0189 18.2142 13.0965 18.3467 13.2308C18.4792 13.3651 18.5545 13.5456 18.5566 13.7343C18.5587 13.923 18.4874 14.1051 18.3579 14.2423L12.494 20.0297C12.3565 20.1652 12.1709 20.2406 11.978 20.2393C11.785 20.238 11.6004 20.1602 11.4647 20.0229L5.67734 14.159C5.54187 14.0216 5.46649 13.836 5.46776 13.643C5.46902 13.45 5.54684 13.2654 5.6841 13.1298C5.75178 13.0622 5.83229 13.0087 5.9209 12.9726C6.00951 12.9365 6.10443 12.9185 6.20011 12.9196Z" fill="black" />
              <path d="M12.0757 5.19043C12.2681 5.19421 12.4513 5.27294 12.5865 5.40986C12.7216 5.54678 12.7979 5.73105 12.7992 5.92342L12.7099 19.5167C12.7086 19.7098 12.6307 19.8945 12.4932 20.0302C12.3557 20.1659 12.17 20.2414 11.9769 20.2401C11.7837 20.2388 11.599 20.1609 11.4633 20.0234C11.3277 19.886 11.2522 19.7002 11.2534 19.5071L11.3427 5.91385C11.3465 5.72152 11.4253 5.53826 11.5622 5.40313C11.6991 5.268 11.8834 5.19168 12.0757 5.19043Z" fill="black" />
            </svg></div>
          </a>
          <div className={styles.intro}>
            <div className={styles.introContainer}>
              <Link href={ROUTES.EVENTS}>
                <button>{eventFormText.backToEventsLabel}</button>
              </Link>
              <h1>{event.title}</h1>
              <div className={styles.imageContainer}>
                <Image
                  src={`/images/${event.id}.png`}
                  width={400}
                  height={400}
                  alt={event.title} />
              </div>
              <div className={styles.introEventContainer}>
                <h4>{eventFormText.eventOverviewTitle}</h4>
                <p>{event.description}</p>
              </div>
            </div>
          </div>
          <div className={styles.form}>
            <form onSubmit={handleEnroll} className={styles.formContainer}>
              <h1>{eventFormText.enrollForFreeTitle}</h1>
              <input
                type="text"
                name="name"
                placeholder={eventFormText.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={eventFormText.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="occupation"
                placeholder={eventFormText.occupationPlaceholder}
                value={formData.occupation}
                onChange={handleChange}
                required
              />
              <button type="submit">{eventFormText.enrollNowLabel}</button>
            </form>
            <div className={styles.msgCont}>
              {error && <p className={styles.errorMessage}>{error}</p>}
              {success && <p className={styles.successMessage}>{success}</p>}
            </div>

            {/* OTP Verification Modal */}
            <OTPModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <div className={styles.otpModal}>
                <h2>{eventFormText.verifyOtpTitle}</h2>
                <p>{eventFormText.verifyOtpDescription}</p>
                <input
                  type="text"
                  placeholder={eventFormText.otpPlaceholder}
                  value={inputOtp}
                  onChange={(e) => setInputOtp(e.target.value)}
                  required
                />
                <div className={styles.modalActions}>
                  <button onClick={handleVerifyOtp} disabled={isVerifying}>
                    {isVerifying ? eventFormText.verifyingLabel : eventFormText.verifyLabel}
                  </button>
                  <button onClick={() => setIsModalOpen(false)}>{eventFormText.cancelLabel}</button>
                </div>
                {error && <p className="error-message">{error}</p>}
              </div>
            </OTPModal>

            <div className={styles.InterestedContainer}>
              <div className={styles.Interested}>
                <button onClick={incrementInterestedCount} disabled={interestedLoading || !event.id}><div><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.7151 10.0776C21.7151 9.59009 21.5215 9.12256 21.1768 8.77785C20.8321 8.43314 20.3645 8.23949 19.877 8.23949H14.0687L14.951 4.03944C14.9693 3.94753 14.9785 3.84644 14.9785 3.74534C14.9785 3.36853 14.8223 3.0193 14.5741 2.77115L13.6 1.80615L7.55262 7.85349C7.21257 8.19353 7.01038 8.65306 7.01038 9.15854V18.349C7.01038 18.8365 7.20404 19.304 7.54875 19.6487C7.89346 19.9935 8.36098 20.1871 8.84848 20.1871H17.1199C17.8827 20.1871 18.5352 19.7276 18.811 19.0659L21.5865 12.5866C21.6692 12.3752 21.7151 12.1546 21.7151 11.9157V10.0776ZM1.49609 20.1871H5.17228V9.15854H1.49609V20.1871Z" fill="black" />
                </svg>
                </div></button>
                {interestedLoading ? (
                  <p>{eventFormText.interestedLoadingLabel}</p>
                ) : (
                  <p>{interestedCount} {eventFormText.interestedSuffixLabel}</p>
                )}
              </div>
            </div>
            <div className={styles.EventContainer}>
              <div>
                <h4>{eventFormText.eventDetailsTitle}</h4>
                <span>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2529_317)">
                      <path d="M7.39398 0.0113525C7.59154 0.0113525 7.781 0.0898327 7.9207 0.229528C8.0604 0.369224 8.13888 0.558692 8.13888 0.756251V2.99095H17.0777V0.756251C17.0777 0.558692 17.1561 0.369224 17.2958 0.229528C17.4355 0.0898327 17.625 0.0113525 17.8226 0.0113525C18.0201 0.0113525 18.2096 0.0898327 18.3493 0.229528C18.489 0.369224 18.5675 0.558692 18.5675 0.756251V2.99095H21.2987C22.2582 2.99095 23.0368 3.76961 23.0368 4.72904V20.6202C23.0368 21.0812 22.8537 21.5233 22.5278 21.8492C22.2018 22.1752 21.7597 22.3583 21.2987 22.3583H3.91778C3.45681 22.3583 3.01472 22.1752 2.68876 21.8492C2.36281 21.5233 2.17969 21.0812 2.17969 20.6202V4.72904C2.17969 3.76961 2.95835 2.99095 3.91778 2.99095H6.64908V0.756251C6.64908 0.558692 6.72756 0.369224 6.86725 0.229528C7.00695 0.0898327 7.19642 0.0113525 7.39398 0.0113525ZM21.5471 9.44674H3.66948V20.6202C3.66948 20.7573 3.78072 20.8685 3.91778 20.8685H21.2987C21.3646 20.8685 21.4278 20.8424 21.4743 20.7958C21.5209 20.7492 21.5471 20.6861 21.5471 20.6202V9.44674ZM3.91778 4.48074C3.85193 4.48074 3.78878 4.5069 3.74221 4.55347C3.69564 4.60003 3.66948 4.66319 3.66948 4.72904V7.95694H21.5471V4.72904C21.5471 4.66319 21.5209 4.60003 21.4743 4.55347C21.4278 4.5069 21.3646 4.48074 21.2987 4.48074H3.91778Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2529_317">
                        <rect width="23.8368" height="23.8368" fill="white" transform="translate(0.689453 0.0112305)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>{event.date}</p>
                </span>
                <span>
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.98111 18.6544C2.83124 18.6544 2.6875 18.5922 2.58153 18.4814C2.47555 18.3706 2.41602 18.2203 2.41602 18.0637C2.41602 17.907 2.47555 17.7567 2.58153 17.6459C2.6875 17.5351 2.83124 17.4729 2.98111 17.4729H4.1113V16.2913C4.11107 15.2881 4.38231 14.3053 4.89368 13.4565C5.40505 12.6076 6.13569 11.9273 7.0012 11.4942C7.32896 11.3299 7.50188 11.0487 7.50188 10.797V9.96995C7.50188 9.71827 7.32783 9.43706 7.0012 9.27282C6.13569 8.83967 5.40505 8.15937 4.89368 7.31051C4.38231 6.46165 4.11107 5.47886 4.1113 4.47568V3.29411H2.98111C2.83124 3.29411 2.6875 3.23187 2.58153 3.12108C2.47555 3.01028 2.41602 2.86002 2.41602 2.70333C2.41602 2.54665 2.47555 2.39638 2.58153 2.28558C2.6875 2.17479 2.83124 2.11255 2.98111 2.11255H15.4132C15.5631 2.11255 15.7068 2.17479 15.8128 2.28558C15.9188 2.39638 15.9783 2.54665 15.9783 2.70333C15.9783 2.86002 15.9188 3.01028 15.8128 3.12108C15.7068 3.23187 15.5631 3.29411 15.4132 3.29411H14.283V4.47568C14.2833 5.47886 14.012 6.46165 13.5006 7.31051C12.9893 8.15937 12.2586 8.83967 11.3931 9.27282C11.0654 9.43706 10.8924 9.71827 10.8924 9.96995V10.797C10.8924 11.0487 11.0665 11.3299 11.3931 11.4942C12.2586 11.9273 12.9893 12.6076 13.5006 13.4565C14.012 14.3053 14.2833 15.2881 14.283 16.2913V17.4729H15.4132C15.5631 17.4729 15.7068 17.5351 15.8128 17.6459C15.9188 17.7567 15.9783 17.907 15.9783 18.0637C15.9783 18.2203 15.9188 18.3706 15.8128 18.4814C15.7068 18.5922 15.5631 18.6544 15.4132 18.6544H2.98111ZM5.24149 3.29411V4.47568C5.24149 5.11018 5.37712 5.71041 5.62237 6.24802H12.772C13.0161 5.71041 13.1528 5.11018 13.1528 4.47568V3.29411H5.24149ZM8.63207 10.797C8.63207 11.6253 8.09184 12.2575 7.48944 12.5599C6.81618 12.8968 6.24783 13.426 5.85005 14.0862C5.45226 14.7465 5.24129 15.511 5.24149 16.2913C5.24149 16.2913 6.22024 14.7565 8.63207 14.5426V10.797ZM9.76226 10.797V14.5426C12.1741 14.7565 13.1528 16.2913 13.1528 16.2913C13.153 15.511 12.9421 14.7465 12.5443 14.0862C12.1465 13.426 11.5781 12.8968 10.9049 12.5599C10.3025 12.2575 9.76226 11.6253 9.76226 10.797Z" fill="black" />
                  </svg>

                  <p>{event.duration}</p>
                </span>
                <span>
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.72266 18.0701H18.1344M9.5723 13.9603H11.2847M7.00368 9.85056C8.57739 7.71758 12.2428 7.60086 13.8533 9.85056M4.78525 14.8793C4.47788 13.6332 4.32462 13.0102 4.52582 12.5301C4.65083 12.2318 4.86488 11.9745 5.14229 11.7904C5.58752 11.4945 6.25878 11.4945 7.60474 11.4945H13.2531C14.5974 11.4945 15.2695 11.4945 15.7147 11.7904C15.9921 11.9745 16.2062 12.2318 16.3312 12.5301C16.5324 13.0102 16.3791 13.6332 16.0718 14.8793C15.7695 16.1073 15.618 16.7205 15.2412 17.1619C15.0037 17.4401 14.7056 17.6651 14.3679 17.8211C13.8302 18.0701 13.1675 18.0701 11.843 18.0701H9.01405C7.6895 18.0701 7.02766 18.0701 6.48996 17.8211C6.15224 17.6651 5.85416 17.4401 5.61663 17.1619C5.23819 16.7205 5.0875 16.1073 4.78525 14.8793ZM12.1409 4.91882C12.1409 5.35481 11.9605 5.77295 11.6394 6.08124C11.3182 6.38953 10.8827 6.56273 10.4285 6.56273C9.97434 6.56273 9.53879 6.38953 9.21765 6.08124C8.89651 5.77295 8.71609 5.35481 8.71609 4.91882C8.71609 4.48282 8.89651 4.06469 9.21765 3.75639C9.53879 3.4481 9.97434 3.2749 10.4285 3.2749C10.8827 3.2749 11.3182 3.4481 11.6394 3.75639C11.9605 4.06469 12.1409 4.48282 12.1409 4.91882Z" stroke="black" stroke-width="1.23294" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <p>{eventFormText.onlineStreamingLabel}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="event" className={styles.eventDetail}>
          <h3>{eventFormText.eventInDetailTitle}</h3>
          <p>{event.detailedDescription}</p>
        </div>
        <div className={styles.eventTimer}>
          <div className={styles.eventTime}>
            <span>{eventFormText.eventStartsInLabel}</span>
            <p>{timeLeft}</p>
          </div>
          <button>
            {eventFormText.enrollNowCtaLabel}
          </button>
        </div>

      </div>
    </>
  );
}
