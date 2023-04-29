let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app,{
loop:true,
delay: 75,
});

typewriter
.pauseFor(2500)
.typeString(' "Primero aprenda informática y toda la teoría. Acto seguido desarrolle un estilo de programación. Luego olvidesé todo eso y solo hackee" <br> -George Carrette')
.pauseFor(200)
.deleteChars(10)
.start();