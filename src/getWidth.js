export default function getWidth(elem, defaultValue = 0) {
    return elem && elem.offsetHeight || defaultValue;
}
