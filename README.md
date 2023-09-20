![Header](https://github.com/elez95/Portal-Artesanos/blob/main/README%20images/header-portal.jpg)
# Portal Artesanos

Documentación y aplicación realizada como parte del proyecto de la materia Ingeniería del Software del segundo año de la carrera Licenciatura en Sistemas de la Universidad Nacional General Sarmiento.

Portal de artesanos es un proyecto que involucra todos los procesos de la ingeniería del software (análisis de requerimientos, arquitectura, prueba de concepto, planificación), junto con ciclos de vida y metodologías ágiles. Este README tiene como prioridad mostrar la resolución del proyecto que fue requerido [(Click para ver)](https://drive.google.com/file/d/1JqYibAGpE3QlDGO-dWokaaCOOjW_zS4N/view?usp=sharing). Por lo tanto la documentación del código de la aplicación no es presentada, porque el objetivo principal del proyecto era poner en práctica los conceptos de la ingeniería del software.

<img src="https://github.com/elez95/Portal-Artesanos/blob/main/README%20images/Captura.jpg" height = "400">

## Tabla de contenidos

- [Introducción](#introducción)
- [Requerimientos](#requerimientos)
- [Actores involucrados](#actores-involucrados)
- [Casos de uso](#casos-de-uso)
- [Diagrama de Casos de uso](#diagrama-de-casos-de-uso)
- [Diagrama Modelo Conceptual](#diagrama-modelo-conceptual)
- [Arquitectura del software](#arquitectura-del-software)
- [Planificación](#planificación)
- [Diagrama de Gantt](#diagrama-de-gantt)
- [Logros](#logros)


## Introducción

El Gobierno Municipal de un distrito desea implementar un portal de productos regionales y, de esta forma, potenciar las actividades de los talleres de la zona. Como objetivo principal, se busca ofrecer un espacio virtual de difusión, como herramienta para vincular a los residentes y visitantes de la ciudad con los trabajos de la comunidad.

El municipio requiere la construcción de un sistema. Este sistema debe permitir consultar los artículos ofrecidos por los artesanos. El artesano puede crear publicaciones de sus productos y, si cuenta con un taller a su nombre, puede ser un reprentante de taller. El taller debe mostrarse en un mapa junto con su información. También se requiere la elaboración de una revista con la información de los talleres registrados; el sistema debe enviar la información al sistema externo <i>PrintAllTheThings</i> para crear un catálogo para su distribución.

El visitante del portal puede ser miembro y registrarse como un artesano. Para ello, debe especificar el nombre, el teléfono y un correo de contacto. También debe indicar si participa a nombre de un taller. Para inscribir un taller, el artesano que lo representa debe anotar el nombre y la descripción general del lugar, la categoría y las actividades ofrecidas, junto con la dirección, horarios, teléfono y una foto principal.

Los talleres cuentan con la posibilidad de volverse patrocinadores si realizan una contribución al portal. Para esto, el representante del local cuenta con la opción de generar desde el sistema una factura, la cual será pagada utilizando los servicios de los locales de <i>RapiFacil</i>. A cambio de su patrocinio, el portal asignará al taller como destacado durante un período de 30 días.

Para crear una publicación del producto, el artesano debe cargar el detalle, que contiene el nombre, descripción y categoría de la artesanía junto a una foto. Además, debe indicar el tipo de publicación, que aclara si una publicación está disponible para la venta directa o es una publicación de muestra. Si es una publicación en venta directa, se debe ingresar un precio. Si es una publicación de muestra, ésta no debe tener precio y se debe ingresar una aclaración extra. Por último, se debe cargar los datos del contacto. Una vez creada la publicación, se registra la fecha y queda como pendiente de aprobación.

A su vez, el sistema debe recopilar desde un sitio externo una lista de productos similares junto con su precio. De esta manera, al momento de crear una publicación, el artesano puede ver y comparar los productos de otro sitio e ingresar un precio justo.

Para finalizar la introducción, este documento tiene como objetivo presentar los detalles del proyecto. Éste contiene los diferentes requerimientos y los actores identificados, con el detalle de su interacción en el sistema.

[Volver a Tabla de contenidos](#tabla-de-contenidos)

## Requerimientos

Los requerimientos son todas las tareas que se necesitan plantear para el desarrollo de un nuevo software, o la modificación de un software, solicitado por un cliente. Existen diferentes formas de clasificar requerimientos, que se detallan a continuación:

- Según el área que buscan definir:
  - Funcional: Definen los servicios que brindará el sistema y la descripción de qué es lo que tiene que hacer el producto.
  - No Funcional: Definen atributos de calidad requeridos y restricciones impuestas sobre el producto.
- Según su prioridad:
  - Esencial: Son aquellos que son imprescindibles ya que hacen que el sistema tenga sentido.
  - Importante: Son aquellos que no afectan el funcionamiento del sistema, pero lo limitan, por lo cual son útiles y necesarios para el usuario.
  - Deseable: Son aquellos cuya ausencia no afecta de ninguna manera el correcto funcionamiento del sistema, pero que el usuario querría tener si hay tiempo disponible.

[Volver a Tabla de contenidos](#tabla-de-contenidos)
 
### Notación

La notación utilizada para clasificar un requerimiento se describe a continuación:

- <b>RFE:</b> Requerimiento Funcional Esencial.
- <b>RFI:</b> Requerimiento Funcional Importante.
- <b>RFD:</b> Requerimiento Funcional Deseable.
- <b>RNFE:</b> Requerimiento No Funcional Esencial.
- <b>RNFI:</b> Requerimiento No Funcional Importante.
- <b>RNFD:</b> Requerimiento No Funcional Deseable.

La notación utilizada para detallar un requerimiento se describe a continuación:

<table border="1">
  <tr>
    <th>Nro</th>
    <th>[Descripción breve] <br> [Detalles]</th>
    <th>Clase</th>
  </tr>
</table>

### Listado de requerimientos

<table border="1">
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

[Volver a Tabla de contenidos](#tabla-de-contenidos)

## Actores involucrados

- Artesano: Crea publiciones.
- Representante de taller: Patrocina el porta.
- Visitante: Se registra en el portal. Busca artículos.
- Moderador: Autentica registro de artesanos. Aprueba publicaciones. Aprueba inscripción de representación de taller. Revisa fallos de exportación.
- Sistemas de pagos (RapiFacil): Servicio externo al cual se le solicita un código de comprobante y luego confirma el pago junto con los datos.
- Sistema de catálogo (Revista) PrintAllTheThings: Servicio externo al cual se envía la información de talleres y artesanos para ser publicada mensualmente.
- Sistema de correos SMTP: Informa al moderador un nuevo registro pendiente. Especifica al representante el motivo en caso de rechazo. Informa sobre el vencimiento próximo del patrocinio. Informa al moderador sobre los errores al actualizar el catálogo.
- Sistema de ventas externo: Servicio externo al cual se le pide una lista de productos de uno determinado.
- Sistema de mapas: Muestra la ubicación de los talleres en un mapa.
- Sistema de direcciones: Normaliza las direcciones ingresadas por los talleres.

[Volver a Tabla de contenidos](#tabla-de-contenidos)

## Casos de uso

<table border="1">
  <tr>
    <td colspan="2"><b>Caso de uso</b>: CU1. Registrar el visitante en el portal.</td>
  </tr>
  <tr>
    <td colspan="2">Actor: Visitante.</td>
  </tr>
  <tr>
    <td colspan="2">Descripción: El visitante se convierte en artesano cuando se registra en el portal.</td>
  </tr>
  <tr>
    <td colspan="2">Requerimientos asociados: 1,2.</td>
  </tr>
  <tr>
    <td colspan="2">Precondición: Las credenciales no deben existir.</td>
  </tr>
  <tr>
    <td colspan="2">Postcondición: Credenciales guardadas.</td>
  </tr>
    <tr>
    <td><b>Curso normal</b></td>
    <td><b>Alternativas</b></td>
  </tr>
  <tr>
    <td>1. El visitante ingresa a la aplicación.</td>
    <td></td>
  </tr>
  <tr>
    <td>2. El visitante se dirige a la opción "Registrarse".</td>
    <td></td>
  </tr>
  <tr>
    <td>3. El visitante ingresa en los campos el nombre, teléfono y correo de contacto.</td>
    <td></td>
  </tr>
  <tr>
    <td>4. El visitante indica que no tiene un taller a su nombre.</td>
    <td>4.1 El visitante indica que tiene un taller a su nombre. <b>Ir a CU2.</b></td>
  </tr>
  <tr>
    <td>5. Fin Caso de Uso.</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"><b>Detalle:</b></td>
  </tr>
</table>

<table border="1">
  <tr>
    <td colspan="2"><b>Caso de uso</b>: CU2. Inscribir el taller.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Actor:</b> Representante de taller. </td>
  </tr>
  <tr>
    <td colspan="2"><b>Descripción:</b> El artesano realiza un pedido de inscripción del taller a su nombre. </td>
  </tr>
  <tr>
    <td colspan="2"><b>Requerimientos asociados:</b> 4. </td>
  </tr>
  <tr>
    <td colspan="2"><b>Precondición:</b> El artesano debe estar registrado en el portal. </td>
  </tr>
  <tr>
    <td colspan="2"><b>Postcondición:</b> La solicitud de inscripción queda pendiente de aprobación. </td>
  </tr>
    <tr>
    <td><b>Curso normal</b></td>
    <td><b>Alternativas</b></td>
  </tr>
  <tr>
    <td>1. El representante de taller se dirige a la opción "Inscribir mi Taller".</td>
    <td></td>
  </tr>
  <tr>
    <td>2. El representante de taller ingresa todos los datos de su taller.</td>
    <td></td>
  </tr>
  <tr>
    <td>3. Se normaliza la dirección ingresada. <b>Ir a CU15.</b> </td>
    <td></td>
  </tr>
  <tr>
    <td>4. El representante de taller hace clic en "Inscribir".</td>
    <td></td>
  </tr>
  <tr>
    <td>5. Se registra el pedido como pendiente de aprobación.</td>
    <td></td>
  </tr>
   <tr>
    <td>6. El sistema envía una notificación vía correo al moderador.</td>
    <td></td>
  </tr>
   <tr>
    <td>7. Fin Caso de Uso.</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"><b>Detalle:</b> Todos los campos deben estar completos.</td>
  </tr>
</table>

<table border="1">
  <tr>
    <td colspan="2"><b>Caso de uso</b>: CU3. Crear publicaciones.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Actor:</b> Artesano. </td>
  </tr>
  <tr>
    <td colspan="2"><b>Descripción:</b> El artesano completa todos los campos para hacer una publicación.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Requerimientos asociados:</b> 1,2.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Precondición:</b> El artesano debe estar registrado en el portal. </td>
  </tr>
  <tr>
    <td colspan="2"><b>Postcondición:</b> La publicación queda pendiente de aprobación.</td>
  </tr>
    <tr>
    <td><b>Curso normal</b></td>
    <td><b>Alternativas</b></td>
  </tr>
  <tr>
    <td>1. El artesano hace clic en la opción "Crear publicación".</td>
    <td></td>
  </tr>
  <tr>
    <td>2. El artesano indica si el producto es de compra directa o de muestra.</td>
    <td>2.1 Si el producto es de muestra, el artesano no debe ingresar el precio. Ir al paso 3.</td>
  </tr>
  <tr>
    <td>3. El artesano ingresa los datos pertinentes para la publicación. </td>
    <td></td>
  </tr>
  <tr>
    <td>4. El artesano hace click en "Crear publicación".</td>
    <td>4.1 Si falta un dato debe aparecer un mensaje "Datos incompletos". Ir al paso 3.</td>
  </tr>
  <tr>
    <td>5. Se registra como pendiente de aprobación junto con la fecha. </td>
    <td></td>
  </tr>
   <tr>
    <td>6. Fin Caso de Uso. </td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"><b>Detalle:</b></td>
  </tr>
</table>

<table border="1">
  <tr>
    <td colspan="2"><b>Caso de uso</b>: CU4. Patrocinar en el portar.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Actor:</b> Representante de taller. </td>
  </tr>
  <tr>
    <td colspan="2"><b>Descripción:</b> El representante de taller destaca su taller en el portal.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Requerimientos asociados:</b> 9.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Precondición:</b> El artesano debe ser un representante de taller.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Postcondición:</b> El taller queda marcado como destacado.</td>
  </tr>
    <tr>
    <td><b>Curso normal</b></td>
    <td><b>Alternativas</b></td>
  </tr>
  <tr>
    <td>1. El representante genera una factura desde el sistema. <b>Ir al CU7.</b></td>
    <td></td>
  </tr>
  <tr>
    <td>2.El sistema recibe la confimarción de pago. <b>Ir al CU14.</b></td>
    <td></td>
  </tr>
  <tr>
    <td>3. El taller figura como destacado </td>
    <td></td>
  </tr>
  <tr>
    <td>4. Fin Caso de Uso.</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"><b>Detalle:</b> El taller aparecerá como destacado por 30 días a partir de la fecha de pago.</td>
  </tr>
</table>

<table border="1">
  <tr>
    <td colspan="2"><b>Caso de uso</b>: CU5. Rechazar solicitud de inscripción de taller.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Actor:</b> Moderador.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Descripción:</b> El moderador consulta las solicitudes para inscribir el taller y decide si rechazarlas.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Requerimientos asociados:</b> 7.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Precondición:</b> Consultar solicitudes pendientes de aprobación.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Postcondición:</b> Guardar la solicitud rechazada y no mostrar el taller.</td>
  </tr>
    <tr>
    <td><b>Curso normal</b></td>
    <td><b>Alternativas</b></td>
  </tr>
  <tr>
    <td>1. El moderador corrobora los datos de inscripción.</td>
    <td></td>
  </tr>
  <tr>
    <td>2. El moderador decide rechazar la solicitud.</td>
    <td></td>
  </tr>
  <tr>
    <td>3.  El moderador redacta un correo especificando los motivos.</td>
    <td></td>
  </tr>
  <tr>
    <td>4.Fin Caso de Uso.</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"><b>Detalle:</b> El taller puede ser rechazado si algunos de sus datos se consideran inválidos.</td>
  </tr>
</table>

<table border="1">
  <tr>
    <td colspan="2"><b>Caso de uso</b>: CU6. Reenviar información de talleres.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Actor:</b> Moderador. </td>
  </tr>
  <tr>
    <td colspan="2"><b>Descripción:</b> En caso de notificarse un fallo en el envío automático de la información de talleres al Sistema de Revista, el moderador es el encargado de reenviar esta información.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Requerimientos asociados:</b> 15.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Precondición:</b> Notificación de fallo de envío.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Postcondición:</b> Envío exitoso de información.</td>
  </tr>
    <tr>
    <td><b>Curso normal</b></td>
    <td><b>Alternativas</b></td>
  </tr>
  <tr>
    <td>1. El moderador ingresa al portal.</td>
    <td></td>
  </tr>
  <tr>
    <td>2. El moderador presiona el botón "Enviar información".</td>
    <td>2.1 Si vuelve a ocurrir un fallo, ir al paso 1.</td>
  </tr>
  <tr>
    <td>3. Fin Caso de Uso.</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"><b>Detalle:</b></td>
  </tr>
</table>

<table border="1">
  <tr>
    <td colspan="2"><b>Caso de uso</b>: CU7. Generar factura.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Actor:</b> Representante de taller.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Descripción:</b> El representante de taller generará una factura con el comprobante enviado desde un sistema de pagos externo.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Requerimientos asociados:</b> 10.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Precondición:</b> Un representante solicita patrocinar el taller.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Postcondición:</b> Confirmar pago de factura.</td>
  </tr>
    <tr>
    <td><b>Curso normal</b></td>
    <td><b>Alternativas</b></td>
  </tr>
  <tr>
    <td>1. El representante genera una factura desde el sistema.</td>
    <td></td>
  </tr>
  <tr>
    <td>2. El Sistema solicita al Sistema de Pagos un código de autenticación.</td>
    <td></td>
  </tr>
  <tr>
    <td>3. El sistema recibe el código de autenticación.</td>
    <td></td>
  </tr>
  <tr>
    <td>4. El Sistema añade el código de autenticación a la factura.</td>
    <td></td>
  </tr>
  <tr>
    <td>5. El Sistema envía la factura al representante de taller.</td>
    <td></td>
  </tr>
  <tr>
    <td>6. Fin Caso de Uso.</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"><b>Detalle:</b></td>
  </tr>
</table>

<table border="1">
  <tr>
    <td colspan="2"><b>Caso de uso</b>: CU8. Asignar artesano como miembro confiable.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Actor:</b> Moderador.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Descripción:</b> Permite que las solicitudes de publicación de un artesano sean aceptadas automáticamente.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Requerimientos asociados:</b> 8.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Precondición:</b> El artesano debe estar registrado.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Postcondición:</b> Publicaciones sin restricciones para el artesano.</td>
  </tr>
    <tr>
    <td><b>Curso normal</b></td>
    <td><b>Alternativas</b></td>
  </tr>
  <tr>
    <td>1. El moderador revisa las actividades del artesano.</td>
    <td></td>
  </tr>
  <tr>
    <td>2. El moderador cambia la insignia del artesano a miembro confiable.</td>
    <td></td>
  </tr>
  <tr>
    <td>3. Fin Caso de Uso.</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"><b>Detalle:</b> El miembro confiable puede publicar sin restricciones de aprobación por parte del moderador.</td>
  </tr>
</table>

<table border="1">
  <tr>
    <td colspan="2"><b>Caso de uso</b>: CU9. Avisar vencimiento de patrocinio.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Actor:</b> Sistema de correo.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Descripción:</b> Se enviará a los talleres una alerta cuando falte poco para el vencimiento de su patrocinio.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Requerimientos asociados:</b> 14.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Precondición:</b> El taller debe estar registrado y ser patrocinador del portal.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Postcondición:</b> Representante de taller notificado sobre el vencimiento del patrocinio.</td>
  </tr>
    <tr>
    <td><b>Curso normal</b></td>
    <td><b>Alternativas</b></td>
  </tr>
  <tr>
    <td>1. El sistema tiene almacenado la fecha del último patrocinio.</td>
    <td></td>
  </tr>
  <tr>
    <td>2. Antes del vencimiento, se envía una alerta al sistema de correos.</td>
    <td></td>
  </tr>
  <tr>
    <td>3. El sistema de correo envía un mail al representante de taller involucrado notificando sobre el próximo vencimiento.</td>
    <td></td>
  </tr>
  <tr>
    <td>4. Fin Caso de Uso.</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"><b>Detalle:</b> Se alertará al sistema de correos 72 horas antes del cumplimiento de los 30 días. E mail que recibirán los talleres contendrá el mensaje: "Tu patrocinio vence el [ingresar vencimiento]".</td>
  </tr>
</table>

<table border="1">
  <tr>
    <td colspan="2"><b>Caso de uso</b>: CU10. Buscar talleres en el portal.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Actor:</b> Visitante.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Descripción:</b> Permite buscar un taller en el portal y su ubicación.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Requerimientos asociados:</b> 12.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Precondición:</b> El taller debe estar registrado.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Postcondición:</b> Ver información de comercio.</td>
  </tr>
    <tr>
    <td><b>Curso normal</b></td>
    <td><b>Alternativas</b></td>
  </tr>
  <tr>
    <td>1. El visitante ingresa el nombre de un taller en el buscador del portal.</td>
    <td></td>
  </tr>
  <tr>
    <td>2. El sistema confirma que el taller se encuentra registrado en la base de datos.</td>
    <td>2.1. El sistema no encuentra el taller solicitado y devuelve el mensaje: "No se encontraron resultados". Ir al paso 1.</td>
  </tr>
  <tr>
    <td>3. El portal muestra al visitante la información del taller y sus publicaciones.</td>
    <td></td>
  </tr>
  <tr>
    <td>4. Fin Caso de Uso.</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"><b>Detalle:</b> Las búsquedas en el ortal no distinguen entre minúsculas y mayúsculas. Mínimo se deberán ingresar 3 caracteres para realizar una búsqueda.</td>
  </tr>
</table>

<table border="1">
  <tr>
    <td colspan="2"><b>Caso de uso</b>: CU11. Enviar información de talleres.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Actor:</b> Sistema de catálogo.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Descripción:</b> Se recolecta mensualmente información sobre los talleres y se envía a un sistema externo para generar un catálogo.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Requerimientos asociados:</b> 15, 16.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Precondición:</b> Tener talleres registrados.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Postcondición:</b> Información enviada.</td>
  </tr>
    <tr>
    <td><b>Curso normal</b></td>
    <td><b>Alternativas</b></td>
  </tr>
  <tr>
    <td>1. Se guarda la información sobre los talleres y sus publicaciones.</td>
    <td></td>
  </tr>
  <tr>
    <td>2. Todos los meses, la información es enviada a un sistema externo.</td>
    <td>2.1.  En cado de fallo, <b>ir a CU13</b></td>
  </tr>
  <tr>
    <td>3. Se confirma el envío sin problemas.</td>
    <td></td>
  </tr>
  <tr>
    <td>4.Fin Caso de Uso.</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"><b>Detalle:</b>La información será enviada el primer día de cada mes.</td>
  </tr>
</table>

<table border="1">
  <tr>
    <td colspan="2"><b>Caso de uso</b>: CU12.Buscar productos similares.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Actor:</b> Sistema de ventas</td>
  </tr>
  <tr>
    <td colspan="2"><b>Descripción:</b> Cuando se quiera asignar un precio a algún producto, el sistema brinda una lista de productos similares para que el artesano pueda elegir un valor adecuado.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Requerimientos asociados:</b> 3.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Precondición:</b> La publicación aún no debe estar terminada.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Postcondición:</b> </td>
  </tr>
    <tr>
    <td><b>Curso normal</b></td>
    <td><b>Alternativas</b></td>
  </tr>
  <tr>
    <td>1.Un artesano comienza a crear una publicación.</td>
    <td></td>
  </tr>
  <tr>
    <td>2. El sistema busca productos similares en un sistema de ventas externo.</td>
    <td></td>
  </tr>
  <tr>
    <td>3. El sistema de ventas externo devuelve una lista de productos similares con sus precios.</td>
    <td></td>
  </tr>
  <tr>
    <td>4. El portal presenta la lista al creador de la publicación.</td>
    <td></td>
  </tr>
  <tr>
    <td>5. Fin Caso de Uso.</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"><b>Detalle:</b>La lista presentada será de máximo 5 productos.</td>
  </tr>
</table>

<table border="1">
  <tr>
    <td colspan="2"><b>Caso de uso</b>: CU13. Notificación de fallo.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Actor:</b> Sistema de catálogo.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Descripción:</b> Al fallar el envío de información para el catálogo, se deberá notificar al moderador.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Requerimientos asociados:</b> 20.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Precondición:</b> Fallo en el envío de información.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Postcondición:</b> Moderador notificado de los fallos de envío.</td>
  </tr>
    <tr>
    <td><b>Curso normal</b></td>
    <td><b>Alternativas</b></td>
  </tr>
  <tr>
    <td>1. El sistema recopila el reporta de fallos de envío.</td>
    <td></td>
  </tr>
  <tr>
    <td>2. El sistema envía una notificación al moderador informando los fallos.</td>
    <td></td>
  </tr>
  <tr>
    <td>3. Fin Caso de Uso.</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"><b>Detalle:</b></td>
  </tr>
</table>

<table border="1">
  <tr>
    <td colspan="2"><b>Caso de uso</b>: CU14. Confirmar pago.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Actor:</b> Sistema de pagos.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Descripción:</b> El sistema recibe una factura y confirma el pago por el patrocinio.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Requerimientos asociados:</b> 10, 11.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Precondición:</b> La factura debe tener el código único de comprobante</td>
  </tr>
  <tr>
    <td colspan="2"><b>Postcondición:</b> Pago confirmado.</td>
  </tr>
    <tr>
    <td><b>Curso normal</b></td>
    <td><b>Alternativas</b></td>
  </tr>
  <tr>
    <td>1. Se informa al sistema la fecha de realización del pago y el local donde ocurrió.</td>
    <td></td>
  </tr>
  <tr>
    <td>2. Fin Caso de Uso.</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"><b>Detalle:</b></td>
  </tr>
</table>

<table border="1">
  <tr>
    <td colspan="2"><b>Caso de uso</b>: CU15. Normalizar dirección.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Actor:</b> Sistema de normalización.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Descripción:</b> Al inscribir el taller se envía la dirección a un sistema externo para normalizarla.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Requerimientos asociados:</b> 20</td>
  </tr>
  <tr>
    <td colspan="2"><b>Precondición:</b> El representante debe ingresar la dirección del taller.</td>
  </tr>
  <tr>
    <td colspan="2"><b>Postcondición:</b> Dirección normalizada.</td>
  </tr>
    <tr>
    <td><b>Curso normal</b></td>
    <td><b>Alternativas</b></td>
  </tr>
  <tr>
    <td>1. Se ingresa cale, número, localidad y provincia de la dirección.</td>
    <td></td>
  </tr>
  <tr>
    <td>2. Se normaliza la dirección.</td>
    <td>2.1 Se encuentran varias direcciones posibles y se solicita información más específica. Ir al paso 1.</td>
  </tr>
  <tr>
    <td>3. Fin Caso de Uso.</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"><b>Detalle:</b> La normalización permite evitar inconvenientes con las ubicaciones de los talleres inscriptos.</td>
  </tr>
</table>

[Volver a Tabla de contenidos](#tabla-de-contenidos)

## Diagrama de Casos de uso

<img src="https://github.com/elez95/Portal-Artesanos/blob/main/README%20images/Casos-de-uso.jpg" height = "500">

[Volver a Tabla de contenidos](#tabla-de-contenidos)

## Diagrama Modelo Conceptual

<img src="https://github.com/elez95/Portal-Artesanos/blob/main/README%20images/Modelo-conceptual.jpg" height = "500">

[Volver a Tabla de contenidos](#tabla-de-contenidos)

## Arquitectura del software

La arquitectura tiene como objetivo definir la estructura del sistema. Esta estructura está constituida por componentes (piezas de código) que cumplen ciertas funciones específicas. Estos componentes no están detallados, en su lugar, representan una funcionalidad abstracta de alto nivel, que a su vez concluirá en una o más interacciones con otros componentes del sistema.

Del mismo modo, la arquitectura plantea la solución al los atributos de calidad. Hace tangible las características de escalabilidad, confiabilidad, eficiencia, y modificabilidad, demostrando que se cumple con cada una de ellas.

A continuación, se justificará la organización de los componentes del sistema.

<b>UI ARTESANO:</b> Es la interfaz visual que tiene el artesano. Usa el componente <b>Publicar</b> que provee todo el código para publicar un artículo. Una vez hecha la publicación, se guarda en una base de datos llamada Publicaciones. Un artesano ingresa al sitio con el componente <b>Gestión de artesanos</b>, cuando ingresa sus datos, este componente consulta a la base de datos <b>Artesanos</b> para verificar que esté registrado. La interfaz del artesano también interactúa con un sistema de ventas externo para buscar publicaciones similares a las que el artesano desea publicar.

<b>UI VISITANTE:</b> Es la interfaz visual del visitante. Cuando un visitante quiere registrarse como un artesano, usa el componente <b>Gestión de artesanos</b>, luego sus datos son guardados en la base de datos <b>Artesanos</b>. Un visitante puede buscar artículos usando el componente <b>Consultar artículo</b>, que es una pieza de código que interactúa con la base de datos <b>Publicaciones</b> para mostrar los artículos que desea ver. Del mismo modo, un visitante busca talleres con el componente <b>Buscar taller</b>, este componente consulta a la base de datos <b>Talleres</b>. También, la interfaz interactúa con un <b>Sistema de mapas</b> donde se muestra la ubicación de los talleres.

<b>UI MODERADOR:</b> Es la interfaz visual del moderador. Esta interfaz interactúa con el componente <b>Gestionar</b>, que se encarga de autenticar y aprobar los talleres y publicaciones, también este se relaciona con el componente <b>Gestor de correos</b> en casos de rechazos, el cual se comunica mediante una relación cliente-servidor con el Sistemas de correos para enviarles los correos a los usuarios. Además, asigna como miembro confiable a los artesanos que desee. Todas estas acciones son con las interacciones con las bases de datos <b>Publicaciones, Talleres</b> y <b>Artesanos</b>. El moderador también se relaciona con el componente generar reporte para realizar esta acción en caso de que ocurra algún error con el envío automático.

<b>UI REPRESENTANTE:</b> Es la vista del representante de taller. Interactúa con el componente <b> Gestión de taller</b> que autentica los usuarios y administra el registro de los nuevos talleres para persistir sus datos en el repositorio <b>Talleres</b>, al momento de un registro se realiza una comunicación con el <b>Sistema de normalización</b> para normalizar la dirección del taller. También se comunica con el componente <b>Publicar</b> que es el encargado de dar a conocer los productos y actiidades que el taller desee. Por último, se relaciona con el componente <b>Patrocinar taller</b>, el cual se divide en los componentes <b>Generar factura</b>, que crea la factura para el pago pidiendo un código de autenticación al Sistema de pagos para luego guardarlas en una base de datos llamada Facturas, y el componente <b>Destacar</b>, al cual el Sistemas de pagos le informa los pagos realizados y este escribe en el repositorio de talleres para asignar a un taller como destacado.

Asimismo, se cuenta con dos componentes que se ejecutan de manera automática: relacionado al patrocinio de los talleres, el componente de <b>Vencimiento de patrocinio</b>, que lee el repositorio de facturas e informa mediante el gestor de correos los vencimientos próximos. Finalmente, el componente de <b>Generar reporte</b> es el encargado de recolectar información de los repositorios de Talleres y Publicaciones para enviar esta información al <b>Sistema de revista</b>, estos reportes son guardados en una base de datos llamada <b>Reportes</b> y en caso de ocurrir algún error al momento del envío, estos también son persistidos en el repositorio <b>Errores</b>.

<img src="https://github.com/elez95/Portal-Artesanos/blob/main/README%20images/Arquitectura.jpg" height = "500">

[Volver a Tabla de contenidos](#tabla-de-contenidos)

## Planificación

El presente proyecto fue elaborado mediante el ciclo de vida denominado <b>"Espiral"/b>. Este modelo se orienta a riesgos, lo cual nos permitió atenderlos de forma temprana en cada iteración del ciclo.

Mediante este modelo se dividió el trabajo en "Mini-proyectos" que pretendían atender a los riesgos más importantes, realizando entregas parciales de los mismos que permitieron verificar el camino correcto en el desarrollo del sistema solicitado.

La planificación optada por el equipo para trabajar en el desarrollo del software se basó en los pasos comprendidos en el modelo en Espiral: Determinar los objetivos, identificar y resolver riesgos, evaluar alternativas, desarrollar entregables y verificar que sean correctos, luego continuar con la planificación del siguiente paso.

De esta manera, con la devolución de cada entrega, el equipo pudo evaluar riesgos y detectar errores a tiempo, antes de realizar la entrega completa del proyecto. Esto es de mucha utilidad para asegurarse de que al entregar el proyecto finalizado se sabrá que funcionará y será de acuerdo con lo solicitado.

[Volver a Tabla de contenidos](#tabla-de-contenidos)

## Diagrama de Gantt

El diagrama contiene todas las tareas que se realizaron durante el proyecto, separadas por etapas. Dentro de cada etapa se puede observar el tiempo aproximado que se necesitó en cada tarea. También muestra las dependencias de cada tarea y etapa.

- Análisis de requerimientos: Se comenzó identificando los requisitos y definiendo prioridades. Al mismo tiempo se hacían entrevistas sobre temas poco comprendidos. Se continuó listando los requerimientos y descubriendo los actores involucrados. Por último, se desarrolló los casos de uso. Esto era necesario antes de realizar el diagrama de casos de uso.
- Desarrollo del modelo conceptual: Se empezó asociando todas las entidades con sus actores. Luego se presentó un boceto con las relaciones entre actores y entidades. Después, se encontró toda la información que debe tener cada entidad y el tipo de dato que se iba a usar en la futura codificación. Por último, se diagramó el modelo conceptual.
- Creación de arquitectura: Se analizó los recursos que van a ser necesarios a nivel hardware y software. Se identificó los escenarios de los actores y las entidades. Se reconoció las herramientas que utilizará cada entidad (interfaz visual, controladores). Por último, se realizó la arquitectura.
- Prueba de concepto: Se codificó las funcionalidades a su vez que se hacían las pruebas.

<img src="https://github.com/elez95/Portal-Artesanos/blob/main/README%20images/diagrama-gantt.jpg" height = "400">

[Volver a Tabla de contenidos](#tabla-de-contenidos)

## Logros

Se pueden destacar muchos puntos importantes acerca de la experiencia ganada en este proyecto, comenzando por el trabajo en equipo y la administración de responsabilidades; la profundización y puesta en práctica de el análisis de requerimientos, arquitectura, prueba de concepto y planificación de el desarrollo del software; la utilización de herramientas y técnicas como diagramas UML para los casos de uso, modelo conceptual, arquitectura y diagrama de Gantt. Se puede concluir el valor fundamental de una robusta documentación para un buen desarrollo, mantenimiento y evolución del software.
