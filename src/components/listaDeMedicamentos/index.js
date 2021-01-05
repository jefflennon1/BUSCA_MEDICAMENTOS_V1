import React,{ useEffect, useState } from 'react';
// import Api from '../../../services/Api';
import axios from 'axios';
import './style.css'


export default function ListaDeMedicamentos(){
    const [ medicamento, setMedicamento ] = useState([]);

    useEffect(()=>{
        buscaDados()
    },[])


    async function buscaDados(){
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

    return(
        <>
            <h1>Lista de medicamentos pagina 1</h1>
            {medicamento.map( medicamento=> <div key={medicamento.ID_PRODUTO}>

                <div className="nomeEcomposto">
                    <span>Nome: {medicamento.NOME}</span> &nbsp;&nbsp;
                    <span>Composto: {medicamento.COMPOSICAO}</span>
                </div>   
            </div>
            )}            
        </>
    )
}