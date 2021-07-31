function loadDay(dateNumber, context) {
    addAction({
        type: "load_day",
        date: dateNumber
    }, context, "udovolstvie");
}
