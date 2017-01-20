import chai from'chai';
import chaiHttp from 'chai-http';
import server from '../../../src/app';
import {dbInit, dbDestroy} from '../../../src/bin/rethinkDb';
const should = chai.should();

chai.use(chaiHttp);

describe('Posts', () => {
    before(done => {
        dbInit().then(() => done());
    });

    after(done => {
        dbDestroy().then(() => done());
    });

    describe('/GET posts', () => {
        it('should display root posts message', (done) => {
            chai.request(server)
                .get('/posts')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(true);
                    res.body.should.have.property('info').eql('posts root');
                    done();
                });
        });
    });

    describe('/POST posts', () => {
        const post = {
            text: 'my text'
        };

        it('should fail when text is empty', (done) => {
            chai.request(server)
                .post('/posts')
                .send({text: '  '})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(false);
                    res.body.should.have.property('exception').eql('no text provided');
                    done();
                });
        });

        it('should create a new post', (done) => {
            chai.request(server)
                .post('/posts')
                .send(post)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(true);
                    res.body.should.have.property('created');
                    res.body.created.should.be.a('array');
                    done();
                });
        });
    })
});