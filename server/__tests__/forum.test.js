const request = require('supertest')
const app = require('../app');
const mongoose = require("mongoose");

const {DB_HOST,DB_USER,DB_PASSWORD,IP_SERVER,API_VERSION} = require("../constants");
const PORT = 3977;

beforeAll(async () => await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`))

afterAll(async () => await mongoose.connection.close())

// DEFINICION DE VARIABLES
let token_usuario = ""
let id_comentario = ""

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

    it('Creando un COMENTARIO', async () => {
        const res = await request(app)
        .post(`/api/v1/forum`)
        .set('Authorization', `Bearer ${token_usuario}`)
        .send(
            {
                "nickname": "UsuarioTest",
                "titulo": "Comentario para Testing",
                "comentario": "Este comentario se tiene que borrar"
            }
        );
        expect(res.statusCode).toEqual(201);
        id_comentario = res.body._id;
    });

    it('Borrando un COMENTARIO', async () => {
        const res = await request(app)
        .delete(`/api/v1/forum/${id_comentario}`)
        .set('Authorization', `Bearer ${token_usuario}`);
        expect(res.statusCode).toEqual(200);
    });

    it('Obteniendo los comentarios', async () => {
        const res = await request(app)
        .get(`/api/v1/forum`)
        .query(
            { 
                limit: 1,
                page: 1

            }
        );
        expect(res.statusCode).toEqual(200);
    });
});

describe('Testing Endpoints - Devuelven error', () => {
    it('Creando un COMENTARIO sin AccessToken', async () => {
        const res = await request(app)
        .post(`/api/v1/forum`)
        .set('Authorization', `Bearer `)
        .send(
            {
                "nickname": "UsuarioTest",
                "titulo": "Comentario para Testing",
                "comentario": "Este comentario se tiene que borrar"
            }
        );
        expect(res.statusCode).toEqual(400);
    });
});