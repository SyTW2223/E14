const request = require('supertest')
const app = require('../app');
const mongoose = require("mongoose");

const {DB_HOST,DB_USER,DB_PASSWORD,IP_SERVER,API_VERSION} = require("../constants");
const PORT = 3977;

beforeAll(async () => await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`))

afterAll(async () => await mongoose.connection.close())

// DEFINICION DE VARIABLES
let id_usuario = ""
let token_usuario = ""

describe('Post Endpoints que funcionan con 200', () => {
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
        id_usuario = res.body._id
    });

    it('Login de un usuario', async () => {
        const res = await request(app)
        .post('/api/v1/auth/login')
        .set('Content-Type', 'application/json')
        .set('Accept', '*/*')
        .send({
            "email": "usuarioTest@gmail.com",
            "password": "passtest"
        });
        expect(res.statusCode).toEqual(200);
        token_usuario = res.body.access
    });

    it('Eliminando el usuario', async () => {
        const res = await request(app)
        .delete(`/api/v1/user/${id_usuario}`)
        .set('Authorization', `Bearer ${token_usuario}`);
        expect(res.statusCode).toEqual(200);
    });
});



describe('Post Endpoints que devuelven errores', () => {
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
