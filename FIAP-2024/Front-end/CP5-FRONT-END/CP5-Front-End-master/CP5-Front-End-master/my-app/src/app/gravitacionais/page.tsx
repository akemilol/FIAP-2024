import Menu from "@/Components/Menu/Menu";
import ManualCard from "@/Components/Cards/ManualCard";

export default function Gravitacionais() {
    return (
        <div>
            <Menu />
            <ManualCard 
        imageUrl="/img/gravitacional.png"
        title="Forças Gravitacionais e Eletromagnéticas"
        description="Velikovsky propôs que as forças eletromagnéticas entre planetas poderiam ter desempenhado um papel significativo nos encontros próximos, algo que contraria o modelo puramente gravitacional aceito na física celeste. Ele sugeriu que os cálculos gravitacionais sozinhos não explicavam adequadamente as interações planetárias propostas em suas teorias."
        />
        </div>
    )
}