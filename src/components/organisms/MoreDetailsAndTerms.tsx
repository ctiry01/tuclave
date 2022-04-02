import styled from "styled-components";

export const MoreDetailsAndTerms = () => {
    return (
        <Wrapper>
            <h3>Consejos y buenas prácticas:</h3>
            <ul>
                <li>No repitas nunca la misma contraseña.</li>
                <li>Intenta usar distintos caracteres, mayúsculas, minúsculas, números...</li>
                <li>Utiliza siempre que puedas una longitud mínima de 8 caracteres.</li>
                <li>No utilices palabras reales, aunque éstas estén escritas al revés.</li>
                <li>Las contraseñas más utilizadas, suelen ser patrones de teclado como por ejemplo: qwerty, asdf...</li>
                <li>Te reconemndamos utilizar un gestor de contraseñas como &nbsp;
                    <a target="_blank" href="https://bitwarden.com/">BitWarden, </a>
                    <a target="_blank" href="https://www.lastpass.com">Lastpass, </a>
                    <a target="_blank" href="https://1password.com">1Password, </a>
                    <a target="_blank" href="https://keepass.info">Keepass... </a>
                    &nbsp; para guardar todas tus contraseñas.
                </li>
            </ul>
            <h3>Sobre nosotros:</h3>
            <p>Tuclave.es es una web totalmente gratuita pensada para aquel usuario que necesita generear una contraseña
                segura de manera rápida.</p>
            <p>Nuestras contraseñas, utilizan metodos aleatorios para generar las claves en función de la configuración
                que solicite previamente el usuario en cuanto a longitud y tipos de caracteres.</p>
            <p>Os recordamos que el principal motivo de hackeo de contraseñas, es básicamente repetir la misma
                contraseña en distintos sitios y ésta que se lleve usando desde hace años atrás. Probablemente en uno de
                los sitios web ha habido una vulnerabilidad y una vez los atacantes roban la contraseña, simplemente
                usan la misma para acceder al resto de servicios web. También, un motivo muy común de hackeo de
                contraseñas, es usar patrones directamente relacionados con el usuario como por ejemplo el número de
                dni, fecha de cumpleaños, hijos.. Patrones altamente inseguros. Por estos motivos, en Tucalve.es de
                manera gratuita queremos proteger y aconsejar a los usuarios para evitar ser hackeados.</p>
            <p>Las claves generadas son totalmente aleatorias y <b>no se guarda ningún tipo de información del
                usuario.</b></p>
            <p>Esta web és solo una ayuda para crear claves seguras. En ningún caso tuclave.es se hace responsable sobre
                posibles consecuencias de usar una clave aleatoria generada en este mismo sitio.</p>
            <p>Esta web ha sido creada para que la gente la pueda usar de manera gratuita, cualquier duda, pregunta,
                propuestas de mejora o soporte se pueden poner en contacto en la dirección de correo <a href="mailto:info@tuclave.es" target="_blank">info@tuclave.es</a></p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
`