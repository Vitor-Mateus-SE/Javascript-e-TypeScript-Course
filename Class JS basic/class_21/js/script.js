function myScope() {
  const form = document.querySelector(".form"); //if was a id use #
  const result = document.querySelector(".result");
  const person = [];

  //   form.onsubmit = function (event) {
  //     event.preventDefault();
  //   };
  function reciveEventForm(event) {
    event.preventDefault();
    const name = form.querySelector(".name");
    const lName = form.querySelector(".lName");
    const hight = form.querySelector(".hight");
    const height = form.querySelector(".height");

    person.push({
      name: name.value,
      lastName: lName.value,
      hight: hight.value,
      height: height.value,
    });

    console.log(person);

    result.innerHTML += `<p>
    ${name.value}
    ${lName.value}
    ${height.value}
    ${hight.value}
    </p>`;
  }
  form.addEventListener("submit", reciveEventForm);
}
myScope();
