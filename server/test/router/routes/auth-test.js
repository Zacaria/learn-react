/*import chai from'chai';
import chaiHttp from 'chai-http';
import server from '~/src/app';
const should = chai.should();

chai.use(chaiHttp);

describe('Auth', () => {
   describe('/POST signin/github', () => {
       it('signin', () => {
           chai.request(server)
               .post('/signin/github')
               .send({
                   name: 'admin'
               })
               .end((err, res) => {
                   res.should.have.status(200);
                   res.body.should.be.a('object');
                   res.body.should.have.property('success').eql(false);
                   res.body.should.have.property('exception').eql(exceptions.PARAMS_ERROR);
                   done();
               });
       });
   });
});*/