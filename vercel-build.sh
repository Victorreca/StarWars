#!/bin/bash
echo "Creando environment.ts en Vercel..."

cat <<EOT > src/environments/environment.ts
export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: '${API_KEY}',
    authDomain: '${AUTH_DOMAIN}',
    databaseURL: '${DATABASE_URL}',
    projectId: '${PROJECT_ID}',
    storageBucket: '${STORAGE_BUCKET}',
    messagingSenderId: '${MESSAGING_SENDER_ID}',
    appId: '${APP_ID}'
  }
};
EOT
