const contentsArray = [
    {
        title: "Desert",
        img: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        text: "The common defining feature among desert ecosystems is low precipitation, generally less than 25 centimeters, or 10 inches, per year. Not all deserts are hot – desert ecosystems can exist from the tropics to the arctic, but regardless of latitude, deserts are often windy. Some deserts contain sand dunes, while others feature mostly rock. Vegetation is sparse or nonexistent, and any animal species, such as insects, reptiles and birds, must be highly adapted to the dry conditions."
    },{
        title: "Forest",
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        text: "Forest ecosystems are classified according to their climate type as tropical, temperate or boreal. In the tropics, rainforest ecosystems contain more diverse flora and fauna than ecosystems in any other region on earth. In these warm, moisture-laden environments, trees grow tall and foliage is lush and dense, with species inhabiting the forest floor all the way up to the canopy. In temperate zones, forest ecosystems may be deciduous, coniferous or oftentimes a mixture of both, in which some trees shed their leaves each fall, while others remain evergreen year-round. In the far north, just south of the Arctic, boreal forests – also known as taiga – feature abundant coniferous trees."
    },{
        title: "Grasslands",
        img: "https://images.unsplash.com/photo-1593629674805-d3e08c061eaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
        text: "Different types of grassland ecosystems can be found in prairies, savannas and steppes. Grassland ecosystems are typically found in tropical or temperate regions, although they can exist in colder areas as well, as is the case with the well-known Siberian steppe. Grasslands share the common climactic characteristic of semi-aridity. Trees are sparse or nonexistent, but flowers may be interspersed with the grasses. Grasslands provide an ideal environment for grazing animals."
    },{
        title: "Tundra",
        img: "https://images.unsplash.com/photo-1586196935120-f7780c76746e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2083&q=80",
        text: "As with deserts, a harsh environment characterizes ecosystems in the tundra. In the snow-covered, windswept, treeless tundra, the soil may be frozen year-round, a condition known as permafrost. During the brief spring and summer, snows melt, producing shallow ponds which attract migrating waterfowl. Lichens and small flowers may become visible during this time of year. The term “tundra” most commonly denotes polar areas, but at lower latitudes, tundra-like communities known as alpine tundra may be found at high elevations."
    },{
        title: "Marine",
        img: "https://images.unsplash.com/photo-1561623002-b6648b879b15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
        text: "Marine ecosystems differ from freshwater ecosystems in that they contain saltwater, which usually supports different types of species than does freshwater. Marine ecosystems are the most abundant types of ecosystems in the word. They encompass not only the ocean floor and surface but also tidal zones, estuaries, salt marshes and saltwater swamps, mangroves and coral reefs."
    }
]

const accordion = document.getElementById("accordion-container")

for (var i = 1;i<=5;i++){
    window['panel'+i] = accordion.appendChild(document.createElement('div'))
    window['panel'+i].setAttribute('class', 'panel')
    window['panel'+i].setAttribute('id', 'panel'+ i)

}

const allPanels = document.querySelectorAll('.panel')



allPanels.forEach((panel, i)=> {
    panel.addEventListener('click', (event)=> TogglePanelSize(event))
    var title = panel.appendChild(document.createElement('p'))
    title.innerText = contentsArray[i].title
    title.classList.add('title')

    var image = panel.appendChild(document.createElement('img'))
    image.setAttribute('src', contentsArray[i].img )

    var summary = panel.appendChild(document.createElement('div'))
    summary.innerText = contentsArray[i].text
    summary.classList.add('summary')
    
}) 









function TogglePanelSize (event) {
    var panelToChange = event.path.filter(item=>item.classList ? item.classList.contains('panel') : null)[0]
    if (panelToChange.classList.contains("full")){
        FullMenuReturn()
    }
    else if (panelToChange.classList.contains("active")) { //go to fullscreen
        for (panel of allPanels){   
            if (panelToChange!=panel) { //hide other panels
                panel.classList.add("shrink")
                
                HidePanel(panel)
            } 
            else {
                panel.classList.add("full") //expand this panel
                //load full content
            }

        }
                
    } else { //expand panel to large(active), reduce others to small
        for (panel of allPanels){
            if (panelToChange==panel ) {
                panel.classList.add("active") 
                panel.classList.remove("small")
            }
            else {
                panel.classList.remove("active")
                panel.classList.add("small")
            }
                
        }
    }      
}



function FullMenuReturn () {
    for (panel of allPanels){
        UnHidePanel(panel)
        panel.classList.remove("full")
        panel.classList.remove("active")
        panel.classList.remove("small")
    }
}

function HidePanel (panelToHide) {
    setTimeout (()=> {
        panelToHide.classList.add("hide")
        panel.classList.remove("small")
    }, 1000)
}

function UnHidePanel (panelToUnHide) {
    panelToUnHide.classList.remove("hide")
    setTimeout (()=> {panelToUnHide.classList.remove("shrink")}, 300)
}
