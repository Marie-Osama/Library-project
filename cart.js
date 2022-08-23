var cart = JSON.parse(sessionStorage.getItem("data"));
var totalprice = 0;

function printBooks() {
    var html = '';
    cart?.forEach(book => {
        var body = `<div class="card">
                    <div class="front">
                        <img src="${book.image}" />
                    </div>
                    <div class="description">
                        <header>
                            <h4>${book.bookName}</h4>
                            <span>${book.by}</span>
                        </header>
                        <p>${book.description}</p>
                        <h5>${book.price}</h5>
                        <input type="button" value="remove" onclick="remove('${book.bookName}')" />
                    </div>
                </div>`;
        html += body;
    });
    document.body.getElementsByClassName("data")[0].innerHTML = html;
}

function checkout() {
    totalprice = 0;
    cart?.forEach(book => {
        totalprice += parseInt(book.price.replace(/[^\d.-]/g, ''));
    })
    if (totalprice==0) {
        document.body.getElementsByClassName("total")[0].innerHTML ="Your cart is empty!"}
     else
     document.body.getElementsByClassName("total")[0].innerHTML = `Total Price is: ${totalprice}`;
 };

function remove(bookName) {
    for (i = 0; i < cart.length; i++)
        if (bookName == cart[i].bookName) {
            cart.splice(i,1);
            break;
        }
    printBooks();
    checkout();
}

printBooks();
checkout();

function submit(){
   confirm(`Your Total Price is: ${totalprice} 
   Proceed to checkout`)
}
