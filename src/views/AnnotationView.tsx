import { ItemView, WorkspaceLeaf } from "obsidian";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { rootCertificates } from "tls";
import { ReactAnnotationView } from "../react/views/ReactAnnotationView";

export const ANNOTATION_VIEW_TYPE = "Annotation-View";

export class AnnotationView extends ItemView {
	
	root = createRoot(this.containerEl.children[1]);

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
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
				<ReactAnnotationView />
			</React.StrictMode>
		);
	}

	async onClose() {
		this.root.unmount()
	}
}
