import axios from "axios";

interface contentType{
    contentType: string,
    pageId: string,
}
const axiosInstance = axios.create({
    baseURL: 'https://your-backend.com/api',
    timeout: 10000, 
    headers: {
      'Content-Type': 'application/json', 
      Accept: 'application/json',
    },
});

export async function getMetaTags(details: contentType) {
    const response = await axiosInstance.get(`/${details.contentType}metaTags/${details.pageId}`);
    const data = response.data;
    return data; // Returns { title, description, imageUrl, etc. }
}
