//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React, { useState } from 'react';

function Formulario() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [cardInfo, setCardInfo] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input1.length < 3 || /^\s/.test(input1)) {
      setErrorMessage('Por favor chequea que sus datos sean correctos');
    } else if (input2.length < 3) {
      setErrorMessage('Por favor chequea que lsus datos sean correctos');
    } else {
      setErrorMessage('');
      setCardInfo({ input1, input2 });
    }
  };

  const handleInput1Change = (event) => {
    const value = event.target.value;
    setInput1(value.replace(/[0-9]/g, '')); 
  };

  const handleInput2Change = (event) => {
    const value = event.target.value;
    if (!/[a-zA-Z]/.test(value)) {
      setInput2(value);
    }
  };

  const renderCard = () => {
    return (
      <div className="card">
        <p>Bienvenido {cardInfo.input1}!</p>
        <p>Usted tiene {cardInfo.input2} ;)</p>
      </div>
    );
  };

  return (
    <div className="container">
      
      <form onSubmit={handleSubmit} className="card">
        <h2>Cuentanos sobre ti ;D</h2>
        <label>
          Ingrese su nombre:
          <input
            type="text"
            value={input1}
            onChange={handleInput1Change}
            required
          />
        </label>
        <br />
        <label>
          Ingrese su edad:  
          <input
            type="text"
            value={input2}
            onChange={handleInput2Change}
            required
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <div className="error-message">{errorMessage}</div>
      {cardInfo && renderCard()}
    </div>
  );
}

export default Formulario;





