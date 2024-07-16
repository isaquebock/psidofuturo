import Button from "@/app/components/button/button";
import Card from "@/app/components/card/card";

interface ScheduleProps {
    data: {
        date: string
        day: string
        dayLongname: string
        hour: string
        month: string
    }
}

export default function Schedule({data, cancelSchedule}: any) {
    return (
        <Card title="Consulta Agendada">
            <p className="w-full text-sm text-gray-500 leading-4">Sua consulta foi agendada para {data.dayLongname}, dia {data.date} às {data.hour}.</p>
        </Card>
    )
} 