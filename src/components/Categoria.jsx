import React from "react";

export default function Categoria({ categoria }) {
  const { nombre, icono } = categoria;
  return (
    <div className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">
      <img src={`/img/icono_${icono}.svg`} alt="icono" className="w-12" />
      <p className="font-bold text-lg cursor-pointer truncate">{nombre}</p>
    </div>
  );
}
