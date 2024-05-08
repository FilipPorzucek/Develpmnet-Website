


const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuElements = document.querySelectorAll('.menuElement');

const mediaQuery = window.matchMedia('(min-width: 1000px)');


/*Obsługa menu burger*/

const toggleDisplay = () => {
  menuElements.forEach(element => {
    if (mediaQuery.matches) {
      
      element.style.display = 'flex';
    } else {
      element.style.display = 'none';
    }
  });
};

toggleDisplay();


mediaQuery.addListener(toggleDisplay);

burger.addEventListener('click', function() {
  if (!mediaQuery.matches) {
    menuElements.forEach(element => {
      if (element.style.display === 'flex') {
        element.style.display = 'none';
      } else {
        element.style.display = 'flex';
      }
    });

    burger.classList.toggle('active');
  }
});

/*Tablica z informacjami i apartamentami*/

let apartamenty=[
  {
"id":"0",
"title":"APARTAMENT <br> Z ANTRESOLĄ",
"description":"Antresola daje fantastyczne możliwości aranżacji wnętrz. Jeśli zajmuje jedynie część przestrzeni nad poziomem mieszkania, sprawia że całe wnętrze jest przestronne i jasne. Schody, barierka i inne elementy związane wielopoziomowym charakterem mieszkania dają duże pole do popisu właścicielom oraz architektom wnętrz. Mieszkanie nabiera lekkości, sprawia wrażenie bardziej przestronnego niż jest nim w rzeczywistości. Samą powierzchnię antresoli można wykorzystać w dowolnym celu.",
"photo": "img/ap1.png",
"price":"443000"
  },
  {

"id":"1",
"title":"APARTAMENT Z JEDNĄ <br> SYPIALNIĄ",
"description":"Ten apartament jest gustownie urządzonym wnętrzem. Zaskakuje dużą przestrzenią, która daje komfort pobytu nawet czterem osobom. W skład apartamentu wchodzą: pokój dzienny z rozkładaną dwuosobową sofą, aneks kuchenny wraz ze stołem jadalnym oraz łazienka z prysznicem. Sypialnia to oddzielny pokój, wyposażony w duże małżeńskie łóżko. Ten rodzaj pokoju został zaprojektowany w trosce o najwyższą jakość komfortu dla najbardziej wymagających klientów, podróżujących wspólnie, rodzinnie lub w parach, ale również w celach biznesowych. ",
"photo":"img/ap2.png",
"price":"400000"
  },
  {
"id":"2",
"title":"APARTAMENT Z DWOMA <br> SYPIALNIAMI",
"description":"Przestronny apartament na sprzedaż z dwiema sypialniami. Zlokalizowany w prestiżowej dzielnicy, ten pięknie urządzony apartament oferuje komfortową przestrzeń dla całej rodziny. Z dwiema osobnymi sypialniami, przestrzennym salonem, w pełni wyposażoną kuchnią oraz elegancką łazienką, ten apartament to idealne miejsce do zamieszkania. Dodatkowo, apartament posiada także balkon z widokiem na okolicę, zapewniając relaksujące miejsce do odpoczynku po pracy. Nie przegap tej wyjątkowej okazji na zakup wymarzonego apartamentu",
"photo":"img/ap3.png",
"price":"480000"

  }

]
const aparts=document.querySelector('.aparts');
const button1=document.querySelector('#button1');
const button2=document.querySelector('#button2');
const button3=document.querySelector('#button3');
const plus2=document.querySelector('.plus2');
const plus3=document.querySelector('.plus3');
const apartsSquare=document.querySelector('#squareAparts');

  const displayofert=(apartamenty)=>{
    let code="";
  
    code += '<div class="title">' + apartamenty[0].title + '</div>';
    code+='<div class="plus2">'+'+'+'</div>';
    code += '<div class="ap1"><img src="' + apartamenty[0].photo + '"></div>';
    code+='<p class="description">'+apartamenty[0].description+'</p>';
    code+='<div class="price">'+'Cena:'+' '+apartamenty[0].price+' '+'zł'+'</div>';
  
  
  return code;
  
  }
  oferts='';
  oferts=displayofert(apartamenty);
  aparts.innerHTML=oferts;


  const displayofert2=(apartamenty)=>{
    
    let code2="";
    
   code2 += '<div class="title2">' + apartamenty[1].title + '</div>';
   code2+='<div class="plus2">'+'+'+'</div>';
   code2+='<div class="ap2"><img src="'+apartamenty[1].photo+'"></div>';
   code2+='<p class="description2">'+apartamenty[1].description+'</p>';
   code2+='<div class="price">'+"Cena"+" "+apartamenty[1].price+"zł"+'</div>';
   
   return code2;
 }


 const displayofert3=(apartamenty)=>{
let code3="";
code3+='<div class="title2">'+apartamenty[2].title+'</div>';
code3+='<div class="plus3">'+'+'+'</div>';
code3+='<div class="ap3"><img src="'+apartamenty[2].photo+'" ></div>';
code3+='<p class="description3">'+apartamenty[2].description+'</p>';
code3+='<div class="price">'+"Cena"+" "+apartamenty[2].price+"zł"+'</div>';

return code3;
 }


function changeSquare(){
  const plus2=document.querySelector('.plus2');
  plus2.addEventListener('click',function(){
    apartsSquare.innerHTML='<div class="responsiveApart">'+apartamenty[0].title+'<br>'+'Cena:'+' '+apartamenty[0].price+' '+'zł '+'</div>';
   
    localStorage.setItem('price',apartamenty[0].price);
  })
}
changeSquare();
 button1.addEventListener('click', function() {
  aparts.classList.add('transition-effect');
  aparts.classList.add('disappear-animation');
  button1.style.boxShadow = '4px 4px 6px rgba(0.7, 0.7, 0.7, 0.7)';
  button3.style.boxShadow='none';
  button2.style.boxShadow = 'none';
  
  setTimeout(() => {
    oferts = displayofert(apartamenty);
    aparts.innerHTML = oferts;
    const plus2=document.querySelector('.plus2');
    plus2.addEventListener('click', function(){
      apartsSquare.innerHTML='<div class="responsiveApart">'+apartamenty[0].title+'<br>'+'Cena:'+' '+apartamenty[0].price+' '+'zł '+'</div>';
     
      localStorage.setItem('price',apartamenty[0].price);
    });
    aparts.classList.remove('disappear-animation');
    aparts.classList.add('appear-animation');
    setTimeout(() => {
      aparts.classList.remove('appear-animation');
    }, 1000);
  }, 1000);
});

button2.addEventListener('click', function() {
  aparts.classList.add('transition-effect');
  aparts.classList.add('disappear-animation');
  button1.style.boxShadow = 'none';
  button3.style.boxShadow='none';
  button2.style.boxShadow = '4px 4px 6px rgba(0.7, 0.7, 0.7, 0.7)';
  
  setTimeout(() => {
    oferts = displayofert2(apartamenty);
    aparts.innerHTML = oferts;
    const plus2=document.querySelector('.plus2');
    plus2.addEventListener('click', function(){
      apartsSquare.innerHTML='<div class="responsiveApart">'+apartamenty[1].title+'<br>'+'Cena:'+' '+apartamenty[1].price+' '+'zł '+'</div>';
     
      localStorage.setItem('price',apartamenty[1].price);
    });
    aparts.classList.remove('disappear-animation');
    aparts.classList.add('appear-animation');
    
    setTimeout(() => {
      aparts.classList.remove('appear-animation');
    }, 1000);
  }, 1000);
});


button3.addEventListener('click',function(){
aparts.classList.add('transition-effect');
aparts.classList.add('disappear-animation');
button1.style.boxShadow = 'none';
button3.style.boxShadow='4px 4px 6px rgba(0.7, 0.7, 0.7, 0.7)';
button2.style.boxShadow = 'none';

setTimeout(()=> {

  oferts=displayofert3(apartamenty);
  aparts.innerHTML=oferts;
  const plus3=document.querySelector('.plus3');
    plus3.addEventListener('click', function(){
      apartsSquare.innerHTML='<div class="responsiveApart">'+apartamenty[2].title+'<br>'+'Cena:'+' '+apartamenty[2].price+' '+'zł '+'</div>';
      localStorage.setItem('price',apartamenty[2].price);
    });
  aparts.classList.remove('disappear-animation');
  aparts.classList.add('appear-animation');
setTimeout(()=>{
aparts.classList.remove('appear-animation');
},1000)

},1000)
})

/*Projekty wnętrz*/

const arrow=document.querySelector('.arrow');
const arrowForward=document.querySelector('.arrow_forward');
const tlo = document.querySelector('.background2');
function changeImage(index) {
  tlo.classList.add('transition-effect2');
  tlo.classList.add('disappear-animation2');
  setTimeout(() => {
    tlo.style.background = "url('" + images[index] + "') no-repeat center fixed";
    tlo.style.backgroundSize = "cover";
    tlo.classList.remove('disappear-animation2');
    tlo.classList.add('appear-animation2');
    setTimeout(() => {
      tlo.classList.remove('appear-animation2');
      tlo.classList.add('disappear-animation2');
    }, 5000);
  }, 1000); 
}
var currentSlide=0;
var images=['img/back1.jpg', 'img/back2.jpg','img/back3.jpg','img/back4.jpg'];

arrow.addEventListener('click',function(){
  if (currentSlide === images.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide = currentSlide + 1;
  }
  changeImage(currentSlide);

  currentSlide=(currentSlide-1)%images.length;
  changeImage(currentSlide);
  

})
arrowForward.addEventListener('click',function(){

  currentSlide=(currentSlide+1)%images.length;
  changeImage(currentSlide);

})



function nextSlide(){
currentSlide=(currentSlide+1)%images.length;
changeImage(currentSlide);
}
window.setInterval(nextSlide, 7000);

/*domy */
const HomesContainer = document.querySelector('.homes');
const homesButtons=document.querySelectorAll('.buttons custom-margin-buttons')
const homesbutton1=document.querySelector('#homesbutton1');
const homesbutton2=document.querySelector('#homesbutton2');
const homesbutton3=document.querySelector('#homesbutton3');
const homeSquare=document.querySelector('.homeSquare');
const homeSquareText=document.querySelector('.type');



function homes(page, titlehome, descriptionhome, price) {
  this.page = page;
  this.titlehome = titlehome;
  this.descriptionhome = descriptionhome;
  this.price = price;
}

const homesOferts = {
  Oferts1: new homes('img/home1.png', "DOM Z OGRODEM", "Nowoczesny niewielki dom z ogrodem to doskonałe rozwiązanie dla osób ceniących nowoczesny design i komfortowe warunki mieszkalne. Dom został zaprojektowany tak, aby efektywnie wykorzystać dostępną przestrzeń, a przy tym zachować estetykę. Wnętrze domu cechuje się funkcjonalnością i wysokim standardem wykończenia, co zapewnia komfortowe warunki mieszkalne.", "520000"),
  Oferts2: new homes('img/home2.png',"DOM Z GARAŻEM","Nowoczesny dom z garażem to idealne rozwiązanie dla osób poszukujących nowoczesnego designu i funkcjonalności w swoim domu. Taki dom charakteryzuje się przemyślanym układem pomieszczeń, wysokim standardem wykończenia oraz nowoczesnymi rozwiązaniami technologicznymi. Dodatkowo, obecność garażu zapewnia wygodę i bezpieczeństwo dla pojazdów mieszkańców.","480000"),
  Oferts3: new homes('img/home3.png',"DOM Z TARASEM","nowoczesny dom z dużym tarasem, który zachwyca swoim unikalnym designem i funkcjonalnością. Ten przestronny dom został zaprojektowany z myślą o komforcie mieszkańców oraz wygodzie użytkowania w codziennym życiu.Głównym atutem tego domu jest przestronny taras, który stanowi doskonałe miejsce do relaksu i spotkań na świeżym powietrzu.Taras jest wystarczająco duży, aby pomieścić wygodne meble ogrodowe","430000")
}
function writingOfert(idHomes) {
  let HomeOferts = "";
  HomeOferts += '<div class="ap1"><img src="' + homesOferts[idHomes].page + '"></div>'+'<div class="title custom-margin-title">'
  +homesOferts[idHomes].titlehome +	'<div class="plus1">'+'+'+'</div>'+'</div>'+'<div class="description">'+homesOferts[idHomes].descriptionhome+
  '</div>'+'<div class="price">'+"Cena: "+homesOferts[idHomes].price+'zł'+'</div>';



  return HomeOferts;
}

HomesContainer.innerHTML = writingOfert('Oferts1');



const plus=document.querySelector('.plus1');
plus.addEventListener('click', function(){
  homeSquareText.innerHTML=homesOferts.Oferts1.titlehome+'<br>'+'Cena:'+' '+homesOferts.Oferts1.price+' '+'zł ';
  homeSquareText.style.marginTop='0.1%';
  homeSquareText.style.fontSize='0.9vw';
  localStorage.setItem('price', homesOferts.Oferts1.price);
});



homesbutton1.addEventListener('click',function(){
  HomesContainer.classList.add('transition-effect');
  HomesContainer.classList.add('disappear-animation');
  homesbutton2.style.boxshadow='none';
  homesbutton3.style.boxShadow='none';
  homesbutton1.style.boxShadow = '4px 4px 6px rgba(0.7, 0.7, 0.7, 0.7)';
  setTimeout(()=> {
    writingOfert('Oferts1');
    HomesContainer.innerHTML = writingOfert('Oferts1');
    const plus=document.querySelector('.plus1');
plus.addEventListener('click', function(){
  homeSquareText.innerHTML=homesOferts.Oferts1.titlehome+'<br>'+'Cena:'+' '+homesOferts.Oferts1.price+' '+'zł ';
  homeSquareText.style.marginTop='0.1%';
  homeSquareText.style.fontSize='0.9vw';
  localStorage.setItem('price', homesOferts.Oferts1.price);
});
    HomesContainer.classList.remove('disappear-animation');
    HomesContainer.classList.add('appear-animation');
  setTimeout(()=>{
    HomesContainer.classList.remove('appear-animation');
  },1000)
  
  },1000)

})
homesbutton2.addEventListener('click',function(){
  HomesContainer.classList.add('transition-effect');
  HomesContainer.classList.add('disappear-animation');
  homesbutton1.style.boxShadow = 'none';
  homesbutton3.style.boxShadow='none';
  homesbutton2.style.boxShadow = '4px 4px 6px rgba(0.7, 0.7, 0.7, 0.7)';
  setTimeout(()=> {
    writingOfert('Oferts2');
    HomesContainer.innerHTML = writingOfert('Oferts2');
    const plus=document.querySelector('.plus1');
    plus.addEventListener('click', function(){
      homeSquareText.innerHTML=homesOferts.Oferts2.titlehome+'<br>'+'Cena:'+' '+homesOferts.Oferts2.price+' '+'zł ';
      homeSquareText.style.marginTop='0.1%';
      homeSquareText.style.fontSize='0.9vw';
      localStorage.setItem('price', homesOferts.Oferts2.price);
    });
    HomesContainer.classList.remove('disappear-animation');
    HomesContainer.classList.add('appear-animation');
  setTimeout(()=>{
    HomesContainer.classList.remove('appear-animation');
  },1000)
  
  },1000)
  
})
homesbutton3.addEventListener('click', function(){
  HomesContainer.classList.add('transition-effect');
  HomesContainer.classList.add('disappear-animation');
  homesbutton1.style.boxShadow = 'none';
  homesbutton3.style.boxShadow='4px 4px 6px rgba(0.7, 0.7, 0.7, 0.7)';
  homesbutton2.style.boxShadow = 'none';
  
  setTimeout(()=> {
    writingOfert('Oferts3');
    HomesContainer.innerHTML = writingOfert('Oferts3');
    const plus=document.querySelector('.plus1');
    plus.addEventListener('click', function(){
      homeSquareText.innerHTML=homesOferts.Oferts3.titlehome+'<br>'+'Cena:'+' '+homesOferts.Oferts3.price+' '+'zł ';
      homeSquareText.style.marginTop='0.1%';
      homeSquareText.style.fontSize='0.9vw';
      localStorage.setItem('price', homesOferts.Oferts3.price);
    });
    HomesContainer.classList.remove('disappear-animation');
    HomesContainer.classList.add('appear-animation');
  setTimeout(()=>{
    HomesContainer.classList.remove('appear-animation');
  },1000)
  
  },1000)
});

/*Renovations*/

const kitchen=document.querySelector('#kitchen');
const bedroom=document.querySelector('#bedroom');
const bathroom=document.querySelector('#bathroom');
const livingroom=document.querySelector('#livingRoom');
const rooms=document.querySelector('.ourTeam');





let TypeOfRooms=[
{
  'id':'0',
  'descriptionOfRooms':'Nasz zespół specjalistów z przyjemnością podejmie się zadania wykoania świetnego i wysokiej jakości remontu kuchni. Kuchnia jest niezwykle ważnym pomieszczeniem w naszym codziennym życiu, pełniącym rolę centralnego miejsca, gdzie przygotowujemy posiłki, spotykamy się z rodziną i przyjaciółmi oraz spędzamy czas razem. Dlatego też remont kuchni nie tylko podniesie estetykę i funkcjonalność tego pomieszczenia, ale także wpłynie pozytywnie na komfort i atmosferę naszego domu. Pozwól nam stworzyć dla Ciebie kuchnię, która będzie spełniała wszystkie twoje oczekiwania.'
},
{
'id':'1',
'descriptionOfRooms':'Nasz doświadczony zespół specjalistów z ogromnym zaangażowaniem podejmie się profesjonalnego i starannego remontu łazienki. Łazienka to niezwykle istotne pomieszczenie w codziennym życiu każdego z nas, stanowiące nie tylko miejsce higieny, lecz także oazy relaksu i odprężenia. Nasza praca zadbana w najdrobniejszych detalach, pozwoli Ci stworzyć łazienkę, która nie tylko będzie estetycznie i funkcjonalnie urządzona, ale także stanie się miejscem, w którym będziesz mogła/mógł oderwać się od codziennych trosk i zrelaksować się. Pozwól nam uczynić Twoją łazienkę miejscem wyjątkowym.',

},
{
  'id':'2',
  'descriptionOfRooms':'Nasz zespół specjalistów z przyjemnością podejmie się zadania stworzenia funkcjonalnego i eleganckiego salonu. Salon to serce domu - największe pomieszczenie, w którym spotykamy się z rodziną i przyjaciółmi, relaksujemy się po pracy oraz spędzamy wspólne chwile. Dlatego remont salonu ma kluczowe znaczenie dla stworzenia przyjaznej atmosfery i komfortu w domu. Nasza firma zadba o każdy detal, dopasowując design salonu do Twoich preferencji i potrzeb, tak aby stworzyć przestrzeń, która będzie odzwierciedlać Twój styl życia oraz zapewnić Ci relaks i wygodę.',

},
{
  'id':'3',
  'descriptionOfRooms':'Nasz zespół specjalistów z pasją podejmie się stworzenia przytulnej i spokojnej sypialni, która będzie zapewniać Ci idealne warunki do wypoczynku i regeneracji sił. Sypialnia jest miejscem, gdzie kończymy każdy dzień, odpoczywamy po trudach dnia codziennego i regenerujemy energię na kolejne wyzwania. Dlatego ważne jest, aby wnętrze sypialni było funkcjonalne, estetyczne i sprzyjało relaksowi. Zadbamy o każdy detal, aby stworzyć dla Ciebie sypialnię, która będzie odzwierciedlać Twój gust i zapewni Ci spokój oraz komfortowy sen',

}


]

const change=()=>{

rooms.innerHTML=TypeOfRooms[0].descriptionOfRooms;

}
const change2=()=>{

  rooms.innerHTML=TypeOfRooms[1].descriptionOfRooms;
  
  }
  const change3=()=>{

    rooms.innerHTML=TypeOfRooms[2].descriptionOfRooms;
    
    }
    const change4=()=>{
rooms.innerHTML=TypeOfRooms[3].descriptionOfRooms;

    }
const basic=(event)=>{

  rooms.innerHTML='Nasza firma oferuje najlepszych specjalistów oraz usługi remontowe najwyższej jakości. Dzięki naszemu doświadczeniui profesjonalizmowi możemy zagwarantować Państwu kompleksowe i profesjonalne podejście do każdej kwestii remontowej.Niezależnie od zakresu prac, nasza firma zapewnia rzetelne doradztwo, terminowośći precyzję wykonania. Pozwól nam sprawić, że Twój remont będzie nie tylko efektywny, ale także satysfakcjonujący.'

}
kitchen.addEventListener('mouseover', change);
kitchen.addEventListener('mouseout', basic);

bathroom.addEventListener('mouseover', change2);
bathroom.addEventListener('mouseout', basic);

livingroom.addEventListener('mouseover', change3);
livingroom.addEventListener('mouseout', basic);

bedroom.addEventListener('mouseover', change4);
bedroom.addEventListener('mouseout', basic);

/*mieszkania*/




const url = 'https://filipporzucek.github.io/FirstStepGit/data.json'; 

const flats = document.querySelector('.flats');
fetch(url)
  .then(response => response.json())
  .then(data => {
    const displayFlat = (index) => {
      const mieszkanie = data.mieszkania[index];
      const title = mieszkanie.title;
      const description = mieszkanie.description;
      const price = mieszkanie.price;
      const picture = mieszkanie.photo;
 
   
      let flatContent = "";
      flatContent += '<div class="flatPicture"><img src="' + picture + '"></div>' +
        '<div class="title custom-margin-title2">' + title + '</div>' +
        '<div class="flatplus">+</div>' +
        '<div class="flatDescription">' + description + '</div>' +
        '<div class="flatPrice">Cena: ' + price + 'zł</div>';

      flats.innerHTML = flatContent;
      let SquareContent="";
      SquareContent+='<div class="floatType">'+'<br>'+title+'<br>'+'Cena:'+' '+price+'zł'+'</div>';

      const plusFlat = document.querySelector('.flatplus');
      const squareFlats = document.querySelector('#squareFlats');
      
    function handleClick() {
    squareFlats.innerHTML = SquareContent;
    localStorage.setItem('price', price);
}

plusFlat.addEventListener('click', handleClick);

    }

    const flatButton1 = document.querySelector('#flatButton1');
    const flatButton2 = document.querySelector('#flatButton2');
    const flatButton3 = document.querySelector('#flatButton3');
    const flats = document.querySelector('.flats');
   

displayFlat(0);
  
    flatButton1.addEventListener('click',function(){
     
      flats.classList.add('transition-effect');
      flats.classList.add('disappear-animation');
     flatButton2.style.boxShadow = 'none';
      flatButton1.style.boxShadow='4px 4px 6px rgba(0.7, 0.7, 0.7, 0.7)';
      flatButton3.style.boxShadow = 'none';
    
      setTimeout(()=> {
      
      displayFlat(0);
      flats.classList.remove('disappear-animation');
    flats.classList.add('appear-animation');
  setTimeout(()=>{
    flats.classList.remove('appear-animation');
  },1000)
  
  },1000)

});
    
    flatButton2.addEventListener('click',function(){
    
      flats.classList.add('transition-effect');
      flats.classList.add('disappear-animation');
    
      flatButton1.style.boxShadow = 'none';
      flatButton2.style.boxShadow='4px 4px 6px rgba(0.7, 0.7, 0.7, 0.7)';
      flatButton3.style.boxShadow = 'none';
      setTimeout(()=> {

        
      displayFlat(1);
    
      flats.classList.remove('disappear-animation');
    flats.classList.add('appear-animation');
  setTimeout(()=>{
    flats.classList.remove('appear-animation');
    
  },1000)
  
  },1000)
});

flatButton3.addEventListener('click', function(){

  flats.classList.add('transition-effect');
  flats.classList.add('disappear-animation');
  flatButton1.style.boxShadow = 'none';
  flatButton2.style.boxShadow = 'none';
  flatButton3.style.boxShadow = '4px 4px 6px rgba(0.7, 0.7, 0.7, 0.7)';


  
  setTimeout(() => {
    
    

    displayFlat(2);

    flats.classList.remove('disappear-animation');
    flats.classList.add('appear-animation');
    
    setTimeout(() => {
      flats.classList.remove('appear-animation');
    }, 1000);
  }, 1000);
})

  });

  /*Obsluga menu*/

	jQuery(function($)
	{
		$.scrollTo(0);
	
		$('#link1').click(function() {
			$.scrollTo($('#homes'), 500);
		});
    $('#link2').click(function() {
			$.scrollTo($('#apart'), 500);
		});
    $('#link3').click(function() {
			$.scrollTo($('#flat'), 500);
		});
    $('#link3').click(function() {
			$.scrollTo($('#flat'), 500);
		});
    $('#link4').click(function() {
			$.scrollTo($('#renovation'), 500);
		});
	
	
	});













