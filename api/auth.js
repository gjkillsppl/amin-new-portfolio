// api/anahuac-mayab.js

export default function handler(req, res) {
  const auth = req.headers.authorization;

  // Check if Authorization header exists
  if (!auth) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
    return res.status(401).end('Unauthorized');
  }

  // Decode Authorization header
  const [username, password] = Buffer.from(auth.split(' ')[1], 'base64')
    .toString()
    .split(':');

  // Validate credentials
  const validUsername = 'admin';
  const validPassword = 'mypassword';

  if (username === validUsername && password === validPassword) {
    // Serve protected content (could be an HTML file or some text)
    res.status(200).send('Welcome to the protected area of Anahuac Mayab!');
  } else {
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
    return res.status(401).end('Unauthorized');
  }
}
