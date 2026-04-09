import axios from "axios";
import API_ENDPOINTS from "@/constants/apiEndpoints";

interface ContactPayload {
  first_name: string;
  email: string;
  message: string;
}

interface ContactResponse {
  message: string;
}

export async function submitContactForm(payload: ContactPayload): Promise<ContactResponse> {
  const response = await axios.post<ContactResponse>(API_ENDPOINTS.CONTACT_US_SUBMIT, payload);
  return response.data;
}
