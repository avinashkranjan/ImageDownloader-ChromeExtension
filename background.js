/*alert("Hi! Hello...")*/

function MyGenricClick(info, tab){
    console.log("Clicked on Page", info, tab)
}

function MyImageClick(info, tab){
    console.log("Clicked on Page", info, tab)
}


chrome.contextMenus.create({ 
    "title": "Share",
    "contexts": ["page"],
    "onclick": MyGenricClick    
})

chrome.contextMenus.create({ 
    "title": "Share",
    "contexts": ["page"],
    "onclick": MyImageClick    
})