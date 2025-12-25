"use client"

import { useState } from "react";

export default function Page() {

    const [result, setResult] = useState<string>("");

    async function createUsersTable() {
        setResult("Отправляю запрос...");

        try {
            const res = await fetch("/api/dev/create-users-table", {
                method: "POST",
            });
            console.log(res)

            const text = await res.text();
            let data: any = null;
            try {
                data = JSON.parse(text); // пробуем превратить в JSON
            } catch {
                // если не JSON — оставим text как есть
            }

            if (!res.ok) {
                setResult(
                    `HTTP ${res.status}\n` +
                    (data?.error ? `Ошибка: ${data.error}` : `Ответ:\n${text}`)
                );
                return;
            }

            setResult(`Успех: ${JSON.stringify(data)}`);
        } catch (e: any) {
            setResult(`Сетевая ошибка: ${e?.message ?? "Unknown error"}`);
        }
    }

    return (<div>
        <h1>Create Table</h1>
        <button onClick={createUsersTable}>Click to create</button>
        <p>{result}</p>
    </div>)
}