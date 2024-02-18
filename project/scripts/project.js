document.addEventListener("DOMContentLoaded", () => {
    const menuList = document.getElementById("menuList");
    const filterOptions = document.getElementById("filterOptions");
    const btnShowAll = document.getElementById("btnShowAll");
    const btnColdDrinks = document.getElementById("btnColdDrinks");
    const btnPastries = document.getElementById("btnPastries");
    const btnBeverages = document.getElementById("btnBeverages");
    const btnNormalFood = document.getElementById("btnNormalFood");
  
    let menuData;
  
    // Fetch menu data from JSON file
    fetch("menu.json")
      .then(response => response.json())
      .then(data => {
        menuData = data;
  
        
        renderMenu(menuData.menu);
      })
      .catch(error => console.error("Error fetching menu data:", error));
  
    // Event listener for "Show All" button
    btnShowAll.addEventListener("click", () => {
      renderMenu(menuData.menu); // show all menu items
    });
  
    // Event listeners for filtering buttons
    btnColdDrinks.addEventListener("click", () => renderFilteredMenu("coldDrinks"));
    btnPastries.addEventListener("click", () => renderFilteredMenu("pastries"));
    btnBeverages.addEventListener("click", () => renderFilteredMenu("beverages"));
    btnNormalFood.addEventListener("click", () => renderFilteredMenu("normalFood"));
  
    function renderMenu(menuItems) {
      menuList.innerHTML = "";
      menuItems.forEach(item => {
        const li = createMenuItem(item);
        menuList.appendChild(li);
      });
    }
  
    function renderFilteredMenu(category) {
      const filteredItems = menuData.menu.filter(item => item.category === category);
      renderMenu(filteredItems); // Render menu items based on category
    }
  
    function createMenuItem(item) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = `images/${item.image}`;
      img.alt = item.name;
      const p = document.createElement("p");
      p.textContent = `${item.name} - $${item.price}`;
      li.appendChild(img);
      li.appendChild(p);
      return li;
    }
  });
  