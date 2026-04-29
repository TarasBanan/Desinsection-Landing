const accordionRoot = document.querySelector("[data-accordion]");

if (accordionRoot) {
  accordionRoot.addEventListener("click", (event) => {
    const trigger = event.target.closest(".accordion__trigger");

    if (!trigger) {
      return;
    }

    const item = trigger.closest(".accordion__item");
    const content = item?.querySelector(".accordion__content");
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";

    accordionRoot.querySelectorAll(".accordion__trigger").forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });

    accordionRoot.querySelectorAll(".accordion__content").forEach((panel) => {
      panel.style.maxHeight = "0px";
    });

    if (isExpanded || !content) {
      return;
    }

    trigger.setAttribute("aria-expanded", "true");
    content.style.maxHeight = `${content.scrollHeight}px`;
  });
}
