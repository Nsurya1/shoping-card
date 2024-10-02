let cart_data=JSON.parse(localStorage.getItem("shop_data")) || []
 

 let total= cart_data.reduce((sum, data)=>{
    return sum + Number(data.price);
 },0)


 document.querySelector("#show_total").innerText="$"+" "+total
 document.querySelector("#show_subtotal").innerText="$"+" "+total


 document.querySelector('#click').addEventListener('click', ()=>{
    const coupanCode = document.querySelector('#promo').value

    if(coupanCode == 'Nitesh123'){
        total = (total*30)/100
        alert("Promo Code of 30% applied Successfully")
        document.querySelector("#show_total").innerText="$"+" "+total
        document.querySelector("#show_subtotal").innerText="$"+" "+total
        document.querySelector("#click").innerText="Applied Successfully"
       document.querySelector("#click").style.backgroundColor="red"
    }
 })

 cart_data.map(function(ele,index){
   
    let box=document.createElement("div")
    
    let image=document.createElement("img")
    image.src=ele.image
   
   
    let box2=document.createElement("div")
    box2.style.display="flex"
    box2.style.justifyContent = "space-around"
    box2.style.fontSize = "25px"
    box2.style.margin = "30px 10px"
   
   
     let p1=document.createElement("p")
     p1.innerText=ele.category
     p1.style.fontSize="20px"
     p1.style.textAlign="center"

     let btn=document.createElement("button")
     btn.innerText="Remove"
     btn.style.backgroundColor="#fc5f2c"
     btn.style.padding="5px 5px"
     btn.addEventListener("click",function(){
         removefunction(ele,index)
     })
   
     let p2=document.createElement("p")
     p2.innerText="$" +" "+ele.price
   
     box2.append(p2,btn)
   
     box.append(image,p1,box2)
   
     document.querySelector("#cart_items").append(box)
 })

  removefunction = (index) =>{
    cart_data.splice(index,1)
    // console.log(ele,ind)
    localStorage.setItem("shop_data",JSON.stringify(cart_data));
    window.location.reload();

 }

 document.querySelector("#payment").addEventListener("click",makepayment)

 function makepayment(){
    event.preventDefault()
    window.location.href="payment.html"
 }

 






