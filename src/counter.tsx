import { Component, createSignal, onCleanup, onMount, Show } from "solid-js";
import createWebsocket from "@solid-primitives/websocket";
import { messageType } from "./messageType";
import { Connect } from "vite";
// import 'knopf.css'
// import "./bttn.css"
// import "./main.css"



function Counter(){
    let statusCode = new Map([
        [0, "Not Connected"],
        [1, "Connected"],
        [2, "Unknown"],
        [3, "Not Connected"], ]); //DEV

    const [connect, disconnect, send, state] = createWebsocket(
      "ws://127.0.0.1:8080",
      (msg: { data: any; }) => handleMessage(msg.data),
      (msg) => handleError(msg),
      [],
      5,
      5000
    );

    let [count, setCount] = createSignal(0);
    let [connected, setConnected] = createSignal(false);
    
    function handleClick(){
        send("INC"); //fuck the server
    }
    function handleMessage(message : string){
        console.log("got: " + message);
        setCount(Number(message)); //cast to a number bc skience
    }
    function connectLog(){
        connect();
        if(state() == 1){
            console.log("Connected");
            setConnected(true);
        }
    }
    function handleError(error : Event){
        console.log("Error: " + error); //this doesnt work and tbh errors are overrated
    }

    onMount(() => {
        connectLog();
    });
    onCleanup(() => {
        disconnect();
        setConnected(false);
        send("DISCONNECT");
    });
    return (
            <div class="bg-sky-200 rounded-xl text-center p-5 m-10">
                <h2 class="text-9xl">{count()}</h2>
                <Show when={state() == 0 || state() == 3} fallback={<></>}> 
                    <p class="text-large">Connecting...</p>
                </Show>
                <button disabled={connected()} class="bg-sky-600 rounded-xl p-2 pl-10 pr-10 mt-10 mx-3 hover:bg-sky-500 transition-colors disabled:bg-sky-900" onclick={handleClick}>Add</button>
                {/* <button class="bg-red-600 rounded-xl p-2 pl-10 pr-10 mt-10 mx-3 hover:bg-red-500 transition-colors" onclick={connectLog}>Connect</button> */}

            </div>
    )

   
}

export default Counter;