import { COMPOUNDS_RETURNS_FORMULA } from "./CompoundReturnsFormula";

export const RETIREMENT_CALCULATOR_INFO_CONFIG = {
  id: 'retirement-calculator-info',
  header: {
    id: 'retirement-calculator-info',
    title: {
      es: 'Fórmula de Jubilación',
      en: 'Retirement Formula'
    },
    label: {
      es: 'Información de la Calculadora de Jubilación',
      en: 'Retirement Calculator Information'
    },
    descriptions: [{
      es: 'La operación que calcula los resultados para la "Calculadora de Jubilación" se basa en una fórmula común de retornos compuestos (que se muestra a continuación) y está construida en JavaScript usando funciones, ciclos y operadores aritméticos. JavaScript emplea números de coma flotante de 64 bits, lo que proporciona aproximadamente 16 dígitos decimales de precisión.',
      en: 'The operation which calculates results for the "Retirement Calculator" is based upon a joint compounded returns formula (shown below) and is built in JavaScript using functions, loops, and arithmetic operators. In addition, JavaScript uses 64-bit floating-point numbers, providing approximately 16 decimal digits of precision.'
    }],
  },
  info: [
    COMPOUNDS_RETURNS_FORMULA
  ]
}