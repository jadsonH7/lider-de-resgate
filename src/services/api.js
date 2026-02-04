export async function salvarRegistroNoDrive(payload) {
  const response = await fetch("https://script.google.com/macros/s/AKfycbzG0LueFubVT50jXGvt_ahJT0One8dk7ISjkBPMy2F4rQWvIQe-R62WEp_Lal812jHwWA/exec", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Erro ao salvar no Google Drive");
  }

  return response.json();
}
