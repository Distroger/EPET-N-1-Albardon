function showInfo(stage) {
    let infoText = "";
    if (stage === 'exploration') {
        infoText = `
            <strong>Exploración:</strong> En esta etapa, los geólogos utilizan técnicas como la prospección geofísica y perforaciones para identificar depósitos minerales. Herramientas avanzadas como sondas y equipos de detección permiten encontrar zonas con alta concentración de minerales.
            <br><br>Imagen: La imagen muestra a un geólogo realizando una perforación en un sitio de exploración.
            <br><br>Impacto ambiental: A pesar de su importancia, la exploración puede alterar el entorno si no se toman precauciones adecuadas.
        `;
    } else if (stage === 'extraction') {
        infoText = `
            <strong>Extracción:</strong> En esta fase, el mineral es extraído mediante minería a cielo abierto o subterránea. El uso de maquinaria pesada, como excavadoras y camiones de carga, es esencial para trasladar grandes cantidades de material.
            <br><br>Imagen: Se muestra una excavadora en acción, extrayendo material de un yacimiento.
            <br><br>Impacto ambiental: Puede provocar la destrucción de hábitats naturales y el aumento de la contaminación.
        `;
    } else if (stage === 'processing') {
        infoText = `
            <strong>Procesamiento:</strong> Los minerales extraídos son sometidos a procesos como la trituración y la fundición para separar los metales valiosos de los residuos. Esto se realiza en plantas de procesamiento especializadas.
            <br><br>Imagen: La imagen ilustra el proceso de fundición, donde los metales se separan del mineral.
            <br><br>Impacto ambiental: La emisión de gases contaminantes y el manejo de residuos tóxicos son dos de los mayores desafíos en esta etapa.
        `;
    }

    function showInfo(stage) {
    let infoText = "";
    if (stage === 'exploration') {
        infoText = `
            <strong>Exploración:</strong> En esta etapa, los geólogos utilizan técnicas como la prospección geofísica, perforaciones y el análisis de muestras de suelo para identificar posibles depósitos minerales. Herramientas avanzadas como sondas geológicas y equipos de detección permiten encontrar zonas con alta concentración de minerales. 
            <br><br>Imagen: La imagen muestra a un geólogo realizando una perforación en un sitio de exploración, utilizando tecnología avanzada para obtener muestras del subsuelo.
            <br><br>Impacto ambiental: La exploración puede alterar el entorno si no se toman precauciones adecuadas, como la protección de la biodiversidad y la prevención de la contaminación del agua.
            <br><br>Importancia: Es fundamental para determinar la viabilidad de un proyecto minero y seleccionar las mejores ubicaciones para la extracción de minerales.
        `;
    } else if (stage === 'extraction') {
        infoText = `
            <strong>Extracción:</strong> En esta fase, el mineral es extraído mediante minería a cielo abierto o subterránea. El uso de maquinaria pesada, como excavadoras, perforadoras y camiones de carga, es esencial para trasladar grandes cantidades de material. 
            <br><br>Imagen: Se muestra una excavadora en acción, extrayendo material de un yacimiento a cielo abierto.
            <br><br>Impacto ambiental: La minería a cielo abierto puede provocar la destrucción de hábitats naturales, mientras que la minería subterránea puede afectar la calidad del aire y el agua. La erosión del suelo y la contaminación por polvo son también preocupaciones importantes.
            <br><br>Importancia: La extracción es clave para obtener los minerales necesarios para diversas industrias, desde la tecnología hasta la construcción.
        `;
    } else if (stage === 'processing') {
        infoText = `
            <strong>Procesamiento:</strong> Los minerales extraídos se transportan a plantas de procesamiento, donde son sometidos a procesos como la trituración, molienda y fundición para separar los metales valiosos de los residuos. Esto se realiza utilizando tecnología especializada, como hornos de fundición y máquinas trituradoras.
            <br><br>Imagen: La imagen ilustra el proceso de fundición, donde los metales se separan del mineral mediante altas temperaturas.
            <br><br>Impacto ambiental: La emisión de gases contaminantes, como dióxido de azufre, y el manejo de residuos tóxicos, como cianuro y mercurio, son dos de los mayores desafíos en esta etapa. El uso de recursos hídricos y la generación de desechos sólidos también son preocupaciones clave.
            <br><br>Importancia: El procesamiento es esencial para obtener los materiales puros que serán utilizados en una amplia gama de productos, desde joyería hasta componentes electrónicos.
        `;
    }
    
    document.getElementById(`${stage}-info`).innerHTML = infoText;
    document.getElementById(`${stage}-info`).style.display = "block";
}
