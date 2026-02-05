document.addEventListener("DOMContentLoaded", function () {
    runProgram();
});
const steder = [
    {
        "location":"lolland",
        "tekst":"Nakskov er en af mine favoritsteder i Danmark, da det er her jeg er vokset op og hvor største delen af min familie bor."
    },
    {
      "location":"randers",
      "tekst":"Randers er en af mine favoritsteder, da min mor og jeg har besøgt Memphis Mansion sammen en del gange efterhånden."
  
    },
    {
        "location":"noerrebro",
        "tekst":"Nørrebro er en af mine nye favoritsteder, da jeg lige er flyttet dertil sammen med min kæreste."
    }
  ]
  async function runProgram() {
  let selected; 
  let selectedId;
  let fillcolor;
  let active;
  let popover = document.querySelector("#info");

    // 1. Load svg map
    //------------------------------------------------------------------------------------	
    let rawSvg = await fetch("kort.svg");
    let svg = await rawSvg.text();
    document.querySelector("#map").innerHTML = svg;

    // 2. Skift farve ved klik, og vis tekst
    //-----------------------------------------------------------------------
    document.querySelector("#map #poi").addEventListener("click",(evt)=> clicked(evt));

    //function clicked
    //--------------------------------------------------------------------
    function clicked (evt){
        // a. find det klikkede element
        //----------------------------------------------
        selected = evt.target;
        /* console.log(selected); */

        // b. find det klikkede elementets ID
        //---------------------------------------------
        selectedId = selected.id;
        /* console.log(selectedId); */

    // c. find  det klikkede elements fillfarve
    //---------------------------------------------
        fillcolor = selected.getAttribute("fill");
    
 
    // d. vis info
    //--------------------------------------------
        steder.forEach(location => {
          if (location.location === selectedId) {
            document.querySelector("#tekst").textContent = location.tekst;
            /* document.querySelector("#kunstnerbillede").src = "billeder/" + kunstner.billede + ".jpeg"; */
          }
        });


    // 4. hvis der tidligere har været klikket skal det forige element skifte farve til original
    //------------------------------------------------------------------------------------
        if (active){
            active.setAttribute("fill", fillcolor);
        }


    //gør det klikkede til det aktive
    //-------------------------------------------------------------------------
        active = selected;

    //skift farve på det valgte
    //-------------------------------------------------------------------------
        if (fillcolor == "#08e7f7"){
            document.querySelector("#" + selectedId).setAttribute("fill", "#f31fd0ff");
        }
  
    //reset farve og skjul tekst hvis valgt elementet allerede er aktivt
    //--------------------------------------------------------------------------
    else{
        document.querySelector("#" + selectedId).setAttribute("fill", "#08e7f7");
    }
    popover.togglePopover();
    }
    document.querySelector("click", () => {
    if(!popover.matched(":popover-open")){
        selected.setAttribute("fill", "#08e7f7");
    }
    });
        
};