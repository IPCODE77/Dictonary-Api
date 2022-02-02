console.log("wordes api");


const word = [{
  "word": "code",
  "definitions": [
    {
      "definition": "a set of rules or principles or laws (especially written ones)",
      "partOfSpeech": "noun"
    },
    {
      "definition": "(computer science) the symbolic arrangement of data or instructions in a computer program or the set of such instructions",
      "partOfSpeech": "noun"
    },
    {
      "definition": "convert ordinary language into code",
      "partOfSpeech": "verb"
    },
    {
      "definition": "a coding system used for transmitting messages requiring brevity or secrecy",
      "partOfSpeech": "noun"
    },
    {
      "definition": "attach a code to",
      "partOfSpeech": "verb"
    }
  ]
}, {
  "word": "with",
  "definitions": [
    {
      "definition": "denotes or expresses some situation or relation of nearness, proximity, association, connection, or the like.",
      "partOfSpeech": "preposition"
    }
  ]
} 
, {
  "word": "best",
  "definitions": [
    {
      "definition": "Canadian physiologist (born in the United States) who assisted F. G. Banting in research leading to the discovery of insulin (1899-1978)",
      "partOfSpeech": "noun"
    },
    {
      "definition": "(comparative and superlative of `well') wiser or more advantageous and hence advisable",
      "partOfSpeech": "adjective"
    },
    {
      "definition": "from a position of superiority or authority",
      "partOfSpeech": "adverb"
    },
    {
      "definition": "the person who is most outstanding or excellent; someone who tops all others",
      "partOfSpeech": "noun"
    },
    {
      "definition": "get the better of",
      "partOfSpeech": "verb"
    },
    {
      "definition": "(superlative of `good') having the most positive qualities",
      "partOfSpeech": "adjective"
    },
    {
      "definition": "the supreme effort one can make",
      "partOfSpeech": "noun"
    }
  ]
}, {
  "word": "tutorial",
  "definitions": [
    {
      "definition": "a session of intensive tuition given by a tutor to an individual or to a small number of students",
      "partOfSpeech": "noun"
    },
    {
      "definition": "of or relating to tutors or tutoring",
      "partOfSpeech": null
    }
  ]
}]


let searchingbtn = document.getElementById("btn");
searchingbtn.addEventListener("click", function () {
  console.log("click")
  getdefn();
})

function getdefn() {
  let input = document.getElementById("input").value;
  // input.value="";

  let list = document.getElementById("list")
  let str = `<h3>Search Result</h3>`;
  let index;
  for(key in word){if(word[key].word==input) index = key;}
//  console.log(index);
console.log(key)
  if(index==undefined)
  {
  str = `<h3>No Match Found</h3>`;
  }
  else{
  let obj = word[index].definitions;
  for(key in obj)
  {
      str = str + `<li>${obj[key].definition}</li>`;
      //console.log(obj[key].definition);
  }
}
    list.innerHTML=str;
  }
