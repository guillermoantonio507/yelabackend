
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { mensaje } = req.body;

    // Puedes agregar tu lógica aquí (como llamadas a IA, procesamiento, etc.)
    const respuesta = `Hola, recibí tu mensaje: ${mensaje}`;

    res.status(200).json({ respuesta });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
