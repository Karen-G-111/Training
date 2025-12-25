import { POST } from "@/lib/createtable";

export default async function DevCreatePage() {
    await POST();

    return (
        <div style={{ padding: 16 }}>
            <h1>Dev: create users table</h1>
            <p>Таблица users создана (или уже существовала).</p>
        </div>
    );
}
