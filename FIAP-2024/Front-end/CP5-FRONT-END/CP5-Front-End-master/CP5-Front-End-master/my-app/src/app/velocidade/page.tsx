import Menu from "@/Components/Menu/Menu";
import ManualCard from "@/Components/Cards/ManualCard";

export default function Velocidade() {
    return (
        <div>
            <Menu/>
            <ManualCard 
        imageUrl="/img/velocidade.png"
        title="Velocidade e Trajetória de Vênus"
        description="Velikovsky propôs que Vênus teria sido expulsa de Júpiter como um cometa e, em seguida, passou perto da Terra antes de se estabelecer na sua órbita atual. Isso teria ocorrido num curto período de tempo, algo que desafiava as equações de mecânica orbital clássica, que sugerem que as mudanças de órbita de planetas e corpos celestes são lentas e estáveis."
        />
        </div>
    )
}