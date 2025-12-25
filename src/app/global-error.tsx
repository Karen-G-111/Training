'use client' // Границы ошибок должны быть клиентскими компонентами

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    console.log(error)
    return (
        // global-error должен включать теги html и body
        <html>
            <body>
                <h2>Что-то пошло не так!</h2>
                <button onClick={() => reset()}>Попробовать снова</button>
            </body>
        </html>
    )
}