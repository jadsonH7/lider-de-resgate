export async function salvarRegistroNoDrive(payload) {
  await fetch(
    "https://script.google.com/macros/s/AKfycbwZOLOP6SV9B-ALrGdvdzaIjl0MBUicT_4ClbnLE7TfRsODrQgEJtNL9GRM9ScrDXmhwA/exec",
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