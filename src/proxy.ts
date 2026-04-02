import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          response = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Role-based protection
  const userRole = user?.app_metadata?.role || user?.user_metadata?.role || 'buyer'
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
  const isProfileRoute = request.nextUrl.pathname.startsWith('/profile') || request.nextUrl.pathname.startsWith('/dashboard')

  // Protect /admin (Agents and Admins only)
  if (isAdminRoute) {
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    if (userRole !== 'agent' && userRole !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Protect /profile and /dashboard
  if (!user && isProfileRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
