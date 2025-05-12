"use client";

import React, { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, parseISO, addDays } from "date-fns";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

/**
 * French abbreviated day names used in the calendar header
 * @constant {string[]}
 */
const weekDays = ["DIM.", "LUN.", "MAR.", "MER.", "JEU.", "VEN.", "SAM."];

/**
 * Defines the time slots available for booking
 * @typedef {Object} TimeSlot
 * @property {string} time - The time slot in 12-hour format
 * @property {number} available - Number of courts available at this time
 */

/**
 * Collection of time slots available for booking throughout the day
 * Each slot shows the time and number of available courts (out of 6)
 * @type {TimeSlot[]}
 */
const timeSlots = [
  { time: "1:00pm", available: 6 },
  { time: "2:00pm", available: 6 },
  { time: "3:00pm", available: 6 },
  { time: "4:00pm", available: 6 },
  { time: "5:00pm", available: 6 },
  { time: "6:00pm", available: 6 },
  { time: "7:00pm", available: 6 },
];

/**
 * BookingCalendar Component
 * 
 * An interactive calendar component that allows users to select dates and time slots
 * for booking padel courts. Features include:
 * - Monthly calendar navigation
 * - Date selection with visual indicators for available, past, and current dates
 * - Time slot selection with availability indicators
 * - 12/24 hour time format toggle
 * - Booking confirmation with toast notifications
 * 
 * @example
 * // Basic usage in a page or component
 * import BookingCalendar from '@/components/BookingCalendar';
 * 
 * const BookingPage = () => (
 *   <div className="container">
 *     <h1>Book Your Court</h1>
 *     <BookingCalendar />
 *   </div>
 * );
 * 
 * @returns {React.ReactElement} The rendered BookingCalendar component
 */
const BookingCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [timeView, setTimeView] = useState<"12h" | "24h">("12h");

  /**
   * Navigates to the previous month in the calendar view
   */
  const handlePreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  
  /**
   * Navigates to the next month in the calendar view
   */
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Pad the calendar with days from previous/next month
  const startDay = monthStart.getDay();
  const endDay = 6 - monthEnd.getDay();

  const prevMonthDays = startDay > 0
    ? eachDayOfInterval({
        start: subMonths(monthStart, 1),
        end: subMonths(monthStart, 1),
      }).slice(-startDay)
    : [];

  const nextMonthDays = endDay > 0
    ? eachDayOfInterval({
        start: addMonths(monthEnd, 1),
        end: addDays(addMonths(monthEnd, 1), endDay - 1),
      })
    : [];

  const allDays = [...prevMonthDays, ...daysInMonth, ...nextMonthDays];

  /**
   * Handles user selection of a date in the calendar
   * Only allows selection of dates within the current month view
   * Resets any previously selected time slot
   * 
   * @param {Date} date - The date clicked by the user
   */
  const handleDateClick = (date: Date) => {
    if (isSameMonth(date, currentDate)) {
      setSelectedDate(date);
      setSelectedTimeSlot(null);
    }
  };

  /**
   * Handles user selection of a time slot
   * Sets the selected time slot in the component state
   * 
   * @param {string} time - The time slot selected by the user (e.g., "2:00pm")
   */
  const handleTimeSlotClick = (time: string) => {
    setSelectedTimeSlot(time);
  };

  /**
   * Processes the court booking request
   * Validates that both a date and time slot are selected before confirming
   * Shows a success toast if booking is valid, error toast otherwise
   * 
   * In a production environment, this would typically call an API to process the booking
   */
  const handleBooking = () => {
    if (selectedDate && selectedTimeSlot) {
      toast.success("Booking Successful!", {
        description: `Your court has been booked for ${format(selectedDate, "MMMM d, yyyy")} at ${selectedTimeSlot}`,
      });
    } else {
      toast.error("Booking Failed", {
        description: "Please select both a date and time slot",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto">
      {/* Calendar Section */}
      <div className="flex-1 bg-white rounded-2xl shadow-subtle p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-brand-dark">
            {format(currentDate, "MMMM yyyy")}
          </h3>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePreviousMonth}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNextMonth}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 mb-2">
          {weekDays.map((day) => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 p-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {allDays.map((day, i) => {
            const isCurrentMonth = isSameMonth(day, currentDate);
            const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
            const isCurrent = isToday(day);
            const hasAvailability = isCurrentMonth && day >= new Date();

            return (
              <div
                key={i}
                className={`booking-date ${isSelected ? "selected" : ""} ${
                  !isCurrentMonth || day < new Date() ? "inactive" : ""
                } ${isCurrent ? "ring-1 ring-brand-accent" : ""}`}
                onClick={() => hasAvailability && handleDateClick(day)}
              >
                <span>{format(day, "d")}</span>
                {hasAvailability && (
                  <span className="availability-dot"></span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Time Slots Section */}
      <div className="flex-1 bg-white rounded-2xl shadow-subtle p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-brand-dark">
            {selectedDate ? format(selectedDate, "MMM. d") : "Select a Date"}
          </h3>
          <div className="flex items-center space-x-1 rounded-lg border p-1">
            <Button
              variant={timeView === "12h" ? "default" : "ghost"}
              size="sm"
              onClick={() => setTimeView("12h")}
              className="text-xs h-7"
            >
              12 h
            </Button>
            <Button
              variant={timeView === "24h" ? "default" : "ghost"}
              size="sm"
              onClick={() => setTimeView("24h")}
              className="text-xs h-7"
            >
              24 h
            </Button>
          </div>
        </div>

        {selectedDate ? (
          <div className="space-y-3">
            {timeSlots.map((slot, index) => (
              <div
                key={index}
                className={`time-slot ${
                  selectedTimeSlot === slot.time ? "selected" : ""
                }`}
                onClick={() => handleTimeSlotClick(slot.time)}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-brand-accent mr-2" />
                    <span className="font-medium">
                      {slot.time}
                    </span>
                  </div>
                  <Badge variant="outline" className="bg-brand-accent/10 text-brand-accent border-transparent">
                    {slot.available} {slot.available === 1 ? "Slot" : "Slots"} Available
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[300px] flex flex-col items-center justify-center text-center p-6">
            <Clock className="h-12 w-12 text-gray-300 mb-4" />
            <h4 className="text-xl font-medium text-gray-400">No Date Selected</h4>
            <p className="text-gray-400 mt-2">
              Please select a date from the calendar to view available time slots
            </p>
          </div>
        )}

        <Separator className="my-6" />

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Selected date:</span>
            <span className="font-medium">
              {selectedDate ? format(selectedDate, "MMMM d, yyyy") : "—"}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Selected time:</span>
            <span className="font-medium">{selectedTimeSlot || "—"}</span>
          </div>

          <Button 
            className="w-full mt-4 bg-brand-accent hover:bg-brand-accent/90"
            size="lg"
            onClick={handleBooking}
            disabled={!selectedDate || !selectedTimeSlot}
          >
            Confirm Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
