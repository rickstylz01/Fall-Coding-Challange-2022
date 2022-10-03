function validateForm(formName, btnName) {
  const form = document.getElementById(formName);
  const button = document.getElementById(btnName);
  const elements = form.getElementsByTagName("input")
  let empty = false;

  console.log("elements", elements);
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].value === "") {
      empty = true;
    }
  }
  button.disabled = empty;
}

function showNext(elOne, elTwo) {
  const elementOneId = document.getElementById(elOne);
  const elementTwoId = document.getElementById(elTwo);

  $(elementOneId).hide("slow");
  $(elementTwoId).show("slow");
}
