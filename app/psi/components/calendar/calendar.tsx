'use client';

import { useState } from "react";
import ScheduleConfiguration from "../scheduleConfiguration/scheduleConfiguration";
import Schedule from "../schedule/schedule";

export default function Calendar(data: any) { 
    const [isScheduled, setIsScheduled] = useState(false);
    const [scheduledData, setScheduledData] = useState({
        day: '',
        hour: '',
        month: '',
        dayLongname: '',
        date: ''
    });

    const setNewSchedule = (data: any) => {
        setIsScheduled(!isScheduled)
        setScheduledData(data)
    }

    const cancelSchedule = (data: any) => {
        setIsScheduled(!isScheduled)
    }

    return (
        <>
            {!isScheduled ? (<ScheduleConfiguration setNewSchedule={setNewSchedule} calendar={data.calendar}></ScheduleConfiguration>) : (<Schedule cancelSchedule={cancelSchedule} data={scheduledData}></Schedule>)}
        </>
    )
}