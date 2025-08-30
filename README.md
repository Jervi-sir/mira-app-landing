### db 

TURSO_CONNECTION_URL=
TURSO_AUTH_TOKEN=
NEXT_IGNORE_TYPE_CHECK=true

turso sqlite

https://app.turso.tech/jervi-sir/databases/miraapp/data

npx drizzle-kit generate
npx drizzle-kit migrate
npx drizzle-kit push




### middleware if needed
```
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Supported locales
  locales: ['en', 'fr', 'ar', 'dz'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
```