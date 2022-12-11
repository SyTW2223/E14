const request = require('supertest')
const app = require('../app')

describe('Post Endpoints', () => {
    it('Intentando crear un usuario ya existente', async () => {
        const res = await request(app)
        .post('/api/v1/auth/register')
        .send({
            nickname: 'UsuarioTest',
            nombre: 'Test',
            email: 'usuarioTest@gmail.com',
            password: 'passtest',
            edad: 777
        });
        expect(res.statusCode).toEqual(400);
    });
});