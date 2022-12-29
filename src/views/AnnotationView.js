import { __awaiter } from "tslib";
import { ItemView } from "obsidian";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { ReactAnnotationView } from "../react/views/ReactAnnotationView";
export const ANNOTATION_VIEW_TYPE = "Annotation-View";
export class AnnotationView extends ItemView {
    constructor(leaf, file) {
        super(leaf);
        this.root = createRoot(this.containerEl.children[1]);
        this.file = file;
    }
    getViewType() {
        return ANNOTATION_VIEW_TYPE;
    }
    getDisplayText() {
        return "Annotation view";
    }
    onOpen() {
        return __awaiter(this, void 0, void 0, function* () {
            this.root.render(React.createElement(React.StrictMode, null,
                React.createElement(ReactAnnotationView, { file: this.file })));
        });
    }
    onClose() {
        return __awaiter(this, void 0, void 0, function* () {
            this.root.unmount();
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbm5vdGF0aW9uVmlldy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXdCLE1BQU0sVUFBVSxDQUFDO0FBQzFELE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRS9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV6RSxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxpQkFBaUIsQ0FBQztBQUV0RCxNQUFNLE9BQU8sY0FBZSxTQUFRLFFBQVE7SUFJM0MsWUFBWSxJQUFtQixFQUFFLElBQVc7UUFDM0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBSmIsU0FBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBSy9DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ2pCLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxvQkFBb0IsQ0FBQztJQUM3QixDQUFDO0lBRUQsY0FBYztRQUNiLE9BQU8saUJBQWlCLENBQUM7SUFDMUIsQ0FBQztJQUVLLE1BQU07O1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ2Ysb0JBQUMsS0FBSyxDQUFDLFVBQVU7Z0JBQ2hCLG9CQUFDLG1CQUFtQixJQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFJLENBQ3RCLENBQ25CLENBQUM7UUFDSCxDQUFDO0tBQUE7SUFFSyxPQUFPOztZQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckIsQ0FBQztLQUFBO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJdGVtVmlldywgVEZpbGUsIFdvcmtzcGFjZUxlYWYgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyByb290Q2VydGlmaWNhdGVzIH0gZnJvbSBcInRsc1wiO1xuaW1wb3J0IHsgUmVhY3RBbm5vdGF0aW9uVmlldyB9IGZyb20gXCIuLi9yZWFjdC92aWV3cy9SZWFjdEFubm90YXRpb25WaWV3XCI7XG5cbmV4cG9ydCBjb25zdCBBTk5PVEFUSU9OX1ZJRVdfVFlQRSA9IFwiQW5ub3RhdGlvbi1WaWV3XCI7XG5cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uVmlldyBleHRlbmRzIEl0ZW1WaWV3IHtcblx0cm9vdCA9IGNyZWF0ZVJvb3QodGhpcy5jb250YWluZXJFbC5jaGlsZHJlblsxXSk7XG5cdGZpbGU6IFRGaWxlXG5cblx0Y29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgZmlsZTogVEZpbGUpIHtcblx0XHRzdXBlcihsZWFmKTtcblx0XHR0aGlzLmZpbGUgPSBmaWxlXG5cdH1cblxuXHRnZXRWaWV3VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBBTk5PVEFUSU9OX1ZJRVdfVFlQRTtcblx0fVxuXG5cdGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiQW5ub3RhdGlvbiB2aWV3XCI7XG5cdH1cblxuXHRhc3luYyBvbk9wZW4oKSB7XG5cdFx0dGhpcy5yb290LnJlbmRlcihcblx0XHRcdDxSZWFjdC5TdHJpY3RNb2RlPlxuXHRcdFx0XHQ8UmVhY3RBbm5vdGF0aW9uVmlldyBmaWxlPXt0aGlzLmZpbGV9IC8+XG5cdFx0XHQ8L1JlYWN0LlN0cmljdE1vZGU+XG5cdFx0KTtcblx0fVxuXG5cdGFzeW5jIG9uQ2xvc2UoKSB7XG5cdFx0dGhpcy5yb290LnVubW91bnQoKTtcblx0fVxufVxuIl19