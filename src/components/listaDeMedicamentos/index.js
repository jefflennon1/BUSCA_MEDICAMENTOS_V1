import React,{ useEffect, useState } from 'react';
// import Api from '../../../services/Api';
import Api from '../../../services/Api';
import './style.css';
import icon from '../../assets/icon_medico2.png';
import search from '../../assets/search.png';
import Bula from '../bula';


export default function ListaDeMedicamentos(){
   
    useEffect(()=>{
        document.getElementById('lista_medicamentos').style.display = 'none';
    }, []);

    const [ medicamento, setMedicamento ] = useState([]);


    function buscaComposto(){
            document.getElementById('search').style.display = 'none';
            const value = document.getElementById('inp_bus_comp').value;
            const prop = document.getElementById('select_tipo').value;
            console.log(prop)
        
            if(value == ""){ 
                setMedicamento([]);
                document.getElementById('search').style.display = 'inline';
                document.getElementById('lista_medicamentos').style.display = 'none';
                return;
                }
        
            Api.get(`/composicao?${prop}=${value}`).then((response)=>{
                setMedicamento(response.data);
                document.getElementById('lista_medicamentos').style.display = 'inline';
            });

    }
   
    return(
        <>
           <section id="container"> 
                <section className="principal">
                    <img src={icon} alt=""/>
                        <h1>Olá, tudo bem com você?</h1>
                            <p>
                                Já passou por alguma situação em que você está prestes a tomar um medicamento
                                mas tem receio pois você não sabe do que ele é composto e isso pode 
                                acabar em uma reação alérgica?
                                Aqui você pode buscar a composição de qualquer medicamento!
                            </p>
                                <select name="select_tipo" id="select_tipo" >
                                    <option value="COMPOSICAO">COMPOSIÇÃO</option>
                                    <option value="NOME">MEDICAMENTO</option>
                                </select>
                            <span id="inpuEicon">
                                <input type="text" placeholder="Digite o nome do composto" 
                                    autoComplete="on" id="inp_bus_comp" onChange={()=>buscaComposto()}/>
                                <img src={search} alt="search" id="search"/>
                            </span>   
                            <div className="lista_medicamentos" id="lista_medicamentos">
                                    {medicamento.map( medicamento=> <div key={medicamento._id}>
                                        <div className="nomeMedicamento"  >
                                            <span > {medicamento.NOME}</span>
                                        </div>   
                                    </div>
                                    )}  
                            </div> 
                </section> 
            </section>         
        </>
    )

 
}




