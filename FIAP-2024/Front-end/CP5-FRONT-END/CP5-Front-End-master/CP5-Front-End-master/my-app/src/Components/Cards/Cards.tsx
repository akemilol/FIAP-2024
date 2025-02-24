"use client";

import React, { useState, useEffect } from 'react';

export default function Cards() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getRandomDate = () => {
    const start = new Date(1995, 5, 16);
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().split('T')[0];
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const randomDate = getRandomDate();
        const response = await fetch(`/api/nasa?date=${randomDate}`); 
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        setImageUrl(data.url);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch image from API');
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:space-x-8 w-[1200px] h-[700px] mx-auto">
        <div className="flex-1 text-white">
          <h1 className="text-3xl font-bold mb-4">A Grande Galáxia da Nuvem de Magalhães</h1>
          <p className="text-gray-300 mb-4">
          É a maior galáxia satélite da nossa galáxia, a Via Láctea. Se você mora no sul, a Grande Nuvem de Magalhães (LMC) é bastante perceptível, abrangendo cerca de 10 graus no céu noturno, que é 20 vezes maior que a lua cheia em direção à constelação sul do golfinho (Dorado). Estando a apenas cerca de 160.000 anos-luz de distância, muitos detalhes da estrutura da GNM podem ser vistos, como a sua barra central e o seu braço espiral único. A Grande Nuvem de Magalhães abriga numerosos berçários estelares onde novas estrelas estão nascendo, que aparecem em rosa na imagem em destaque. É o lar da Nebulosa da Tarântula, a região de formação estelar atualmente mais ativa em todo o Grupo Local, uma pequena coleção de galáxias próximas dominadas pelas massivas galáxias de Andrômeda e Via Láctea. Os estudos da LMC e da Pequena Nuvem de Magalhães (SMC) por Henrietta Swan Leavitt levaram à descoberta da relação período-luminosidade das estrelas variáveis ​​Cefeidas que são usadas para medir distâncias no universo próximo. Pesquisa: Daltonismo e Imagens Astronômicas
          </p>
        </div>
        <div className="w-full md:w-1/2 bg-gray-400 rounded-lg h-full flex-shrink-0 flex items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="NASA APOD"
              className="rounded-lg object-cover h-full w-full"
            />
          ) : (
            <p className="text-white">Loading image...</p>
          )}
        </div>
      </div>
    </div>
  );
}