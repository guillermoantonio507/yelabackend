
// pages/api/chat.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Solo POST permitido' });
  }

  res.status(200).json({ mensaje: 'Chat recibido con éxito' });
}
