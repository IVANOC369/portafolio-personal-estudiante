# Portafolio Personal de Estudiante

Este es un proyecto de portafolio personal creado con Next.js y Tailwind CSS.

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (viene con Node.js)

## Instalación

1. Clona este repositorio en tu máquina local:
```bash
git clone <URL-del-repositorio>
```

2. Navega al directorio del proyecto:
```bash
cd nombre-del-proyecto
```

3. Instala las dependencias:
```bash
npm install
```

## Desarrollo Local

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## Tecnologías Utilizadas

- Next.js
- Tailwind CSS
- TypeScript
- Shadcn/ui

## Estructura del Proyecto

```
src/
  ├── app/
  │   ├── layout.tsx    # Layout principal
  │   ├── page.tsx      # Página principal
  │   └── globals.css   # Estilos globales
  │
  ├── components/
  │   ├── Navbar.tsx    # Barra de navegación
  │   └── Footer.tsx    # Pie de página
  │
  └── lib/
      └── utils.ts      # Utilidades
```

## Personalización

Puedes personalizar el contenido editando los siguientes archivos:

- `src/app/page.tsx`: Contenido principal
- `src/components/Navbar.tsx`: Menú de navegación
- `src/components/Footer.tsx`: Pie de página

## Licencia

MIT
