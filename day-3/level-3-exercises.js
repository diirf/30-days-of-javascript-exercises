/* 1. Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
    i. YYY-MM-DD HH:mm eg. 20120-01-02 07:05 */
    console.log(`${YEAR}-${MONTH.toString().padStart(2,'0')}-${DAY.toString().padStart(2,'0')} ${HOURS.toString().padStart(2,'0')}:${MINUTES.toString().padStart(2,'0')}`)