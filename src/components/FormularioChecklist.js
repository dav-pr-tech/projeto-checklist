// src/components/FormularioChecklist.js
import React, { useState } from 'react';

const FormularioChecklist = ({ onAdicionarTarefa }) => {
    const [tarefa, setTarefa] = useState('');
    const [descricao, setDescricao] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataTermino, setDataTermino] = useState('');
    const [duracaoEstimada, setDuracaoEstimada] = useState('');
    const [dependencias, setDependencias] = useState('');
    const [observacoes, setObservacoes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const novaTarefa = {
            tarefa,
            descricao,
            responsavel,
            dataInicio,
            dataTermino,
            duracaoEstimada,
            dependencias,
            observacoes
        };
        onAdicionarTarefa([novaTarefa]);
        // Limpar os campos após adicionar a tarefa
        setTarefa('');
        setDescricao('');
        setResponsavel('');
        setDataInicio('');
        setDataTermino('');
        setDuracaoEstimada('');
        setDependencias('');
        setObservacoes('');
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h2>Adicionar Checklist</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px' }}>
                <label>
                    Premissa:
                    <input type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)} required />
                </label>
                <label>
                    Está Cumprida?:
                    <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
                </label>
                <label>
                    Observações:
                    <input type="text" value={responsavel} onChange={(e) => setResponsavel(e.target.value)} required />
                </label>
                <button type="submit" style={{ marginTop: '10px' }}>Adicionar Checklist</button>
            </form>
        </div>
    );
};

export default FormularioChecklist;
