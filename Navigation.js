
// consts

// main
const main_Interface = document.getElementById("main-interface");
const Display_main_Interface = document.getElementById("display");

// price & tax
const Tax_Interface = document.getElementById("price-interface");

// scientific
const Scientific_Interface = document.getElementById("scientific-interface");

// // MoreOption
// const moreOption_Interface = document.getElementById("");
//     // others
//     const Live_Currency = document.getElementById("");
//     const Geometry = document.getElementById("");
//     const measurements = document.getElementById("");


// // buttons


const priceBtn = document.getElementById("Option1");
const scientificBtn = document.getElementById("Option2");
const MoreBtn = document.getElementById("Option3");
// const X = document.getElementById("Option");

const Price_main_return = document.getElementById("OptionReturn(1)");
const Price_Scientific_return = document.getElementById("OptionReturn(2)");
const Price_option_return = document.getElementById("OptionReturn(3)");
const scientific_price_return = document.getElementById("OptionReturn(4)");
const scientific_main_return = document.getElementById("OptionReturn(5)");
const scientific_more_return = document.getElementById("OptionReturn(6)");


//            ===============  ( interface [1] )   ===============   ( interface [1] )   ================== 


// price & tax view

priceBtn.addEventListener('click', () => {
    main_Interface.classList.add('hidden');
    Display_main_Interface.classList.add('hidden');
    Scientific_Interface.classList.add('hidden');
    
    Tax_Interface.classList.remove('hidden');
});

// price & tax => main 
Price_main_return.addEventListener('click', () => {
    Tax_Interface.classList.add('hidden');
    Scientific_Interface.classList.add('hidden');

    main_Interface.classList.remove('hidden');
    Display_main_Interface.classList.remove('hidden');

});

// scientific => main 
Price_Scientific_return.addEventListener('click', () => {
    Tax_Interface.classList.add('hidden');
    main_Interface.classList.add('hidden');

    Display_main_Interface.classList.remove('hidden');
    Scientific_Interface.classList.remove('hidden');

});


//            ===============  ( interface [2] )   ===============   ( interface [2] )   ================== 

//  (scientific view)

scientificBtn.addEventListener('click', () => {
    main_Interface.classList.add('hidden');
    Tax_Interface.classList.add('hidden');

    Display_main_Interface.classList.remove('hidden');
    Scientific_Interface.classList.remove('hidden');

    
});


// scientific => main 
scientific_main_return.addEventListener('click', () => {
    Tax_Interface.classList.add('hidden');
    Scientific_Interface.classList.add('hidden');

    main_Interface.classList.remove('hidden');
    Display_main_Interface.classList.remove('hidden');

});
// scientific => tax + price 
scientific_price_return.addEventListener('click', () => {
    Scientific_Interface.classList.add('hidden');
    main_Interface.classList.add('hidden');
    Display_main_Interface.classList.add('hidden');

    Tax_Interface.classList.remove('hidden');

});

//            ===============                 ===============               ================== 

