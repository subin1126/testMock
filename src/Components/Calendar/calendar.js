import React, { Component } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react';

import googleCalendarPlugin from '@fullcalendar/google-calendar';

function Calendar() {

    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendarPlugin]}
                initialView={'dayGridMonth'}
                headerToolbar={
                    {
                        start: 'today',
                        center: 'title',
                        end: 'prev,next'
                    }
                }

                googleCalendarApiKey='AIzaSyArxfkSJ4a6oIg16No4J5Eaw1ocqDBwgOQ'
                eventSources={{
                    googleCalendarId: 'ko.south_korea#holiday@group.v.calendar.google.com',
                    className: '대한민국 공휴일',
                    color: 'orange',
                    textColor: 'white'
                }}

                events={[
                    {
                        title: '공부',
                        date: '2023-10-26',
                        color: 'blue'
                    },
                ]}

            />
        </>
    )
};


export default Calendar;