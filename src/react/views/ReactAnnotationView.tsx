import * as React from "react";
import { useEffect } from "react";
import { Document } from "react-pdf";

import { TFile } from "obsidian";

export function ReactAnnotationView(props: { file: TFile | null }) {
	useEffect(() => {
		console.log(props.file);
	});

	return (
		<>
			<Document>
				<h1>Questa è la view creata!</h1>
			</Document>
		</>
	);
}
