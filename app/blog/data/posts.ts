export interface Post {
  slug: string;
  title: string;
  emoji: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
}

export const posts: Post[] = [
  {
    slug: 'que-es-newton-raphson',
    title: '¿Qué es el método de Newton-Raphson?',
    emoji: '🧮',
    excerpt: 'Aprende los fundamentos del método de Newton-Raphson, uno de los algoritmos más importantes para encontrar raíces de funciones.',
    category: 'Fundamentos',
    date: '15 de junio, 2024',
    readTime: '8 min de lectura',
    content: `
## Introducción

El método de Newton-Raphson es uno de los algoritmos más poderosos y ampliamente utilizados en el análisis numérico para encontrar raíces de funciones. Desarrollado por Isaac Newton y Joseph Raphson en el siglo XVII, este método sigue siendo fundamental en matemáticas, ingeniería y ciencias aplicadas.

## ¿Cómo funciona?

El método se basa en la idea de aproximar una función mediante su recta tangente en un punto cercano a la raíz. La fórmula fundamental es:

**x₁ = x₀ - f(x₀) / f'(x₀)**

Donde:
- x₀ es el valor inicial
- f(x₀) es el valor de la función en x₀
- f'(x₀) es el valor de la derivada en x₀

## Características principales

- ✅ Convergencia cuadrática (muy rápida)
- ✅ Requiere una derivada (o aproximación numérica)
- ⚠️ Puede fallar si la derivada es cero
- ⚠️ Depende del valor inicial

## Aplicaciones

El método de Newton-Raphson se utiliza en:

1. Ingeniería: Análisis de circuitos, dinámica de fluidos
2. Economía: Modelos de optimización
3. Física: Sistemas no lineales
4. Informática: Gráficos por computadora
5. Biología: Modelos poblacionales

## Conclusión

El método de Newton-Raphson es una herramienta indispensable para científicos e ingenieros. Su velocidad de convergencia lo hace especialmente útil cuando se necesitan resultados precisos rápidamente.
    `,
  },
  {
    slug: 'historia-newton-raphson',
    title: 'Historia del método de Newton-Raphson',
    emoji: '📜',
    excerpt: 'Descubre la fascinante historia detrás del método de Newton-Raphson y cómo revolucionó el análisis numérico.',
    category: 'Historia',
    date: '10 de junio, 2024',
    readTime: '10 min de lectura',
    content: `
## Los orígenes

El método de Newton-Raphson tiene una historia fascinante que se remonta al siglo XVII. Isaac Newton fue el primero en describir el método en 1669, pero fue Joseph Raphson quien lo simplificó y publicó en 1690.

## Isaac Newton

Newton utilizó el método como parte de sus trabajos en series infinitas. Su enfoque original era algebraico y se centraba en polinomios.

## Joseph Raphson

Raphson publicó el método en su obra "Analysis Aequationum Universalis" (1690), presentando una versión más sencilla que permitía calcular las raíces de ecuaciones con mayor eficiencia.

## El problema de la notación moderna

La notación moderna del método, con derivadas, fue desarrollada posteriormente por matemáticos como Leonhard Euler.

## Impacto

El método de Newton-Raphson sigue siendo uno de los más importantes en el análisis numérico moderno. Es utilizado en:

- Sistemas de ecuaciones no lineales
- Optimización matemática
- Simulación computacional
- Inteligencia artificial y machine learning

## Legado

Hoy en día, el método de Newton-Raphson es enseñado en todas las facultades de matemáticas, ingeniería y ciencias computacionales alrededor del mundo.
    `,
  },
  {
    slug: 'aplicaciones-newton-raphson',
    title: 'Aplicaciones en ingeniería y ciencia',
    emoji: '🔬',
    excerpt: 'Explora las aplicaciones prácticas del método de Newton-Raphson en ingeniería, física, economía y más.',
    category: 'Aplicaciones',
    date: '5 de junio, 2024',
    readTime: '12 min de lectura',
    content: `
## Introducción

El método de Newton-Raphson tiene aplicaciones en prácticamente todas las áreas de la ciencia y la ingeniería. Su capacidad para encontrar raíces de ecuaciones no lineales lo convierte en una herramienta invaluable.

## Ingeniería

### Ingeniería Civil
- Cálculo de estructuras
- Análisis de vigas y columnas
- Diseño de cimentaciones

### Ingeniería Eléctrica
- Análisis de circuitos
- Sistemas de potencia
- Control automático

### Ingeniería Mecánica
- Diseño de máquinas
- Análisis de vibraciones
- Termodinámica

## Física

### Mecánica Clásica
- Ecuaciones de movimiento
- Sistemas oscilatorios

### Física Cuántica
- Ecuación de Schrödinger
- Estados energéticos

## Economía y Finanzas

- Modelos de equilibrio
- Optimización de carteras
- Valoración de opciones

## Ciencias de la Computación

- Renderizado 3D
- Simulación física
- Machine Learning
- Optimización de algoritmos

## Casos de éxito

### NASA
La NASA utiliza el método de Newton-Raphson para calcular trayectorias de naves espaciales y órbitas.

### Industria Automotriz
Se utiliza en el diseño de motores y sistemas de control de vehículos.

### Biotecnología
En el modelado de reacciones químicas y procesos biológicos.

## Conclusión

El método de Newton-Raphson es una herramienta fundamental que trasciende disciplinas. Su simplicidad y eficacia lo mantienen vigente después de más de 300 años.
    `,
  },
];