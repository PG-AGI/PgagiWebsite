import API_ENDPOINTS from '@/constants/apiEndpoints';

export interface EventEnrollPayload {
  event_id: string;
  name: string;
  email: string;
  occupation: string;
}

export interface EventInterestedResponse {
  message: string;
  result?: {
    interestedCount: number;
  };
}

export interface EventEnrollmentCheckResponse {
  message: string;
}

export async function fetchInterestedCount(eventId: string): Promise<number> {
  const res = await fetch(`${API_ENDPOINTS.EVENTS_INTERESTED}?event_id=${eventId}`);
  const data = (await res.json()) as EventInterestedResponse;
  if (!res.ok) throw new Error(data.message || 'Failed to fetch interested count');
  return data.result?.interestedCount ?? 0;
}

export async function incrementInterestedCount(eventId: string, incrementBy = 1): Promise<number> {
  const res = await fetch(API_ENDPOINTS.EVENTS_INTERESTED, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event_id: eventId, incrementBy }),
  });
  const data = (await res.json()) as EventInterestedResponse;
  if (!res.ok) throw new Error(data.message || 'Failed to update interested count');
  return data.result?.interestedCount ?? 0;
}

export async function checkEnrollmentEligibility(email: string, eventId: string): Promise<void> {
  const res = await fetch(`${API_ENDPOINTS.EVENTS_ENROLL}?email=${encodeURIComponent(email)}&event_id=${encodeURIComponent(eventId)}`);
  const data = (await res.json()) as EventEnrollmentCheckResponse;
  if (!res.ok) throw new Error(data.message || 'Failed to verify enrollment status');
}

export async function enrollInEvent(payload: EventEnrollPayload): Promise<void> {
  const res = await fetch(API_ENDPOINTS.EVENTS_ENROLL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to enroll in event');
}

export async function sendEventEmail(payload: Record<string, string>): Promise<void> {
  const res = await fetch(API_ENDPOINTS.EVENTS_SEND_EMAIL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to send event email');
}

export async function sendEventOtp(email: string, otpCode: string): Promise<void> {
  const res = await fetch(API_ENDPOINTS.EVENTS_SEND_OTP, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, otpCode }),
  });
  if (!res.ok) throw new Error('Failed to send OTP');
}
