import { ItemView, TFile, WorkspaceLeaf } from "obsidian";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { rootCertificates } from "tls";
import { ReactAnnotationView } from "../react/views/ReactAnnotationView";

export const ANNOTATION_VIEW_TYPE = "Annotation-View";

export class AnnotationView extends ItemView {
	root = createRoot(this.containerEl.children[1]);
	file: TFile

	constructor(leaf: WorkspaceLeaf, file: TFile) {
		super(leaf);
		this.file = file
	}

	getViewType(): string {
		return ANNOTATION_VIEW_TYPE;
	}

	getDisplayText(): string {
		return "Annotation view";
	}

	async onOpen() {
		this.root.render(
			<React.StrictMode>
				<ReactAnnotationView file={this.file} />
			</React.StrictMode>
		);
	}

	async onClose() {
		this.root.unmount();
	}
}
