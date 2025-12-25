'use client'

import { useLinkStatus } from 'next/link'
import style from "./loading.module.css"

export default function LoadingIndicator() {
    const { pending } = useLinkStatus()
    return pending ? (
        <div role="status" aria-label="Loading" className={style.spinner} />
    ) : null
}