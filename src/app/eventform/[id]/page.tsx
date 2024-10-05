import { eventFormData } from "@/utils/constants";
import EventForm from "@/app/components/EventForm";

export default function EventFormPage({ params }: { params: { id: string } }) {
  const event = eventFormData.find(e => e.id === params.id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return <EventForm event={event} />;
}