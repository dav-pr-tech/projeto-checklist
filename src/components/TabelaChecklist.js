
import React from 'react';

const TabelaChecklist = ({ escopo }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Checklist do Projeto</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Premissa</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Está Cumprida?</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Observações</th>
                    </tr>
                </thead>
                <tbody>
                    {escopo.map((tarefa, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '10px' }}>{tarefa.tarefa}</td>
                            <td style={{ padding: '10px' }}>{tarefa.descricao}</td>
                            <td style={{ padding: '10px' }}>{tarefa.responsavel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaChecklist;
