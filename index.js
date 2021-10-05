const contentsArray = [
    {
        title: "Environment",
        img: "https://images.unsplash.com/photo-1631949351744-8bd2f28c8200?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
    },{
        title: "Schedule",
        img: "https://images.unsplash.com/photo-1633249422795-1f3e5fe0a843?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
    },{
        title: "Routine",
        img: "https://images.unsplash.com/photo-1633248611990-ed00611b7c97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
    },{
        title: "Daytime",
        img: "https://images.unsplash.com/photo-1633179893959-eaa23b7fe9ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
    },{
        title: "Insomnia",
        img: "https://images.unsplash.com/photo-1633181066775-438ec783b6ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1357&q=80"
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
    summary.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius quam eros, semper dapibus ante accumsan sagittis. Fusce dignissim ullamcorper leo, sit amet dignissim nisi tempus ac. Vivamus iaculis enim sit amet semper molestie. Nulla facilisi. Donec consectetur, nulla sit amet lacinia pulvinar, leo justo fringilla neque, ut elementum nisl ex ornare nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque egestas ipsum dui. Donec sapien ipsum, sollicitudin convallis feugiat at, rutrum eget leo. Nunc venenatis ex vitae lacinia tempor. Vestibulum suscipit lectus non odio fringilla malesuada. Duis vitae semper felis. Suspendisse potenti. Ut ornare vitae erat sed efficitur. Nulla a magna eget lectus tempor faucibus."
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
