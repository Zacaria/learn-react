import * as routePaths from '../../src/constants/routes';
import * as infoMessage from '../../src/constants/infos';

import chai from'chai';
import chaiHttp from 'chai-http';
import server from '../../src/app';
const should = chai.should();

chai.use(chaiHttp);

describe('Info', () => {
    describe('/GET root', () => {
        it('should GET root message', (done) => {
            chai.request(server)
                .get(routePaths.ROUTE_ROOT)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(true);
                    res.body.should.have.property('infos');
                    res.body.infos.should.have.property('message').eql(infoMessage.WELCOME);
                    done();
                });
        });
    });
});