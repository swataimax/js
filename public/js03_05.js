const fmt1 = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});
document.write(fmt1.format(new Date()) + "<br>");

const fmt2 = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "narrow",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short"
});
document.write(fmt2.format(new Date()) + "<br>");

options = {
    dateStyle: "full",
    timeStyle: "full"
};
const date = new Date(2026, 1, 2, 3, 4, 5, 678);
const fmt3 = new Intl.DateTimeFormat("ja-JP", options);
document.write(fmt3.format(date) + "<br>");
