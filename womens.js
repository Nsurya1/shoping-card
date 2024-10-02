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

var WomensShop = [

    {
        image:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/50/CF/24cf8630-fd87-48d8-a01d-c1b340df16da.jpg.webp",
        name:"Floral Embroidery Lapel Collar",
        category : "slip dresses",
        price:6000,
        strikeoff: 7000,
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/B3/ED/9f729797-f11e-48be-9015-08a923d7a3d7.jpg.webp",
        name:"Women Off Shoulder Puff",
        category : "off shoulder",
        price:5000,
        strikeoff: 6000,
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/32/07/ede32b54-15ba-44f0-85c6-b51f3c3a6e0b.jpg.webp",
        name:"Women Contrast Color Stitchin",
        category : "slip dresses",
        price:5000,
        strikeoff:6000,
    },
    {
        image:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/D2/6A/18e61c67-d3fd-4132-a2b8-a73ba9c95d07.jpg.webp",
        name:"Women 100% Cotton Classical",
       category : "slip dresses",
        price:6000,
        strikeoff: 7000,
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/00/DC/e517a654-42a8-4356-8a69-e90e899db22a.jpg.webp",
        name:"O-Neck Solid Abaya Kaftan",
        category : "slip dresses",
        price:1500,
        strikeoff:2000
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/view/oaupload/ser1/banggood/images/A5/A3/43ac5113-4978-46a7-b098-43246e65e46c.jpg.webp",
        name:"Women Pure Color Embroider",
        category : "bodycorn",
        price:2000,
        strikeoff:3000
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/87/2E/9349f568-b449-43ed-b48c-2773ba7c8916.jpg.webp",
        name:"Vintage Floral Print Short",
       category : "bodycorn",
        price:2000,
        strikeoff:3000
    },
    {
        image:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/A8/DA/68eb084c-be9a-4d9c-bee3-b52574c7dc0a.jpg.webp",
        name:"100% Cotton Loose Ruffles ",
       category : "bodycorn",
        price:1700,
        strikeoff:2500
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/E1/AE/4792cff6-38ec-499d-a809-6dc285b35dfe.jpg.webp",
        name:"Plant Printing European",
        category:"off shoulder",
        price:7000,
        strikeoff:8000
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/B6/0F/514d9ff3-71d3-417a-9afc-78c4daf9a4b7.jpg.webp",
        name:"Leisure Casual Holiday Long",
       category : "slip dresses",
        price:2000,
        strikeoff:3000
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/8B/72/a23e4914-54ae-4556-aa59-cdf85a812ab2.jpg.webp",
        name:"Women Floral Bohemian",
       category : "slip dresses",
        price:3999,
        strikeoff:4500
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/D0/68/a525766f-f378-4f6a-acde-06479ad46642.jpg.webp",
        name:"Women Satin Button Up",
       category : "bodycorn",
        price:2999,
        strikeoff:4000
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/01/E4/e8134508-6619-4e1b-a647-df71506521f0.jpg",
        name:"Women Leopard Print Lapel",
       category : "bodycorn",
        price:7000,
        strikeoff:8000
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/74/FA/ce9f11fa-5dc0-42ae-9279-c8ec5d59681f.jpg.webp",
        name:"Women Pure Color Lapel",
       category : "shirt dresses",
        price:1199,
        strikeoff:2500
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/14/87/2995b784-89e7-418c-9db8-8dada323432b.jpg.webp",
        name:"Women Stand Collar Button",
       category : "shirt dresses",
        price:1000,
        strikeoff:1100
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/7C/63/01582162-6cc8-40f4-b9b5-4a0a0b2dcc47.jpg.webp",
        name:"Bohemian Women V Neck",
       category : "slip dresses",
        price:1199,
        strikeoff:1500
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/D9/AB/c14516c7-8a96-40e1-8d1c-766bcc4fcd4c.jpg.webp",
        name:"Women Fluffy Solid Full Zipped",
       category : "shirt dresses",
        price:5999,
        strikeoff:8000
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/66/F7/b6885d93-408c-47b6-8ef5-d3d3e65e6e92.jpg.webp",
        name:"Women Cotton High Elastic",
       category : "bodycorn",
        price:3999,
        strikeoff:5000
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/55/08/eee6d080-2bd2-4894-8a5d-26961f910a3c.jpeg.webp",
        name:"Women Solid Color Sleeveless",
        category : "off shoulder",
        price:3599,
        strikeoff:4500
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/32/07/ede32b54-15ba-44f0-85c6-b51f3c3a6e0b.jpg.webp",
        name:"Women Contrast Color",
        category : "bodycorn",
        price:1399,
        strikeoff:2000
    },
    {
        image:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/68/35/95250d02-6466-4c8a-ae65-9e8b0bff9664.jpg.webp",
        name:"Women Cotton Solid Retro",
       category : "bodycorn",
        price:4999,
        strikeoff:6000
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/view/oaupload/ser1/banggood/images/41/93/ec4da08c-fc91-43ce-8191-58ab1c27fbcf.jpg.webp",
        name:"Women Elastic Waist Cotton",
       category : "off shoulder",
        price:8999,
        strikeoff:9500
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/14/87/2995b784-89e7-418c-9db8-8dada323432b.jpg.webp",
        name:"Women Stand Collar Button",
       category : "shirt dresses",
        price:1000,
        strikeoff:2000
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/7C/63/01582162-6cc8-40f4-b9b5-4a0a0b2dcc47.jpg.webp",
        name:"Bohemian Women V Neck",
       category : "bodycorn",
        price:1119,
        strikeoff:1500
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/D9/AB/c14516c7-8a96-40e1-8d1c-766bcc4fcd4c.jpg.webp",
        name:"Women Fluffy Solid Full Zipped",
       category : "shirt dresses",
        price:7500,
        strikeoff:8500
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/66/F7/b6885d93-408c-47b6-8ef5-d3d3e65e6e92.jpg.webp",
        name:"Women Cotton High Elastic",
       category : "bodycorn",
        price:1499,
        strikeoff:2000
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/55/08/eee6d080-2bd2-4894-8a5d-26961f910a3c.jpeg.webp",
        name:"Women Solid Color Sleeveless",
        category : "off shoulder",
        price:6900,
        strikeoff:8000
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/B3/ED/9f729797-f11e-48be-9015-08a923d7a3d7.jpg.webp",
        name:"Women Off Shoulder Puff",
        category : "off shoulder",
        price:5000,
        strikeoff:6000
    },


];


display_data(WomensShop)

function display_data(WomensShop){
    document.querySelector("#main_container").innerHTML =""

    WomensShop.map((data)=>{
        let box = document.createElement('div')
        box.style.padding = "10px"
        let image = document.createElement("img")
        image.src = data.image


        let p1 = document.createElement("p")
        p1.innerText = data.name

        let p2 = document.createElement("p")
        p2.innerText = "$" + " " + data.price

        let p3 = document.createElement("s")
        p3.innerText = "$" + " " + data.strikeoff
        p3.style.color = "red"

        let child = document.createElement("div")
        child.style.display = "flex"
        child.style.justifyContent = "space-around"
        child.style.fontSize = "25px"
        child.style.margin = "30px 10px"

        let p4 = document.createElement("p")
        p4.innerText = data.category

        let btn = document.createElement("btn")
        btn.innerText = "Add to Cart"
        btn.style.color = "white"
        btn.style.backgroundColor = "#9C254D"
        btn.style.cursor = "pointer"
        btn.style.padding = "5px 5px"

        btn.addEventListener('click', () => {
            event.preventDefault()
            window.location.href = "signup.html"
            let shop_data = JSON.parse(localStorage.getItem('shop_data')) || []

            let obj = {
                image: data.image,
                price: data.price,
                category: data.category
            }
            
            shop_data.push(obj)
            localStorage.setItem("shop_data", JSON.stringify(shop_data));
            alert("Items Added to cart")
        })

        child.append(p4, btn)
        box.append(image, p1, p2, p3, child)
        document.querySelector("#main_container").append(box);
        
    })
}


let categoryFilter = document.querySelector("#By_category");
categoryFilter.addEventListener('change', () => {
    let category = categoryFilter.value;  // You can reuse the categoryFilter variable
    
        // Handle case when "Filter by Category" is selected
        if (category === 'Fbc') {
            display_data(WomensShop);  // Display all data if no category is selected
        } else {
            // Filter data by selected category
            let sort_data = WomensShop.filter((data) => {
                return data.category === category;
            });
    
            // Display the filtered data
            display_data(sort_data);
        }
});


let priceFilter = document.querySelector("#By_price");

priceFilter.addEventListener('change', () => {
    let value = priceFilter.value;
    if (value === 'htl') {
        WomensShop.sort((a, b) => {
            return b.price - a.price;
        })
        display_data(WomensShop)
    }

    if (value == "lth") {
        WomensShop.sort((a, b) => {
            return a.price - b.price;
        })
        display_data(WomensShop)
    }
})

