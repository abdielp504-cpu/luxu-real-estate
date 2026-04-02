# Spec: Track 02 - Supabase Integration

## Objetivo
Configurar la infraestructura de backend utilizando Supabase, estableciendo la conexión con el proyecto, definiendo el esquema de base de datos inicial y preparando las utilidades de cliente para Next.js.

## Alcance
- Vinculación del proyecto local con una instancia de Supabase.
- Creación de migraciones para las tablas base: `profiles`, `properties`, e `inquiries`.
- Configuración de políticas de seguridad (RLS) iniciales.
- Generación de tipos TypeScript basados en el esquema de la base de datos.
- Implementación de clientes de Supabase (Client y Server) en `src/lib/supabase`.

## Entregables
- Archivo `.env.local` con las credenciales de Supabase (URL y Anon Key).
- Directorio `supabase/migrations` con el esquema inicial.
- Archivo `types/supabase.ts` con las definiciones generadas.
- Utilidades de cliente en `src/lib/supabase/client.ts` y `src/lib/supabase/server.ts`.
