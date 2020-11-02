# Examen React - Breaking Bad Wiki

Manuel López Camarena - 2020

## Cómo arrancar el proyecto

El proyecto se puede arrancar con el comando estándar para cualquier aplicación en React.

### `npm run start`

Arrancará la aplicación en [http://localhost:3000](http://localhost:3000), para verlo desde el navegador.

## Requisitos

Componentes funcionales -> Casi la totalidad de páginas y componentes de la aplicación.

Hooks y hooks personalizados -> En el HoC para conectar a Redux, hooks personalizados en la carpeta hooks, useHistory y useState en varios.

Componentes de clase con uso de su ciclo de vida. -> Componente CharPortrait [CICLOS DE VIDA NO USADOS]

High order component -> En el spoilerMode y un HoC para conectar a la store de Redux.

Provider (el de react-router no cuenta) -> SpoilerMode, tapa todos los posibles spoilers.

Algun tipo de render props -> En el componente CharPortrait, enviada desde CharDetails.

React router. -> En App.js

Formulario controlado -> En formulario de búsqueda, que se puede copiar la URL de la búsqueda y te llevará a los resultados igual, tal como comentó José Francisco.

Control de errores y carga de datos -> En casi toda la aplicación, hay llamadas a la API en las que los datos eran inconsistentes, está comentado en los Hooks personalizados de las Quotes y en la saga de los personajes para el death count.

## Requisitos extra cumplidos.
Uso de Redux y Redux Saga.

Uso de react-bootstrap para la interfaz de usuario.

Componentes desacoplados lo máximo que he podido.

Reutilización máxima de los datos y llamadas a API minimizadas. **-IMPORTANTE, VER ABAJO-**

El ranking de asesinos puede invertir el orden.

Aparecen las muertes de los personajes en los detalles del episodio.

## Reutilización de datos, minimizar llamadas a API y HoC Redux

Para minimizar las llamadas a la API, cuando entro en detalles de episodios o personajes, el episodio o personaje en cuestión es filtrado de los datos que haya en el estado, en vez de realizar una petición a la API más.

Esto me obligaba a tener el estado cargado completamente en todo momento, por si accedía a la aplicación desde una ruta que me llevase a los detalles del personaje, por ejemplo, evidentemente comprobando si el estado no estaba ya cargado. Por lo que realicé un HoC que me conectaba a la store de Redux y triggeaba las acciones al iniciarlo. Con este HoC envolví todas las páginas que necesitasen los datos del estado para funcionar.

* No envolví la página Assassins porque el estado que usa es realmente una lista diferente (ordenada) a la del store, sólo para mostrar.
* Hago llamadas a la API en los hooks personalizados para así poder tener alguno, por eso no están también en el HoC.

También quiero comentar el caso del contador de muertes de los personajes, me pareció importante tenerlo como un campo más de cada personaje desde el inicio, así que en la saga donde hago la petición, hago la llamada correspondiente para cada personaje a la API del death count, sé que esto puede ralentizar la aplicación al inicio, pero hacía falta para el apartado de asesinos y conseguía mayor fluidez después de la carga inicial. Pienso que el Death Count no debería estar en una endpoint separado de los personajes en sí, ya que es solo un campo y todos lo tienen, aunque sea 0.

En definitiva, me he tomado al pie de la letra de lo de reutilizar los datos, espero que no sea demasiado ineficiente, porque, aunque en la primera carga de datos la aplicación sea algo lenta, una vez el estado está cargado, es súper rápida.