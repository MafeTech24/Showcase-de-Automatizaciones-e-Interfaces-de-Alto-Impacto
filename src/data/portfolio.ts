// Portfolio Data - Data-driven structure for easy maintenance

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  contribution: string;
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  images?: string[];
  isPlaceholder?: boolean;
  metrics?: string;
}

export interface Skill {
  name: string;
  category: 'tech' | 'ia' | 'tools' | 'soft';
}

// export interface Education {
//   title: string;
//   institution: string;
//   year: string;
//   category: 'degree' | 'course' | 'ia' | 'diploma';
// }

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const personalInfo = {
  name: "María Fernanda Moreno",
  role: "Frontend Developer (React) & Automation Developer | n8n | AI",
  subtitle: "Construyo interfaces modernas con React y sistemas de automatización con IA que transforman procesos manuales en soluciones automáticas, escalables y listas para producción.",
  initials: "MF",
};


export const aboutText = `Soy Automation Developer especializada en el desarrollo de sistemas backend impulsados por Inteligencia Artificial para automatizar procesos empresariales.

Diseño e implemento workflows con n8n, integrando APIs, Google Workspace y modelos de IA como Gemini para procesar documentos, eliminar tareas manuales y crear sistemas autónomos escalables.

También desarrollo aplicaciones web modernas con React y TypeScript, lo que me permite construir soluciones completas: desde la automatización backend hasta las interfaces necesarias para visualización, operación y escalabilidad.

Mi experiencia en Customer Experience y Marketing Digital me permite crear soluciones técnicas alineadas con necesidades reales de negocio, enfocadas en eficiencia operativa y experiencia de usuario.

Actualmente me especializo en:

• Workflow automation con n8n
• Integración de APIs y sistemas
• Document processing con IA
• Desarrollo frontend con React y TypeScript
• Backend automation workflows`;

export const softSkills = [
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Empatía y motivación",
  "Eficiencia y organización",
  "Resolución de problemas",
];

export const techSkills: Skill[] = [
  { name: "JavaScript", category: "tech" },
  { name: "React.js", category: "tech" },
  { name: "Node.js", category: "tech" },
  { name: "Express", category: "tech" },
  { name: "MongoDB", category: "tech" },
  { name: "Vite", category: "tech" },
  { name: "JWT", category: "tech" },
  { name: "APIs REST", category: "tech" },
  { name: "Cloudinary", category: "tech" },
  { name: "n8n", category: "ia" },
  { name: "Gemini", category: "ia" },
  { name: "GPT", category: "ia" },
  { name: "Prompt Engineering", category: "ia" },
  { name: "IA Multimodal", category: "ia" },
  { name: "GitHub", category: "tools" },
  { name: "Google Workspace", category: "tools" },
  { name: "Trello", category: "tools" },
  { name: "Canva Pro", category: "tools" },
  { name: "UX/UI básico", category: "soft" },
  { name: "Diseño asistido por IA", category: "ia" },
  { name: "Generación de imágenes y video con IA", category: "ia" },
  { name: "Firebase", category: "tech" },
  { name: "Supabase", category: "tech" },
  { name: "SQL", category: "tech" },
  { name: "Lovable", category: "ia" },
  { name: "Google Studio AI", category: "ia" },
  { name: "Google Antigravity", category: "ia" }
];

//export const education: Education[] = [
  // Degrees
  /*{
    title: "Licenciatura en Producción de Bio-Imágenes",
    institution: "Universidad Nacional de Córdoba",
    year: "2004",
    category: "degree",
  },*/
  /*{
    title: "Carrera Fullstack (MERN)",
    institution: "Coderhouse",
    year: "2024 – Actualidad",
    category: "degree",
  },
   {
    title: "Marketing Digital, Community Manager y Redes Sociales",
    institution: "Coderhouse",
    year: "2025",
    category: "course",
  },
  {
   title: "Diplomatura en E-commerce, Marketing Digital y Redes Sociales",
    institution: "UTN Córdoba",
    year: "2021",
    category: "diploma",
  },
 
  // IA & Automation
  {
    title: "Carrera de AI Automation",
    institution: "Coderhouse",
    year: "Enero 2026",
    category: "ia",
  },
  {
    title: "Curso de Creación de Productos desde Cero con IA (Vibe Coding)",
    institution: "Coderhouse",
    year: "Enero 2026",
    category: "ia",
  },
  {
    title: "Jornadas de Inteligencia Artificial (Vibe Coding y Automatizaciones)",
    institution: "BIG School",
    year: "Enero 2026",
    category: "ia",
  },
  {
    title: "Curso N8N: Crea automatizaciones inteligentes",
    institution: "Oracle Next Education",
    year: "2025-2026",
    category: "ia",
  },
  {
    title: "Curso de RAG y Agentes de IA",
    institution: "Oracle Next Education",
    year: "2025-2026",
    category: "ia",
  },
  
  {
    title: "Inmersión de IA con Google Gemini",
    institution: "Alura Latam",
    year: "2025",
    category: "ia",
  },
  // Diplomas & Courses
 /**  {
   title: "Diplomatura en E-commerce, Marketing Digital y Redes Sociales",
    institution: "UTN Córdoba",
    year: "2021",
    category: "diploma",
  },
  {
    title: "Marketing Digital, Community Manager y Redes Sociales",
    institution: "Coderhouse",
    year: "2025",
    category: "course",
  }, 
];*/

export const experiences: Experience[] = [
  {
    title: "Freelance Web Developer (Frontend)",
    company: "Proyectos Independientes",
    period: "Dic 2024 – Actualidad",
    description: "Desarrollo y mantenimiento de sitios web para clientes. Integración de formularios, analítica y assets. Debugging y documentación funcional.",
  },
  {
    title: "Trabajo independiente – Emprendimiento Propio (Distribución)",
    company: "Emprendimiento Propio",
    period: "2018 – Actualidad",
    description: "Gestión integral de operaciones: soporte al cliente, priorización de urgencias, trazabilidad de pedidos, comunicación clara y resolución rápida de problemas.",
  },
  {
    title: "Realización de Estudios de Imágenes Médicas",
    company: "IMC – Servicio de Técnicas No Invasivas",
    period: "2012 – 2018",
    description: "Trato directo, soporte y contención a pacientes. Gestión y coordinación de prácticas médicas y turnos.",
  },
  {
    title: "Atención al Cliente - Call Center Inbound",
    company: "Sur Contact Center (Claro *611) · Allus (Telefónica 112) · SOS Asistencia",
    period: "2007 – 2012",
    description: "Gestión integral de consultas y reclamos, brindando soluciones efectivas. Registro y seguimiento en sistemas de gestión.",
  },
];

export const projects: Project[] = [ 
{
  id: "leadflow-ai-n8n",

  title: "LeadFlow AI — Pipeline de Clasificación Inteligente de Leads con n8n y Gemini AI",

  problem:
    "La clasificación manual de leads comerciales consume tiempo del equipo de ventas y genera demoras en el seguimiento de oportunidades urgentes. Sin automatización, los leads calientes pueden perderse entre decenas de consultas sin priorización.",

  solution:
    "Desarrollo de un pipeline de automatización utilizando n8n con arquitectura modular de sub-workflows que captura leads vía webhook, valida y normaliza el input, clasifica automáticamente cada consulta con Gemini AI asignando un score del 1 al 10 y categoría hot/warm/cold, persiste los resultados en Google Sheets para trazabilidad completa y envía alertas instantáneas por email cuando detecta un lead caliente.",

  stack: [
    "n8n",
    "JavaScript",
    "Gemini AI",
    "Google Sheets API",
    "Gmail API",
    "Webhooks",
    "REST APIs",
    "Workflow Automation",
    "Lead Classification",
    "AI Integration",
    "Modular Architecture",
    "Production Automation"
  ],

  contribution:
    "• Diseño de arquitectura modular con 3 sub-workflows reutilizables e independientes\n" +
    "• Implementación de validación y normalización de input con detección de campos faltantes\n" +
    "• Integración con Gemini 2.0 Flash para clasificación estructurada de leads con schema forzado\n" +
    "• Desarrollo de lógica de parsing y limpieza de respuestas IA en JavaScript\n" +
    "• Persistencia automática en Google Sheets con trazabilidad completa por execution_id\n" +
    "• Sistema de alertas por Gmail para leads con categoría HOT\n" +
    "• Pipeline probado end-to-end con datos reales en n8n Cloud\n" +
    "• Documentación profesional con README, .env.example y setup en 5 minutos\n" +
    "• Publicación en GitHub con workflows limpios sin credenciales expuestas",

  image: "leadFlowAI.jpg",

  repoUrl: "https://github.com/MafeTech24/LeadFlow-AI",
},
{
  id: "ai-email-document-intelligence-n8n",

  title: "AI Document Intelligence Pipeline — Automatización End-to-End de Documentos desde Email con OCR e IA",

  problem:
    "El procesamiento manual de facturas y documentos administrativos consume tiempo, es propenso a errores y limita la escalabilidad operativa. Las empresas necesitan automatizar la captura, análisis y registro de documentos recibidos por email sin intervención humana.",

  solution:
    "Desarrollo de un pipeline de Document Intelligence utilizando n8n que monitorea emails entrantes en tiempo real, detecta adjuntos automáticamente, extrae texto mediante OCR, analiza el contenido con inteligencia artificial y registra los datos estructurados en Google Sheets, almacenando además los archivos originales en Google Drive. El sistema incluye clasificación automática, manejo de errores y trazabilidad completa para entornos productivos.",

  stack: [
    "n8n",
    "JavaScript",
    "Gmail API",
    "Google Sheets API",
    "Google Drive API",
    "OCR Integration",
    "AI Integration",
    "Workflow Automation",
    "Document Intelligence",
    "Production Automation",
    "Email Automation",
    "API Integration"
  ],

  contribution:
    "• Diseño e implementación de arquitectura completa de Document Intelligence automatizado\n" +
    "• Integración con Gmail API para captura automática de documentos entrantes\n" +
    "• Implementación de extracción de texto mediante OCR para PDF e imágenes\n" +
    "• Integración de inteligencia artificial para análisis y estructuración de datos\n" +
    "• Desarrollo de lógica de clasificación automática mediante nodos Switch\n" +
    "• Persistencia estructurada de datos en Google Sheets para auditoría\n" +
    "• Implementación de almacenamiento automático en Google Drive\n" +
    "• Desarrollo de manejo de errores y fallback para archivos inválidos\n" +
    "• Arquitectura reusable preparada para deployment en producción\n" +
    "• Documentación profesional y publicación en GitHub",

  image: "aiEmailProcessing.jpg",

  repoUrl:
    "https://github.com/MafeTech24/ai-email-document-processing-n8n",
},
{
  id: "production-grade-error-handling-n8n",

  title: "Sistema Global de Manejo de Errores y Alertas en Tiempo Real para Automatizaciones",

  problem:
    "Las automatizaciones suelen fallar en silencio, generando pérdida de datos, interrupciones operativas y falta de visibilidad. Sin un sistema centralizado de monitoreo, los errores pueden pasar desapercibidos durante horas o días, afectando la confiabilidad de procesos críticos.",

  solution:
    "Desarrollo de un sistema global de manejo de errores utilizando n8n que captura automáticamente cualquier fallo en workflows, normaliza los datos del error, los registra en Google Sheets para auditoría persistente y envía alertas en tiempo real vía email. Esta arquitectura permite monitoreo continuo, trazabilidad completa y mayor confiabilidad en automatizaciones productivas.",

  stack: [
    "n8n",
    "JavaScript",
    "Google Sheets API",
    "Gmail API",
    "Workflow Automation",
    "Error Monitoring",
    "Automation Architecture",
    "Production Automation",
    "Reliability Engineering",
    "Observability"
  ],

  contribution:
    "• Diseño e implementación de arquitectura global de manejo de errores reutilizable\n" +
    "• Implementación de Error Trigger para captura automática de fallos en tiempo real\n" +
    "• Desarrollo de lógica de normalización de errores en JavaScript\n" +
    "• Persistencia de logs en Google Sheets para auditoría completa\n" +
    "• Integración de sistema de alertas automáticas vía Gmail\n" +
    "• Configuración segura mediante variables de entorno\n" +
    "• Arquitectura reusable para cualquier workflow\n" +
    "• Documentación profesional y publicación en GitHub",

  image: "errorHandler.jpg",

  repoUrl:
    "https://github.com/MafeTech24/production-grade-error-handling-n8n",
},
{
  id: "gemini-document-processing-pipeline",

  title: "Sistema Backend de Procesamiento Documental con Gemini AI, Supabase y Confidence Scoring",

  problem:
    "La recepción de documentos desde múltiples sistemas requiere validación, normalización y almacenamiento confiable. Sin un pipeline automatizado, los datos pueden perderse, duplicarse o procesarse incorrectamente.",

  solution:
    "Desarrollo de un pipeline backend utilizando n8n que recibe documentos vía webhook, extrae datos estructurados mediante Gemini AI, calcula un puntaje de confianza automático, registra los resultados en Supabase y genera dashboards en Google Sheets para monitoreo y auditoría en tiempo real.",

  stack: [
    "n8n",
    "Gemini AI",
    "Supabase",
    "Google Sheets API",
    "JavaScript",
    "REST APIs",
    "Confidence Scoring",
    "Workflow Automation",
    "Document Processing",
    "Backend Architecture",
    "API Integration"
  ],

  contribution:
    "• Diseño de arquitectura backend API-First\n" +
    "• Integración con Gemini AI para extracción inteligente de datos\n" +
    "• Implementación de confidence scoring automático\n" +
    "• Persistencia estructurada en Supabase\n" +
    "• Desarrollo de lógica backend en JavaScript\n" +
    "• Implementación de dashboards en Google Sheets\n" +
    "• Pipeline reusable listo para producción",

  image: "7.flujoExitoso.jpg",

  repoUrl:
    "https://github.com/MafeTech24/n8n-procesamientoDocsEnd2End",
},
{
  id: "chatbot-furnarius",
  title: "Asistente Inteligente de CX",
  problem: "Falta de respuesta inmediata a consultas complejas de ambientación y mobiliario, afectando la conversión de clientes potenciales.",
  solution: "Flujo de IA conversacional que procesa entradas de audio y texto, automatizando la calificación de leads y la respuesta personalizada mediante modelos de lenguaje avanzados.",
  stack: ["n8n", "Webhooks", "IA / LLM", "HTTP Request", "WhatsApp API"],
  contribution: "• Diseño de flujo lógico para el procesamiento de archivos de audio.\n• Implementación de nodos de decisión (Switch) para rutas de atención.\n• Integración de agentes de IA para respuestas naturales y contextuales.\n• Optimización de la experiencia del usuario (CX) en el canal de contacto.",
  image: "chatbotFurnarius.jpg", 
},
{
  id: "chatbot-llm-oracle",
  title: "Arquitectura de Chatbot con Lógica de Datos Asíncrona",
  problem: "Dificultad de los sistemas tradicionales para gestionar consultas complejas que requieren tiempos de procesamiento variables sin bloquear la experiencia del usuario.",
  solution: "Desarrollo de un motor de consultas inteligente que conecta con LLMs de última generación. Implementa nodos de espera y división de datos para garantizar respuestas precisas y fluidas en cualquier volumen de demanda.",
  stack: ["n8n", "LLM Integration", "Advanced Logic Nodes", "JSON Manipulation"],
  contribution: "• Desarrollo de una interfaz de comunicación fluida con agentes de IA.\n• Implementación de lógica de 'Split Out' para descomponer consultas complejas en tareas procesables.\n• Gestión de latencia mediante nodos de espera controlada para estabilidad total.\n• Arquitectura certificada bajo estándares de Oracle Next Education.",
  image: "conexionLLMS.jpg",
},
{
  id: "patitas-felices-grooming-web-app",

  title: "Plataforma Web de Grooming con Sistema de Turnos e Integración WhatsApp",

  problem:
    "Las peluquerías caninas suelen gestionar turnos manualmente por WhatsApp o teléfono, lo que genera pérdida de información, consultas incompletas y procesos operativos ineficientes. Además, muchas carecen de una presencia digital profesional que transmita confianza y permita mostrar resultados de forma clara para atraer nuevos clientes.",

  solution:
    "Aplicación web profesional desarrollada en React + TypeScript que digitaliza el proceso de reserva de turnos mediante un sistema estructurado de captura de datos de la mascota y generación automática de mensajes para WhatsApp. Incluye galería interactiva de transformaciones, diseño optimizado para conversión y arquitectura modular orientada a escalabilidad y experiencia de usuario.",

  stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion","Shadcn/UI", "Radix UI", "WhatsApp Deep Linking", "Responsive Design", "Component Architecture"],

  contribution:
    "• Desarrollo completo de la aplicación frontend utilizando React + TypeScript con arquitectura basada en componentes reutilizables\n" +
    "• Implementación de sistema de reserva inteligente con captura estructurada de datos de la mascota (raza, peso, estado de salud, comportamiento)\n" +
    "• Integración con WhatsApp mediante generación automática de mensajes formateados para facilitar la conversión de clientes\n" +
    "• Desarrollo de galería interactiva 'Antes y Después' con lógica dinámica para mejorar la visualización de resultados\n" +
    "• Implementación de interfaz responsive mobile-first optimizada para dispositivos móviles\n" +
    "• Uso de Framer Motion y CSS transitions para animaciones avanzadas y mejora de experiencia de usuario\n" +
    "• Construcción de sistema de diseño consistente utilizando Tailwind y componentes Shadcn/UI\n" +
    "• Optimización de performance utilizando Vite como bundler\n" +
    "• Deployment completo en Vercel con integración continua desde GitHub",

  metrics:
    "📱 Diseño 100% responsive | ⚡ Optimización de carga con Vite | 📅 Digitalización del proceso de reservas | 🔗 Integración directa con canal de ventas",

  image: "patitasFelices.jpg",

  repoUrl: "https://github.com/MafeTech24/patitasFelices",

  liveUrl: "https://patitasfelices-spa.vercel.app/"

  // loom: agregar demo después
},
{
  id: "emily-hair-studio-web-app",
  title: "Plataforma Web con Diagnóstico Inteligente e Integración WhatsApp",
  problem:
    "Los salones de belleza suelen depender de WhatsApp para la atención, pero reciben consultas incompletas, sin contexto ni datos estructurados. Esto genera múltiples intercambios innecesarios, pérdida de tiempo operativo y dificulta brindar presupuestos precisos. Además, muchos negocios carecen de una presencia digital profesional optimizada para conversión.",

  solution:
    "Aplicación web profesional desarrollada en React + TypeScript que digitaliza el proceso de pre-consulta mediante un sistema de diagnóstico capilar inteligente. El formulario captura datos estructurados, permite adjuntar imágenes y genera automáticamente un mensaje formateado que se envía por WhatsApp, reduciendo fricción operativa y mejorando la calidad de los leads. La plataforma combina diseño orientado a conversión con arquitectura modular y experiencia de usuario optimizada.",

  stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "WhatsApp Deep Linking", "JavaScript", "Responsive Design", "Component Architecture"],

  contribution:
    "• Diseño e implementación completa de la aplicación frontend utilizando arquitectura basada en componentes reutilizables\n" +
    "• Desarrollo de sistema de diagnóstico interactivo con múltiples inputs, validación y generación dinámica de mensajes\n" +
    "• Integración con WhatsApp mediante deep linking y generación automática de payload estructurado\n" +
    "• Implementación de carga de imágenes desde el cliente como parte del flujo de diagnóstico\n" +
    "• Construcción de interfaz responsive optimizada para mobile-first y conversión de usuarios\n" +
    "• Desarrollo de animaciones avanzadas utilizando Framer Motion para mejorar la experiencia de usuario\n" +
    "• Implementación de sistema de diseño consistente utilizando Tailwind y variables CSS personalizadas\n" +
    "• Optimización de performance y estructura del proyecto utilizando Vite como build tool\n" +
    "• Deployment completo en Vercel con pipeline de integración continua desde GitHub",

  image: "emilyHair.jpg",

  repoUrl: "https://github.com/MafeTech24/emilyHair",

  liveUrl: "https://emilyhairstudio.vercel.app/"

  // loom: agregar demo después
}, 
{
  id: "furnariusEventos",
  title: "Furnarius Eventos — Sitio web institucional (Cliente real- Maqueta)",
  problem: "Empresa del rubro eventos sin presencia digital profesional, lo que limitaba su visibilidad, comunicación de servicios y captación de nuevos clientes.",
  solution: "Experiencia web inmersiva utilizando IA para la generación de prototipos visuales de alta fidelidad. Se logró una comunicación clara de servicios personalizados y una vitrina de proyectos ejecutados.",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub", "Lovable (IA)"],
  contribution: "• Relevamiento estratégico de objetivos de negocio y CX.\n• Uso de IA Generativa para recursos gráficos de alto impacto.\n• Arquitectura de UI orientada a la generación de leads (consultas).\n• Optimización de performance para carga de galerías de alta resolución.",
  liveUrl: "https://furnarius-eventos.vercel.app/",
  //repoUrl: "https://github.com/MafeTech24/furnariusEventos",
  image: "furnarius.jpg",
},
{
  id: "elReydelNorte",
  title: "Amoblamientos El Rey del Norte — Catálogo Digital Estratégico",
  problem: "Falta de un canal centralizado para exhibir stock, lo que generaba procesos de venta lentos y una imagen de marca informal frente a la competencia.",  
  solution: "Desarrollo de un catálogo interactivo optimizado para conversión. Implementación de una interfaz visualmente imponente que organiza productos por categorías, facilitando la decisión de compra del cliente final.",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub", "Lovable (IA)"],
  contribution: "• Consultoría de negocio para definir la jerarquía de productos.\n• Diseño de UI enfocado en la visualización de alta calidad.\n• Estructura escalable para actualización constante de stock.\n• Optimización de velocidad de carga para dispositivos móviles.",
  liveUrl: "https://amoblamientoselreydelnorte.vercel.app/",
  //repoUrl: "https://github.com/ProyectosVibeCoding/elreydelnorte2",
  image: "elReyNorte.jpg",
},
{
  id: "artesaniaVeta",
  title: "Artesanía & Veta — E-commerce de Lujo con IA Integrada",
  problem: "Necesidad de transformar un catálogo estático en una experiencia de compra premium y personalizada que incluya herramientas de asistencia inteligente.",
  solution: "Plataforma e-commerce de alta gama iniciada con Vibe Coding y refinada manualmente. Incluye prototipos de Chatbot inteligente y un Diseñador de muebles asistido por IA (Google AI Studio), demostrando el futuro de la personalización en el segmento de lujo.",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Google AI Studio", "Vercel", "Lovable (IA)"],
  contribution: "• Desarrollo de arquitectura e-commerce y refinamiento manual de lógica de negocio en TypeScript.\n• Diseño e integración de interfaz para Chatbot y Diseñador de muebles asistido por IA.\n• Implementación de la lógica de conexión con Google AI Studio (maquetado para demo pública).\n• Gestión de base de datos con Supabase para administración dinámica de productos.",
  liveUrl: "https://artesaniaveta.vercel.app/",
  //repoUrl: "https://github.com/ProyectosVibeCoding/artesaniaMadera",
  image: "artesani&beta.jpg",
},
{
  id: "pixelymoda",
  title: "Pixel&Moda — E-commerce (Proyecto Final React))",
  problem: "Proyecto académico que requería migrar un e-commerce a React, aplicando buenas prácticas de desarrollo frontend y una arquitectura escalable.",
  solution: "Desarrollo de una aplicación e-commerce en React con enfoque en componentización, reutilización de componentes y manejo de estado, priorizando mantenibilidad y experiencia de usuario. Incluye navegación, catálogo de productos, flujos de interacción y estructura preparada para escalar.",
  stack: ["React", "Vite", "JavaScript", "Bootstrap", "GitHub"],
  contribution: "• Diseño de la arquitectura de componentes. \n• Implementación de routing y navegación. \n• Manejo de estado global para el carrito de compras. \n• Desarrollo de componentes reutilizables. \n• Optimización de rendimiento y experiencia de usuario.",
  liveUrl: "https://pixelymoda.vercel.app/",
  //repoUrl: "https://github.com/MafeTech24/ProyectoFinalMoreno",
  image: "logoPyM.jpg",
},
{
  id: "n8n-reuniones",
  title: "Sistema de Actas e Insights con IA (Google Workspace)",
  problem: "Procesamiento manual de grabaciones de reuniones, resultando en pérdida de información crítica y falta de seguimiento de tareas.",
  solution: "Arquitectura de flujo automatizado que transforma audio en documentos de gestión. Utiliza IA para extraer puntos clave y actualizar tableros Kanban de forma autónoma.",
  stack: ["n8n", "Google Drive", "Google Docs", "Google Sheets", "IA (LLM)"],
  contribution: "• Ingeniería de prompts para la extracción precisa de tareas.\n• Integración de APIs de Google para gestión documental.\n• Diseño de lógica de actualización asíncrona en Sheets.\n• Testing de precisión en transcripción y categorización.",
  //repoUrl: "https://github.com/MafeTech24/n8n-actas-kanban-google-workspace",
  image: "n8n-workflow.jpg",
},  
{
    id: "cristianmartinez",
    title: "Sitio Web Profesional – Abogado Cristian Martínez",
    problem: "El cliente necesitaba presencia web profesional para captar clientes.",
    solution: "Sitio web moderno con todos los medios de Contacto y diseño profesional.",
    stack: ["HTML", "CSS", "JavaScript","bootstrap","Sass","Github", "Vercel"],
    contribution: "Desarrollo completo, relevamiento de necesidades y publicación.",
    liveUrl: "https://cristianmartinez-abogado.vercel.app/",
    image: "cristianMartinez.png",
},
{
    id: "abyco",
    title: "AB&CO — Hub de Servicios Profesionales Integrales",
    problem: "Dispersión en la comunicación de servicios multidisciplinarios, lo que dificultaba que el cliente comprendiera la propuesta de valor integral del estudio.",
    solution: "Diseño de una arquitectura de información estratégica que organiza las áreas (Legal, Contable, Tech) de forma independiente pero cohesiva, reforzando la autoridad del staff.",
    stack: ["HTML", "CSS", "JavaScript", "bootstrap", "Github", "Vercel"],
    contribution: "• Definición de UX estratégica para segmentación de clientes.\n• Diseño de interfaz sobria y profesional acorde al sector corporativo.\n• Integración de formularios inteligentes para pre-calificación de prospectos.\n• Acompañamiento en la estrategia de comunicación y branding digital.",    liveUrl: "https://abyco-asesoriaintegral.vercel.app/index.html#",
    image: "abyco.jpg",
},
{
    id: "silviamariella",
    title: "Sitio Web – Silvia Mariella & José Tomás",
    problem: "Necesidad sitio web para eventos y proyecto personal.",
    solution: "Landing page elegante con diseño personalizado.",
    stack: ["HTML", "CSS", "JavaScript","bootstrap", "Github", "Vercel"],
    contribution: "Diseño, desarrollo y deploy en Vercel.",
    liveUrl: "https://silviamariella-josetomas.vercel.app/",
    image: "silviayJose.jpg",
},      
{
    id: "dulceybella",
    title: "Dulce y Bella - Distribuidora de Perfumes (Proyecto Final JS)",
    problem: "Proyecto académico: crear un e-commerce funcional con JS puro.",
    solution: "Catálogo de productos, carrito de compras y flujo de compra completo.",
    stack: ["JavaScript", "HTML", "bootstrap", "Github", "Vercel"],
    contribution: "Desarrollo completo del frontend y lógica del carrito.",
    liveUrl: "https://dulceybellaperfumes.vercel.app/",
    //repoUrl: "https://github.com/MafeTech24/proyectoFinalMorenoMariaFernanda",
    image: "dulceybella.jpg",
},  
  //{
    //id: "api-rest-1",
    //title: "API REST (Node/Express)",
    //problem: "En carga / Próximamente",
    //solution: "En carga / Próximamente",
    //stack: ["Node.js", "Express", "MongoDB"],
    //contribution: "En carga / Próximamente",
    //isPlaceholder: true
  //},
  // { id: "api-rest-2",
  //  title: "API REST (Node/Express)",
  //  problem: "En carga / Próximamente",
  //  solution: "En carga / Próximamente",
  //  stack: ["Node.js", "Express", "MongoDB"],
  //  contribution: "En carga / Próximamente",
  //  isPlaceholder: true
  //},
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Sobre mí" },
  //{ href: "#education", label: "Estudios" },
  { href: "#projects", label: "Proyectos" },
  //{ href: "#skills", label: "Habilidades" },
];
