import React,{ useEffect, useState } from 'react';
// import Api from '../../../services/Api';
import Api from '../../../services/Api';
import './style.css';
import Icon from '../../assets/icon_medico2.png'


export default function ListaDeMedicamentos(){
    const [ medicamento, setMedicamento ] = useState([]);
    function buscaComposto(){
        const value = document.getElementById('inp_bus_comp').value;
         value == "" ? setMedicamento([]) :

         Api.get(`/composicao?COMPOSICAO=${value}`).then((response)=>{
            setMedicamento(response.data);
        });
    }
  
   
    return(
        <>
           <section id="container"> 
                <section className="principal">
                    <img src={Icon} alt=""/>
                        <h1>Olá, tudo bem com você?</h1>
                        <input type="text" placeholder="Digite o nome do composto" 
                        autoComplete="on" id="inp_bus_comp"
                        onChange={()=>buscaComposto()}
                        />
                        <div className="lista_medicamentos">
                                {medicamento.map( medicamento=> <div key={medicamento._id}>

                                    <div className="nomeMedicamento">
                                        <span> {medicamento.NOME}</span>
                                    </div>   
                                </div>
                                )}  
                        </div> 
                </section> 
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
}
