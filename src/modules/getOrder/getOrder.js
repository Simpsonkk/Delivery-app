export async function sendOrder(order) {
  await fetch('http://localhost:7000/api/orders', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
}
