export default function outSideClick(element, userEvents, callback) {
  const html = document.documentElement;

  userEvents.forEach((event) => {
    setTimeout(() => html.addEventListener(event, handleOutsideClick));
  });

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      userEvents.forEach((event) => {
        html.removeEventListener(event, handleOutsideClick);
      });
      callback();
    }
  }
}
