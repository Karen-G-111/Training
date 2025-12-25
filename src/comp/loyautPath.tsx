"use client"

import { useSelectedLayoutSegments } from "next/navigation"

export default function PathToLayout() {

    const searchParams = useSelectedLayoutSegments()
    console.log(searchParams)

    return (<div>
        <p>Info</p>
    </div>)
}