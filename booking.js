

let leftbox = document.getElementsByClassName("left")[0];
leftbox.innerHTML = "";

for (let i = 0; i <= 55; i++) {
    if (i >= 20 && i <= 39) {
        leftbox.innerHTML += `<div class="seat occupied" onclick="selectseat(this)" id="seat${i + 1}">
                        <div class="up"></div>
                        <div class="down"></div>
                    </div>`
    } else {
        leftbox.innerHTML += `<div class="seat" onclick="selectseat(this)" id="seat${i + 1}">

                    <div class="up"></div>
                    <div class="down"></div>
                    </div>`
    }
}
let movieselector = document.querySelector("#movieselector")
let moviename = document.querySelector("#moviename")
let movieprice = document.querySelector("#movieprice");
let showselectedseats = document.querySelector("#showselectedseats");
let amount = document.querySelector("#amount");
let currentmoiveprice = 50;
let selectedseats = [];
function refresh() {
    selectedseats.map((a) => {
        document.getElementById(a).classList.remove("selected");
    });
    selectedseats = [];
    showselectedseats.innerHTML = '';
    amount.innerHTML = ""
}
function changemovie() {
    refresh();
    let occupiedseats = document.querySelectorAll(".occupied");

    occupiedseats.forEach((seat) => {
        console.log(seat)
        seat.classList.remove("occupied");
    });
    let names = [
        { name: "Batman", price: 50 },
        { name: "Superman", price: 40 },
        { name: "Spiderman", price: 78 }
    ];
    let { price } = names.find((a) => { return a.name == movieselector.value });
    currentmoiveprice = price;
    moviename.innerHTML = movieselector.value;
    movieprice.innerHTML = `$${price}`;
}

function selectseat(seat) {
    let oldclassess = seat.className;
    let seatid = seat.getAttribute("id");
    if (oldclassess.includes("occupied")) {
        alert("already occupied")
    } else {
        if (oldclassess.includes("selected")) {
            seat.classList.remove("selected");
            let old = selectedseats.filter((a) => { return a != seatid });
            selectedseats = old
            console.log(old, selectedseats)
        } else {
            seat.classList.add("selected");
            selectedseats.push(seatid);
            console.log(selectedseats)
        }
        showselectedseats.innerHTML = selectedseats.map((v, i) => {
            return `<p style="width:fit-content;border:1px solid;"> ${v} </p>`
        }).join("");
        amount.innerHTML = "$" + selectedseats.length * currentmoiveprice
    }
}
function bill() {
    alert("your seats are booked for the " + movieselector.value);
    selectedseats.forEach((seat) => {
        let st = document.getElementById(seat);
        console.log(st)
        st.classList.remove("selected");
        st.classList.add("occupied");
    })
    refresh();
}
