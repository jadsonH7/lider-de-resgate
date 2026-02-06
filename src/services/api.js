export async function salvarRegistroNoDrive(payload) {
  await fetch(
    "https://script.google.com/macros/s/AKfycbzXRPmvRV9io343uDYPTG9A7kKTtOuID-K6Lv8QGCSqodYGqBSzzbSZbJFdnio-XUvCUA/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  return true;
}