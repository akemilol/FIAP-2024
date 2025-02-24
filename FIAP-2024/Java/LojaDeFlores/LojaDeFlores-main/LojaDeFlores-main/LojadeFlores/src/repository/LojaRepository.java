package repository;

import models.Produto;
import java.util.List;

public interface LojaRepository {
    void cadastrar (Produto produto);
    List<Produto> listar();
    Produto consultarPorId(int id);
    Produto consultarPorNome(String nome);
    boolean alterar(Produto produto);
    boolean excluir(int id);
}
