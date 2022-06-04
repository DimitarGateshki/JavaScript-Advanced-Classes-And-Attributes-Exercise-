function solve(arr,param){
    class Ticket{
        constructor(destination,price ,status  ){
           this.destination =destination;
           this.price=price;
           this.status=status;
       
        }
       
       }
    let result=[];
    for (let e of arr) {
      let  line=e.split('|');
      let a=line[0];
      let b=Number(line[1]);
      let c=line[2];
      let tick=new Ticket(a,b,c);
      result.push(tick);
      
    }
    let sort=
    {
        'destination':(a,b)=>a.destination.localeCompare(b.destination),
        'price':(a,b)=>a.price-b.price,
        'status':(a,b)=>a.status.localeCompare(b.status)
    } 
    
    result.sort(sort[param]);
    return result;
}