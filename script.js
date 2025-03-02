// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the data-scroll attribute
  const scrollElements = document.querySelectorAll("[data-scroll]");

  // Function to check if the element is in view
  const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) - offset
    );
  };

  // Function to display the element
  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  // Function to hide the element
  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };

  // Handle scroll animation
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 150)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  // Run the handleScrollAnimation function on scroll
  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  // Run it once on page load to ensure proper visibility
  handleScrollAnimation();
});
