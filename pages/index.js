
import { useState } from 'react';

export default function Home() {
  const [mensaje, setMensaje] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [cargando, setCargando] = useState(false);

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setCargando(true);
    setRespuesta('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensaje }),
      });

      const data = await res.json();
      setRespuesta(data.respuesta || 'Respuesta vacía');
    } catch (error) {
      setRespuesta('Error al conectar con la IA');
      console.error('Error:', error);
    }

    setCargando(false);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>YELA TEC</h1>
      <form onSubmit={manejarEnvio}>
        <textarea
          rows="4"
          cols="50"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe tu mensaje para la IA..."
          required
        />
        <br />
        <button type="submit" disabled={cargando}>
          {cargando ? 'Cargando...' : 'Enviar'}
        </button>
      </form>

      {respuesta && (
        <div style={{ marginTop: '1rem', background: '#f0f0f0', padding: '1rem', borderRadius: '5px' }}>
          <strong>Respuesta de la IA:</strong>
          <p>{respuesta}</p>
        </div>
      )}
    </div>
  );
}
