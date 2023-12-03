
import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import '../src/Style.css';
import api from './Services/api';

function App() {

const[input, setInput] = useState('');
const[cep, setcep]= useState({});

async function handleSearch (){
  // 01310930/json/
if(input=== ''){
  alert("preencha algum cep!")
  return;
}

try{
const response = await api.get(`${input}/json`);
setcep(response.data)
setInput("")
}catch{
alert("Ops erro ao buscar");
setInput("");
}
}





  return (
    <div className="Container">
      <h1 className="title">Buscador de CEP</h1>
   

    <div className="Container-input">
      <input
       type="text"
       placeholder="Digite seu cep... "
       value={input}
       onChange={(e)=>setInput(e.target.value)}
       />
<button className="ButtonSearch" onClick={handleSearch}>
<FiSearch size={25} color='#fff'/>
</button>
   </div> 

{Object.keys(cep).length > 0 && (

<main className='main'>
<h2>CEP:{cep.cep}</h2>
<span>{cep.logradouro}</span>
<span>complemento:{cep.complemento}</span>
<span>Bairro:{cep.bairro}</span>
<span>{cep.localidade}-{cep.uf} </span>


    </main>


 
)  }



  
</div>





  );
}

export default App;
