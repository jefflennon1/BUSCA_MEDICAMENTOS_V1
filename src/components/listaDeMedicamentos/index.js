import React,{ useEffect, useState } from 'react';
// import Api from '../../../services/Api';
import Api from '../../../services/Api';
import './style.css'


export default function ListaDeMedicamentos(){
    const [ medicamento, setMedicamento ] = useState([]);

    useEffect(()=>{
        Api.get('/composicao?COMPOSICAO=ACIDO').then((response)=>{
            setMedicamento(response.data);
        })    
    },[]);

  
   
    return(
        <>
           <section id="container"> 
                <h1>App que busca medicamentos baseando-se em seu composto</h1>
                <input type="text" placeholder="Digite o nome composto" autoComplete="on" id="inp_bus_comp"/>

                {medicamento.map( medicamento=> <div key={medicamento._id}>

                    <div className="nomeEcomposto">
                        <span>Nome: {medicamento.NOME}</span> &nbsp;&nbsp;
                        <span>Composto: {medicamento.COMPOSICAO}</span>
                    </div>   
                </div>
                )}   
            </section>         
        </>
    )
}




async function buscaDadosDaApiAbcFarma(){
    var form = new FormData();
    form.append('cnpj_cpf', '03332548000127');
    form.append('senha', 'aluisiovpn');
    form.append('cnpj_sh', '07693076000199');
    form.append('pagina', '3');

    const response = await axios({
        method: 'post',
            url: 'https://webserviceabcfarma.org.br/webservice/',
            data: form,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
            },
    })
        setMedicamento(response.data.data);
    console.log(response.data.data)
}
