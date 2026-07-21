// Dynamic Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear(); //
document.getElementById("lastModified").textContent = document.lastModified; //

// Responsive Hamburger Menu Toggle
const menuButton = document.getElementById("menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    menuButton.classList.toggle("open");
});

// Temple Objects Array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // 3 Additional Required Temples
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Zollikofen, Switzerland",
        dedicated: "1955, September, 11",
        area: 35546,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-653038-wallpaper.jpg"
    }
];

// Display Function to render temple cards dynamically
const container = document.querySelector(".res-grid");

function createTempleCard(filteredTemples) {
    container.innerHTML = ""; // Clear existing grid items

    filteredTemples.forEach((temple) => {
        let card = document.createElement("section");
        card.classList.add("temple-card");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy"); // Native Lazy Loading
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });
}

// Initial render: Home displays all temples
createTempleCard(temples);

// Helper function to extract year from dedicated string (e.g. "2005, August, 7")
function getYear(dedicatedStr) {
    return parseInt(dedicatedStr.split(",")[0]);
}

// Navigation Filter Event Listeners
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const heading = document.querySelector("#heading");

function setActiveLink(activeEl) {
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    activeEl.classList.add("active");
}

homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Home";
    setActiveLink(homeLink);
    createTempleCard(temples);
});

oldLink.addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Old Temples";
    setActiveLink(oldLink);
    // Temples built before 1900
    createTempleCard(temples.filter(t => getYear(t.dedicated) < 1900));
});

newLink.addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "New Temples";
    setActiveLink(newLink);
    // Temples built after 2000
    createTempleCard(temples.filter(t => getYear(t.dedicated) > 2000));
});

largeLink.addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Large Temples";
    setActiveLink(largeLink);
    // Temples larger than 90,000 sq ft
    createTempleCard(temples.filter(t => t.area > 90000));
});

smallLink.addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Small Temples";
    setActiveLink(smallLink);
    // Temples smaller than 10,000 sq ft
    createTempleCard(temples.filter(t => t.area < 10000));
});