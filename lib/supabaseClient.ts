import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://pdmbhieeuqsnohluopoq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkbWJoaWVldXFzbm9obHVvcG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY4NTE3MTksImV4cCI6MTk5MjQyNzcxOX0.Qfj4IL2MZicL49YI5-0pAEavIcx1xpe5f2TCBdOfLSI')

export {
  supabase
}