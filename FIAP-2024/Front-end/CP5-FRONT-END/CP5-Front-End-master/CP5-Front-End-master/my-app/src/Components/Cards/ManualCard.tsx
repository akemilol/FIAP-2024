"use client";

import React from 'react';

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
}

export default function Card({ imageUrl, title, description }: CardProps) {
    return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:space-x-8 w-[1200px] h-[700px] mx-auto">
            <div className="flex-1 text-white">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-gray-300 mb-4">{description}</p>
            </div>
            <div className="w-full md:w-1/2 bg-gray-400 rounded-lg h-full flex-shrink-0 flex items-center justify-center">
            <img
                src={imageUrl}
                alt={title}
                className="rounded-lg object-cover h-full w-full"
            />
            </div>
        </div>
        </div>
    );
}