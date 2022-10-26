class movie {
    constructor(title,studio,rating){
        this.title=title
        this.studio=studio
        this.rating=rating
    }
}

class prop extends movie{
    constructor(title,studio,rating){
        super(title,studio,rating)
    }

}

class noPG extends movie{
    constructor(title,studio,rating){
        super(title,studio,rating)
    }
 pg(){
    if(this.rating==undefined){
       this.rating="PG"
        return this.rating;
        
    }
else{
    return this.rating;
}
 }
}


const prop1= new prop("Fight club","Fox 2000","PG-15");

const pgNo= new noPG("Fight club","Fox 2000")

console.log(`Movie details Title: ${prop1.title}, Studio: ${prop1.studio}, Rating: ${prop1.rating}`)// task a

console.log(`Movie details Title: ${pgNo.title}, Studio: ${pgNo.studio}, Rating:${pgNo.pg()}`)// task b
