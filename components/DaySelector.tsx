import React from 'react';
import { DayItinerary } from '../types';

interface DaySelectorProps {
  days: DayItinerary[];
  selectedDay: number;
  onSelectDay: (day: number) => void;
}

export const DaySelector: React.FC<DaySelectorProps> = ({ days, selectedDay, onSelectDay }) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-4 bg-cream sticky top-0 z-20 border-b border-cream-dark/50">
      <div className="flex space-x-6 px-6 min-w-max">
        {days.map((day) => {
          const isSelected = day.dayNumber === selectedDay;
          return (
            <button
              key={day.dayNumber}
              onClick={() => onSelectDay(day.dayNumber)}
              className={`flex flex-col items-center justify-center transition-all duration-300 ${
                isSelected ? 'scale-110' : 'opacity-50 hover:opacity-80'
              }`}
            >
              <span className={`text-4xl font-serif font-bold ${isSelected ? 'text-terracotta' : 'text-gray-400'}`}>
                {day.dayNumber.toString().padStart(2, '0')}
              </span>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs font-sans tracking-widest uppercase text-gray-500">
                  {day.date}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wide ${isSelected ? 'text-terracotta' : 'text-gray-400'}`}>
                  {day.weekday.substring(0, 3)}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};