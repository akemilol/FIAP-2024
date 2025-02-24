import Menu from "@/Components/Menu/Menu";
import ManualCard from "@/Components/Cards/ManualCard";

export default function Orbita() {
  return (
    <div>
      <Menu />
      <ManualCard 
        imageUrl="/img/orbita.png"
        title="Órbitas Planetárias e Instabilidade"
        description="Velikovsky sugeriu que Vênus, Marte e outros corpos celestes poderiam ter passado perto da Terra, perturbando as órbitas planetárias de forma significativa. Isso implicava em uma instabilidade no sistema solar que não era compatível com os cálculos newtonianos de órbitas estáveis a longo prazo."
        />
    </div>
  )
}

