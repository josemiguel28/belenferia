// ─── Tipos ──────────────────────────────────────────────────────────────────

export type ActivityCategory =
  | "cultural"
  | "religioso"
  | "musical"
  | "deportivo"
  | "tradicional"
  | "desfile"
  | "gastronomico";

// Tipo de estado — preparado para uso futuro (cliente puede computarlo por hora)
export type ActivityStatus = "upcoming" | "active" | "finished";

export interface Activity {
  time: string;         // "4:00 AM", "Todo el día"
  endTime?: string;     // hora de fin, opcional — para futura detección de estado
  title: string;
  location: string;
  category: ActivityCategory;
  image?: string;       // ruta desde /public
  featured?: boolean;   // selección editorial: actividad protagonista del día
  // status?: ActivityStatus; // futuro: se computa client-side por hora actual
}

export interface FeriaDay {
  date: string;         // "2026-10-05"
  dayLabel: string;     // "Lunes 05"
  dayName: string;      // "Lunes"
  dayNumber: number;    // 5
  activities: Activity[];
}

export interface FeriaInfo {
  name: string;
  shortName: string;
  town: string;
  department: string;
  year: number;
  startDate: string;
  endDate: string;
  totalDays: number;
  patronSaint: string;
  days: FeriaDay[];
}

// ─── Datos reales de la Feria de Belén 2026 ─────────────────────────────────

export const feria: FeriaInfo = {
  name: "Feria Patronal de Belén",
  shortName: "Feria de Belén",
  town: "Belén",
  department: "Lempira, Honduras",
  year: 2026,
  startDate: "2026-10-05",
  endDate: "2026-10-11",
  totalDays: 7,
  patronSaint: "Nuestra Señora de Belén",
  days: [
    {
      date: "2026-10-05",
      dayLabel: "Lunes 05",
      dayName: "Lunes",
      dayNumber: 5,
      activities: [
        {
          time: "4:00 AM",
          title: "Alborada",
          location: "Plaza Municipal",
          category: "cultural",
        },
        {
          time: "2:00 PM",
          title: "Inauguración de Feria con Desfile Carnaval",
          location: "Calles del pueblo",
          category: "desfile",
        },
        {
          time: "6:00 PM",
          title: "Presentación de la Banda Sinfónica de las Fuerzas Armadas",
          location: "Plaza Municipal",
          category: "musical",
          featured: true,
        },
        {
          time: "10:00 PM",
          title: "Fuegos Artificiales al Cierre del Evento",
          location: "Plaza Municipal",
          category: "cultural",
        },
      ],
    },
    {
      date: "2026-10-06",
      dayLabel: "Martes 06",
      dayName: "Martes",
      dayNumber: 6,
      activities: [
        {
          time: "6:30 AM",
          title: "Belén Run 2026 — Corre, Vive y Celebra",
          location: "Calles del pueblo",
          category: "deportivo",
        },
        {
          time: "Todo el día",
          title: "Muralismo",
          location: "Casas del pueblo",
          category: "cultural",
        },
        {
          time: "8:00 AM",
          title: 'Belén en Ritmo "Zumba Fest 2026"',
          location: "Cancha Municipal",
          category: "deportivo",
        },
        {
          time: "9:00 AM",
          title: "Viviendo Nuestras Tradiciones con Pintura y Juegos Tradicionales",
          location: "Parque Central",
          category: "tradicional",
        },
        {
          time: "6:00 PM",
          title: "Celebración Santa Misa",
          location: "Iglesia de Belén",
          category: "religioso",
        },
        {
          time: "7:00 PM",
          title: "Concurso de Coros",
          location: "Plaza Municipal",
          category: "musical",
          featured: true,
        },
      ],
    },
    {
      date: "2026-10-07",
      dayLabel: "Miércoles 07",
      dayName: "Miércoles",
      dayNumber: 7,
      activities: [
        {
          time: "Todo el día",
          title: "Muralismo",
          location: "Casas del pueblo",
          category: "cultural",
        },
        {
          time: "9:00 AM",
          title: "Celebración Santa Misa con Banda de Camásca, Intibucá",
          location: "Iglesia de Belén",
          category: "religioso",
          featured: true,
        },
        {
          time: "2:00 PM",
          title: "Tarde con Café",
          location: "Plaza Municipal",
          category: "cultural",
        },
        {
          time: "4:00 PM",
          title: "Competencia de Disfraces de Mascotas (Perros)",
          location: "Parque Central",
          category: "tradicional",
        },
      ],
    },
    {
      date: "2026-10-08",
      dayLabel: "Jueves 08",
      dayName: "Jueves",
      dayNumber: 8,
      activities: [
        {
          time: "9:00 AM",
          title: "Competencia Tiro al Blanco",
          location: "Campo Deportivo",
          category: "deportivo",
        },
        {
          time: "2:00 PM",
          title: "Carrera de Cintas en Moto",
          location: "Carretera principal",
          category: "tradicional",
          featured: true,
        },
        {
          time: "7:00 PM",
          title: 'Karaoke Fest 2026 "Noche de Estrellas"',
          location: "Plaza Municipal",
          category: "musical",
        },
      ],
    },
    {
      date: "2026-10-09",
      dayLabel: "Viernes 09",
      dayName: "Viernes",
      dayNumber: 9,
      activities: [
        {
          time: "9:00 AM",
          title: "Desfile de Cuadrangular / Fútbol",
          location: "Calles del pueblo",
          category: "deportivo",
        },
        {
          time: "2:00 PM",
          title: "Inauguración de Exposición de Ganado",
          location: "Recinto Ferial",
          category: "tradicional",
        },
        {
          time: "6:00 PM",
          title: "Concurso de Comelón y Caguamazo",
          location: "Plaza Municipal",
          category: "tradicional",
        },
        {
          time: "7:00 PM",
          title: "Coronación Reina de la Feria Norma I",
          location: "Plaza Municipal",
          category: "cultural",
          featured: true,
        },
        {
          time: "10:00 PM",
          title: "Fiesta Bailable con Discomóvil Impacto JR",
          location: "Plaza Municipal",
          category: "musical",
        },
      ],
    },
    {
      date: "2026-10-10",
      dayLabel: "Sábado 10",
      dayName: "Sábado",
      dayNumber: 10,
      activities: [
        {
          time: "9:00 AM",
          title: "Final de Cuadrangular / Fútbol",
          location: "Campo Deportivo",
          category: "deportivo",
        },
        {
          time: "1:00 PM",
          title: "Desfile Hípico",
          location: "Calles del pueblo",
          category: "desfile",
          featured: true,
        },
        {
          time: "3:00 PM",
          title: "Gran Rodeo Profesional y Concierto con Poder Norteño",
          location: "Recinto Ferial",
          category: "musical",
        },
      ],
    },
    {
      date: "2026-10-11",
      dayLabel: "Domingo 11",
      dayName: "Domingo",
      dayNumber: 11,
      activities: [
        {
          time: "9:00 AM",
          title: "Feria Gastronómica y Competencia de la Sopa de Gallina India",
          location: "Plaza Municipal",
          category: "gastronomico",
          featured: true,
        },
        {
          time: "9:00 AM",
          title: "Carrera de Cinta a Caballo",
          location: "Calles del pueblo",
          category: "tradicional",
        },
        {
          time: "3:00 PM",
          title: "Pelea de Gallos",
          location: "Galera Municipal",
          category: "tradicional",
        },
        {
          time: "9:00 PM",
          title: "Concierto con Los Traviesos de Olancho",
          location: "Plaza Municipal",
          category: "musical",
        },
        {
          time: "11:00 PM",
          title: "Toro Fuego — Carnaval de Cierre",
          location: "Plaza Municipal",
          category: "cultural",
        },
      ],
    },
  ],
};

// ─── Tipos de lugar ──────────────────────────────────────────────────────────

export interface Place {
  name: string;
  tagline: string;
  description: string;
  hours?: string;
  address: string;
  image: string;
  mapsUrl?: string;
}

// ─── Lugares del pueblo ──────────────────────────────────────────────────────

export const restaurants: Place[] = [
  {
    name: "La Ermita",
    tagline: "Comida típica hondureña",
    description: "Baleadas, platos del día y frescos naturales en el corazón del pueblo.",
    hours: "7:00 AM – 9:00 PM",
    address: "Calle Principal, frente al Parque",
    image: "/images/laermita.avif",
    mapsUrl: "https://maps.google.com",
  },
  {
    name: "Comedor Lesly",
    tagline: "Cocina casera de siempre",
    description: "Sopas, antojitos y desayunos hechos con amor. El sabor de casa.",
    hours: "6:00 AM – 8:00 PM",
    address: "Barrio El Centro, una cuadra del mercado",
    image: "/images/laermita.avif",
    mapsUrl: "https://maps.google.com",
  },
];

export const cafes: Place[] = [
  {
    name: "El Portal de Bélen Café",
    tagline: "Café de altura local",
    description: "Café cultivado en las montañas de Belén, pasteles artesanales y buen ambiente.",
    hours: "7:00 AM – 7:00 PM",
    address: "Parque Central",
    image: "/images/elportal.avif",
    mapsUrl: "https://maps.google.com",
  },
];

export const hotels: Place[] = [
  {
    name: "Hotel Posada Bélen",
    tagline: "Cómodo y bien ubicado",
    description: "Habitaciones limpias, wifi y desayuno incluido. A dos cuadras de todo.",
    hours: "Recepción 24h",
    address: "Una cuadra abajo del parque central",
    image: "/images/posadabelen.avif",
    mapsUrl: "https://maps.google.com",
  },
];

export const landmarks: Place[] = [
  {
    name: "Iglesia de Belén",
    tagline: "Patrimonio colonial · Siglo XVIII",
    description: "El corazón espiritual del pueblo. Arquitectura colonial única en la región.",
    address: "Parque Central",
    image: "/images/laermita-lugar.avif",
    mapsUrl: "https://maps.google.com",
  },
];

// ─── Patrocinadores y colaboradores ──────────────────────────────────────────

export interface Sponsor {
  name: string;
  logo: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "Inversiones Garcia Lara",
    logo: "/images/sponsors/i-garcia-lara.avif",
  },
  {
    name: "El Portal",
    logo: "/images/sponsors/el-portal.avif",
  },
  {
    name: "Municipalidad",
    logo: "/images/sponsors/municipalidad.avif",
  },
  {
    name: "Darely Salón",
    logo: "/images/sponsors/darely-salon.avif",
  },
  {
    name: "Wilson Pineda Diputado",
    logo: "/images/sponsors/wilson-pineda.avif",
  },
  {
    name: "Un Gobierno que hace la diferencia",
    logo: "/images/sponsors/gobierno.avif",
  },
  {
    name: "Inversiones Lara",
    logo: "/images/sponsors/i-lara.avif",
  },
  {
    name: "Inversiones Portillo Leiva",
    logo: "/images/sponsors/i-portillo-leiva.avif",
  },
  {
    name: "Creativos Papelería y Más",
    logo: "/images/sponsors/creativos.avif",
  },
  {
    name: "Clínica Dental Dra. Seyla",
    logo: "/images/sponsors/clinica-dental.avif",
  },
  {
    name: "Gasolinera Belen",
    logo: "/images/sponsors/gasolinera.avif",
  },
  {
    name: "LawnCare",
    logo: "/images/sponsors/lawncare.avif",
  },
  {
    name: "Congreso Nacional",
    logo: "/images/sponsors/congreso-nacional.avif",
  },
  {
    name: "La ermita",
    logo: "/images/sponsors/la-ermita.avif",
  },
  {
    name: "Crea Decoraciones",
    logo: "/images/sponsors/crea-decoraciones.avif",
  },
  {
    name: "Motorepuestos Valentina",
    logo: "/images/sponsors/repuesto-valentina.avif",
  },
  {
    name: "Inversiones el profe",
    logo: "/images/sponsors/i-elprofe.avif",
  },
  {
    name: "Comedor Jadismary",
    logo: "/images/sponsors/comedor-jadismary.avif",
  },
  {
    name: "",
    logo: "/images/sponsors/vaneyani.avif",
  },
  {
    name: "Papelería Fernanda",
    logo: "/images/sponsors/papeleria-fernanda.avif",
  },
  {
    name: "Minsi Shop",
    logo: "/images/sponsors/minsi-shop.avif",
  },
  {
    name: "Finca Membreño",
    logo: "/images/sponsors/finca-membreno.avif",
  },
  {
    name: "Inversiones Ponce",
    logo: "/images/sponsors/i-ponce.avif",
  },
  {
    name: "Agente de Viajes Alejandra",
    logo: "/images/sponsors/agente-alejandra.avif",
  },
  {
    name: "Mundo Floral",
    logo: "/images/sponsors/mundo-floral.avif",
  },
  {
    name: "Gobernación de Lempira",
    logo: "/images/sponsors/gobernacion-lempira.avif",
  },
  {
    name: "",
    logo: "/images/sponsors/elparaisotropical.avif",
  },
  {
    name: "",
    logo: "/images/sponsors/blackhorse.avif",
  },
  {
    name: "",
    logo: "/images/sponsors/i-je.avif",
  }, {
    name: "",
    logo: "/images/sponsors/aris-belen.avif",
  }, {
    name: "",
    logo: "/images/sponsors/i-wilman.avif",
  }, {
    name: "",
    logo: "/images/sponsors/i-amaya.avif",
  }, {
    name: "",
    logo: "/images/sponsors/i-jcd.avif",
  }, {
    name: "",
    logo: "/images/sponsors/jefry-hernandez.avif",
  },
  {
    name: "",
    logo: "/images/sponsors/pedro-portillo.avif",
  },
  {
    name: "",
    logo: "/images/sponsors/webtoop.avif",
  },
];

