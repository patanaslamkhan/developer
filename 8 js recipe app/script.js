const input=document.querySelector('.input');
const button=document.querySelector('.button');
const choice=document.querySelector('.choice');
const recipediv=document.querySelector('.recipediv');
const cd1i=document.querySelector('#cd1i');
const cd2i=document.querySelector('#cd2i');
const cd3i=document.querySelector('#cd3i');
const cd4i=document.querySelector('#cd4i');
const h1=document.querySelector('#h1');
const h2=document.querySelector('#h2');
const h3=document.querySelector('#h3');
const h4=document.querySelector('#h4');
let mealname

function intros(){
    let intro1=async ()=>{
        const recipeAPi=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=b`);
        const recipe=await recipeAPi.json();
        console.log(recipe);
    
        cd1i.src=recipe.meals[3].strMealThumb
        h1.innerHTML=recipe.meals[3].strMeal;
    
        cd1i.addEventListener('click',function(){
            recipediv.innerHTML="";
            recipe.meals.forEach((meal) => {
                recipediv.style.background='linear-gradient(45deg, #ffba61, #D72638)'
                const div=document.createElement('div');
                div.classList.add('recipedivframe')
                console.log(div);
                const img=document.createElement('img');
                const h3=document.createElement('h3');
                img.src=meal.strMealThumb;
                div.appendChild(img);
                h3.innerHTML=`Meal Name:${meal.strMeal}</br>
                              Meal Categary:${meal.strCategory}</br>
                              meal birth in:${meal.strArea}`
                div.appendChild(h3);
                const button=document.createElement('button');
                button.innerHTML='VIEW NOW'
                div.appendChild(button);
                recipediv.appendChild(div);
            });
    
        })
    }
    intro1();
    
    let intro2=async ()=>{
        const recipeAPi=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=s`);
        const recipe=await recipeAPi.json();
        console.log(recipe);
    
        cd2i.src=recipe.meals[3].strMealThumb
        h2.innerHTML=recipe.meals[3].strMeal;
    
        cd2i.addEventListener('click',function(){
            recipediv.innerHTML="";
            recipe.meals.forEach((meal) => {
                recipediv.style.background='linear-gradient(45deg, #ffba61, #D72638)'
                const div=document.createElement('div');
                div.classList.add('recipedivframe')
                console.log(div);
                const img=document.createElement('img');
                const h3=document.createElement('h3');
                img.src=meal.strMealThumb;
                div.appendChild(img);
                h3.innerHTML=`Meal Name:${meal.strMeal}</br>
                              Meal Categary:${meal.strCategory}</br>
                              meal birth in:${meal.strArea}`
                div.appendChild(h3);
                const button=document.createElement('button');
                button.innerHTML='VIEW NOW'
                div.appendChild(button);
                recipediv.appendChild(div);
            });
    
        })
    
    }
    intro2();
    
    let intro3=async ()=>{
        const recipeAPi=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=k`);
        const recipe=await recipeAPi.json();
        console.log(recipe);
    
        cd3i.src=recipe.meals[3].strMealThumb
        h3.innerHTML=recipe.meals[3].strMeal;
    
        cd3i.addEventListener('click',function(){
            recipediv.innerHTML="";
            recipe.meals.forEach((meal) => {
                recipediv.style.background='linear-gradient(45deg, #ffba61, #D72638)'
                const div=document.createElement('div');
                div.classList.add('recipedivframe')
                console.log(div);
                const img=document.createElement('img');
                const h3=document.createElement('h3');
                img.src=meal.strMealThumb;
                div.appendChild(img);
                h3.innerHTML=`Meal Name:${meal.strMeal}</br>
                              Meal Categary:${meal.strCategory}</br>
                              meal birth in:${meal.strArea}`
                div.appendChild(h3);
                const button=document.createElement('button');
                button.innerHTML='VIEW NOW'
                div.appendChild(button);
                recipediv.appendChild(div);
            });
    
        })
    
    }
    intro3();
    
    let intro4=async ()=>{
        const recipeAPi=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=i`);
        const recipe=await recipeAPi.json();
        console.log(recipe);
    
        cd4i.src=recipe.meals[3].strMealThumb
        h4.innerHTML=recipe.meals[3].strMeal;
    
        cd4i.addEventListener('click',function(){
            recipediv.innerHTML="";
            recipe.meals.forEach((meal) => {
                recipediv.style.background='linear-gradient(45deg, #ffba61, #D72638)'
                const div=document.createElement('div');
                div.classList.add('recipedivframe')
                console.log(div);
                const img=document.createElement('img');
                const h3=document.createElement('h3');
                img.src=meal.strMealThumb;
                div.appendChild(img);
                h3.innerHTML=`Meal Name:${meal.strMeal}</br>
                              Meal Categary:${meal.strCategory}</br>
                              meal birth in:${meal.strArea}`
                div.appendChild(h3);
                const button=document.createElement('button');
                button.innerHTML='VIEW NOW'
                div.appendChild(button);
                recipediv.appendChild(div);
            });
        })
    
    }
    intro4();
}
intros();

//API by search
let APIfunction=async (inputdata)=>{
    recipediv.innerHTML="";
    if(input.value == ''){
        alert('Write any iteam name in search bar');
        location.reload();
        inputdata=0;
    }

    const recipeAPi=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputdata}`);
    const recipe=await recipeAPi.json();

    if(recipe.meals == null){
        alert('Iteams is not availabule');
    } 

    recipe.meals.forEach((meal) => {
        recipediv.style.background='linear-gradient(45deg, #ffba61, #D72638)'
        const div=document.createElement('div');
        div.classList.add('recipedivframe')
        console.log(div);
        const img=document.createElement('img');
        const h3=document.createElement('h3');
        img.src=meal.strMealThumb;
        div.appendChild(img);
        
        h3.innerHTML=`Meal Name:${meal.strMeal}</br>
                      Meal Categary:${meal.strCategory}</br>
                      meal birth in:${meal.strArea}`
        div.appendChild(h3);
        const button=document.createElement('button');
        button.classList.add('recipebtn')
        button.innerHTML='VIEW NOW'
        div.appendChild(button);
        recipediv.appendChild(div);
    });
}

button.addEventListener('click',()=>{
    APIfunction(input.value);
    input.value='';
});

recipediv.addEventListener('click', (e) => {

        if (e.target.tagName == 'BUTTON'){
          recipediv.innerHTML="";
          e.target.innerText = 'Order now';
          const div=document.createElement('div');
          div.classList.add('viewnow');
          const rdiv=document.createElement('div');
          rdiv.innerHTML = e.target.parentElement.innerHTML;
          console.log(div);
          div.appendChild(rdiv);
          recipediv.appendChild(div)
        }

});

