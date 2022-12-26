import * as React from "react";
import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";

import { TFile, loadPdfJs } from "obsidian";



export function ReactAnnotationView(props: { file: TFile }) {
	const [numPages, setNumPages] = useState<number | null>(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess() {
		setNumPages(numPages);
	}

	useEffect(() => {
		// console.log(app.vault.getResourcePath(props.file));
		(async () => {
			await loadPdfJs()
				.then((res) => console.log(res.PDFWorker.getWorkerSrc()))
				.catch((e) => console.log(e));
		})();
	}, []);

	return (
		<>
			<Document file={app.vault.getResourcePath(props.file)}>
				<Page pageNumber={1} />
			</Document>
		</>
	);
}
