import { useEffect, useRef, useState } from 'react'

export default function useReveal(threshold = 0.15) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!ref.current) return
        const el = ref.current
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true)
                        obs.unobserve(el)
                    }
                })
            }, { threshold }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [ref, threshold])

    return [ref, visible]
}