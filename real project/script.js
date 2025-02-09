let currentPage = {
    "3M™ Structural Adhesives": 0,
    "3M™ Non-Structural Adhesives": 0,
    "3M™ Bonding Tapes": 0,
    "3M™ Reclosable Systems": 0
  };
  const productsPerPage = 3; // Adjust based on how many products you want to display per page
  
  // Function to change pages
  function changePage(direction, category) {
    // Calculate the next page based on the direction and current page
    currentPage[category] += direction;
  
    // Get the product list for the category
    const productList = document.getElementById(`${category}-list`);
    const products = productList.getElementsByClassName("product");
  
    // Calculate the number of pages for this category
    const totalPages = Math.ceil(products.length / productsPerPage);
  
    // Make sure the page doesn't go out of bounds
    if (currentPage[category] < 0) {
      currentPage[category] = 0;
    }
    if (currentPage[category] >= totalPages) {
      currentPage[category] = totalPages - 1;
    }
  
    // Show products for the current page
    showPage(category);
  }
  
  // Function to display products for the current page
  function showPage(category) {
    const productList = document.getElementById(`${category}-list`);
    const products = productList.getElementsByClassName("product");
  
    // Hide all products initially
    for (let i = 0; i < products.length; i++) {
      products[i].style.display = "none";
    }
  
    // Display the products for the current page
    const startIndex = currentPage[category] * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    for (let i = startIndex; i < endIndex && i < products.length; i++) {
      products[i].style.display = "block";
    }
  
    // Update the visibility of the Prev/Next buttons
    document.getElementById(`prev-btn-${category}`).style.display = currentPage[category] > 0 ? "inline-block" : "none";
    document.getElementById(`next-btn-${category}`).style.display = currentPage[category] < Math.ceil(products.length / productsPerPage) - 1 ? "inline-block" : "none";
  }
  
  // Call showPage initially to display the first page of each category
  showPage("3M™ Structural Adhesives");
  showPage("3M™ Non-Structural Adhesives");
  showPage("3M™ Bonding Tapes");
  showPage("3M™ Reclosable Systems");

  // Function to toggle the chat box visibility
function toggleChatBox() {
    const chatPopup = document.getElementById('chatPopup');
    if (chatPopup.style.display === "none" || chatPopup.style.display === "") {
      chatPopup.style.display = "block";
    } else {
      chatPopup.style.display = "none";
    }
  }
  
  // Function to handle message sending
  function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
  
    if (message !== "") {
      // For now, just logging the message to the console
      console.log("User's message: ", message);
  
      // You could integrate with a real chat API here or display the message in the chat box
      chatInput.value = ""; // Clear the input field after sending
  
      // Optionally, display a reply from the company (This is just a placeholder response)
      const chatBody = document.querySelector('.chat-body');
      const reply = document.createElement('p');
      reply.innerText = "Our team will get back to you shortly!";
      chatBody.appendChild(reply);
    } else {
      alert("Please type a message before sending.");
    }
  }
  

const sortProducts = () => {
    const sortOption = document.getElementById("sort").value;
    const productList = Array.from(document.querySelectorAll(".product"));
  
    if (sortOption === "price") {
      productList.sort((a, b) => parseFloat(a.getAttribute("data-price")) - parseFloat(b.getAttribute("data-price")));
    } else if (sortOption === "price-desc") {
      productList.sort((a, b) => parseFloat(b.getAttribute("data-price")) - parseFloat(a.getAttribute("data-price")));
    } else if (sortOption === "rating") {
      productList.sort((a, b) => parseFloat(b.getAttribute("data-rating")) - parseFloat(a.getAttribute("data-rating")));
    }
  
    const productListContainer = document.getElementById("product-list");
    productListContainer.innerHTML = "";
    productList.forEach(product => productListContainer.appendChild(product));
  };
  