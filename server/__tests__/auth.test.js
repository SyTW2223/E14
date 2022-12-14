const request = require('supertest')
const app = require('../app');
const mongoose = require("mongoose");


const {DB_HOST,DB_USER,DB_PASSWORD,IP_SERVER,API_VERSION} = require("../constants");
const PORT = 3977;


beforeAll(async () => await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`))

afterAll(async () => await mongoose.connection.close())

describe('Post Endpoints', () => {
    it('Creando nuevo usuario', async () => {
        const res = await request(app)
        .post('/api/v1/auth/register')
        .set('Content-Type', 'application/json')
        .set('Accept', '*/*')
        .send({
            nickname: 'UsuarioTest333',
            nombre: 'Test333',
            email: 'usuarioTest333@gmail.com',
            password: 'passtest333',
            edad: 777
        });
        expect(res.statusCode).toEqual(200);
    });
});

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
