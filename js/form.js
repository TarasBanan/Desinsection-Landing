const leadForm = document.querySelector("#lead-form");
const formStatus = document.querySelector("#form-status");

function setFormStatus(message, state) {
  if (!formStatus) {
    return;
  }

  formStatus.textContent = message;
  formStatus.classList.remove("is-error", "is-success");

  if (state) {
    formStatus.classList.add(state);
  }
}

function validatePhone(value) {
  return value.replace(/\D/g, "").length >= 11;
}

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(leadForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const honeypot = String(formData.get("company") || "").trim();

    if (honeypot) {
      setFormStatus("Отправка отклонена.", "is-error");
      return;
    }

    if (!name) {
      setFormStatus("Укажите имя.", "is-error");
      return;
    }

    if (!validatePhone(phone)) {
      setFormStatus("Укажите корректный телефон.", "is-error");
      return;
    }

    setFormStatus("Отправляем заявку...", "");

    window.setTimeout(() => {
      leadForm.reset();
      setFormStatus("Заявка принята. Мы свяжемся с вами в ближайшее время.", "is-success");
    }, 700);
  });
}
