import Link from "next/link";

export default async function Page() {

    const temp = await new Promise(t => setTimeout(t, 5000))

    return <div>
        <p>Test Page</p>
        <Link href="/contact">back</Link>
        <br />
        <Link href="/contact/test/deep">deep</Link>
    </div>
}