const accordion = document.getElementById("accordion-container")

for (var i = 1;i<=5;i++){
    window['panel'+i] = accordion.appendChild(document.createElement('div'))
    window['panel'+i].setAttribute('class', 'panel')
    window['panel'+i].setAttribute('id', 'panel'+ i)
    window['panel'+i].appendChild(document.createElement('p')).innerText = 'Panel ' + i
    window['panel'+i].appendChild(document.createElement('img'))
}

const allPanels = document.querySelectorAll('.panel')

const imgArray = [
    "https://images.unsplash.com/photo-1631949351744-8bd2f28c8200?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1633249422795-1f3e5fe0a843?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1633248611990-ed00611b7c97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1633179893959-eaa23b7fe9ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1633181066775-438ec783b6ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1357&q=80"
]

allPanels.forEach((panel, i)=> {
    panel.addEventListener('click', (event)=> TogglePanelSize(event))
    panel.children[1].setAttribute('src', imgArray[i] )
}) 









function TogglePanelSize (event) {
    var panelToChange = event.path.filter(item=>item.classList ? item.classList.contains('panel') : null)[0]
    if (panelToChange.classList.contains("full")){
        FullMenuReturn()
    }
    else if (panelToChange.classList.contains("active")) { //hide all other panels
        for (panel of allPanels){   
            if (panelToChange!=panel) {
                panel.classList.add("shrink")
                HidePanel(panel)
            } 
            else {
                panel.classList.add("full")
                //load full content
            }

        }
                
    } else { //expand this one, reduce others
        for (panel of allPanels){
            panelToChange==panel 
                ?   panel.classList.add("active") 
                :   panel.classList.remove("active")
        }
    }      
}



function FullMenuReturn () {
    for (panel of allPanels){
        UnHidePanel(panel)
        panel.classList.remove("full")
        panel.classList.remove("active")
    }
}

function HidePanel (panelToHide) {
    setTimeout (()=> {panelToHide.classList.add("hide")}, 1000)
}

function UnHidePanel (panelToUnHide) {
    panelToUnHide.classList.remove("hide")
    setTimeout (()=> {panelToUnHide.classList.remove("shrink")}, 300)
}
