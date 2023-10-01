import React from 'react';
import { Link} from 'react-router-dom';
import './styles.css';

import logoCadastro from '../../assets/cadastro1.png';

import { FiXCircle} from 'react-icons/fi';


export default function Alunos(){
    return (
        <div className="aluno-container">
            <header>
             <img src={logoCadastro} alt="Cadastro" />
             <span>Bem-Vindo, <strong>Francisco</strong>!</span>
             <Link className="button" to="aluno/novo">Novo Aluno</Link>
             <button type="button">
                <FiXCircle size={35}  color="#17202a" />
             </button>
              <form>
                <input type="text" placeholder="Nome"/>
                 <button type="button" class ='button'>
                    Filtrar aluno por nome (parcial)
                  </button>
              </form>
                <h1>Relação de Alunos</h1> 
            </header>
        </div>
    )
}