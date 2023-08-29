let counter = document.querySelectorAll('.counter');
console.log(counter);

let counterArr = Array.from(counter)
console.log(counterArr);

counterArr.map((item)=>{
    console.log(item);

    let count = 0
    function increment(){
        count++;
        console.log(count);
        item.innerHTML = count;

        if(count == item.dataset.number){
            clearInterval(stop)
        }
    }
    increment()
    let stop = setInterval(increment,item.dataset.dataspeed/item.dataset.number)

})