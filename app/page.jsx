'use client'  // ADD THIS LINE

export default function Home() {
  return (
    <div style={{ padding: 50, fontFamily: 'Arial' }}>
      <h1>✅ VIDGUIDE AI - FROM GITHUB DESKTOP - UPDATED!</h1>
      <p>This is your new workflow: Edit → Commit → Push → Netlify updates.</p>
      <button onClick={() => alert('GitHub Desktop workflow is working!')}>
        Test Button
      </button>
    </div>
  )
}