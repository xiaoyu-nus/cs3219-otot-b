process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Animes", () => {
    describe("GET /animes", () => {
        // Test to get all animes
        it("should get all animes", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         
        // Test to get single anime
        it("should not get a single anime", (done) => {
             const id = -1;
             chai.request(app)
                 .get(`/${id}`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });

         
    });
    describe("POST /animes", () => {
        // Test to post an animes
        it('Create an anime', (done) => {
            let anime = {
                'name': 'anime',
                'year': 2020
            }
            chai.request(app)
                .post('/')
                .send(anime)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
         
});
