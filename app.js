// const url =("https://fakestoreapi.com/products/6")

const url = ("https://fakestoreapi.com/products?limit=8")
var txt="";

const fetchData= async()=>{
        const repone= await fetch(url);
        const Data = await repone.json();
    try{
        const repone= await fetch(url);
        const Data = await repone.json();
        for(let item of Data){
            txt+=`
            <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h1>Title: ${item.title}</h1>
                <h3>Price: ${item.price}</h3>
                <h3>Rate:${item.rating['rate']}</h3>
                <h3>count:${item.rating['count']}</h3>
            </div>
        </div>
            `;
            document.getElementsByClassName('container')[0].innerHTML=txt;
        }
    }catch(err){
        console.log(err);
    }
    
}
fetchData();