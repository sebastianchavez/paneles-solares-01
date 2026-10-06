/**
 * SolarAndina - Form validation
 */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const successBox = document.getElementById("form-success");

  const rules = {
    nombre: { required: true, min: 3, label: "Nombre" },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, label: "Email" },
    telefono: { required: true, pattern: /^[+\d\s()-]{8,}$/, label: "Teléfono" },
    servicio: { required: true, label: "Servicio" },
    mensaje: { required: true, min: 10, label: "Mensaje" },
  };

  const showError = (field, msg) => {
    const input = form.querySelector(`[name="${field}"]`);
    const error = form.querySelector(`[data-error="${field}"]`);
    if (input) input.classList.add("error");
    if (input) input.classList.remove("success");
    if (error) {
      error.textContent = msg;
      error.classList.add("visible");
    }
  };

  const clearError = (field) => {
    const input = form.querySelector(`[name="${field}"]`);
    const error = form.querySelector(`[data-error="${field}"]`);
    if (input) input.classList.remove("error");
    if (input) input.classList.add("success");
    if (error) error.classList.remove("visible");
  };

  const validate = () => {
    let valid = true;
    Object.keys(rules).forEach((field) => {
      const input = form.querySelector(`[name="${field}"]`);
      if (!input) return;
      const value = (input.value || "").trim();
      const rule = rules[field];

      if (rule.required && !value) {
        showError(field, `${rule.label} es obligatorio`);
        valid = false;
        return;
      }
      if (rule.min && value && value.length < rule.min) {
        showError(field, `${rule.label} debe tener al menos ${rule.min} caracteres`);
        valid = false;
        return;
      }
      if (rule.pattern && value && !rule.pattern.test(value)) {
        let msg = `${rule.label} no es válido`;
        if (field === "email") msg = "Ingresá un email válido";
        if (field === "telefono") msg = "Ingresá un teléfono válido (8+ dígitos)";
        showError(field, msg);
        valid = false;
        return;
      }
      clearError(field);
    });
    return valid;
  };

  // Validación en blur
  Object.keys(rules).forEach((field) => {
    const input = form.querySelector(`[name="${field}"]`);
    if (!input) return;
    input.addEventListener("blur", () => {
      if (!input.value.trim()) return;
      const rule = rules[field];
      const value = input.value.trim();
      if (rule.min && value.length < rule.min) {
        showError(field, `${rule.label} debe tener al menos ${rule.min} caracteres`);
      } else if (rule.pattern && !rule.pattern.test(value)) {
        showError(field, `${rule.label} no es válido`);
      } else {
        clearError(field);
      }
    });
    input.addEventListener("input", () => {
      const error = form.querySelector(`[data-error="${field}"]`);
      if (error && error.classList.contains("visible")) {
        clearError(field);
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Simular envío
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Enviando...";

    setTimeout(() => {
      form.reset();
      form.querySelectorAll("input, textarea, select").forEach((el) => el.classList.remove("success", "error"));
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      if (successBox) {
        successBox.classList.remove("hidden");
        successBox.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => successBox.classList.add("hidden"), 6000);
      }
    }, 1200);
  });
});