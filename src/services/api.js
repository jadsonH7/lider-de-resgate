export function salvarRegistroNoDrive(payload) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = "https://script.google.com/macros/s/AKfycbwRCeFDuqZuPLRJrxh0Cutcr535HSrEO3S4bSeq-EHIcVv5uUhPd1mMBCfMypy4Ezq7lQ/exec";
  form.target = "hidden_iframe";

  const input = document.createElement("input");
  input.type = "hidden";
  input.name = "data";
  input.value = JSON.stringify(payload);

  form.appendChild(input);
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}
