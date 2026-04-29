const calculatorRoot = document.querySelector(".calculator");
const calculatorPrice = document.querySelector("#calc-price");

function formatPrice(value) {
  return `${new Intl.NumberFormat("ru-RU").format(value)} ₽`;
}

function getActiveValue(groupName) {
  const activeButton = document.querySelector(
    `[data-calc-group="${groupName}"] .segmented-control__item.is-active`
  );

  return Number(activeButton?.dataset.value || 0);
}

function updateCalculatorPrice() {
  if (!calculatorPrice) {
    return;
  }

  const base = 2200;
  const area = getActiveValue("area");
  const type = getActiveValue("type");
  const level = getActiveValue("level");
  const result = Math.round((base + area * 38) * type * level / 100) * 100;

  calculatorPrice.textContent = formatPrice(result);
}

if (calculatorRoot) {
  calculatorRoot.addEventListener("click", (event) => {
    const option = event.target.closest(".segmented-control__item");

    if (!option) {
      return;
    }

    const group = option.closest("[data-calc-group]");

    if (!group) {
      return;
    }

    group.querySelectorAll(".segmented-control__item").forEach((button) => {
      button.classList.remove("is-active");
    });

    option.classList.add("is-active");
    updateCalculatorPrice();
  });

  updateCalculatorPrice();
}
