@extends('layouts.main')

@section('header')
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description"
          content="Generador de contraseñas gratuito. Genera una clave segura gratis en un solo click.">
    <meta name="keywords"
          content="generador de contraseñas, contraseña aleatoria, clave segura, constraseña gratis, tuclave, tuclavesegura">
@endsection

@section('mainContent')
    <div class="after-header-menu pt-5 pb-5 center-content">
        <div class="pt-0 pt-md-5 text-center pl-1 pr-1">
            <h1>Generador de contraseñas gratis</h1>
            <h3 class="pt-3">Tu clave segura en un solo click</h3>
            <h5 class="pt-3">Te damos la bienvenida al sitio web "tuclave.es". En esta página podrás crear todas tus
                contraseñas
                seguras. </h5>

        </div>
        <div class="row pt-0 pt-md-5 w-100">
            <div class="col-md-6 p-5">
                <form method="post" id="passwordForm">
                    @csrf
                    <div class="form-group w-100">
                        <label for="longPassport">Longitud de la contraseña</label>
                        <select class="form-control" id="longPassport">
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8" selected>8</option>
                            <option value="12">12</option>
                            <option value="24">24</option>
                        </select>
                    </div>
                    <div class="form-group w-100">
                        <label for="typePassword">Tipo de contraseña <small>(de menos a más segura)</small></label>
                        <select class="form-control" id="typePassword">
                            <option value="num">Solo números</option>
                            <option value="word">Solo letras</option>
                            <option value="numWord" selected>Letras y números</option>
                            <option value="allChars">Todos los caracteres</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Generar contraseña</button>
                </form>
            </div>
            <div class="col-md-6 pt-0 pt-md-5 pl-5 pr-5 pb-5 pb-md-5 d-flex flex-row align-items-end">
                <div class="d-flex flex-column w-100">
                    <h3 id="msgCopyDone" class="text-center hidden">Contraseña copiada!</h3>
                    <h3 id="h3space">&nbsp;</h3>
                    <button id="copyButton" class="btn btn-light w-100 mb-3">Copiar contraseña en el portapapeles
                    </button>
                    <div class="password-box">
                        <h3 id="newPassword" style="color: white" class="text-center">¡Tu nueva contraseña aparecerá
                            aquí!</h3>
                    </div>
                    <div class="pt-3">
                        <h6>Nivel de seguridad</h6>
                    </div>
                    <div class="progress">
                        <div id="securityLevelBar" class="progress-bar bg-warning" role="progressbar" style="width: 25%"
                             aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="pl-md-5 pb-md-5 col-12">
                <h5>Consejos y buenas prácticas:</h5>
                <ul>
                    <li>No repitas nunca la misma contraseña.</li>
                    <li>Intenta usar distintos caracteres, mayúsculas, minúsculas, números...</li>
                    <li>Utiliza siempre que puedas una longitud mínima de 8 caracteres.</li>
                    <li>No utilices palabras reales, aunque éstas estén escritas al revés.</li>
                    <li>Las contraseñas más utilizadas, suelen ser patrones de teclado como por ejemplo: qwerty.</li>
                    <li>Te reconemndamos utilizar un gestor de contraseñas como <a class="btn btn-link p-0"
                                                                                   target="_blank"
                                                                                   href="https://www.lastpass.com">Lastpass, </a><a
                            class="btn btn-link p-0" target="_blank" href="https://1password.com">1Password, </a><a
                            class="btn btn-link p-0" target="_blank"
                            href="https://keepass.info">Keepass... </a>
                        para guardar todas tus contraseñas.
                    </li>
                </ul>

                <h5 class="pt-5">Sobre nosotros:</h5>
                <p>Tuclave.es es una web totalmente gratis pensada para aquel usuario que necesita generear una
                    contraseña segura de manera rápida.</p>
                <p>Nuestras contraseñas, utilizan metodos aleatorios para generar las claves en función de la
                    configuración que solicite previamente el usuario en cuanto a longitud y tipos de caracteres.</p>
                <p>Os recordamos que el principal motivo de hackeo de contraseñas, es básicamente repetir la misma
                    contraseña en distintos
                    sitios y ésta que se lleve usando desde hace años atrás. Probablemente en uno de los sitios web ha
                    habido una
                    vulnerabilidad y una vez los atacantes roban la contraseña, simplemente usan la misma para
                    acceder al resto de servicios web. También, un motivo muy común de hackeo de contraseñas, es usar
                    patrones directamente relacionados con el usuario como por ejemplo el número de dni, fecha de
                    cumpleaños, hijos.. Patrones altamente inseguros. Por estos motivos, en Tucalve.es de manera
                    gratuita queremos
                    proteger y aconsejar a los usuarios para evitar ser hackeados.</p>
                <p>Las claves generadas son totalmente aleatorias y <b>no se guarda ningún tipo de información del
                        usuario.</b></p>
                <p>Esta web és solo una ayuda para crear claves seguras. En ningún caso <b>tuclave.es</b> se hace responsable sobre posibles
                    consecuencias de usar una clave aleatoria generada en este mismo sitio.</p>
                <p>Esta web ha sido creada para que la gente la pueda usar de manera gratuita, cualquier duda, pregunta,
                    propuestas de mejora o soporte se pueden poner en contacto en la dirección de correo
                    <a href="mailto: info@tuclave.es" class="btn btn-link p-0" target="_blank">info@tuclave.es.</a></p>
            </div>
        </div>
    </div>
@endsection
