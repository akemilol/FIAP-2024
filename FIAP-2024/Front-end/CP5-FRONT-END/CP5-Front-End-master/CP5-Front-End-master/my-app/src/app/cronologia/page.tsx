import Menu from "@/Components/Menu/Menu";
import ManualCard from "@/Components/Cards/ManualCard";


export default function Cronologia() {
    return (
        <div>
            <Menu />
            <ManualCard 
        imageUrl="/img/cronologia.png"
        title="Cronologia dos Eventos"
        description="Ele questionou a cronologia aceita de eventos históricos e astronômicos, propondo que certos eventos catastróficos ocorreram em tempos muito mais recentes do que a ciência convencional sugere. A ideia de que planetas poderiam ter mudado de órbita tão recentemente desafiava as teorias astronômicas da época, que se baseavam em cálculos de órbitas estáveis por milhões de anos."
        />
        </div>
    )
}