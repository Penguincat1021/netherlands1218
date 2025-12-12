
export enum EventType {
  FLIGHT = 'FLIGHT',
  SIGHTSEEING = 'SIGHTSEEING',
  FOOD = 'FOOD',
  HOTEL = 'HOTEL',
  TRANSPORT = 'TRANSPORT',
  ADMIN = 'ADMIN', // For BSN, IND, Visa tasks
  EXPLORE = 'EXPLORE'
}

export interface InfoModalData {
  title: string;
  content: string; // Markdown supported
  imageUrl?: string;
  address?: string; // New: Physical address
  mapUrl?: string;  // New: Direct Google Maps link
}

export interface ItineraryEvent {
  id: string;
  time: string;
  title: string;
  description: string; // Supports markdown-like formatting (e.g., newlines)
  type: EventType;
  image?: string;
  locationLink?: string; // e.g., Google Maps URL
  infoModalData?: InfoModalData; // Optional detailed info for popup
}

export interface DayItinerary {
  dayNumber: number;
  date: string;
  weekday: string;
  location: string;
  locationUrl: string; // New: Google Maps URL for the day
  weatherTemp: number; // in Celsius
  weatherCondition: 'Sunny' | 'Cloudy' | 'Rainy';
  events: ItineraryEvent[];
}

export type Tab = 'itinerary' | 'explore' | 'journal' | 'info';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}
