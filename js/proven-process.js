document.addEventListener("DOMContentLoaded", () => {
  const processSteps = document.querySelectorAll(".process-step");
  processSteps.forEach((step) => {
    step.addEventListener("click", () => {
      const stepNumber = parseInt(step.getAttribute("data-step"));
      selectStep(stepNumber);
    });
  });
});

function selectStep(stepNumber) {
  // Remove active and completed classes from all steps
  document.querySelectorAll(".step-number").forEach((step) => {
    step.classList.remove("active", "completed");
    step.classList.add("inactive");
  });

  document.querySelectorAll(".process-step").forEach((step) => {
    step.classList.remove("completed");
  });

  // Mark all previous steps as completed
  for (let i = 1; i < stepNumber; i++) {
    const previousStep = document.querySelector(`[data-step="${i}"]`);
    const previousStepNumber = document.querySelector(
      `[data-step="${i}"] .step-number`
    );

    if (previousStep && previousStepNumber) {
      previousStep.classList.add("completed");
      previousStepNumber.classList.remove("inactive");
      previousStepNumber.classList.add("completed");
    }
  }

  // Add active class to selected step
  const selectedStep = document.querySelector(
    `[data-step="${stepNumber}"] .step-number`
  );
  selectedStep.classList.remove("inactive");
  selectedStep.classList.add("active");

  const allCards = document.querySelectorAll(".process-detail-card");
  const selectedCard = document.querySelector(
    `.process-detail-card[data-step="${stepNumber}"]`
  );

  // Fade out all cards
  allCards.forEach((card) => {
    card.classList.remove("active");
    const textElements = card.querySelectorAll(
      ".detail-main-title, .detail-subtitle, .detail-description, .detail-image"
    );
    textElements.forEach((el) => {
      el.style.opacity = "0";
    });
  });

  if (selectedCard) {
    selectedCard.classList.add("active");
    setTimeout(() => {
      const textElements = selectedCard.querySelectorAll(
        ".detail-main-title, .detail-subtitle, .detail-description, .detail-image"
      );
      textElements.forEach((el) => {
        el.style.opacity = "1";
      });
    }, 150);
  }
}
