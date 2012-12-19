function isPalidrome(text) {
    if (text.length <= 1) { return true; }
    if (text.charAt(0) != text.charAt(text.length - 1)) {return false; }
    return isPalidrome(text.substr(1, text.length - 2));
}