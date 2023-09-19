# Portal Artesanos

Documentación y aplicación realizada como parte del proyecto de la materia Ingeniería del Sofware del segundo año de la carrera Licenciatura en Sistemas de la Universidad Nacional General Sarmiento.

Portal de artesanos es un proyecto que involucra todos los procesos de la ingeniería del software (análisis de requerimientos, arquitectura, prueba de concepto, planificación), junto con ciclos de vida y metodologías ágiles. Este README tiene como prioridad mostrar la resolución del proyecto que fue requerido [(Click para ver)](https://drive.google.com/file/d/1JqYibAGpE3QlDGO-dWokaaCOOjW_zS4N/view?usp=sharing). Por lo tanto la documentación del código de la aplicación no es presentada, porque el objetivo principal del proyecto era poner en práctica los conceptos de la ingeniería del software.

## Tabla de contenidos

- [Introducción](#introducción)
- [Requerimientos](#requerimientos)


## Introducción

El Gobierno Municipal de un distrito desea implementar un portal de productos regionales y, de esta forma, potenciar las actividades de los talleres de la zona. Como objetivo principal, se busca ofrecer un espacio virtual de difusión, como herramienta para vincular a los residentes y visitantes de la ciudad con los trabajos de la comunidad.

El municipio requiere la construcción de un sistema. Este sistema debe permitir consultar los artículos ofrecidos por los artesanos. El artesano puede crear publicaciones de sus productos y, si cuenta con un taller a su nombre, puede ser un reprentante de taller. El taller debe mostrarse en un mapa junto con su información. También se requiere la elaboración de una revista con la información de los talleres registrados; el sistema debe enviar la información al sistema externo <i>PrintAllTheThings</i> para crear un catálogo para su distribución.

El visitante del portal puede ser miembro y registrarse como un artesano. Para ello, debe especificar el nombre, el teléfono y un correo de contacto. También debe indicar si participa a nombre de un taller. Para inscribir un taller, el artesano que lo representa debe anotar el nombre y la descripción general del lugar, la categoría y las actividades ofrecidas, junto con la dirección, horarios, teléfono y una foto principal.

Los talleres cuentan con la posibilidad de volverse patrocinadores si realizan una contribución al portal. Para esto, el representante del local cuenta con la opción de generar desde el sistema una factura, la cual será pagada utilizando los servicios de los locales de <i>RapiFacil</i>. A cambio de su patrocinio, el portal asignará al taller como destacado durante un período de 30 días.

Para crear una publicación del producto, el artesano debe cargar el detalle, que contiene el nombre, descripción y categoría de la artesanía junto a una foto. Además, debe indicar el tipo de publicación, que aclara si una publicación está disponible para la venta directa o es una publicación de muestra. Si es una publicación en venta directa, se debe ingresar un precio. Si es una publicación de muestra, ésta no debe tener precio y se debe ingresar una aclaración extra. Por último, se debe cargar los datos del contacto. Una vez creada la publicación, se registra la fecha y queda como pendiente de aprobación.

A su vez, el sistema debe recopilar desde un sitio externo una lista de productos similares junto con su precio. De esta manera, al momento de crear una publicación, el artesano puede ver y comparar los productos de otro sitio e ingresar un precio justo.

Para finalizar la introducción, este documento tiene como objetivo presentar los detalles del proyecto. Éste contiene los diferentes requerimientos y los actores identificados, con el detalle de su interacción en el sistema.

## Requerimientos

Los requerimientos son todas las tareas que se necesitan plantear para el desarrollo de un nuevo software, o la modificación de un software, solicitado por un cliente. Existen diferentes formas de clasificar requerimientos, que se detallan a continuación:

- Según el área que buscan definir:
  - Funcional: Definen los servicios que brindará el sistema y la descripción de qué es lo que tiene que hacer el producto.
  - No Funcional: Definen atributos de calidad requeridos y restricciones impuestas sobre el producto.
- Según su prioridad:
  - Esencial: Son aquellos que son imprescindibles ya que hacen que el sistema tenga sentido.
  - Importante: Son aquellos que no afectan el funcionamiento del sistem, pero lo limitan, por lo cual son útiles y necesarios para el usuario.
  - Deseable: Son aquellos cuya ausencia no afecta de ninguna manera el correcto funcionamiento del sistema, pero que el usuario querría tener si hay tiempo disponible.
 
### Notación

La notación utilizada par clasificar un requerimiento se describe a continuación:

- <b>RFE:</b> Requerimiento Funcional Esencial.
- <b>RFI:</b> Requerimiento Funcional Importante.
- <b>RFD:</b> Requerimiento Funcional Deseable.
- <b>RNFE:</b> Requerimiento No Funcional Esencial.
- <b>RNFI:</b> Requerimiento No Funcional Importante.
- <b>RNFD:</b> Requerimiento No Funcional Deseable.

La notación utilizada para detallar un requerimiento se describe a continuación:

<table>
  <tr>
    <th>Nro</th>
    <th>[Descripción breve] <br> [Detalles]</th>
    <th>Clase</th>
  </tr>
</table>

### Listado de requerimientos

<table>
  <tr>
    <th>1</th>
    <th><b>El visitante se registra en el sistema. </b> <br> Un visitante puede ser un artesano. Los datos que debe ingresar para registrarse son: Nombre, teléfono y correo electrónico. Debe indicar si representa un taller. Si tiene un taller a su nombre debe indicar el nombre, descripción del lugar, categoría a la que pertenece, actividades que ofrece, la dirección del lugar, rango horario, número de teléfono, una foto </th>
    <th><b> RFE </b></th>
  </tr>
   <tr>
    <th>2</th>
    <th> <b>El artesano crea una publicación.</b> <br> Un artesano puede crear una publicación de su producto. Los datos para crear una publicación son: Detalles del producto, tipo de publicación y datos de contacto. Una vez finalizado, la publicaión queda pendiente de aprobación. </th>
    <th><b> RFE</b></th>
  </tr>
   <tr>
    <th>3</th>
    <th><b> El sistema busca productos similares a la publicación. </b> <br> El sistema debe sugerir al artesano diferentes precios relacionados con el producto que publicará. Para ello debe recopilar una lista de productos similares desde un sitio externo. De esta manera el artesano puede compara precios para asegurarse que publica un precio justo. </th>
    <th><b> RFI</b></th>
  </tr>
   <tr>
    <th>4</th>
    <th><b> El artesano representante inscribe su taller. </b> <br> Para ello debe realizar un pedido de inscripción del lugar. Los requisitos para inscribirse son: nombre y descripción general del lugar, categoría y actividades ofrecidas, dirección, horario, teléfono y foto principal. Una vez generado el pedido, se registra como pendiente de aprobación. </th>
    <th><b> RFE </b></th>
  </tr>
   <tr>
    <th>5</th>
    <th><b> El visitante realiza búsquedas en el portal. </b> <br> El visitante del portal puede realizar búsquedas interactivas de su interés, de acuerdo a las características de las artesanías y los talleres.</th>
    <th><b> RNFE</b></th>
  </tr>
   <tr>
    <th>6</th>
    <th><b> El moderador autoriza el registro de publicaciones de artesanos. </b> <br> El moderador consulta en el sistema los pedidos de inscripción pendientes, y decide si los autoriza. </th>
    <th><b> RFE </b></th>
  </tr>
   <tr>
    <th>7</th>
    <th><b> El moderador autoriza los talleres. </b> <br> El moderador recibe del sistema una notificación vía correo para aprobar el registro de un taller. </th>
    <th><b> RFE</b></th>
  </tr>
   <tr>
    <th>8</th>
    <th><b> El moderador designa a un artesano como miembro confiable. </b> <br> De esta forma el artesano tiene aprobación automática en todas sus publicaciones. El moderador puede deshabilitar el rango otorgado.</th>
    <th><b>RFE </b></th>
  </tr>
   <tr>
    <th>9</th>
    <th><b> El representante de taller patrocina el portal.</b>  <br> El representante puede destacar su taller mediante una pequeña contribución al sitio. Debe generar una factura desde el sistema y pagarla a través de alguno de los locales de RapiFacil. El patrocinio tiene una duración de 30 días a partir de la fecha de confirmación de pago.</th>
    <th><b>RFI </b></th>
  </tr>
   <tr>
    <th>10</th>
    <th><b> El sistema solicita un código único de comprobante a un sitio externo. </b> <br> El sistema lo solicita a RapiFacil para incluir en la factura. </th>
    <th><b> RFE </b></th>
  </tr>
   <tr>
    <th>11</th>
    <th><b> El sistema recibe una notificación de pago de un sitio externo. </b> <br> RapiFacil envía un código único de comprobante de pago realizado por el representante patrocinador </th>
    <th><b> RFE</b></th>
  </tr>
   <tr>
    <th>12</th>
    <th><b> El sistema muestra un taller en el mapa.</b> <br> El sistema se conecta con un sistema de mapas externo para mostrar la ubicación del taller junto con su información. </th>
    <th><b>RFE </b></th>
  </tr>
   <tr>
    <th>13</th>
    <th><b> El sistema debe accederse desde cualquier dispositivo. </b> <br> El sistema debe ser compatible para acceder desde cualquier dispositivo. </th>
    <th><b>RNFI </b></th>
  </tr>
   <tr>
    <th>14</th>
    <th><b> El sistema alerta sobre el vencimiento del patrocinio.</b> <br> El sistema envía un recordatorio al representante de taller por medio de un correo un día antes del vencimiento. </th>
    <th><b> RFE</b></th>
  </tr>
   <tr>
    <th>15</th>
    <th><b> El sistema envía información al sitio externo PrintAllTheThings </b> <br> Para ampliar la difusión, el sistema envía la información de los talleres registrados. </th>
    <th><b> RFE </b></th>
  </tr>
   <tr>
    <th>16</th>
    <th><b> El sistema espera agregar otros servicios de pago en el futuro. </b> <br> </th>
    <th><b> RNFD</b></th>
  </tr>
   <tr>
    <th>17</th>
    <th><b>El moderador indica el motivo de rechazo de la autorización. </b> <br> En caso de que el moderador no apruebe un artículo o un registro para ser un artesano.  El moderador indica el motivo del rechazo. </th>
    <th><b>RFE </b></th>
  </tr>
   <tr>
    <th>18</th>
    <th><b> El sistema envía un correo al artesano una notificación del moderador. </b> <br> El sistema notifica a través de un correo al artesano la decisión del moderador. </th>
    <th><b> 18</b></th>
  </tr>
   <tr>
    <th>19</th>
    <th><b> El sistema normaliza las ubicaciones del taller inscripto. </b> <br> A través de un sistema externo se normaliza las ubicaciones al momento de la inscripción de un taller.</th>
    <th><b>RFE </b></th>
  </tr>
   <tr>
    <th>20</th>
    <th><b> El sistema reenvía la información de los talleres al sistema PrintAllTheThing.</b> <br> En caso de detectar un fallo, el sistema reenviará la información en el transcurso del día. </th>
    <th><b>RFE </b></th>
  </tr>
</table>
