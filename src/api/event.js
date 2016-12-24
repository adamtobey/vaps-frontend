export function mockFetchEvent(id) {
  return new Promise((resolve, reject) => {
  	let nowDate = new Date(Date.now());
  	let tomorrowDate = new Date();
    let event = {
      title: "Event " + id,
      body: "A fun little test event.",
      startDate: nowDate,
      endDate: tomorrowDate,
      basePrice: 12.34,
      memberPrice: 10.21,
      studentPrice: 9.00
    };
    setTimeout(() => resolve(event), 500);
  });
}

export function mockFetchEventWithError(id, error="default") {
  return new Promise((resolve, reject) => {
    reject(error);
  });
}

export function mockUpdateEvent(id, event) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(event), 500);
  });
}

export function mockUpdateEventWithError(id, event, error="default") {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(error), 500);
  });
}
