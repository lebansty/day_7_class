let arr=[{title:"kaithi",studio:"DWP",rating:"PG-15"},{title:"Fight club",studio:"Fox 2000",rating:"PG-15"},
{title:"Good fellas",studio:"Warner bros",rating:"PG-15"},{title:"Avatar",studio:"fox 20th"}]


 class Movie{
    constructor(arr){
       this.arr=arr
    }
    getPg(){
     var ret=  arr.filter(ori=>ori.rating!==undefined)
       return ret;
    }
   
 }

 const movie1 = new Movie(arr);
 console.log(movie1.getPg());

