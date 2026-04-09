import axios from "axios";
import API_ENDPOINTS from "@/constants/apiEndpoints";

interface contentType {
    contentType: string;
    pageId: string;
}

const axiosInstance = axios.create({
    baseURL: API_ENDPOINTS.META_BASE_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
});

export async function getMetaTags(details: contentType) {
    const response = await axiosInstance.get(`/${details.contentType}/${details.pageId}`);
    return response.data; 
}
