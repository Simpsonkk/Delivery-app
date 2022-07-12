export async function sendOrder(order) {
  await fetch('http://localhost:3001/orders', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
  },
    body: JSON.stringify(order),
  });
}