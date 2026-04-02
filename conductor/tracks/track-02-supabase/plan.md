# Plan: Track 02 - Supabase Integration

## Paso 1: Inicialización y Vínculo
1. Ejecutar `npx supabase init` para inicializar la carpeta local.
2. Solicitar al usuario el `Project ID` de Supabase para ejecutar `npx supabase link --project-ref <project-id>`.

## Paso 2: Diseño del Esquema (Migraciones)
1. Crear una nueva migración: `npx supabase migration new initial_schema`.
2. Definir en SQL:
    - Tabla `profiles`: Extendiendo `auth.users`.
    - Tabla `properties`: Datos de los inmuebles (título, precio, ubicación, imágenes, etc.).
    - Tabla `inquiries`: Mensajes de contacto vinculados a propiedades.
3. Aplicar migraciones localmente y sincronizar con el remoto: `npx supabase db push`.

## Paso 3: Configuración de Cliente y Tipos
1. Generar tipos: `npx supabase gen types typescript --linked > types/supabase.ts`.
2. Crear `src/lib/supabase/client.ts` para componentes de cliente.
3. Crear `src/lib/supabase/server.ts` para Server Components y Actions (usando `@supabase/ssr`).

## Paso 4: Variables de Entorno
1. Configurar `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` en `.env.local`.

## Validación
- Confirmar que las tablas aparecen en el dashboard de Supabase.
- Verificar que el cliente de Supabase puede realizar una consulta de prueba sin errores de autenticación o tipos.
