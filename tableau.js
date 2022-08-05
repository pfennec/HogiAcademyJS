const tab = [12,11,33,22,14,51,85,30,25,78];

// arranger par ordre

// const compare =(a,b)=>a-b;
// tab.sort(compare);


// //selectionner les nombre paire

// let b= tab.filter(Element=>
//     {return Element.tab % 2 ==0;})
//     console.log(b);

    let filt = (a)=>(a%2==0)
    tab.filter(filt);

    //afficher les nombres impaire

    let filtre = (c)=>(c%2==1);
    tab.filter(filtre);