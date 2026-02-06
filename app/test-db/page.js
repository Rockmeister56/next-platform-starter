'use client'
import { createClient } from '@supabase/supabase-js'

export default function TestDB() {
  async function testConnection() {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
    
    const { data, error } = await supabase
      .from('organizations')
      .select('*')
      .limit(1)
    
    if (error) alert('Error: ' + error.message)
    else alert('✅ Connected! Found ' + data.length + ' organizations')
  }

  return (
    <div style={{ padding: 50 }}>
      <h1>Database Connection Test</h1>
      <button onClick={testConnection}>Test Supabase</button>
    </div>
  )
}