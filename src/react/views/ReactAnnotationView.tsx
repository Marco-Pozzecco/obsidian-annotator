import * as React from "react";
import { useEffect } from "react";

import { loadPdfJs, TFile } from "obsidian";

export function ReactAnnotationView(props: {file: TFile | null;}) {

	useEffect(() => {
		console.log(props.file);
	});

	return (
		<>
			<div>
				<h1>Questa è la view creata!</h1>
			</div>
		</>
	);
}
