/**
 * Selección pequeña y manual de lunfardo: significados propios, contrastados con
 * fichas individuales de Todo Tango. No es una copia de su diccionario.
 * La fuente permite comprobar cada entrada; no se descarga contenido al traducir.
 * `pistas` son expresiones en castellano que ayudan a elegir candidatos.
 */
const BASE = "https://www.todotango.com/comunidad/lunfardo/termino.aspx?p=";

export const GLOSARIO = [
  { termino: "guita", significado: "Dinero.", pistas: ["dinero", "plata", "efectivo", "billetes"], tema: "dinero", fuente: "guita" },
  { termino: "vento", significado: "Dinero; voz característica del lunfardo antiguo.", pistas: ["dinero", "plata", "efectivo", "fortuna"], tema: "dinero", fuente: "vento" },
  { termino: "mango", significado: "Antigua denominación de un peso; en ciertas frases alude al dinero.", pistas: ["sin un peso", "no tengo dinero", "sin dinero"], tema: "dinero", fuente: "mango", precaucion: "No confundir con la fruta. Evitar usarlo sin contexto económico." },
  { termino: "laburo", significado: "Trabajo o empleo.", pistas: ["trabajo", "empleo", "ocupacion", "tarea laboral"], tema: "trabajo", fuente: "laburo" },
  { termino: "laburar", significado: "Trabajar.", pistas: ["trabajar", "trabajando", "trabaje", "trabajan"], tema: "trabajo", fuente: "laburar" },
  { termino: "fiaca", significado: "Pereza, desgano o falta de energía.", pistas: ["sin ganas", "no tengo ganas", "pereza", "desgano", "flojera"], tema: "animo", fuente: "fiaca" },
  { termino: "feca", significado: "Café, por inversión de sílabas.", pistas: ["cafe", "cafeteria", "tomar un cafe"], tema: "bebida", fuente: "feca" },
  { termino: "morfar", significado: "Comer.", pistas: ["comer", "comida", "almorzar", "cenar", "alimentarse"], tema: "comida", fuente: "morfar" },
  { termino: "manyar", significado: "Según el contexto, entender o reconocer; también puede referirse a comer.", pistas: ["entender", "comprender", "me di cuenta", "no entiendo"], tema: "comprension", fuente: "manyar", precaucion: "Tiene varios sentidos; elegir según el contexto." },
  { termino: "afanar", significado: "Robar o estafar.", pistas: ["robar", "robo", "robaron", "estafar", "hurtar"], tema: "delito", fuente: "afanar" },
  { termino: "chorro", significado: "Ladrón.", pistas: ["ladron", "ladrones", "asaltante", "ratero"], tema: "delito", fuente: "chorro" },
  { termino: "piantar", significado: "Escaparse, huir o irse.", pistas: ["escapar", "escapo", "huir", "irse", "se fue", "se marcho", "salio corriendo"], tema: "huida", fuente: "piantar" },
  { termino: "bulín", significado: "Cuarto o lugar donde se vive; a veces habitación de soltero.", pistas: ["habitacion", "cuarto", "dormitorio", "departamento", "vivienda"], tema: "vivienda", fuente: "bulin", precaucion: "No inventar una cita amorosa si el original no la sugiere." },
  { termino: "cotorro", significado: "Habitación de soltero, frecuentemente para citas.", pistas: ["cuarto", "habitacion para citas", "habitacion de soltero"], tema: "vivienda", fuente: "cotorro", precaucion: "Es una acepción específica; no reemplazar cualquier vivienda." },
  { termino: "mina", significado: "Mujer; según época y contexto puede sonar poco respetuoso.", pistas: ["mujer", "muchacha", "chica"], tema: "persona", fuente: "mina", precaucion: "No inferir ocupación, vínculo ni sexualidad." },
  { termino: "percanta", significado: "Mujer amada o amante en registros tradicionales.", pistas: ["amada", "amante", "querida", "novia", "pareja"], tema: "pareja", fuente: "percanta", precaucion: "Solo si la relación afectiva surge del texto; voz de otra época." },
  { termino: "cana", significado: "Policía o lugar de detención, según el contexto.", pistas: ["policia", "comisaria", "carcel", "estar preso", "detenido"], tema: "policia", fuente: "cana", precaucion: "No confundir con las canas del pelo." },
  { termino: "botón", significado: "En ciertos usos, policía o delator.", pistas: ["delator", "soplon", "vigilante", "agente policial"], tema: "policia", fuente: "boton", precaucion: "No usar para botones de una máquina ni para toda mención de la policía." },
  { termino: "yeca", significado: "Calle, por inversión de sílabas.", pistas: ["calle", "callejera", "calles"], tema: "calle", fuente: "yeca" },
  { termino: "bacán", significado: "Persona adinerada o que lleva una vida acomodada.", pistas: ["adinerado", "pudiente", "millonario", "muy rico", "vive con lujos"], tema: "riqueza", fuente: "bacan" },
  { termino: "gil", significado: "Persona ingenua, fácil de engañar o poco avispada.", pistas: ["ingenuo", "tonto", "bobo", "facil de engañar"], tema: "ingenuidad", fuente: "gil" },
  { termino: "gilada", significado: "Tontería o acción poco sensata.", pistas: ["tonteria", "estupidez", "pavada", "necedad"], tema: "tonteria", fuente: "gilada" },
  { termino: "pucho", significado: "Cigarrillo, colilla o resto pequeño, según el contexto.", pistas: ["cigarrillo", "colilla", "fumar", "tabaco"], tema: "cigarrillo", fuente: "pucho" },
  { termino: "chamuyo", significado: "Conversación, palabrerío o discurso; el tono depende del contexto.", pistas: ["conversacion", "discurso", "charla", "palabrerio"], tema: "habla", fuente: "chamuyo" },
  { termino: "quilombo", significado: "Desorden, confusión o situación problemática.", pistas: ["desorden", "confusion", "caos", "lio", "gran problema"], tema: "problema", fuente: "quilombo", precaucion: "La palabra tuvo también otros sentidos históricos; no atribuirlos sin contexto." },
  { termino: "garpar", significado: "Pagar o saldar una deuda.", pistas: ["pagar", "pago", "abonarle", "deuda", "pagar la cuenta"], tema: "pago", fuente: "garpar" },
  { termino: "patota", significado: "Grupo o pandilla que intimida o actúa agresivamente.", pistas: ["pandilla", "grupo violento", "grupo de agresores"], tema: "pandilla", fuente: "patota" },
  { termino: "tano", significado: "Italiano, especialmente en habla popular.", pistas: ["italiano", "napolitano", "persona de italia"], tema: "origen", fuente: "tano" },
  { termino: "jetra", significado: "Traje de vestir, por inversión de sílabas.", pistas: ["traje", "traje de vestir", "saco y pantalon"], tema: "ropa", fuente: "jetra" }
].map(item => Object.freeze({ ...item, url: BASE + item.fuente }));

/** Normaliza para buscar palabras completas sin distinguir mayúsculas ni tildes. */
export function normalizarBusqueda(value) {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
function contiene(texto, expresion) {
  const n = normalizarBusqueda(expresion).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^a-z0-9])${n}(?=$|[^a-z0-9])`).test(texto);
}
/** Solo retorna candidatos relacionados con la frase; nunca una lista indiscriminada. */
export function seleccionarLunfardo(texto, { maximo = 6 } = {}) {
  const normal = normalizarBusqueda(texto);
  const candidatos = GLOSARIO.map((e, indice) => {
    const directo = contiene(normal, e.termino);
    const pistas = e.pistas.filter(p => contiene(normal, p));
    // Evitar confundir el botón de una interfaz con el lunfardismo homónimo.
    if (e.termino === "botón" && /\b(apretar|apreto|presionar|pulsar|clic|click)\b/.test(normal)) return null;
    // Un uso literal de «mango» como fruta no corresponde al glosario monetario.
    if (e.termino === "mango" && /\b(fruta|frutas|jugo|licuado|maduro)\b/.test(normal)) return null;
    if (!directo && !pistas.length) return null;
    return { ...e, directo, puntaje: (directo ? 100 : 0) + Math.min(pistas.length, 3) * 10, indice };
  }).filter(Boolean).sort((a,b) => b.puntaje - a.puntaje || a.indice - b.indice);
  const contadores = new Map();
  const elegidos = [];
  for (const e of candidatos) {
    const previo = contadores.get(e.tema) || 0;
    if (!e.directo && previo >= 2) continue;
    elegidos.push({ termino: e.termino, significado: e.significado, precaucion: e.precaucion || "", url: e.url });
    contadores.set(e.tema, previo + 1);
    if (elegidos.length >= maximo) break;
  }
  return elegidos;
}
