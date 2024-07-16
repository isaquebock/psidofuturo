'use client'

import Button from "@/app/components/button/button";

export default function Error() {
    return (
        <main className="flex w-full justify-center p-5 flex-col items-center">
            <Button title={'Retornar à Lista'} icon={true} full={false} action={() => {}}></Button>
        
            Não foi possivel carregar os dados
        </main>
    )
}