import { testAction } from "action/action";

export default function Page() {


    return (<div>
        <form action={testAction}>
            <input name="karen" />
            <button type="submit">click me</button>
        </form>
    </div>)
}