// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     event.preventDefault();
//     const person1Input = $("input#person1").val();
//     console.log("person1Input is "+person1Input);
//     const person2Input = $("input#person2").val();
//     const animalInput= $("input#animal").val();
//     const exclamationInput = $("input#exclamation").val();
//     const verbInput = $("input#verb").val();
//     const nounInput = $("input#noun").val();

//     $("person1").text(person1Input);
//     $(".person2").text(person2Input);
//     $(".animal").text(animalInput);
//     $(".exclamation").text(exclamationInput);
//     $(".verb").text(verbInput);
//     $(".noun").text(nounInput);

//     $("#story").show();
//   });
// });

//New Javascript
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const libs = [$("input#person1").val(),$("input#person2").val(), $("input#animal").val(),$("input#exclamation").val(),$("input#verb").val(),$("input#noun").val()];
    console.log(libs);
    $(".person1").text(libs[0]);
    $(".person2").text(libs[1]);
    $(".animal").text(libs[2]);
    $(".exclamation").text(libs[3]);
    $(".verb").text(libs[4]);
    $(".noun").text(libs[5]);

    $("#story").show();
  });
});