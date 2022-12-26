import {
	App,
	Editor,
	loadPdfJs,
	MarkdownView,
	Modal,
	Notice,
	Plugin,
	PluginSettingTab,
	Setting,
	TFile,
	View,
	ViewCreator,
	WorkspaceLeaf,
} from "obsidian";
import { AnnotationView, ANNOTATION_VIEW_TYPE } from "src/views/AnnotationView";

interface ObsidianAnnotatorSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: ObsidianAnnotatorSettings = {
	mySetting: "default",
};

export default class ObsidianAnnotator extends Plugin {
	settings: ObsidianAnnotatorSettings;
	openedfile: TFile | null = null;

	async activateView() {
		this.app.workspace.detachLeavesOfType(ANNOTATION_VIEW_TYPE);

		await this.app.workspace.getLeaf().setViewState({
			type: ANNOTATION_VIEW_TYPE,
			active: true,
		});

		this.app.workspace.revealLeaf(
			this.app.workspace.getLeavesOfType(ANNOTATION_VIEW_TYPE)[0]
		);
	}

	async onload() {
		// Open pdf file in registered view
		this.registerEvent(
			this.app.workspace.on("file-open", (file) => {
				if (file?.extension === "pdf") {
					this.openedfile = file;
					this.activateView();
				}
			})
		);

		// This register a view
		this.registerView(
			ANNOTATION_VIEW_TYPE,
			
			(leaf) => new AnnotationView(leaf, this.openedfile)
		);

		// Open the view by clicking on ribbon icon
		this.addRibbonIcon("dice", "Annotation View", () => {
			this.activateView();
		});
	}

	async onunload() {
		// Clean up leaf
		this.app.workspace.detachLeavesOfType(ANNOTATION_VIEW_TYPE);
	}
}
