import { useEffect, useMemo, useState } from "preact/hooks"

const FINAL_DATE = new Date('2026-08-29').getTime()

const toZeroPadded = (value: number) => value.toString().padStart(2, '0')

export const Countdown = () => {
    const [now, setNow] = useState(Date.now())
    const parsedDIff = useMemo(() => {
        const diff = FINAL_DATE - now
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)
        return {
            days: toZeroPadded(days),
            hours: toZeroPadded(hours),
            minutes: toZeroPadded(minutes),
            seconds: toZeroPadded(seconds),
        }
    }, [now])

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(Date.now())
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    

    return (
        <time className="countdown text">
            <header className="countdown-header">
                <span className="countdown-number">{parsedDIff.days}</span>
                <span className="countdown-separator">:</span>
                <span className="countdown-number">{parsedDIff.hours}</span>
                <span className="countdown-separator">:</span>
                <span className="countdown-number">{parsedDIff.minutes}</span>
                <span className="countdown-separator">:</span>
                <span className="countdown-number">{parsedDIff.seconds}</span>
            </header>
            <caption className="countdown-caption">
                <span className="countdown-caption-item">Дней</span>
                <span className="countdown-caption-item">Часов</span>
                <span className="countdown-caption-item">Минут</span>
                <span className="countdown-caption-item">Секунд</span>
            </caption>
        </time>
    )
}