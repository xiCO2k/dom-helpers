export default function ignoreSelection() {
    if (document.selection) {
        document.selection.empty();
        return;
    }

    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    }
}
