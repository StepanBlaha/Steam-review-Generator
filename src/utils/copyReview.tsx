export const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Review copied to clipboard")
}
