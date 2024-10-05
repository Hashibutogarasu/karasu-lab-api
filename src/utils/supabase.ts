import { Database } from '@/types/supabasetype'
import { Auth0Client } from '@auth0/auth0-spa-js'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { createClient } from '@supabase/supabase-js'

export const auth0 = new Auth0Client({
  domain: process.env.AUTH0_DOMAIN!,
  clientId: process.env.AUTH0_CLIENT_ID!,
  authorizationParams: {
    redirect_uri: process.env.NEXT_PUBLIC_AUTH_URL! + '/api/auth/callback',
  },
});

export const supabase = createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
  accessToken: async () => {
    const accessToken = await auth0.getTokenSilently();
    return accessToken;
  },
})


export const supabaseClientSide = createClientComponentClient();