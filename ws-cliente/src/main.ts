import './style.css'

import { connectToServer } from './socket-client';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
<h1>WebSocket- Cliente</h1>

<input id="jwt-token" placeholder="Json Web Token"/>
<button id="btn-connect">Connect</button>
<br/>
<span id='server-status'>offline</span>

<ul id='clients-ul'></ul>
<form id="message-form">
<input placeholder="message" id="message-input"/>
</form>

<h3>Message<h3/>
<ul id="messages-ul"></ul>
  </div>
`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
//connectToServer();

const jwtToken  =document.querySelector<HTMLInputElement>('#jwt-token')!;
const btnConnect=document.querySelector<HTMLButtonElement>('#btn-connect')!;


btnConnect?.addEventListener('click', () => {
  connectToServer(jwtToken.value.trim());
})