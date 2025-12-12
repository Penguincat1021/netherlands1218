import React from 'react';
import { ItineraryEvent, EventType } from '../types';
import { Icons } from './Icons';

interface TimelineCardProps {
  event: ItineraryEvent;
  isLast: boolean;
  onInfoClick?: (event: ItineraryEvent) => void;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({ event, isLast, onInfoClick }) => {
  const getIcon = () => {
    switch (event.type) {
      case EventType.FLIGHT: return <Icons.Flight className="w-4 h-4 text-white" />;
      case EventType.SIGHTSEEING: return <Icons.Sightseeing className="w-4 h-4 text-white" />;
      case EventType.FOOD: return <Icons.Food className="w-4 h-4 text-white" />;
      case EventType.HOTEL: return <Icons.Hotel className="w-4 h-4 text-white" />;
      case EventType.TRANSPORT: return <Icons.Transport className="w-4 h-4 text-white" />;
      case EventType.ADMIN: return <Icons.Admin className="w-4 h-4 text-white" />;
      case EventType.EXPLORE: return <Icons.Explore className="w-4 h-4 text-white" />;
      default: return <Icons.MapPin className="w-4 h-4 text-white" />;
    }
  };

  const getBorderColor = () => {
    switch (event.type) {
      case EventType.FLIGHT: return 'border-sky-400';
      case EventType.SIGHTSEEING: return 'border-blue-600';
      case EventType.FOOD: return 'border-amber-400';
      case EventType.HOTEL: return 'border-indigo-400';
      case EventType.ADMIN: return 'border-slate-600';
      case EventType.EXPLORE: return 'border-teal-500';
      default: return 'border-gray-400';
    }
  };

  const getBgColor = () => {
     switch (event.type) {
      case EventType.FLIGHT: return 'bg-sky-400';
      case EventType.SIGHTSEEING: return 'bg-blue-600';
      case EventType.FOOD: return 'bg-amber-400';
      case EventType.HOTEL: return 'bg-indigo-400';
      case EventType.ADMIN: return 'bg-slate-600';
      case EventType.EXPLORE: return 'bg-teal-500';
      default: return 'bg-gray-400';
    }
  }

  // Determine the map URL: prefer the direct locationLink, fallback to the modal's mapUrl
  const mapUrl = event.locationLink || event.infoModalData?.mapUrl;

  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-slate-200"></div>
      )}

      {/* Timeline Dot/Icon */}
      <div className={`absolute left-0 top-0 w-8 h-8 rounded-full ${getBgColor()} flex items-center justify-center shadow-md z-10`}>
        {getIcon()}
      </div>

      {/* Content Card */}
      <div className={`bg-white rounded-lg shadow-sm p-4 ml-4 border-l-4 ${getBorderColor()}`}>
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-serif font-bold text-slate-800 leading-tight">{event.title}</h3>
        </div>
        
        <div className="inline-block bg-slate-100 rounded px-2 py-0.5 mb-2">
            <span className="text-xs font-bold text-slate-500 font-mono">{event.time}</span>
        </div>

        <div className="text-sm text-slate-600 font-sans leading-relaxed mb-3 whitespace-pre-line">
          {event.description}
        </div>

        {event.image && (
          <div className="w-full h-32 rounded-md overflow-hidden mb-2 relative group">
             <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
             {event.type === EventType.SIGHTSEEING && <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1 rounded-full"><Icons.Sightseeing size={12} /></div>}
          </div>
        )}
        
        <div className="flex justify-end gap-3 mt-2">
             {/* Map Button: Renders as a link if URL exists, else disabled button */}
             {mapUrl ? (
                <a 
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-terracotta transition-colors flex items-center justify-center"
                  aria-label="Open in Google Maps"
                >
                  <Icons.MapPin size={18} />
                </a>
             ) : (
                <button 
                  className="text-slate-200 cursor-not-allowed flex items-center justify-center" 
                  disabled
                  aria-label="No map available"
                >
                  <Icons.MapPin size={18} />
                </button>
             )}

             {/* Info Button - Highlighted if infoModalData exists */}
             <button 
                onClick={() => event.infoModalData && onInfoClick?.(event)}
                className={`${event.infoModalData ? 'text-terracotta hover:text-blue-800 animate-pulse' : 'text-slate-300 hover:text-slate-400'} transition-colors flex items-center justify-center`}
                disabled={!event.infoModalData}
             >
                <Icons.Info size={18} strokeWidth={event.infoModalData ? 2.5 : 2} />
             </button>
        </div>
      </div>
    </div>
  );
};