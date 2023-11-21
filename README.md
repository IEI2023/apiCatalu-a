# API Cataluña

La API de Cataluña proporciona información detallada sobre los centros educativos en la comunidad de Cataluña en formato JSON. A continuación, se detallan los pasos para desplegar y utilizar esta API.

## Despliegue

1. **Instalación de Dependencias:**

   ```bash
   npm install
   ```

2. **Ejecución del Proyecto:**
   ```bash
   npm run start
   ```

## Uso

La API de Cataluña ofrece dos endpoints accesibles a través del dominio local, donde puedes consultar y obtener información en formato JSON.

### Endpoint 1: `/jsonFromFile`

Este endpoint devuelve la información de los centros educativos de Cataluña desde un archivo local (xml) en formato JSON.

- **Método:** GET
- **URL:** `http://localhost:3002/jsonFromFile`

### Endpoint 2: `/jsonFromBody`

Este endpoint proporciona información detallada sobre los centros educativos de Cataluña directamente desde el cuerpo de la solicitud.

- **Método:** POST
- **URL:** `http://localhost:3002/jsonFromBody`

  #### Parámetros de Solicitud:

  - `centros`: Lista de objetos que representan la información de los centros educativos.

  Ejemplo del cuerpo de la solicitud en formato XML:

  ```xml
    <?xml ?>
    <response>
        <row>
            <row _id="row-bqjg-kf5i.cucx" _uuid="00000000-0000-0000-0FDC-0C3E9FD7054B" _position="0" _address="https://analisi.transparenciacatalunya.cat/resource/_3u9c-b74b/row-bqjg-kf5i.cucx">
                <codi_centre>08004523</codi_centre>
                <denominaci_completa>Paideia</denominaci_completa>
                <!-- ... Otros campos del centro -->
            </row>
        </row>
            <row _id="row-v5r9.37sr.r88u" _uuid="00000000-0000-0000-671D-75742D79853E" _position="0" _address="https://analisi.transparenciacatalunya.cat/resource/_3u9c-b74b/row-v5r9.37sr.r88u">
                <codi_centre>08024984</codi_centre>
                <denominaci_completa>Vedruna Sallent</denominaci_completa>
                <!-- ... Otros campos del centro -->
            </row>
        </row>
  </response>
  ```

  Recibirás una respuesta en formato JSON con la información detallada de los centros educativos de Cataluña.
