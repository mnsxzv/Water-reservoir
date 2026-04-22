const questions = [
{q:"1. Бадам су қоймасының негізгі көпсалалы қызметі:",a:["Тек демалыс аймағы","Суару және тасқын реттеу","Ауыз су, суару және гидрологиялық реттеу","Тек өндірістік су көзі"],correct:2},
{q:"2. Бадам су қоймасының қалаға жақын орналасуының басты артықшылығы:",a:["Су жеткізуді жеделдету","Кеме қатынасын дамыту","Энергия өндіруді арттыру","Климатты өзгерту"],correct:0},
{q:"3. Су қоймаларының су деңгейіне негізгі әсер ететін фактор:",a:["Желдің бағыты","Халық саны","Көлік қозғалысы","Өзен ағыны мен жауын-шашын"],correct:3},
{q:"4. Шардара су қоймасының аймақтық маңызы:",a:["Тек туризм","Су тасқынын реттеу және ирригация","Тек балық аулау","Тек өндіріс"],correct:1},
{q:"5. Су деңгейі төмендегенде ең алдымен зардап шегетін сала:",a:["Суармалы егіншілік","Туризм","Көлік","Байланыс"],correct:0},
{q:"6. Су қоймаларының ластануының ең маңызды экологиялық салдары:",a:["Су түсінің өзгеруі","Экожүйенің бұзылуы","Иістің пайда болуы","Температураның аз өзгеруі"],correct:1},
{q:"7. Тұрақты даму қағидасына сәйкес дұрыс тәсіл:",a:["Су ресурстарын қорғау және үнемдеу","Суды шексіз пайдалану","Тек өнеркәсіпке беру","Су қоймаларын қысқарту"],correct:0},
{q:"8. Климаттың құрғақтануының әсері:",a:["Су деңгейі көтеріледі","Өзендер көбейеді","Су деңгейі төмендейді","Өзгеріс болмайды"],correct:2},
{q:"9. Интеграцияланған су ресурстарын басқару (IWRM):",a:["Тек ауыл шаруашылығына бағыттау","Тек су жинау","Бөгеттер салуды көбейту","Барлық мүдделерді ескере отырып басқару"],correct:3},
{q:"10. Су қауіпсіздігін қамтамасыз етудің тиімді жолы:",a:["Су тұтынуды арттыру","Су ресурстарын тиімді басқару","Су қоймаларын жою","Өзендерді өзгерту"],correct:1}
];

let current=0;
let score=0;

function showQuestion(){
  const q=questions[current];
  document.getElementById("progress").innerText=`${current+1}/10`;

  let html=`<div class="q"><p>${q.q}</p>`;

  q.a.forEach((ans,i)=>{
    html+=`<button id="btn${i}" onclick="checkAnswer(${i})">${String.fromCharCode(65+i)}) ${ans}</button>`;
  });

  html+=`</div>`;
  document.getElementById("quiz").innerHTML=html;
}

function checkAnswer(i){
  const q=questions[current];

  for(let j=0;j<q.a.length;j++){
    let btn=document.getElementById(`btn${j}`);
    btn.disabled=true;

    if(j===q.correct) btn.classList.add("correctBtn");
    if(j===i && j!==q.correct) btn.classList.add("wrongBtn");
  }

  if(i===q.correct) score++;

  setTimeout(()=>{
    current++;
    if(current<questions.length) showQuestion();
    else finish();
  },1200);
}

function finish(){
  let text="";
  if(score>=8) text="🔥 Өте жақсы";
  else if(score>=5) text="👍 Жақсы";
  else text="😅 Қайта оқы";

  document.getElementById("quiz").innerHTML="";
  document.getElementById("progress").innerHTML="";
  document.getElementById("result").innerText=text+": "+score+"/10";
}

showQuestion();
