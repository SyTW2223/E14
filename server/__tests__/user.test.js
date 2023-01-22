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

    it('Obteniendo mi propia información', async () => {
        const res = await request(app)
        .get(`/api/v1/user/me`)
        .set('Authorization', `Bearer ${token_usuario}`);
        expect(res.statusCode).toEqual(200);
        id_usuario = res.body._id
    });

    it('Añadiendo a un comic a mi propia información', async () => {
        const res = await request(app)
        .patch(`/api/v1/user/update/${id_usuario}`)
        .set('Authorization', `Bearer ${token_usuario}`)
        .send(
            {
                "personajesFav": "Personaje de prueba"
            }
        );
        expect(res.statusCode).toEqual(200);
    });

    it('Eliminando el comic añadido', async () => {
        const res = await request(app)
        .patch(`/api/v1/user/remove/${id_usuario}`)
        .set('Authorization', `Bearer ${token_usuario}`)
        .send(
            {
                "personajesFav": ["Personaje de prueba"]
            }
        );
        expect(res.statusCode).toEqual(200);
    });

    it('Obteniendo informacion de otro usuario', async () => {
        const res = await request(app)
        .get(`/api/v1/user/UsuarioTest222`)
        .set('Authorization', `Bearer ${token_usuario}`);
        expect(res.statusCode).toEqual(200);
    });
});

describe('TEST Endpoints que devuelven errores', () => {
    it('Obteniendo mi propia información sin AuthToken', async () => {
        const res = await request(app)
        .get(`/api/v1/user/me`);
        expect(res.statusCode).toEqual(403);
    });
    it('Obteniendo mi propia información sin AccessToken', async () => {
        const res = await request(app)
        .get(`/api/v1/user/me`)
        .set('Authorization', `Bearer`);
        expect(res.statusCode).toEqual(400);
    });
});