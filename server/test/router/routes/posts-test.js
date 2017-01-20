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
        it('should display root posts message', () => {
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
});