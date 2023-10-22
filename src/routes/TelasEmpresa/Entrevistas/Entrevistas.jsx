import React, { useState, useEffect } from 'react';
//import { obterCandidatos, agendarEntrevista } from '../../../Data/api';

const EntrevistasEmp = () => {
  const [candidatos, setCandidatos] = useState([]);
  const [selectedCandidato, setSelectedCandidato] = useState(null);
  const [dataEntrevista, setDataEntrevista] = useState('');
  const [horaEntrevista, setHoraEntrevista] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const fetchCandidatos = async () => {
      try {
        const candidatosData = await obterCandidatos();
        setCandidatos(candidatosData);
      } catch (error) {
        console.error('Erro ao obter candidatos:', error);
      }
    };

    fetchCandidatos();
  }, []);

  const handleAgendarEntrevista = async () => {
    try {
      if (!selectedCandidato || !dataEntrevista || !horaEntrevista) {
        setMensagem('Por favor, preencha todos os campos.');
        return;
      }

      const entrevistaData = {
        candidatoId: selectedCandidato.id,
        dataEntrevista,
        horaEntrevista,
      };

      await agendarEntrevista(entrevistaData);

      setMensagem('Entrevista marcada com sucesso!');
      setPopupVisible(true);

      // Limpar os campos após agendar a entrevista
      setSelectedCandidato(null);
      setDataEntrevista('');
      setHoraEntrevista('');
    } catch (error) {
      console.error('Erro ao agendar entrevista:', error);
      setMensagem('Erro ao agendar entrevista. Tente novamente.');
    }
  };

  return (
    <div>
      <h2>Agendar Entrevista</h2>
      {mensagem && <div>{mensagem}</div>}
      <div>
        <label>Selecione o candidato:</label>
        <select
          value={selectedCandidato ? selectedCandidato.id : ''}
          onChange={(e) => {
            const candidatoId = e.target.value;
            const candidato = candidatos.find((c) => c.id === Number(candidatoId));
            setSelectedCandidato(candidato);
          }}
        >
          <option value="">Selecione um candidato</option>
          {candidatos.map((candidato) => (
            <option key={candidato.id} value={candidato.id}>
              {candidato.nome}
            </option>
          ))}
        </select>
      </div>
      {selectedCandidato && (
        <div>
          <label>Data da entrevista:</label>
          <input
            type="date"
            value={dataEntrevista}
            onChange={(e) => setDataEntrevista(e.target.value)}
          />
          <label>Hora da entrevista:</label>
          <input
            type="time"
            value={horaEntrevista}
            onChange={(e) => setHoraEntrevista(e.target.value)}
          />
          <button onClick={handleAgendarEntrevista}>Agendar Entrevista</button>
        </div>
      )}
      {popupVisible && (
        <div>
          <p>Entrevista marcada com sucesso!</p>
        </div>
      )}
    </div>
  );
};

export default EntrevistasEmp;