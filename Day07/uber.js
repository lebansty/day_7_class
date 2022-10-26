class Uberprice{
    constructor(baseFare,bookingFee,surCharges,toll){
        this.baseFare=baseFare
        this.bookingFee=bookingFee
        this.surCharges=surCharges
        this.toll=toll
    }
}

class Normalday extends Uberprice{
    constructor(base,booking,sur,toll){
        super(base,booking,sur,toll)
    }
    calc(){
        return this.baseFare+this.bookingFee+this.surCharges+this.surCharges;
    }
}

const price=new Normalday(100,100,100,100)

console.log(`The cost for your ride is Rupees: ${price.calc()} `)