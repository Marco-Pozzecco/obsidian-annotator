import * as React from "react";
import { useEffect } from "react";

import { loadPdfJs } from "obsidian"

export function ReactAnnotationView() {
    useEffect(() => {
        const pdf = loadPdfJs();
        console.log(pdf)
    })

    return (
        <>
            <div>
                <h1>Questa è la view creata!</h1>
            </div>
        </>
    )
}
