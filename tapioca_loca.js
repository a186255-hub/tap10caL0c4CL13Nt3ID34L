function toggleDetalles() {
  const detalles = document.getElementById("detalles");
  const subdetalles = document.getElementById("sub-detalles");
  const icono = document.querySelector(".nombre .icono");

  if (detalles.style.display === "flex") {
    detalles.style.display = "none";
    subdetalles.style.display = "none";
    icono.classList.remove("rotado");
  } else {
    detalles.style.display = "flex";
    subdetalles.style.display = "block";
    icono.classList.add("rotado");
  }
}

function toggleEstilo() {
  const estilo = document.getElementById("estilo-vida");
  const icono = document.querySelectorAll(".estilo-btn .icono")[0];

  if (estilo.style.display === "flex") {
    estilo.style.display = "none";
    icono.classList.remove("rotado");
  } else {
    estilo.style.display = "flex";
    icono.classList.add("rotado");
  }
}

function toggleMarca() {
  const marcaInfo = document.getElementById("marca-info");
  const icono = document.querySelectorAll(".estilo-btn .icono")[1];

  if (marcaInfo.style.display === "flex") {
    marcaInfo.style.display = "none";
    icono.classList.remove("rotado");
  } else {
    marcaInfo.style.display = "flex";
    icono.classList.add("rotado");
  }
}

function toggleExperiencia() {
  const experiencia = document.getElementById("experiencia-info");
  const btn = experiencia.previousElementSibling.querySelector(".icono");

  if (experiencia.style.display === "flex" || experiencia.style.display === "block") {
    experiencia.style.display = "none";
    btn.classList.remove("rotado");
  } else {
    experiencia.style.display = "flex";
    btn.classList.add("rotado");
  }
}

function toggleMotivaciones() {
  const motivaciones = document.getElementById("motivaciones-info");
  const btn = motivaciones.previousElementSibling.querySelector(".icono");
  const resumenWrapper = document.getElementById("resumen-wrapper");
  const biblioWrapper = document.getElementById("bibliografia-wrapper");
  const infografia = document.querySelector(".infografia");
  const posicionOriginal = document.querySelector(".card");

  if (motivaciones.style.display === "flex" || motivaciones.style.display === "block") {
    motivaciones.style.display = "none";
    btn.classList.remove("rotado");

    // Regresar Resumen y Bibliografía a su lugar original
    if (posicionOriginal) {
      if (resumenWrapper) posicionOriginal.insertAdjacentElement('afterend', resumenWrapper);
      if (biblioWrapper) resumenWrapper.insertAdjacentElement('afterend', biblioWrapper);
    }

  } else {
    motivaciones.style.display = "flex";
    btn.classList.add("rotado");

    // Mover Resumen y Bibliografía al final
    if (infografia) {
      if (resumenWrapper) infografia.appendChild(resumenWrapper);
      if (biblioWrapper) infografia.appendChild(biblioWrapper);
    }
  }
}

function toggleBibliografia() {
  const biblio = document.getElementById("bibliografia-info");
  const icono = document.querySelectorAll(".nombre .icono")[2];

  if (biblio.style.display === "block") {
    biblio.style.display = "none";
    icono.classList.remove("rotado");
  } else {
    biblio.style.display = "block";
    icono.classList.add("rotado");
  }
}

