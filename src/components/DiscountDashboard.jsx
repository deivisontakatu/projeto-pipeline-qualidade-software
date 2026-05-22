import { useState } from 'react';

import {
  calculateDiscount
} from '../services/discountService';

export default function DiscountDashboard() {

  const [value, setValue] = useState('');

  const [result, setResult] = useState(null);

  function handleCalculate() {

    const response =
      calculateDiscount(Number(value));

    setResult(response);
  }

  return (

    <div style={{
      minHeight: '100vh',
      background: '#f4f6f9',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial'
    }}>

      <div style={{
        width: '500px',
        background: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>

        <h1>
          Sistema Comercial
        </h1>

        <p>
          Simulação de desconto automático
        </p>

        <hr />

        <label>
          Valor da Compra
        </label>

        <input
          type="number"
          placeholder="Digite o valor"
          value={value}
          onChange={(e) =>
            setValue(e.target.value)
          }

          style={{
            width: '100%',
            padding: '12px',
            marginTop: '10px',
            marginBottom: '20px',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />

        <button
          onClick={handleCalculate}

          style={{
            width: '100%',
            padding: '12px',
            border: 'none',
            borderRadius: '8px',
            background: '#1976d2',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Calcular Desconto
        </button>

        {
          result && (

            <div style={{
              marginTop: '30px',
              background: '#f9f9f9',
              padding: '20px',
              borderRadius: '10px'
            }}>

              <h3>
                Resultado
              </h3>

              <p>
                Valor Original:
                R$ {result.originalValue}
              </p>

              <p>
                Desconto Aplicado:
                {result.discount}%
              </p>

              <p>
                Valor do Desconto:
                R$ {result.discountValue}
              </p>

              <p>
                Valor Final:
                R$ {result.finalValue}
              </p>

            </div>

          )
        }

      </div>

    </div>
  );
}