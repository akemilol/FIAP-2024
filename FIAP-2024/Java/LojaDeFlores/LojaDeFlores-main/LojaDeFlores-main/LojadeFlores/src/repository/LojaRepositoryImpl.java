package repository;

import models.Produto;
import java.util.ArrayList;
import java.util.List;

public class LojaRepositoryImpl implements LojaRepository {
    private List<Produto> produtos = new ArrayList<>();

    @Override
    public void cadastrar(Produto produto) {
        produtos.add(produto);
    }

    @Override
    public List<Produto> listar(){
        return produtos;
    }

    @Override
    public Produto consultarPorId(int id) {
        for (Produto produto : produtos) {
            if (produto.getId() == id) {
                return produto;
            }
        }
        return null;
    }

    @Override
    public Produto consultarPorNome(String nome) {
        for (Produto produto : produtos) {
            if (produto.getNome().equalsIgnoreCase(nome)) {
                return produto;
            }
        }
        return null;
    }

    @Override
    public boolean alterar(Produto produtoAtualizado) {
        for (int i = 0; i < produtos.size(); i++) {
            Produto produto = produtos.get(i);
            if (produto.getId() == produtoAtualizado.getId()) {
                produtos.set(i, produtoAtualizado);
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean excluir(int id) {
        return produtos.removeIf(produto -> produto.getId() == id);
    }
}
