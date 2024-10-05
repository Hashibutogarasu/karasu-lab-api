// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const microcmsclient = createClient({
  serviceDomain: 'service-domain',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
});