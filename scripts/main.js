document.getElementById("coupon").addEventListener("input", couponApplyPart);
function ticketKataStarts(id)
{
    setBackgroundColor(id);
}

// Now We will set color for our button
function setBackgroundColor(id)
{
    const button = document.getElementById(id);
    if(button.style.backgroundColor != "rgb(29, 209, 0)")
    {
        const selectedSeat = document.getElementById("selected-seat");
        const seatCount = selectedSeat.innerText;
        let seatCountInt = parseInt(seatCount);
        if(seatCountInt < 4 )
        {
          button.style.backgroundColor = "#1DD100";
          increaseSelectedSeat();
          decreaseAvailableSeats();
          setTicketInformation(id);
        }
        else
        {
            alert("You Can't Book More Than 4 Tickets");
        }
    }
    else
    {
        button.style.backgroundColor = "rgb(209 213 219)";
        decreaseSelectedSeat();
        increaseAvailableSeats();
    }
}
function increaseSelectedSeat()
{
    const selectedSeat = document.getElementById("selected-seat");
    const seatCount = selectedSeat.innerText;
    let seatCountInt = parseInt(seatCount);
    seatCountInt+=1;
    selectedSeat.innerText = seatCountInt;
}
function decreaseSelectedSeat()
{
    const selectedSeat = document.getElementById("selected-seat");
    const seatCount = selectedSeat.innerText;
    let seatCountInt = parseInt(seatCount);
    seatCountInt-=1;
    selectedSeat.innerText = seatCountInt;
}
function decreaseAvailableSeats()
{
    const selectedSeat = document.getElementById("available-seats");
    const seatCount = selectedSeat.innerText;
    let seatCountInt = parseInt(seatCount);
    seatCountInt-=1;
    selectedSeat.innerText = seatCountInt;
}
function increaseAvailableSeats()
{
    const selectedSeat = document.getElementById("available-seats");
    const seatCount = selectedSeat.innerText;
    let seatCountInt = parseInt(seatCount);
    seatCountInt+=1;
    selectedSeat.innerText = seatCountInt;
}

function couponApplyPart()
{
    const coupon = document.getElementById("coupon");
    const couponValue = coupon.value;
    if(couponValue == "NEW15")
    {
        const apply = document.getElementById("apply");
        apply.removeAttribute("disabled");
    }
    else if(couponValue == "Couple 20")
    {
        const apply = document.getElementById("apply");
        apply.removeAttribute("disabled");
    }
}
function setTicketInformation(id)
{
    const seatName = id;
    let newDiv1 = document.createElement("div");
    newDiv1.setAttribute("class","flex justify-between mb-6");
    let newH1 = document.createElement("h1");
    newH1.setAttribute("class","text-[16px] inter-font font-medium");
    let newP1 = document.createElement("p");
    newP1.setAttribute("class","text-[16px] inter-font font-medium");
    let newP2 = document.createElement("p");
    newP2.setAttribute("class","text-[16px] inter-font font-medium");
    newH1.innerText = seatName;
    newP1.innerText = "Economy";
    newP2.innerText = "550";
    newDiv1.append(newH1,newP1,newP2);
    document.getElementById("seat-information-container").append(newDiv1);
}