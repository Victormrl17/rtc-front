# RTC Frontend

Este proyecto es una aplicación frontend desarrollada con **React**, **TypeScript** y **Vite**. Proporciona funcionalidades para gestionar buses y marcas, incluyendo la creación, edición y eliminación de registros.

## Tecnologías utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Vite**: Herramienta de desarrollo rápida para proyectos frontend.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.
- **React Router**: Manejo de rutas en la aplicación.
- **Tailwind CSS**: Framework CSS para estilos rápidos y responsivos.

---

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/rtc-front.git
   cd rtc-front
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura la URL base de la API en el archivo `src/api/api.ts` si es necesario:

   ```typescript
   const API_BASE_URL = 'http://localhost:8080';
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre la aplicación en tu navegador en [http://localhost:5173](http://localhost:5173).

---

## Scripts disponibles

En el directorio del proyecto, puedes ejecutar:

- **`npm run dev`**: Inicia el servidor de desarrollo.
- **`npm run build`**: Construye la aplicación para producción.
- **`npm run preview`**: Previsualiza la aplicación construida.
- **`npm run lint`**: Ejecuta ESLint para verificar errores de código.

---

## Estructura del proyecto

```plaintext
src/
├── api/                # Servicios para interactuar con la API
├── components/         # Componentes reutilizables
├── pages/              # Páginas principales de la aplicación
├── services/           # Servicios específicos (e.g., busService.ts)
├── types/              # Definiciones de tipos TypeScript
├── App.tsx             # Configuración de rutas principales
├── main.tsx            # Punto de entrada de la aplicación
├── index.css           # Estilos globales
```

---

## Funcionalidades principales

### Gestión de Buses
- **Crear un bus**: Formulario para registrar un nuevo bus.
- **Editar un bus**: Modal para actualizar la información de un bus existente.
- **Eliminar un bus**: Botón para eliminar un bus.

### Gestión de Marcas
- **Crear una marca**: Formulario para registrar una nueva marca.
- **Editar una marca**: Botón para actualizar el nombre de una marca.
- **Eliminar una marca**: Botón para eliminar una marca.

### Navegación
- **Página principal**: Acceso a las funcionalidades principales.
- **Regresar a la página anterior**: Botón para volver a la página previa.

---

## Endpoints de la API

Asegúrate de que la API esté corriendo en `http://localhost:8080`. Los endpoints utilizados son:

### Buses
- **GET** `/bus`: Obtiene la lista de buses.
- **POST** `/bus`: Crea un nuevo bus.
- **PUT** `/bus/:id`: Actualiza un bus existente.
- **DELETE** `/bus/:id`: Elimina un bus.

### Marcas
- **GET** `/marca`: Obtiene la lista de marcas.
- **POST** `/marca`: Crea una nueva marca.
- **PUT** `/marca/:id`: Actualiza una marca existente.
- **DELETE** `/marca/:id`: Elimina una marca.

---

## Estilo de código

Este proyecto utiliza **ESLint** y **Prettier** para mantener un código limpio y consistente. Puedes ejecutar el siguiente comando para verificar errores de linting:

```bash
npm run lint
```

---

## Contribuciones

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

---

## Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

---

## Autor

Desarrollado por **Victor**. Si tienes preguntas o sugerencias, no dudes en contactarme.

---

### Notas adicionales

- Asegúrate de que el backend esté corriendo antes de iniciar la aplicación.
- Si necesitas cambiar el puerto de desarrollo, edita el archivo `vite.config.ts`.
