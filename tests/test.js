process.env.NODE_ENV = 'test';

chai = require('chai');
chaiHttp = require('chai-http');
app = require('../index');

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Animes", () => {
    describe("GET /", () => {
        // Test to get all animes
        it("should get all animes", (done) => {
             chai.request(app)
                 .get('/api/animes')
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
                 .get(`/api/animes/${id}`)
                 .end((err, res) => {
                     res.should.have.status(404);

                     done();
                  });
         });

         
    });
    describe("POST /", () => {
        
        // Test to post an animes
        it('should create an anime', (done) => {
            let anime = {
                'name': 'anime',
                'year': 2020
            }
            chai.request(app)
                .post('/api/animes')
                .send(anime)
                .end((err, res) => {
                    if (err) done(err);
                    res.should.have.status(201);
                    res.body.should.have.property('data');
                    res.body.data.should.have.property('name', 'anime');
                    res.body.data.should.have.property('year', 2020);
                    done();
                });
        });

                // Test to post an animes
                it('should not create an anime', (done) => {
                    let anime = {
                        'name': 'anime',
                    }
                    chai.request(app)
                        .post('/api/animes')
                        .send(anime)
                        .end((err, res) => {
                            res.should.have.status(400);
                            done();
                        });
                });
    });

    describe("UPDATE /animes/:id", () => {
        // Test to update an animes
        it('should update an anime', (done) => {
            let anime1 = new Anime();
            anime1.year = 2020;
            anime1.name = "anime";
            let anime2 = {
                'name': 'anime2',
                'year': 2019
            };
            anime1.save((err, anime1) => {
                  chai.request(app)
                  .put('/api/animes/' + anime1.id)
                  .send(anime2)
                  .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.data.should.have.property('name', 'anime2');
                        res.body.data.should.have.property('year', 2019);
                    done();
                  });
            });
        });
    });

    describe("DELETE /animes/:id", () => {
        // Test to delete an anime
        it('should delete an anime', (done) => {
            let anime1 = new Anime();
            anime1.year = 2020;
            anime1.name = "anime";
            anime1.save((err, anime1) => {
                  chai.request(app)
                  .delete('/api/animes/' + anime1.id)
                  .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('status', 'success');
                    done();
                  });
            });
        });
    });
         
});
