import chai from'chai';
import chaiHttp from 'chai-http';
import server from '../../../src/app';
import {dbInit, dbDestroy} from '../../../src/bin/rethinkDb';
import {insertPost} from '../../../src/services/posts';
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

        const postsCount = 30;

        const genPosts = (count) =>
            new Array(count).fill({}).map((e, i) => ({
                text: 'toto' + i,
                author:'chuck',
                createdAt: Date.now()
            }));

        const posts = genPosts(postsCount);

        before(done => {
            Promise.all(posts.map(insertPost))
                .then(() => done())
                .catch((err) => {
                    console.log('Error before hook', err);
                    done(err);
                });
        });

        it('should display root posts message with no parameter', (done) => {
            chai.request(server)
                .get('/posts')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(true);
                    res.body.should.have.property('posts');
                    res.body.posts.should.be.a('array');
                    res.body.posts.length.should.eql(postsCount);
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