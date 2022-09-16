const formElement = document.querySelector("form");

const handlePoemSearch = async (event) => {
  event.preventDefault();

  const searchElement = document.querySelector("#search").value.trim();

  if (searchElement) {
    document.location.replace(`/results/${searchElement}`);
  }
};

formElement.addEventListener("submit", handlePoemSearch);
