const express = require('express');
const chai = require('chai');
const request = require('supertest');

const app = express();

describe('POST Login User ', () => {
    it('should Login User ', () => {
        request(app)
        .post('Joseph.Bartolome@email.com/1231231')
        .send({})
        .expect(201)
        .then((res) => {
            expect(res.headers.location).to.be.eql('Joseph.Bartolome@email.com/1231231');
        });
    });
});


describe('GET All User User ', () => {
    it('get All User ', () => {
        request(app)
        .get(` {
            "id": 1,
            "first_name": "Jones",
            "last_name": "Jany",
            "address": "3321 Des Me St.",
            "postcode": "1523",
            "contact_number": "09174283123",
            "email": "jones.jany@email.com",
            "user_name": "jones.jany",
            "password": "123123"
        },
        {
            "id": 2,
            "first_name": "Jojo",
            "last_name": "Josep",
            "address": "3321 Des Me St.",
            "postcode": "1521",
            "contact_number": "0917123123",
            "email": "Jojo.Josep@email.com",
            "user_name": "Jojo.Josep",
            "password": "1231231"
        }`)
        .send({})
        .expect(201)
    });
});