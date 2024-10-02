const openBaritems = document.querySelector(".bars");
const headerLeft = document.querySelector(".headerLeft_2");

openBaritems.addEventListener("click", () => {
    // Check the current state of the headerLeft and toggle
    if (headerLeft.style.display === "block") {
        // Hide the header and revert the icon back to bars
        headerLeft.style.display = "none";
        openBaritems.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Original bars icon
    } else {
        // Show the header and change the icon to a cross
        headerLeft.style.display = "block";
        openBaritems.innerHTML = '<i class="fa-solid fa-times"></i>'; // Cross icon
    }
});



var newArrival_mens =
    [
        {
            image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/2E/9F/26e56196-62dd-4117-9a79-a54cddd9b72b.jpg.webp",
            price: 1700,
            strikeoff: 2100
        },
        {
            image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/C9/CF/52cc9bc7-2240-4fb6-8d62-f1f946f2e9a8.jpg.webp",
            price: 2300,
            strikeoff: 3120,
        },
        {
            image: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/61/77/94c69082-d3f4-419f-a9c8-5fc4a221d1bb.jpg.webp",
            price: 1200,
            strikeoff: 1700,
        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/39/57/19a0c866-c6df-4838-a239-e77f5ff7d814.jpg.webp",
            price: 1720,
            strikeoff: 2400,
        }
     
    ]

    newArrival_mens.map((ele) =>{
        let box=document.createElement("div")
        let image=document.createElement("img")
        image.src = ele.image
        image.style.marginTop = "50px"
        image.style.width = '90%'

        let p1=document.createElement("p")
        p1.innerText = "$" + " " + ele.price
        
        let p2=document.createElement("s")
        p2.innerText="$"+" "+ele.strikeoff 
        p2.style.color="red"

        box.append(image, p1, p2)
        document.querySelector("#mens_part").append(box);
    })

    var newArrival_womens  = [
        {
            image:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/A2/63/96986dc8-be5f-46a4-ba13-d7e290df6ba5.jpg.webp",
            name:"Floral Puff Sleeve Zipper",
            price: 1000,
            strikeoff: 4441,
          
        },
        {
            image:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/32/07/ede32b54-15ba-44f0-85c6-b51f3c3a6e0b.jpg.webp",
            name:"Women Casual Loose ",
          
            price:1200,
            strikeoff: 1800,
        },
        {
            image:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/50/CF/24cf8630-fd87-48d8-a01d-c1b340df16da.jpg.webp",
            name:"Floral Embroidery Lapel Collar",
            
            price:6000,
            strikeoff: 7000,
        },
        {
            image:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/B3/ED/9f729797-f11e-48be-9015-08a923d7a3d7.jpg.webp",
            name:"Women Off Shoulder Puff",
     
            price:5000,
            strikeoff: 6000,
        }
    ]

        newArrival_womens.map((ele) => {
            let box=document.createElement("div")
            let image=document.createElement("img")
            image.src = ele.image
            image.style.marginTop = "50px"
            image.style.width = '90%'
    
            let p1=document.createElement("p")
            p1.innerText = "$" + " " + ele.price
            
            let p2=document.createElement("s")
            p2.innerText="$"+" "+ele.strikeoff 
            p2.style.color="red"
    
            box.append(image, p1, p2)
            document.querySelector("#womens_part").append(box);
        })

    
    var shoesData = 
[
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/8C/F5/7a4335f3-0186-490b-911e-788306cb0967.jpg.webp",
        price: 4739,
        strike: 5400,
        name: "Men Knitted Breathable Hollow",
        category:"Band Type"
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/DD/20/f1aa2a37-fc97-4666-a05c-8cd6098f498c.jpg.webp",
        price: 4320,
        strike:5412,
        name:"Men Hand Stitching Microfiber",
        category:"Velcro"
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/5A/86/269f5a3c-e062-4e17-b5ed-8ae3e3c05a4a.jpg.webp",
        price: 2365,
        strike:3215,
        name:"Menico Men Leather Hand Stitch",
        category:"Band Type"
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/C2/DB/3c053930-c233-44ad-9132-3e4762760683.jpg.webp",
        price: 4783,
        strike:4863,
        name:"Menico Men Comfy Handmade",
        category:"Velcro"
    }
]

shoesData.map((ele) => {
    let box=document.createElement("div")

    let image=document.createElement("img")
    image.src =ele.image
    image.style.marginTop = "50px";
    image.style.width = "90%";
  
    let p1=document.createElement("p")
    p1.innerText = "$"+" "+ele.price 

    let p2=document.createElement("s")
    p2.innerText="$"+" "+ele.strike
    p2.style.color="red"
    
    box.append(image,p1,p2)
    document.querySelector("#shoes_part").append(box);
})

var sportsData= [

    {
        image : "https://m.media-amazon.com/images/I/41M3Il6y33L._AC_UL320_.jpg",
        price  : 2000,
        strike  : 3000,

    },
    {
        image : "https://m.media-amazon.com/images/I/61VgqSkcVyL._AC_UL320_.jpg",
        price  : 1000,
        strike  : 2000,

    },
    {
        image : "https://m.media-amazon.com/images/I/61RpRYFb2wL._AC_UL320_.jpg",
        price  : 800,
        strike  : 9000,

    },
    {
        image : "https://m.media-amazon.com/images/I/715B2hG++tL._AC_UL320_.jpg",
        price  : 1200,
        strike  : 1500,

    },
]

sportsData.map((ele) => {
    let box=document.createElement("div")

    let image=document.createElement("img")
    image.src =ele.image
    image.style.marginTop = "50px";
    image.style.width = "90%";
    image.style.height = "50%";

  
    let p1=document.createElement("p")
    p1.innerText ="$"+" "+  ele.price 

    let p2=document.createElement("s")
    p2.innerText="$"+" "+ele.strike
    p2.style.color="red"
    
    box.append(image,p1,p2)
    document.querySelector("#sports_part").append(box);
})