const list = document.getElementById("list").querySelector("tbody");

const addBtn = document.getElementById("styled-button");
const clearBtn = document.getElementById("clear-button");

const nameBox = document.getElementById("name");
const priceBox = document.getElementById("price");
const rowBox = document.getElementById("row");
const placeBox = document.getElementById("place");

const searchBox = document.getElementById("search");

let removed = [];

function addItem(text, type, toLast) {
    let item = document.createElement(type);
    item.innerText = text;

    if (toLast) {
        list.lastChild.appendChild(item);
    } else {
        list.appendChild(item);
    }
}

let onin = searchBox.oninput = () => {
    if (searchBox.value != "") {
        for (let i = 0; i < list.children.length; i++) {
            if (!(list.children[i].firstChild.innerText.toLowerCase().startsWith(searchBox.value.toLowerCase()))) {
                removed.push(list.children[i]);
                list.removeChild(list.children[i]);
            }
        }
        for (let i = 0; i < removed.length; i++) {
            if (removed[i].firstChild.innerText.toLowerCase().startsWith(searchBox.value.toLowerCase())) {
                list.appendChild(removed[i]);
            }
        }
    }
    else {
        for (let i = 0; i < removed.length; i++) {
            list.appendChild(removed[i]);
        }
    }
}

addBtn.onclick = () => {
    if (nameBox.value != "" &&
        priceBox.value != "" &&
        rowBox.value != "" &&
        placeBox.value != "") {
        addItem("", "tr", false);
        addItem(nameBox.value, "td", true);
        addItem(priceBox.value, "td", true);
        addItem(rowBox.value, "td", true);
        addItem(placeBox.value, "td", true);

        buffer = list;
        onin();
    }
}

clearBtn.onclick = () => {
    list.innerHTML = "";
}