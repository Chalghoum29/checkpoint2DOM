console.log(document);
console.log(document.querySelectorAll('.plus'));
 
var plusbtn = document.querySelectorAll('.plus');
var minbtn = document.querySelectorAll('.minus')
var prices = document.querySelectorAll('.price')
var unitPrice = document.querySelectorAll('.unitePrice')
   

for (let i = 0; i < plusbtn.length; i++) {
       plusbtn[i].addEventListener('click',click);
      };
for (let i = 0; i < minbtn.length; i++) {
    minbtn[i].addEventListener('click',click);
    
}
      function click(event){
          
    var clickplus=event.target;

    var sum=clickplus.parentElement;
    var quantity= Number(sum.querySelector('p').innerHTML);
    
    if (clickplus.innerHTML==="+"){

        quantity++
    } else if(clickplus.innerHTML==="-")
    {
        if(quantity>0)
        quantity--
    }
    sum.querySelector('p').innerHTML=quantity;
    var fsum=sum.parentElement;
    var td=fsum.parentElement;
    console.log(td)
    var untprice=Number(td.querySelector('.unitPrice').innerHTML);
    var price=quantity*untprice;
    td.querySelector('.price').innerHTML= price
    total()
    }

    
    var btndele=document.querySelectorAll('.delete');
    for (let i = 0; i < btndele.length; i++) {
        btndele[i].addEventListener('click',dele) };
        
        function dele(event){
            var Bt= event.target
            var parent= Bt.closest("tr")
            var del= Number(parent.querySelector('.price').innerHTML)
             del= 0
            parent.querySelector('.price').innerHTML = del
            parent.querySelector('p').innerHTML = 0
            total()
        }
    


    var btnlike=document.querySelectorAll('.like');
    for (let i = 0; i < btnlike.length; i++) {
      btnlike[i].addEventListener('click',lik)};
       
      function lik(event){
          var bt =event.target;
          var parent =bt.parentElement;
          if(parent.style.color !="red"){
            parent.style.color="red";
          }
          else{parent.style.color="gray";}
          
      }


      function total(){
      var tot=0
       for (let i = 0; i < prices.length; i++) {
         
           tot+=Number(prices[i].innerHTML);
       }
        document.querySelector('#total').innerHTML=tot;
    }




