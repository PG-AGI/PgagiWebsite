'use client'
import { eventFormData } from "@/utils/events";
import EventForm from "@/app/components/EventForm";
import Footer from "@/app/components/Footer";

export default function EventFormPage({ params }: { params: { id: string } }) {
  const event = eventFormData.find(e => e.id === params.id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return(
    <>
  <EventForm event={event} />
  <Footer/>
  </>
)
}