export function mockFetchEvent(id) {
  return new Promise((resolve, reject) => {
    try {
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
    } catch (e) {
      console.log(e);
    }
  });
}

export function mockFetchEventWithError(id, error) {
  return new Promise((resolve, reject) => {
    reject(error);
  });
}
