import { useState } from 'react';
import InfoList from './InfoList';
import infoData from '../data/infoData';

function InfoPage() {
  // Comentarios por computadora
  const [comments, setComments] = useState([]);
  // Texto del comentario
  const [input, setInput] = useState('');
  // Computadora seleccionada
  const [selectedPc, setSelectedPc] = useState(infoData[0]?.title || '');
  // Calificación seleccionada
  const [rating, setRating] = useState(5);

  // Cuando el usuario manda el formulario, agregamos el comentario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '' && selectedPc && rating) {
      setComments([...comments, { pc: selectedPc, text: input, rating }]);
      setInput('');
      setRating(5);
    }
  };

  return (
    <div>
      <h1>Tienda PC Gamer</h1>
      {/* Un texto para invitar a ver las PCs */}
      <p>Descubre nuestras mejores computadoras para gaming:</p>
      {/* Aquí mostramos la lista de PCs */}
      <InfoList items={infoData} />

      <hr />
      <h2>Deja tu opinión sobre una PC</h2>
      {/* Formulario para que el usuario escriba su comentario */}
      <form onSubmit={handleSubmit}>
        <select
          value={selectedPc}
          onChange={e => setSelectedPc(e.target.value)}
        >
          {infoData.map(pc => (
            <option key={pc.id} value={pc.title}>
              {pc.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Escribe tu opinión"
        />
        <input
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={e => setRating(Number(e.target.value))}
          style={{ width: '70px' }}
          placeholder="Calificación"
        />
        <button type="submit">Agregar</button>
      </form>
      {/* Mostramos los comentarios que han dejado */}
      <ul>
        {comments.map((comment, idx) => (
          <li key={idx}>
            <strong>{comment.pc}</strong> ({comment.rating}/10): {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InfoPage;