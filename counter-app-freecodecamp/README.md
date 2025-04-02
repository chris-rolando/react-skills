# Counter App

Esta es una aplicación simple de contador de clics que le permite a los usuarios incrementar, decrementar y reiniciar el contador.

## Características

- **Incrementar:** Incrementa el contador en 1.
- **Decrementar:** Decrementa el contador en 1.
- **Reiniciar:** Reinicia el contador a 0.

## Tecnologías utilizadas

**React:** Para la construcción de la interfaz de usuario.

**Módulos CSS:** Para el aislamiento de estilos de componentes.

## Conceptos aplicados

**Componentes:** La aplicación está construida utilizando componentes React reutilizables como `Btn`, `Counter` y `Title`.

**Props:** Los componentes reciben datos a través de props.

**Hooks:** Se utiliza el hook `useState` para gestionar el estado del componente `App`.

**Eventos:** Los componentes `Btn` utilizan el evento `onClick` para llamar a las funciones que modifican el estado del contador.

**PropTypes:** Se utiliza la librería `prop-types` para validar los tipos de props que reciben los componentes. Esto ayuda a prevenir errores y a mejorar la mantenibilidad del código.

## Contribución

Las contribuciones son bienvenidas. Si encuentras un error o tienes una sugerencia, por favor abre un issue o envía un pull request.

## Instalación

1.  Clona el repositorio desde GitHub:

    ```bash
    git clone [https://github.com/chris-rolando/react-skills.git](https://github.com/chris-rolando/react-skills.git)
    ```

2.  Navega al directorio del proyecto:

    ```bash
    cd react-skills
    ```

3.  Instala las dependencias utilizando npm o yarn:

    - Con npm:

      ```bash
      npm install
      ```

    - Con yarn:

      ```bash
      yarn add
      ```

4.  Ejecuta la aplicación:

    - Con npm:

      ```bash
      npm start
      ```

    - Con yarn:

      ```bash
      yarn start
      ```

5.  Abre tu navegador y visita `http://localhost:3000` para ver la aplicación.

## Autor

Chris-Rolando
