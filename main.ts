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
		// This register a view
		this.registerView(
			ANNOTATION_VIEW_TYPE,
			(leaf) => new AnnotationView(leaf)
		);

		// Aprire la view cliccando sulla ribbon icon
		this.addRibbonIcon("dice", "Annotation View", () => {
			this.activateView();
		});
	}

	async onunload() {
		this.app.workspace.detachLeavesOfType(ANNOTATION_VIEW_TYPE);
	}
}
