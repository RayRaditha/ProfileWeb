document.addEventListener("DOMContentLoaded", function () {
  let submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let question = document.getElementById("question");

    if (name.value == "" || email.value == "") {
      alert("Pastikan Menginput Nama dan Email");
    } else {
      // Perform operation
      alert(
        "Pertanyaan Berhasil di Kirim! \nPertanyaannya : " + question.value
      );
      console.log(
        `Form dengan nama ${name.value} dan email ${email.value} mempunyai pertanyaan ${question.value}`
      );

      name.value = "";
      email.value = "";
      question.value = "";
    }
  });
});
