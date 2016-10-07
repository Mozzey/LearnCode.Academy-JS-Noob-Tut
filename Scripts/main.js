//LearnCode.Academy JS Tutorial (Arrays)

/*var myList = ['appples', 'oranges', 'bananas'];

myList.forEach(function (value, index) {
    alert('I have ' + '' + value + ' in my shopping bag!');
});


var times = 0;
while (times < 10){
    console.log('tried it', times);
    times++;
}


myList = ['Apples', 'Oranges', 'Bananas']

for (var x=0; x < myList.length; x++){
    alert('You have ' + myList[x] + ' in your shopping bag!');
};*/

//End Tutorial





//LearnCode.Academy JS Tutorial (Addition Calculator)


/*var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add(){
    var one = parseFloat(numOne.value) || 0;
    // || so we dont get NaN from the     
    //first number value
    var two = parseFloat(numTwo.value) || 0;
    var sum = one+two; //make this so the numbers dont string
    addSum.innerHTML = "your sum is:"+sum;
}*/

//End Tutorial




//LearnCode.Academy JS Tutorial (Pic Link)


var simon = document.getElementById('simon')
//var simonPic = document.getElementById('simon-pic') - added three listeners with one function
var bruce = document.getElementById('bruce')
//var brucePic = document.getElementById('bruce-pic') - added three listeners with one function
var brad = document.getElementById('brad')
//var bradPic = document.getElementById('brad-pic') - added three listeners with one function

//Long way..not DRY code (Don't Repeat Yourself)
/*simon.addEventListener("click", function(){
    if (simonPic.className === "hide"){
        simonPic.className = "";
}   else {
        simonPic.className = "hide";
}
});
bruce.addEventListener("click", function(){
    if (brucePic.className === "hide"){
        brucePic.className = "";
}   else {
        brucePic.className = "hide";
}
});
brad.addEventListener("click", function(){
    if (bradPic.className === "hide"){
        bradPic.className = "";
}   else {
        bradPic.className = "hide";
}
});*/


//Better Practice Code
simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
brad.addEventListener("click", picLink);

function picLink(){
    var allImages = document.querySelectorAll("img");
    for(var i = 0; i < allImages.length; i++){
        allImages[i].className = "hide";
    }
    var picId = this.attributes["data-img"].value;
    var pic = document.getElementById(picId);
    if (pic.className === "hide"){
        pic.className = "";
}   else {
        pic.className = "hide";
}
}



//End Tutorial





