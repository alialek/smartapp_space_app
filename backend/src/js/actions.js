function loadDay(dateNumber, context) {
  addAction(
    {
      type: "load_day",
      date: dateNumber,
    },
    context,
    "udovolstvie",
  );
}

function loadPreviousDay(context) {
  addAction(
    {
      type: "load_previous_day",
    },
    context,
    "udovolstvie",
  );
}

function loadNextDay(context) {
  addAction(
    {
      type: "load_next_day",
    },
    context,
    "udovolstvie",
  );
}
