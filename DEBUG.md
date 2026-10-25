# Bitácora de debugging

| Bug | Síntoma observado | Herramienta usada | Línea | Causa | Corrección |
|---|---|---|---|---|---|
| 1 | La consola muestra `Uncaught TypeError: Cannot set properties of null (setting 'textContent')` | Console (error y enlace a la línea), Elements (comparar el id) y Sources (breakpoint y panel Scope: `mensaje` es `null`) | 6 (el error se dispara en la 11) | El selector `"#mesaje"` no coincide con el id `mensaje` del HTML, así que `querySelector` devuelve `null` | Cambiar el selector a `"#mensaje"` |
| 2 | Al inscribir 5 dos veces los cupos no quedan en 40 (el total pasa a ser el texto `"055"`) | Sources (breakpoint en `registrarInscripcion`, Step over) y panel Watch (`typeof inscritos`, `totalInscritos`, `cuposDisponibles`) | 18 | El `value` de un input es un string, por lo que `+` concatena en vez de sumar | Convertir con `Number(inputCantidad.value)` |
| 3 | Al ingresar 50 entradas (total de cupos) indica "No hay cupos suficientes" aunque la inscripción es válida | Sources (breakpoint en línea 22, Step over, Step into en `mostrarResumen`, panel Scope: `cuposDisponibles` es 0) | 22 | La condición `cuposDisponibles > 0` usa mayor estricto, evaluando a `false` cuando quedan exactamente 0 cupos disponibles | Cambiar la condición a `cuposDisponibles >= 0` |

## Responsable de cada bug

- Bugs 1 y 2: Estudiante B
- Bug 3: Estudiante A
