// Single helper to trigger client-side download of the resume PDF.
// Strategy:
// 1. Prefer a bundled import (works in dev and production when the file lives in src/assets).
// 2. If import isn't available or fails, fall back to fetching '/resume.pdf' from public/.

// Prefer the bundled asset in src/assets (the file currently exists at that path).
import resumeUrl from '../assets/Krina Khunt Resume.pdf'
let importedResumeUrl = resumeUrl

export default async function downloadResume(filename = 'Krina_Khunt_Resume.pdf') {
    // If we have a bundled URL available at build time, use it first.
    if (importedResumeUrl) {
        try {
            const a = document.createElement('a')
            a.href = importedResumeUrl
            a.setAttribute('download', filename)
            document.body.appendChild(a)
            a.click()
            a.remove()
            return
        } catch (err) {
            // continue to fetch fallback
            console.warn('Bundled resume download failed, falling back to fetch method.', err)
        }
    }

    // Fallback: try to fetch from /resume.pdf (place your file in public/resume.pdf)
    try {
        const res = await fetch('/resume.pdf')
        if (!res.ok) throw new Error('Failed to fetch resume')

        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        a.remove()
        URL.revokeObjectURL(url)
        return
    } catch (err) {
        // Last resort: open the public URL in a new tab so user can download manually
        try {
            window.open('/resume.pdf', '_blank', 'noopener')
        } catch (openErr) {
            console.error('Unable to download or open resume:', err, openErr)
        }
    }
}