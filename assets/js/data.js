/**
 * SolarAndina - Datos Mockeados
 * Centraliza toda la información que se muestra en el sitio.
 * Editar aquí para personalizar el template.
 * Mercado: Chile (CLP)
 */

const BUSINESS = {
  name: "SolarAndina",
  legalName: "SolarAndina Energía SpA",
  rut: "76.XXX.XXX-X",
  tagline: "Energía solar para un futuro sostenible",
  description:
    "Empresa chilena líder en soluciones de energía solar fotovoltaica para hogares, comercios e industrias. Más de 12 años iluminando Chile con el sol.",
  phone: "+56 9 5555 1234",
  phoneRaw: "+56955551234",
  whatsapp: "+56 9 5555 1234",
  whatsappRaw: "56955551234",
  email: "contacto@solarandina.cl",
  emailComercial: "ventas@solarandina.cl",
  address: "Av. Apoquindo 4712, Of. 1203, Las Condes, Santiago, Chile",
  addressShort: "Av. Apoquindo 4712, Las Condes",
  schedule: {
    weekdays: "Lunes a Viernes · 9:00 a 18:30",
    saturday: "Sábados · 10:00 a 14:00",
    sunday: "Domingos · Cerrado",
  },
  social: {
    facebook: "https://facebook.com/solarandina",
    instagram: "https://instagram.com/solarandina",
    linkedin: "https://linkedin.com/company/solarandina",
    youtube: "https://youtube.com/@solarandina",
    twitter: "https://twitter.com/solarandina",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.123456789!2d-70.5723456!3d-33.4123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a1e1f1f1f1%3A0x123456789abcdef!2sAv.%20Apoquindo%204712%2C%20Las%20Condes!5e0!3m2!1ses!2scl!4v1700000000000",
};

/* =====================================================
   Stats principales
   ===================================================== */
const STATS = [
  { value: 12, suffix: "+", label: "Años de experiencia" },
  { value: 850, suffix: "+", label: "Sistemas instalados" },
  { value: 4.2, suffix: " MWh", label: "Energía generada mensual" },
  { value: 1200, suffix: " ton", label: "CO₂ evitado al año" },
];

/* =====================================================
   Servicios (8)
   ===================================================== */
const SERVICES = [
  {
    id: "residencial",
    icon: "home",
    title: "Instalación Residencial",
    description:
      "Sistemas fotovoltaicos On-Grid para hogares. Ahorrá hasta un 90% en tu cuenta de luz y vendé excedentes a la red.",
    features: [
      "Paneles de alta eficiencia",
      "Inversores certificados SEC",
      "Medidor bidireccional",
      "Tramitación Net Metering",
    ],
    priceFrom: 2490000,
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  },
  {
    id: "comercial",
    icon: "building",
    title: "Instalación Comercial e Industrial",
    description:
      "Soluciones a medida para empresas, fábricas y centros comerciales. Reducción significativa de costos operativos.",
    features: [
      "Sistemas hasta 500 kWp",
      "Monitoreo en tiempo real",
      "Estudio de retorno garantizado",
      "Financiamiento a medida",
    ],
    priceFrom: 8900000,
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80",
  },
  {
    id: "offgrid",
    icon: "battery",
    title: "Sistemas Off-Grid y Híbridos",
    description:
      "Soluciones autónomas con baterías de litio. Ideal para zonas remotas o respaldo ante cortes de energía.",
    features: [
      "Baterías de litio LiFePO4",
      "Autonomía 24-72 horas",
      "Generador de respaldo",
      "Gestión inteligente",
    ],
    priceFrom: 4900000,
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80",
  },
  {
    id: "mantenimiento",
    icon: "wrench",
    title: "Mantenimiento y Limpieza",
    description:
      "Servicio preventivo y correctivo para mantener tu sistema funcionando al máximo rendimiento durante 25+ años.",
    features: [
      "Limpieza profesional de paneles",
      "Termografía infrarroja",
      "Reporte anual de rendimiento",
      "Repuestos originales",
    ],
    priceFrom: 89000,
    category: "Servicio",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&q=80",
  },
  {
    id: "bombeo",
    icon: "droplet",
    title: "Bombeo Solar",
    description:
      "Sistemas de bombeo de agua alimentados por energía solar. Solución ideal para agricultura y zonas rurales.",
    features: [
      "Bombas DC sin inversor",
      "Hasta 200 metros de profundidad",
      "Sin costos de electricidad",
      "Riego automatizado",
    ],
    priceFrom: 1890000,
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80",
  },
  {
    id: "termotanque",
    icon: "thermometer",
    title: "Termotanques Solares",
    description:
      "Calentadores solares de agua para uso doméstico y comercial. Hasta 80% de ahorro en gas.",
    features: [
      "Tanques de 150 a 600 litros",
      "Resistencia eléctrica de apoyo",
      "Instalación en 1 día",
      "Garantía 10 años",
    ],
    priceFrom: 449000,
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80",
  },
  {
    id: "auditoria",
    icon: "clipboard",
    title: "Auditoría Energética",
    description:
      "Análisis completo de tu consumo eléctrico y diseño del sistema óptimo con estudio de retorno de inversión.",
    features: [
      "Análisis de cuentas de luz",
      "Estudio de sombras",
      "Simulación de producción",
      "ROI garantizado por escrito",
    ],
    priceFrom: 0,
    category: "Servicio",
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=600&q=80",
  },
  {
    id: "monitoreo",
    icon: "monitor",
    title: "Monitoreo Remoto 24/7",
    description:
      "Plataforma propia para supervisar tu sistema desde cualquier dispositivo. Alertas instantáneas.",
    features: [
      "App iOS y Android",
      "Dashboard en tiempo real",
      "Alertas por fallas",
      "Histórico 5 años",
    ],
    priceFrom: 14900,
    category: "Servicio",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
];

/* =====================================================
   Proceso de instalación (4 pasos)
   ===================================================== */
const PROCESS = [
  {
    step: 1,
    title: "Estudio y Asesoría",
    description:
      "Visita técnica gratuita. Evaluamos consumo, sombras, orientación de tejado y diseñamos tu sistema a medida.",
    icon: "clipboard",
  },
  {
    step: 2,
    title: "Cotización y Trámites",
    description:
      "Te entregamos cotización cerrada con ROI proyectado. Tramitamos permisos SEC y Net Metering ante la distribuidora.",
    icon: "file",
  },
  {
    step: 3,
    title: "Instalación Profesional",
    description:
      "Equipo certificado SEC instala tu sistema en 1-3 días según tamaño. Cumplimos todas las normativas vigentes.",
    icon: "wrench",
  },
  {
    step: 4,
    title: "Activación y Soporte",
    description:
      "Conectamos tu sistema a la red, activamos el medidor bidireccional y configuramos el monitoreo remoto.",
    icon: "check",
  },
];

/* =====================================================
   Galería (12 imágenes)
   ===================================================== */
const GALLERY = [
  { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80", title: "Instalación residencial en Lo Barnechea", category: "residencial" },
  { src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&q=80", title: "Mantención de paneles en Vitacura", category: "residencial" },
  { src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80", title: "Planta solar en centro comercial", category: "comercial" },
  { src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80", title: "Parque fotovoltaico industrial", category: "industrial" },
  { src: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80", title: "Termotanques solares", category: "residencial" },
  { src: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200&q=80", title: "Sistema de bombeo agrícola", category: "industrial" },
  { src: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1200&q=80", title: "Auditoría energética", category: "comercial" },
  { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80", title: "Monitoreo remoto desde smartphone", category: "comercial" },
  { src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80", title: "Casa con paneles en Pirque", category: "residencial" },
  { src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80", title: "Bodega industrial con paneles", category: "industrial" },
  { src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&q=80", title: "Estudio técnico en terreno", category: "comercial" },
  { src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80", title: "Tejado residencial con sistema On-Grid", category: "residencial" },
];

/* =====================================================
   Categorías para filtro de galería
   ===================================================== */
const GALLERY_CATEGORIES = [
  { id: "all", label: "Todos" },
  { id: "residencial", label: "Residencial" },
  { id: "comercial", label: "Comercial" },
  { id: "industrial", label: "Industrial" },
];

/* =====================================================
   Planes / Precios (3)
   ===================================================== */
const PLANS = [
  {
    id: "hogar",
    name: "Plan Hogar",
    tagline: "Ideal para viviendas",
    price: 2490000,
    priceOld: 2890000,
    kWp: "3-5 kWp",
    panels: "8-12 paneles",
    production: "450-750 kWh/mes",
    savings: "Ahorrá hasta $80.000/mes",
    highlighted: false,
    features: [
      "Estudio técnico gratuito",
      "Paneles monocristalinos 550W",
      "Inversor On-Grid certificado SEC",
      "Medidor bidireccional",
      "Tramitación Net Metering",
      "Monitoreo por app",
      "Garantía paneles 25 años",
      "Garantía inversor 10 años",
      "Instalación 1-2 días",
    ],
    notIncluded: ["Baterías", "Respaldo ante cortes"],
  },
  {
    id: "pyme",
    name: "Plan Pyme",
    tagline: "Para comercios y oficinas",
    price: 8900000,
    priceOld: 10500000,
    kWp: "15-25 kWp",
    panels: "28-46 paneles",
    production: "2.250-3.750 kWh/mes",
    savings: "Ahorrá hasta $450.000/mes",
    highlighted: true,
    badge: "Más solicitado",
    features: [
      "Todo lo del Plan Hogar",
      "Paneles de alto rendimiento 600W",
      "Inversor trifásico",
      "Estructura anti-vibración",
      "Monitoreo avanzado 24/7",
      "Termografía infrarroja anual",
      "Mantenimiento preventivo anual",
      "Asesoría financiera",
      "ROI garantizado a 5 años",
    ],
    notIncluded: ["Baterías industriales"],
  },
  {
    id: "industria",
    name: "Plan Industria",
    tagline: "Solución a gran escala",
    price: 28900000,
    priceOld: null,
    kWp: "50-500 kWp",
    panels: "92+ paneles",
    production: "7.500+ kWh/mes",
    savings: "Ahorrá desde $900.000/mes",
    highlighted: false,
    features: [
      "Diseño y ingeniería a medida",
      "Paneles premium bifaciales",
      "Inversores string o central",
      "Subestación propia (si aplica)",
      "Sistema SCADA de monitoreo",
      "Operación y mantenimiento 24/7",
      "Financiamiento hasta 7 años",
      "Garantía rendimiento 25 años",
      "Línea de soporte dedicada",
    ],
    notIncluded: [],
  },
];

/* =====================================================
   Cursos y Charlas
   ===================================================== */
const COURSES = [
  {
    id: "intro",
    title: "Introducción a la Energía Solar",
    type: "Curso",
    level: "Principiante",
    duration: "8 horas",
    price: 89000,
    priceOld: 119000,
    modality: "Online en vivo",
    nextDate: "2026-03-15",
    description: "Aprendé los principios básicos de la energía solar fotovoltaica, cómo funcionan los paneles y si es conveniente para tu hogar.",
    includes: [
      "Material digital descargable",
      "Acceso a grabación por 6 meses",
      "Certificado digital",
      "Sesión de preguntas en vivo",
    ],
  },
  {
    id: "dimensionamiento",
    title: "Dimensionamiento de Sistemas Solares",
    type: "Curso",
    level: "Intermedio",
    duration: "16 horas",
    price: 179000,
    priceOld: 219000,
    modality: "Online + Práctica",
    nextDate: "2026-04-05",
    description: "Curso técnico para profesionales. Aprendé a calcular y diseñar sistemas fotovoltaicos según el estándar SEC.",
    includes: [
      "Software de simulación PVsyst",
      "Plantillas Excel profesionales",
      "Material descargable",
      "Certificado SEC-validado",
      "Acceso a comunidad alumni",
    ],
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento Básico de Paneles",
    type: "Curso",
    level: "Básico",
    duration: "4 horas",
    price: 49000,
    priceOld: 69000,
    modality: "Presencial Santiago",
    nextDate: "2026-03-22",
    description: "Taller práctico en techo: limpieza, inspección visual, conexiones, medición y detección de fallas comunes.",
    includes: [
      "Kit de medición básico",
      "Manual de procedimientos",
      "Certificado",
      "Refrigerio incluido",
    ],
  },
  {
    id: "netmetering",
    title: "Net Metering: Cómo Vender Energía a la Red",
    type: "Charla",
    level: "Todos",
    duration: "1.5 horas",
    price: 0,
    priceOld: null,
    modality: "Online en vivo",
    nextDate: "2026-03-10",
    description: "Charla gratuita sobre la Ley 21.118. Conocé cómo funciona la facturación neta y los requisitos para acceder.",
    includes: [
      "Acceso gratuito",
      "Sesión de preguntas",
      "Grabación disponible 30 días",
    ],
  },
  {
    id: "autoconsumo",
    title: "Autoconsumo y Eficiencia Energética",
    type: "Charla",
    level: "Todos",
    duration: "1 hora",
    price: 0,
    priceOld: null,
    modality: "Online en vivo",
    nextDate: "2026-03-18",
    description: "Tips prácticos para reducir tu consumo eléctrico antes y después de instalar paneles solares.",
    includes: [
      "Acceso gratuito",
      "Lista de verificación descargable",
    ],
  },
];

/* =====================================================
   Horario semanal de clases
   ===================================================== */
const SCHEDULE = [
  { day: "Lunes", items: [
    { time: "19:00 - 20:30", course: "Charla: Net Metering", type: "charla", online: true },
    { time: "20:30 - 21:00", course: "Q&A en vivo", type: "charla", online: true },
  ]},
  { day: "Martes", items: [
    { time: "10:00 - 12:00", course: "Curso Intro (Clase teórica)", type: "curso", online: true },
  ]},
  { day: "Miércoles", items: [
    { time: "10:00 - 12:00", course: "Dimensionamiento (Clase teórica)", type: "curso", online: true },
    { time: "19:00 - 20:00", course: "Charla: Autoconsumo", type: "charla", online: true },
  ]},
  { day: "Jueves", items: [
    { time: "10:00 - 12:00", course: "Curso Intro (Práctica)", type: "curso", online: false },
    { time: "16:00 - 20:00", course: "Mantenimiento (Taller presencial)", type: "curso", online: false },
  ]},
  { day: "Viernes", items: [
    { time: "10:00 - 12:00", course: "Dimensionamiento (Práctica)", type: "curso", online: false },
  ]},
  { day: "Sábado", items: [
    { time: "10:00 - 14:00", course: "Atención comercial / Coordinación", type: "atencion", online: false },
  ]},
];

/* =====================================================
   Equipo (4)
   ===================================================== */
const TEAM = [
  {
    name: "Andrés Vidal",
    position: "Gerente General & Fundador",
    description: "Ingeniero Civil Electricista PUC. 15 años en ERNC. Certificación SEC clase A.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Carolina Soto",
    position: "Directora Técnica",
    description: "Ingeniera Eléctrica Universidad de Chile. Especialista en sistemas On-Grid y Off-Grid.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Felipe Morales",
    position: "Jefe de Instalaciones",
    description: "Técnico certificado SEC. Más de 600 instalaciones residenciales supervisadas.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Valentina Rojas",
    position: "Jefa Comercial",
    description: "Ingeniera Comercial. Especialista en financiamiento y modelos Net Metering.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

/* =====================================================
   Certificaciones / Aliados
   ===================================================== */
const CERTIFICATIONS = [
  { name: "SEC", description: "Instaladores autorizados" },
  { name: "ISO 9001", description: "Calidad certificada" },
  { name: "ISO 14001", description: "Gestión ambiental" },
  { name: "OHSAS 18001", description: "Seguridad ocupacional" },
  { name: "ACERA", description: "Asociación Chilena de ERNC" },
  { name: "CNE", description: "Comisión Nacional de Energía" },
];

/* =====================================================
   Testimonios
   ===================================================== */
const TESTIMONIALS = [
  {
    name: "María José Pérez",
    location: "Las Condes, Santiago",
    rating: 5,
    comment: "Excelente servicio. Me instalaron 8 paneles en 2 días. Mi cuenta de luz bajó de $180.000 a $12.000. El equipo profesional y muy ordenado.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Roberto Sánchez",
    location: "Viña del Mar",
    rating: 5,
    comment: "Empresa seria y comprometida. Resolvieron todos los trámites SEC. Después de 1 año mi sistema ha producido 18% más de lo proyectado.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "Claudia Mendoza",
    location: "Maipú, Santiago",
    rating: 5,
    comment: "El curso de dimensionamiento me cambió la vida profesional. Ahora trabajo como proyectista solar certificado gracias a SolarAndina.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "Patricio Vargas",
    location: "Concepción",
    rating: 5,
    comment: "Llevamos 4 años con ellos manteniendo nuestro sistema industrial. Cero fallas, atención rápida. Totalmente recomendados.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Francisca León",
    location: "Antofagasta",
    rating: 5,
    comment: "Mi sistema Off-Grid con baterías lleva 2 años funcionando perfecto. Nunca más me quedé sin luz durante los cortes del norte.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
];

/* =====================================================
   FAQ global (5-6 preguntas)
   ===================================================== */
const FAQ = [
  {
    q: "¿Cuánto cuesta instalar paneles solares en Chile?",
    a: "El costo varía según el tamaño del sistema. Para un hogar promedio (3-5 kWp) la inversión parte desde $2.490.000. Una casa con consumo medio recupera la inversión en 4-6 años gracias al ahorro en la cuenta de luz.",
  },
  {
    q: "¿Cuánto tiempo dura la instalación?",
    a: "Una instalación residencial típica (8-12 paneles) se completa en 1 a 2 días. Sistemas comerciales pueden demorar entre 3 y 10 días. Trabajamos con plazos fijos y por escrito.",
  },
  {
    q: "¿Cómo funciona el Net Metering en Chile?",
    a: "La Ley 21.118 permite que la energía que no consumís y vuelves a la red sea abonada en tu cuenta de luz. Nosotros tramitamos todo el proceso ante la distribuidora y SEC sin costo adicional.",
  },
  {
    q: "¿Qué pasa durante la noche o los días nublados?",
    a: "Tu sistema On-Grid toma energía de la red cuando no hay sol. Con sistemas Off-Grid con baterías, podés tener autonomía de 24-72 horas. Diseñamos la solución según tus necesidades.",
  },
  {
    q: "¿Qué mantenimiento requieren los paneles?",
    a: "Recomendamos una limpieza profesional cada 6-12 meses y una inspección técnica anual. Es un servicio que ofrecemos desde $89.000. Con mantenimiento adecuado, los paneles duran más de 25 años.",
  },
  {
    q: "¿Ofrecen financiamiento?",
    a: "Sí. Trabajamos con bancos y financieras que otorgan créditos verdes con tasas preferenciales. También aceptamos pago con tarjetas, transferencia y Webpay. Plazos hasta 60 meses.",
  },
];

/* =====================================================
   Valores
   ===================================================== */
const VALUES = [
  { icon: "leaf", title: "Sostenibilidad", description: "Cada kWh solar es un paso hacia un planeta más limpio." },
  { icon: "shield", title: "Compromiso", description: "Garantía real por escrito, soporte de por vida en todos nuestros proyectos." },
  { icon: "users", title: "Comunidad", description: "Capacitamos y educamos para multiplicar el impacto de la energía limpia." },
  { icon: "lightbulb", title: "Innovación", description: "Tecnología de vanguardia, materiales premium y diseño personalizado." },
];

/* =====================================================
   Iconos SVG disponibles (lucide-style)
   ===================================================== */
const ICONS = {
  sun: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  building: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>',
  battery: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="16" height="10" rx="2"/><line x1="22" x2="22" y1="11" y2="13"/><line x1="6" x2="6" y1="11" y2="13"/><line x1="10" x2="10" y1="11" y2="13"/><line x1="14" x2="14" y1="11" y2="13"/></svg>',
  wrench: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  droplet: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>',
  thermometer: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>',
  clipboard: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>',
  monitor: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>',
  file: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  leaf: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  lightbulb: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2v.3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V16.7c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  map: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  zap: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>',
  whatsapp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>',
  arrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>',
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.95 9-10z"/></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
  linkedin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>',
  youtube: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  twitter: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  trending: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  award: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
};

/* =====================================================
   Helpers
   ===================================================== */
const fmtCLP = (n) => {
  if (n === 0) return "Gratis";
  return "$" + n.toLocaleString("es-CL");
};

const fmtDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" });
};

const icon = (name) => ICONS[name] || ICONS.sun;