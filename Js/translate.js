function Translate(word, language){
    this.apikey = "trnsl.1.1.20200522T093714Z.134b8ca204808e67.94b06d780b2250d8509d8d0a4519e6251c2066bc";
    this.word = word;
    this.language = language;

    // XHR Object
    this.xhr = new XMLHttpRequest();

}

Translate.prototype.translateWord = function(callback){
    // Ajax İşlemleri
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload = () => {
        if (this.xhr.status === 200){
            // console.log(JSON.parse(this.xhr.responseText).text[0]);

            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];

            callback(null, text);
        }
        else{
            callback("Bir Hata Oluştu", null);
        }
    }

    this.xhr.send();
}
Translate.prototype.changeParameters = function(newWord, newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}