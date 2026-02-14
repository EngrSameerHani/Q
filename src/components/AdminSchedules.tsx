'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Calendar } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { EventResizeDoneArg } from '@fullcalendar/interaction'
import type { EventApi, DateSelectArg, EventDropArg } from '@fullcalendar/core'
import { getAdminConsultantSchedule } from '@/app/lib/getSchedules'
import Loader from './Loader'

interface AvailabilityEvent {
  id?: string
  user_id?: number
  examine_duration?: string
  schedule_days?: {
    title: string
    start: string | Date
    end: string | Date | null
  }
}

interface AvailabilityCalendarProps {
  initialAvailability?: AvailabilityEvent[]
  onUpdateAvailability?: (
    events: AvailabilityEvent[],
    examineDuration: string
  ) => void
  consultantId: number
}

const AdminAvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({
  initialAvailability = [],
  onUpdateAvailability,
  consultantId,
}) => {
  const [availableSchedule, setAvailableSchedule] = useState<
    AvailabilityEvent[]
  >([])
  const calendarRef = useRef<HTMLDivElement>(null)
  const calendarInstanceRef = useRef<Calendar | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<EventApi | null>(null)
  const [contextMenuPosition, setContextMenuPosition] = useState({
    left: 0,
    top: 0,
  })
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [examineDuration, setExamineDuration] = useState('')
  const [loading, setLoading] = useState(false)

  const getSchedule = async () => {
    setLoading(true)
    const res = await getAdminConsultantSchedule(consultantId)
    setAvailableSchedule(res.schedule_days)
    setExamineDuration(res.examine_duration)
    setLoading(false)
  }

  useEffect(() => {
    getSchedule()
  }, [consultantId])

  useEffect(() => {
    if (calendarRef.current) {
      const calendarEl = calendarRef.current
      const calendar = new Calendar(calendarEl, {
        plugins: [timeGridPlugin, interactionPlugin],
        events: availableSchedule,
        dayHeaderFormat: { weekday: 'long' },
        initialView: 'timeGridWeek',
        editable: true,
        droppable: true,
        eventResizableFromStart: true,
        allDaySlot: false,
        selectable: true,
        headerToolbar: false,
        timeZone: 'Asia/Karachi',
        initialDate: '2023-01-01',
        slotLabelFormat: {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        },
        select: (info: DateSelectArg) => {
          const newEvent = calendar.addEvent({
            title: 'Availability',
            start: info.startStr,
            end: info.endStr,
            allDay: info.allDay,
            backgroundColor: '#01306f',
            borderColor: '#01306f',
          })

          calendar.unselect()
          if (newEvent) {
            mergeOverlappingEvents(newEvent)
          }
        },
        eventDrop: (info: EventDropArg) => {
          const event = info.event
          const eventStart = event.start
          const eventEnd =
            event.end ||
            new Date((eventStart as Date).getTime() + 60 * 60 * 1000)

          // Ensure the event does not exceed a single day
          if ((eventStart as Date).getDate() !== (eventEnd as Date).getDate()) {
            event.setEnd(
              new Date(
                (eventStart as Date).getFullYear(),
                (eventStart as Date).getMonth(),
                (eventStart as Date).getDate(),
                23,
                59,
                59
              )
            )
          }

          mergeOverlappingEvents(event)
        },
        eventDidMount: (info) => {
          info.el.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            setSelectedEvent(info.event)

            // Position context menu
            setContextMenuPosition({
              left: e.pageX - 290,
              top: e.pageY - 100,
            })
            setShowContextMenu(true)
          })
        },
        eventResize: (info: EventResizeDoneArg) => {
          mergeOverlappingEvents(info.event)
        },
      })

      const mergeOverlappingEvents = (newEvent: EventApi) => {
        const events = calendar.getEvents()
        let mergedStart = newEvent.start as Date
        let mergedEnd = newEvent.end as Date

        events.forEach((event) => {
          if (event.id !== newEvent.id && event.title === 'Availability') {
            if (
              (newEvent.start as Date) < (event.end as Date) &&
              (newEvent.end as Date) > (event.start as Date)
            ) {
              // Extend merged start and end times
              mergedStart = new Date(
                Math.min(mergedStart.getTime(), (event.start as Date).getTime())
              )
              mergedEnd = new Date(
                Math.max(mergedEnd.getTime(), (event.end as Date).getTime())
              )

              // Remove the existing overlapping event
              event.remove()
            }
          }
        })

        // Remove the newEvent itself before adding the merged one
        newEvent.remove()

        // Add merged event
        calendar.addEvent({
          id: Math.random().toString(36).substr(2, 9),
          title: 'Availability',
          start: mergedStart,
          end: mergedEnd,
          allDay: false,
          backgroundColor: '#01306f',
          borderColor: '#01306f',
        })
      }

      calendar.render()
      calendarInstanceRef.current = calendar

      return () => {
        calendar.destroy()
      }
    }
  }, [availableSchedule])

  // Hide context menu when clicking anywhere else
  useEffect(() => {
    const handleClick = () => {
      setShowContextMenu(false)
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      selectedEvent.remove()
      setSelectedEvent(null)
      setShowContextMenu(false)
    }
  }

  const handleSaveEvents = () => {
    if (calendarInstanceRef.current) {
      const events = calendarInstanceRef.current.getEvents().map((event) => {
        const start = event.start || new Date()
        const end = event.end || new Date(start.getTime() + 30 * 60 * 1000)
        return {
          title: event.title,
          start: start,
          end: end,
        }
      })

      if (onUpdateAvailability) {
        onUpdateAvailability(events as AvailabilityEvent[], examineDuration)
      }
    }
  }

  if (loading) return <Loader />

  return (
    <div className="position-relative w-100 h-100">
      <div className="mb-2 w-100 d-flex justify-content-start align-items-baseline gap-4">
        <div className="w-25">
          <input
            type="text"
            value={examineDuration}
            onChange={(e) => setExamineDuration(e.target.value)}
            className="form-control"
            placeholder="Examine Duration"
          />
        </div>
        <div className="mt-4">
          <button
            id="saveEvents"
            className="btn btn-primary"
            onClick={handleSaveEvents}
          >
            Save Availability
          </button>
        </div>
      </div>
      <div ref={calendarRef} id="calendar" className="w-100 h-100"></div>

      {/* Context Menu */}
      {showContextMenu && (
        <div
          id="context-menu"
          className="position-absolute p-2 rounded z-3 bg-transparent"
          style={{
            left: `${contextMenuPosition.left}px`,
            top: `${contextMenuPosition.top}px`,
          }}
        >
          <button
            id="delete-event"
            className="btn btn-danger btn-sm"
            onClick={handleDeleteEvent}
          >
            Delete Event
          </button>
        </div>
      )}

      {/* Save Button */}
    </div>
  )
}

export default AdminAvailabilityCalendar
