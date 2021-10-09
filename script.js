let
    arr = new Array(), num, min, max, sum,
    elems = document.getElementById("elems"),
    size = document.getElementById("size");
    out = document.getElementById("output");

function Clear(){
    elems.innerHTML = "";
    sum = 0;
}

function Run(){
    Clear();
    num = 1*size.value;
    min = Math.ceil(-1000);
    max = Math.floor(1000);
    for (let i = 0; i < num; i++){
        arr.push(Math.floor(Math.random() * (max - min)) + min);
    }
    arr.forEach(element => {
        elems.innerHTML += (element + ", ");
    });
    while (arr.length > 0){
        let x = 1*arr.splice(0, 1);
        if (x > 0){
            sum += x;
        }
    }
    out.innerHTML = "Sum of positive numbers: " + sum;
}