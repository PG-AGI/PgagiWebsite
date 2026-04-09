import styles from '@/styles/components/molecules/eventform.module.scss';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import OTPModal from '@/components/molecules/otpModel';
import { generateOtp, sendOtp, verifyOtp } from '@/utils/otpService';
import {
  checkEnrollmentEligibility,
  enrollInEvent,
  fetchInterestedCount as fetchEventInterestedCount,
  incrementInterestedCount as incrementEventInterestedCount,
  sendEventEmail,
} from '@/services/eventsService';
import ROUTES from '@/constants/routes';
import eventFormText from '@/constants/uiText/eventForm.json';

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

export default function EventForm({ event }: EventFormProps): JSX.Element {
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
      const count = await fetchEventInterestedCount(eventId);
      setInterestedCount(count);
    } catch (err) {
      setError('Failed to fetch interested count');
    } finally {
      setInterestedLoading(false);
    }
  };

  // Function to increment the interested count
  const incrementInterestedCount = async () => {
    try {
      const updatedCount = await incrementEventInterestedCount(event.id);
      setInterestedCount(updatedCount);
    } catch (err) {
      setError('Failed to update interested count');
    }
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
    } catch (err) {
      setError((err as Error).message ?? 'Failed to send OTP.');
    }
  };

  // Handle OTP verification
  const sendEnrollmentEmail = async (payload: Record<string, string>) => {
    try {
      await sendEventEmail(payload);
      return { success: true, message: 'Enrollment email sent successfully!' };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to send enrollment email.';
      console.error('Error sending enrollment email:', err);
      return { success: false, message };
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

      // Enroll via service
      try {
        await enrollInEvent({
          event_id: event.id,
          name: formData.name,
          email: formData.email,
          occupation: formData.occupation,
        });
        setSuccess('Successfully enrolled! Sending confirmation email...');

        const emailResponse = await sendEnrollmentEmail({
          event_id: event.id,
          email: formData.email,
          name: formData.name,
          date: event.date,
          eventName: event.title,
          time: "3:pm",
          link: "https://decodingml.substack.com/",
          occupation: formData.occupation,
        });

        if (emailResponse.success) {
          setSuccess(emailResponse.message);
        } else {
          setError(emailResponse.message);
        }
      } catch (err) {
        setError('Failed to enroll. Please try again.');
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

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, [event.date]);

  return (
    <>
      <div className={styles.webinar_main} id="main">
        <div className={styles.sections}>
          <a href="#event" className={styles.arrowButton}>
            <div>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.20011 12.9196C6.29579 12.9197 6.39047 12.939 6.4786 12.9763C6.56672 13.0136 6.64652 13.068 6.71331 13.1366L11.9895 18.4825L17.3355 13.2063C17.4743 13.0786 17.6574 13.0098 17.846 13.0144C18.0347 13.0189 18.2142 13.0965 18.3467 13.2308C18.4792 13.3651 18.5545 13.5456 18.5566 13.7343C18.5587 13.923 18.4874 14.1051 18.3579 14.2423L12.494 20.0297C12.3565 20.1652 12.1709 20.2406 11.978 20.2393C11.785 20.238 11.6004 20.1602 11.4647 20.0229L5.67734 14.159C5.54187 14.0216 5.46649 13.836 5.46776 13.643C5.46902 13.45 5.54684 13.2654 5.6841 13.1298C5.75178 13.0622 5.83229 13.0087 5.9209 12.9726C6.00951 12.9365 6.10443 12.9185 6.20011 12.9196Z" fill="black" />
                <path d="M12.0757 5.19043C12.2681 5.19421 12.4513 5.27294 12.5865 5.40986C12.7216 5.54678 12.7979 5.73105 12.7992 5.92342L12.7099 19.5167C12.7086 19.7098 12.6307 19.8945 12.4932 20.0302C12.3557 20.1659 12.17 20.2414 11.9769 20.2401C11.7837 20.2388 11.599 20.1609 11.4633 20.0234C11.3277 19.886 11.2522 19.7002 11.2534 19.5071L11.3427 5.91385C11.3465 5.72152 11.4253 5.53826 11.5622 5.40313C11.6991 5.268 11.8834 5.19168 12.0757 5.19043Z" fill="black" />
              </svg>
            </div>
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
                <button onClick={incrementInterestedCount} disabled={interestedLoading || !event.id}>
                  <div>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.7151 10.0776C21.7151 9.59009 21.5215 9.12256 21.1768 8.77785C20.8321 8.43314 20.3645 8.23949 19.877 8.23949H14.0687L14.951 4.03944C14.9693 3.94753 14.9785 3.84644 14.9785 3.74534C14.9785 3.36853 14.8223 3.0193 14.5741 2.77115L13.6 1.80615L7.55262 7.85349C7.21257 8.19353 7.01038 8.65306 7.01038 9.15854V18.349C7.01038 18.8365 7.20404 19.304 7.54875 19.6487C7.89346 19.9935 8.36098 20.1871 8.84848 20.1871H17.1199C17.8827 20.1871 18.5352 19.7276 18.811 19.0659L21.5865 12.5866C21.6692 12.3752 21.7151 12.1546 21.7151 11.9157V10.0776ZM1.49609 20.1871H5.17228V9.15854H1.49609V20.1871Z" fill="black" />
                    </svg>
                  </div>
                </button>
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
                  <p>{event.date}</p>
                </span>
                <span>
                  <p>{event.duration}</p>
                </span>
                <span>
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
