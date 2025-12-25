import { use } from "react"

export default function Dots({ params }) {

    const val = use(params)
    console.log(val)

    return <p>Something</p>
}