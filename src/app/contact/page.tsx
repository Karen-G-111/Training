import LoadingIndicator from "comp/loading-indicator";
import Link from "next/link";

export default function Page() {

    return (<div>
        <p>page of Contact</p>
        <div>
            <Link href="contact/test">test <LoadingIndicator /></Link>
            <Link href="contact/test2">test 2</Link>
        </div>
    </div>)
}