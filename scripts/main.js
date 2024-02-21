function ticketKataStarts(id)
{
    const button = document.getElementById(id);
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