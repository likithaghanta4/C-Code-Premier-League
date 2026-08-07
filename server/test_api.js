const http = require('http');

const registerData = JSON.stringify({
  fullName: 'Test Student',
  rollNumber: '23B91A0501',
  email: 'teststudent@srkrec.ac.in',
  department: 'CSD',
  year: 1,
  password: 'password123'
});

const req = http.request(
  {
    hostname: 'localhost',
    port: 5000,
    path: '/api/auth/register',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': registerData.length
    }
  },
  (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log('--- REGISTER API RESPONSE ---');
      console.log('Status:', res.statusCode);
      console.log('Body:', data);
      
      // Test Login
      const loginData = JSON.stringify({
        email: 'teststudent@srkrec.ac.in',
        password: 'password123'
      });
      
      const loginReq = http.request(
        {
          hostname: 'localhost',
          port: 5000,
          path: '/api/auth/login',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': loginData.length
          }
        },
        (loginRes) => {
          let loginBody = '';
          loginRes.on('data', (chunk) => { loginBody += chunk; });
          loginRes.on('end', () => {
             console.log('\n--- LOGIN API RESPONSE ---');
             console.log('Status:', loginRes.statusCode);
             console.log('Body:', loginBody);
             process.exit(0);
          });
        }
      );
      loginReq.write(loginData);
      loginReq.end();
    });
  }
);

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(registerData);
req.end();
