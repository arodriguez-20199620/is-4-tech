import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handlerPalindromo = (palabra) => {
    let palabraFormateada = palabra.toLowerCase().replace(/\s+/g, '');

    let palabraInvertida = palabraFormateada.split('').reverse().join('');

    if (palabraFormateada === palabraInvertida) {
      setMessage(`${palabra} es un palíndromo`);
    } else {
      setMessage(`${palabra} no es un palíndromo`);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    handlerPalindromo(inputValue);
    setInputValue('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-700">Verificador de Palíndromos</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Ingrese una palabra"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleClick}
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Verificar Palíndromo
        </button>
        <p className="mt-4 text-center text-gray-800">{message}</p>
      </div>
    </div>
  );
}

export default App;
