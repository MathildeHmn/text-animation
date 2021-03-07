// Text-animation constants declaration
const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 20
})
.changeDelay(20)
.typeString('Moi c\'est John Doe')
.pauseFor(300)
.typeString('<strong>, Dev Full-Stack</strong> !')
.pause(1000)
.deleteChars(13)
.typeString('<span style="color: #76CC14;"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #008AAD;"> React</span> !')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color: #FF943D;"> PHP</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #F963E0;"> JavaScript</span> !')
.start();
