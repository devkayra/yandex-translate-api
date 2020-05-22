function UI(){

    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.laguageList = document.getElementById("language");
}
UI.prototype.changeUI = function(){
    // Arayüz Değiştir

    this.outputImage.src = `images/${this.laguageList.value}.png`;
    this.outputLanguage.innerHTML = this.laguageList.options[this.laguageList.selectedIndex].textContent;
}
UI.prototype.displayTranslate = function(word){
    this.outputWord.textContent = word;
}