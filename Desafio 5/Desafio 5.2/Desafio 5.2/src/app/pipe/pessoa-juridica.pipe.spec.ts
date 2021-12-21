import { PessoaJuridicaPipe } from './pessoa-juridica.pipe';

describe('PessoaJuridicaPipe', () => {
  it('create an instance', () => {
    const pipe = new PessoaJuridicaPipe();
    expect(pipe).toBeTruthy();
  });
});
