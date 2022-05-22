import { Component, createSignal } from "solid-js";
// import 'knopf.css'
// import "./bttn.css"
// import "./main.css"



function Counter(){
    let [count, setCount] = createSignal(0);
    let addCount = () => {setCount(count() + 1)};
    let removeCount = () => {setCount(count() - 1)};
    
    return (
        <div class="bg-sky-200">
            <div class="bg-sky-200 rounded-xl h-auto w-screen text-center ">
                <h2 class="text-9xl">{count()}</h2>
            </div>
            <button class="bg-sky-600 rounded-xl p-2 pl-10 pr-10 hover:bg-sky-500 transition-colors" onclick={addCount}>Add</button>
        </div>
    )
}

export default Counter;