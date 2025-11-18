## Edge Function ToDO

supabase projects list

supabase link --project-ref YOUR_PROJECT_ID

If your function uses env vars (e.g., API keys), add them locally in ./supabase/functions/.env first:  

API_KEY=your-secret-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key


supabase secrets set --env-file ./supabase/functions/.env

supabase functions deploy hello-world