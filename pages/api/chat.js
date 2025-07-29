
// pages/api/chat.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    // Aquí iría el código para procesar el mensaje con IA o lógica
    const respuesta = `Tu mensaje fue: ${message}`;

    res.status(200).json({ respuesta });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
