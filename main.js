function analyzeScores() {
  var filipino = parseFloat(document.getElementById("filipino").value);
  var english = parseFloat(document.getElementById("english").value);
  var science = parseFloat(document.getElementById("science").value);
  var math = parseFloat(document.getElementById("math").value);
  var social = parseFloat(document.getElementById("social").value);
  var average = (filipino + english + science + math + social) / 5;
  var rating = "";

  if (average >= 94 && average <= 100) {
    rating = "Excellent";
    window.alert("Your rating is Excellent!");
  } else if (average >= 87 && average < 94) {
    rating = "Above Satisfactory";
    window.alert("Your rating is Above Satisfactory!");
  } else if (average >= 80 && average < 87) {
    rating = "Satisfactory";
    window.alert("Your rating is Satisfactory!");
  } else if (average >= 75 && average < 80) {
    rating = "Needs Improvement";
    window.alert("Your rating is Needs Improvement!");
  } else if (average >= 70 && average < 75) {
    rating = "Poor";
    window.alert("Your rating is Poor!");
  } else {
    alert("Please enter valid grades between 0 and 100.");
    return;
  }
}