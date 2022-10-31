// Import stylesheets
import './helpers/style.css';
import * as helper from './helpers/helpers.js';

// VOTRE NOM ET PRENOM ICI ! MESKY Rachid


function solutionExercice1(N) {
    var res = [];
    //TAPE LE CODE DE L'EXERCICE 1 ICI!
    for(let i = 0 ; i <= N ; i++)
    {
        res.push(i);
    }
    return res
}

function solutionExercice2(L) {
    var res = [];
    //TAPE LE CODE DE L'EXERCICE 2 ICI!
    while(res.length > 0) {
        res.pop();
    }
    return res
}
function solutionExercice3(L) {
    var res = [];
    //TAPE LE CODE DE L'EXERCICE 3 ICI!
     for(let i = 0 ; i <L.length ; i++)
     {
         if(res.indexOf(L[i]) === -1)
         {
             res.push(L[i]);
         }
     }
    return res
}

helper.displayOnHtml(solutionExercice1(1000),'1')
helper.displayOnHtml(solutionExercice2([1,4,7,5,3,6,3]),'2')
helper.displayOnHtml(solutionExercice3([1,5,3,6,4,3,1,5,4]),'3')