const accordion = document.getElementById("accordion-container")

for (var i = 1;i<=5;i++){
    window['panel'+i] = accordion.appendChild(document.createElement('div'))
    window['panel'+i].setAttribute('class', 'panel')
    window['panel'+i].setAttribute('id', 'panel'+ i)
    window['panel'+i].innerHTML = 'Panel ' + i
}

const allPanels = document.querySelectorAll('.panel')

for (panel of allPanels) {
    panel.addEventListener('click', (event)=>TogglePanelSize(event.target))
}








function TogglePanelSize (panelToChange) {
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
