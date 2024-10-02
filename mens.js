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


var mensData =
    [
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/BC/2F/6091dd83-9bfa-4a07-a2c2-33330a03f167.jpg",
            name: "Men Corduroy Flap Pocket",
            price: 3107,
            strikeoff: 4441,
            category: "Tops"
        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/79/CF/02a96299-dd82-4a76-b029-8ba9c53a6cf4.jpg.webp",
            name: "Mens Thick Velvet Casual",
            price: 3812,
            strikeoff: 4541,
            category: "Outware"
        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/ser1/banggood/images/E9/63/25395ecf-7261-43d8-bb83-e1259a5483ec.png",
            name: "Mens Vintage Cotton Shirts",
            price: 1864,
            strikeoff: 2171,
            category: "Tops"
        },

        {
            image: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/85/F2/10438dd6-bd81-4d36-90e1-f8fe673be7d2.jpg.webp",
            name: "Mens Logo Letter Print Zip Up",
            price: 2812,
            strikeoff: 3521,
            category: "Outdoors"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/2F/4D/133da196-d35e-4c57-821f-324ff4bf0a39.jpg",
            name: "Mens Cotton Solid Hooded",
            price: 3712,
            strikeoff: 4941,
            category: "Sleepware"
        },
        {
            image: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/78/AA/368d97b5-e0a6-4566-941e-f5aadd2321ba.jpg.webp",
            name: "Mens Plaid Zipper Front",
            price: 3412,
            strikeoff: 5141,
            category: "Sleepware"
        },
        {
            image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/D4/E7/a0d0ba69-43af-4284-9d70-e7135cd6f8bd.jpg.webp",
            name: "Mens Corduroy Solid Color",
            price: 3712,
            strikeoff: 4571,
            category: "Bottom"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/86/C1/6d24061b-d296-4686-b40e-28dcf93fb923.jpg.webp",
            name: "Mens Waterproof Quick-Drying",
            price: 3312,
            strikeoff: 4021,
            category: "Outdoors"
        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/42/28/88b5f739-391d-402c-8f3c-18757a79b059.jpg.webp",
            name: "Men Hip Hops Street Style Zip",
            price: 3012,
            strikeoff: 3941,
            category: "Bottom"
        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/59/35/9f244bbb-77ad-4b2a-b125-c0b4ea30b4f6.jpg.webp",
            name: "Men Tribal Print Patchwork",
            price: 1712,
            strikeoff: 2571,
            category: "Tops"
        },
        {
            image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/C0/20/e660dd07-205b-425c-b4e3-c8e7d403d624.jpg.webp",
            name: "Mens Rib Baseball Collar",
            price: 3012,
            strikeoff: 4341,
            category: "Outware"
        },
        {
            image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/12/B9/6011c01a-2216-4e6d-aab3-8c5bc961de28.jpg.webp",
            name: "Men Vintage Corduroy Ethnic",
            price: 3712,
            strikeoff: 4571,
            category: "Tops"
        },
        {
            image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/E3/77/915f13a9-48a1-44c0-b56e-47a8a4a5a5de.JPG.webp",
            name: "Men Oriental Art Print Short",
            price: 1712,
            strikeoff: 2571,
            category: "Tops"
        },
        {
            image: "https://imgaz.staticbg.com/thumb/view/oaupload/ser1/banggood/images/F5/B0/34cbff91-2acc-4c2e-8cec-4bb4729e92ae.jpeg",
            name: "Mens Fashion 100% Cotton",
            price: 7112,
            strikeoff: 8541,
            category: "Outware"
        },
        {
            image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/43/8F/c4bc6f76-9cec-4f23-838e-cbdf9f79bb93.jpg",
            name: "Mens Cotton Loose comfy",
            price: 2412,
            strikeoff: 3561,
            category: "Bottom"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/2B/9E/6d1bbc3e-0e5e-4616-9809-64b10bbbd692.jpg.webp",
            name: "Mens Vintage Plaid Drawstring",
            price: 1412,
            strikeoff: 2241,
            category: "Bottom"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/E5/1E/044b2120-f834-4b95-b66e-5562167d35fd.png.webp",
            name: "Outdoor Lightweight Windproof",
            price: 5212,
            strikeoff: 6021,
            category: "Outdoors"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/64/97/a12bf596-18a4-486f-b489-6e68a3659778.jpg.webp",
            name: "Jeans Men's Nine Pants",
            price: 2012,
            strikeoff: 3441,
            category: "Bottom"
        },

        {
            image: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/65/36/35810f24-3f00-4f09-935d-05b86b77f90e.jpg.webp",
            name: "Mens Striped Lapel Double",
            price: 3412,
            strikeoff: 4141,
            category: "Sleepware"
        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/ser1/banggood/images/E4/4C/1ceb03b8-0534-4ffc-bd7c-ab1b82eda705.jpg.webp",
            name: "Mens Plaid Suit Collar Vest",
            price: 2812,
            strikeoff: 3541,
            category: "Outware"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/ser1/banggood/images/3D/51/8d0f9936-3249-4d3b-8fe7-ec5c1bede739.jpg.webp",
            name: "Black Business Stylish Woolen",
            price: 5812,
            strikeoff: 6541,
            category: "Outware"
        },
        {
            image: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/A5/17/95a07499-b580-4427-b377-128e4a04bf94.jpg.webp",
            name: "Mens Sunscreen Quick-Drying",
            price: 2330,
            strikeoff: 3021,
            category: "Outdoors",

        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/CB/A6/69587d63-ea50-4420-96b4-4b4d724bed45.jpg.webp",
            name: "Mens 100% Cotton Solid Color",
            price: 2015,
            strikeoff: 3441,
            category: "Bottom"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/66/84/0bde315d-90dd-4d01-9da2-517b4078f572.jpg",
            name: "Mens 100% Cotton Solid Color",
            price: 2015,
            strikeoff: 3441,
            category: "Sleepware"
        }
    ];
    let Shop_data = JSON.parse(localStorage.getItem("shop_data"));

    let menData = localStorage.setItem("menData", JSON.stringify(mensData))

display_data(mensData)

function display_data(mensData) {
    document.querySelector("#main_container").innerHTML = ""

    mensData.map((data) => {
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
            localStorage.setItem('shop_data', JSON.stringify(shop_data));
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
            display_data(mensData);  // Display all data if no category is selected
        } else {
            // Filter data by selected category
            let sort_data = mensData.filter((data) => {
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
        mensData.sort((a, b) => {
            return b.price - a.price;
        })
        display_data(mensData)
    }

    if (value == "lth") {
        mensData.sort((a, b) => {
            return a.price - b.price;
        })
        display_data(mensData)
    }
})
