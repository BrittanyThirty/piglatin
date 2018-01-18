//back-end logic/business logic
function pigLatin(string) {
  var vowels = ["a","A","e","E","i","I","o","O","u","U"];
  var lettersArray = string.split('');
// alert(typeof(lettersArray));
  if (vowels.includes(string.charAt(0))) {
    return string += "way";// str = str+"way";
  } else {
    for(var i = 0; i < string.length; i++){
      if (!vowels.includes(string[i])) {
        lettersArray.push(lettersArray.shift());
      } else {
        lettersArray.push("ay");
        return lettersArray.join("");
        // alert(typeof(result));
      }
    }
  }
}

//front-end logic/user interface logic
$ (document).ready(function(){
  $("#pig-translation").submit(function(event){
    event.preventDefault();

    var sentenceInput = $("input#sentence").val();

    var lettersArray = pigLatin(sentenceInput);
    $(".translation").text(lettersArray);
  });
});

// The program recognizes words beginning with a vowel, and adds "way" to the end.
//
//  * Input Example: "eight"
//  * Output Example: "eightway"
//
// * The program recognizes words beginning with one or more consonants and moves all of the first consonant(s) to the end and adds 'ay' after.
//  * Input Example: "closet"
//  * Output Example: "osetclay"
//
// * The program recognizes words beginning with "qu" and moves the pairing to the end.
//  * Input Example: "quiet"
//  * Output Example: "ietquay"
