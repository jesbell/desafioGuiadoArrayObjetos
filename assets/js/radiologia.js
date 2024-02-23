// Requisito 1: Generar las listas
const radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

// Requisito 2: Mostrar primera y ultima atención
document.write("<h1>Estadisticas centro medico ñuñoa</h1>");
document.write("<h3>Radiologia</h3>");
document.write(
  `<p>Primera atención: ${radiologia[0].paciente} - ${
    radiologia[0].prevision
  } | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${
    radiologia[radiologia.length - 1].prevision
  }</p>`
);
document.write("<hr>");

// Requisito 3: Mostrar todo el contenidos de la lista Radiologia
var texto_radiologia =
  "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";

for (var i = 0; i < radiologia.length; i++) {
  texto_radiologia += `<tr>
                        <td>${radiologia[i].hora}</td>
                        <td>${radiologia[i].especialista}</td>
                        <td>${radiologia[i].paciente}</td>
                        <td>${radiologia[i].rut}</td>
                        <td>${radiologia[i].prevision}</td>
                      </tr>`;
}

document.getElementById("tabla-radiologia").innerHTML = texto_radiologia;
