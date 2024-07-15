'use client';

import Button from "@/app/components/button/button";
import { useState } from "react";

export default function Calendar(props: any) {
    const [schedule, setSchedule] = useState({
        day: '',
        hour: '',
        month: '',
        dayLongname: '',
        date: ''
    });

    const daysOfTheWeek = props.calendar.map((data: any) => {
        return {
            day: data.day,
            availableTimes: data.availableTimes,
            selected: false,
            month: data.month,
            dayLongname: data.dayLongname,
            date: data.date
        }
    })


    function extractDayFromDate(date: string) {
        console.log(date)
        return date.split('/')[0];
    }

    return (
        <div className="">
            <div className="pb-3">
                <p>Selecione abaixo o melhor o dia e a horário para sua sessão.</p>

                <div className="pb-3 flex justify-between mt-5 ">
                    { daysOfTheWeek.map((item: any, index: number) => (
                        <div className={`bg-gray-100 py-2 px-6 rounded-md cursor-pointer border-1 border-gray-100 font-medium ${schedule.day == item.day && `bg-red-100 border-red-400`}`} key={item.day} onClick={() => {
                            setSchedule({
                                hour: '', 
                                day: item.day,
                                dayLongname: item.dayLongname,
                                month: item.month,
                                date: item.date
                                
                            })
                        }}>{item.day}</div>
                    )) }
                </div>
            </div>

            <hr />  

            <div className="pb-3">
                <div className="pb-3 flex justify-between mt-5 ">
                    { daysOfTheWeek.map((item: any, index: number) => (
                        <div className="pb-3 flex-col flex margin" key={item.id}>{item.availableTimes.map((time:any) => {
                            return <div className={`bg-gray-100 py-2 px-6 rounded-md border-1 border-gray-100 font-medium cursor-pointer w-20 flex justify-center items-center mb-2 ${(schedule.day == item.day && item.availableTimes.includes(time) && time === schedule.hour) && `bg-red-100 border-red-400`}`} onClick={
                                () => {
                                    setSchedule({
                                        hour: time, 
                                        day: item.day,
                                        dayLongname: item.dayLongname,
                                        month: item.month,
                                        date: item.date
                                    })
                                }
                            }>{time}</div>
                        })}</div>
                    )) }
                </div>
            </div>
                    
            <hr className="mb-3" />  
            
            <div>
                {(schedule.day && schedule.hour) ? 
                    (
                        <p className="w-full text-center p-4 text-sm text-gray-500 leading-4">Gostaria de confirmar e agendar sua sessão para <strong className="font-semibold">{schedule.dayLongname}, { extractDayFromDate(schedule.date) } de { schedule.month}, {schedule.hour}?</strong></p>
                    ) : 
                    (
                        <p>Serviço não agendado</p>
                    )
                }

                <Button title="Confirmar e agendar" icon={false} full={true}></Button>
            </div>



        </div>
    )
} 