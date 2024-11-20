import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mmsilkuckdauwpfkxdpn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tc2lsa3Vja2RhdXdwZmt4ZHBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4MzYzMzMsImV4cCI6MjA0NzQxMjMzM30.vcnBY-A36U0h59_hFBkIPjAH0Ols4E-FFr5B8smaU8c'
export const supabase = createClient(supabaseUrl, supabaseKey)