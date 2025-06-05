"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 px-6 text-center mt-12">
      <p>© {new Date().getFullYear()} Estudiante. Todos los derechos reservados.</p>
    </footer>
  );
}
