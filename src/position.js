export default function position(elem) {
    if (!elem) {
        return;
    }

    return {
        left: elem.offsetLeft,
        top: elem.offsetTop
    };
}
