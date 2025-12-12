import React, { useState } from 'react';
import { ITINERARY_DATA, TRIP_TITLE } from './constants';
import { Tab, DayItinerary, InfoModalData } from './types';
import { DaySelector } from './components/DaySelector';
import { TimelineCard } from './components/TimelineCard';
import { ChatInterface } from './components/ChatInterface';
import { Icons } from './components/Icons';

export default function App() {
  const [selectedDayNum, setSelectedDayNum] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<Tab>('itinerary');
  const [modalData, setModalData] = useState<InfoModalData | null>(null);

  const currentDay: DayItinerary = ITINERARY_DATA.find(d => d.dayNumber === selectedDayNum) || ITINERARY_DATA[0];

  const renderWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'Sunny': return <Icons.Sun size={18} className="text-yellow-500" />;
      case 'Rainy': return <Icons.Rain size={18} className="text-blue-500" />;
      default: return <Icons.Cloud size={18} className="text-gray-400" />;
    }
  };

  return (
    <div className="bg-cream min-h-screen relative max-w-md mx-auto shadow-2xl overflow-hidden flex flex-col font-sans">
      
      {/* Header */}
      <header className="pt-12 pb-4 px-6 flex justify-between items-center bg-cream z-30">
        <div>
          <h2 className="text-xs font-bold tracking-widest text-terracotta uppercase mb-1">Trip Itinerary</h2>
          <h1 className="text-2xl font-serif font-bold text-charcoal">{TRIP_TITLE}</h1>
        </div>
        <button className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-charcoal">
          <span className="font-serif font-bold">NL</span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* Navigation Tabs */}
        {activeTab === 'itinerary' && (
          <>
            <DaySelector 
              days={ITINERARY_DATA} 
              selectedDay={selectedDayNum} 
              onSelectDay={setSelectedDayNum} 
            />

            <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
              {/* Day Header Info */}
              <div className="px-6 py-6">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h2 className="text-4xl font-serif font-bold text-charcoal mb-1">
                      {currentDay.location}
                    </h2>
                    <p className="text-gray-500 text-sm font-medium tracking-wide">
                      {currentDay.weekday}, {currentDay.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                    {renderWeatherIcon(currentDay.weatherCondition)}
                    <span className="text-sm font-bold text-gray-600">{currentDay.weatherTemp}°C</span>
                  </div>
                </div>

                {/* Map Integration */}
                <a 
                  href={currentDay.locationUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full h-32 bg-cream-dark rounded-xl mb-8 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer border border-terracotta/20 block"
                >
                   <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Map_of_Amsterdam_Centrum.svg/1200px-Map_of_Amsterdam_Centrum.svg.png')] bg-cover bg-center"></div>
                   <div className="z-10 bg-white/90 px-4 py-2 rounded-full shadow-sm flex items-center gap-2 group-hover:scale-105 transition-transform">
                      <Icons.MapPin size={16} className="text-terracotta" />
                      <span className="text-xs font-bold tracking-wider text-terracotta">OPEN GOOGLE MAPS</span>
                   </div>
                </a>

                {/* Timeline */}
                <div className="mt-2">
                  {currentDay.events.map((event, index) => (
                    <TimelineCard 
                      key={event.id} 
                      event={event} 
                      isLast={index === currentDay.events.length - 1}
                      onInfoClick={(evt) => evt.infoModalData && setModalData(evt.infoModalData)} 
                    />
                  ))}
                  
                  {/* End of day marker */}
                  <div className="flex items-center justify-center mt-8 opacity-50">
                    <div className="w-2 h-2 rounded-full bg-gray-300 mx-1"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300 mx-1"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300 mx-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'explore' && (
           <div className="flex-1 px-6 pt-4 pb-24 overflow-y-auto bg-cream">
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-2">Explore</h2>
              <p className="text-gray-600 mb-6">Discover local secrets and ask questions about {currentDay.location}.</p>
              <ChatInterface location={currentDay.location} />
           </div>
        )}

        {activeTab === 'info' && (
           <div className="flex-1 px-6 pt-4 pb-24 overflow-y-auto bg-cream flex flex-col items-center justify-center text-center">
              <Icons.Info size={48} className="text-terracotta mb-4" />
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-2">Trip Information</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm w-full text-left space-y-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Flight</p>
                    <p className="font-bold text-charcoal">KL123 (Economy)</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Hotel</p>
                    <p className="font-bold text-charcoal">Hotel Pulitzer, Amsterdam</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Emergency</p>
                    <p className="font-bold text-charcoal">112 (EU Standard)</p>
                  </div>
              </div>
           </div>
        )}

      </main>

      {/* Bottom Sticky Navigation */}
      <nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 py-4 px-6 pb-8 z-40">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setActiveTab('itinerary')}
            className={`flex flex-col items-center space-y-1 w-16 ${activeTab === 'itinerary' ? 'text-terracotta' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Icons.MapPin size={24} strokeWidth={activeTab === 'itinerary' ? 2.5 : 2} />
            <span className="text-[10px] font-bold tracking-wide">PLAN</span>
          </button>
          
          <button 
             onClick={() => setActiveTab('explore')}
             className={`flex flex-col items-center space-y-1 w-16 ${activeTab === 'explore' ? 'text-terracotta' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Icons.Explore size={24} strokeWidth={activeTab === 'explore' ? 2.5 : 2} />
            <span className="text-[10px] font-bold tracking-wide">EXPLORE</span>
          </button>

          <button 
             className="flex flex-col items-center space-y-1 w-16 text-gray-400 hover:text-gray-600 opacity-50 cursor-not-allowed"
          >
            <Icons.Journal size={24} />
            <span className="text-[10px] font-bold tracking-wide">JOURNAL</span>
          </button>

          <button 
             onClick={() => setActiveTab('info')}
             className={`flex flex-col items-center space-y-1 w-16 ${activeTab === 'info' ? 'text-terracotta' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Icons.Info size={24} strokeWidth={activeTab === 'info' ? 2.5 : 2} />
            <span className="text-[10px] font-bold tracking-wide">INFO</span>
          </button>
        </div>
      </nav>

      {/* Info Modal Overlay */}
      {modalData && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalData(null)}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-terracotta p-4 flex justify-between items-center">
                <h3 className="text-white font-serif font-bold text-xl">{modalData.title}</h3>
                <button 
                    onClick={() => setModalData(null)}
                    className="text-white/80 hover:text-white bg-white/10 rounded-full p-1"
                >
                    <Icons.Left className="rotate-[-90deg]" size={20} />
                </button>
            </div>
            
            <div className="max-h-[70vh] overflow-y-auto p-0">
                {modalData.imageUrl && (
                    <div className="w-full h-64 bg-slate-100 relative">
                        <img 
                           src={modalData.imageUrl} 
                           alt={modalData.title} 
                           className="w-full h-full object-contain"
                        />
                    </div>
                )}
                
                {/* Address & Map Action Section */}
                {(modalData.address || modalData.mapUrl) && (
                  <div className="p-6 pb-2 bg-slate-50 border-b border-slate-100">
                    {modalData.address && (
                      <div className="flex items-start gap-3 mb-4">
                        <Icons.MapPin className="text-terracotta shrink-0 mt-1" size={20} />
                        <p className="text-slate-700 font-medium">{modalData.address}</p>
                      </div>
                    )}
                    
                    {modalData.mapUrl && (
                      <a 
                        href={modalData.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-white border border-slate-200 hover:border-terracotta hover:text-terracotta text-slate-600 font-bold py-3 rounded-xl transition-all shadow-sm"
                      >
                        <Icons.MapPin size={18} />
                        Open in Google Maps
                      </a>
                    )}
                  </div>
                )}

                <div className="p-6">
                    <div className="prose prose-sm prose-slate max-w-none whitespace-pre-line leading-relaxed text-slate-600">
                        {modalData.content}
                    </div>
                </div>
            </div>
            
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
                <button 
                    onClick={() => setModalData(null)}
                    className="px-6 py-2 bg-slate-800 text-white rounded-lg text-sm font-bold hover:bg-slate-700 transition-colors"
                >
                    Close
                </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}