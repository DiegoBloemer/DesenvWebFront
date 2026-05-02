import axios from 'axios';

// IMPORTANTE: Substitua a porta pela porta da SUA API.
const API_URL = 'http://localhost:5166/api/detalhesproduto';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

/**
 * Busca o detalhe de um produto pelo ID do PRODUTO.
 * Retorna 404 se o produto não tiver detalhe — isso NÃO é erro,
 * é uma situação normal que o frontend deve tratar.
 * @param {number} produtoId - ID do produto (não do detalhe!)
 * @returns {Promise<Object>} DetalheProduto com Produto incluído
 */
export const getDetalhePorProduto = async (produtoId) => {
  const response = await api.get(`/produto/${produtoId}`);
  return response.data;
};

/**
 * Cria um detalhe para um produto.
 * O body deve incluir produtoId para vincular ao produto.
 * Retorna 409 (Conflict) se o produto já tiver detalhe.
 * @param {Object} detalhe - { especificacoes, garantia, paisDeOrigem, pesoGramas, produtoId }
 * @returns {Promise<Object>} DetalheProduto criado com ID gerado
 */
export const criarDetalhe = async (detalhe) => {
  const response = await api.post('/', detalhe);
  return response.data;
};

/**
 * Atualiza um detalhe existente pelo ID do DETALHE.
 * @param {number} id - ID do detalhe (não do produto!)
 * @param {Object} detalhe - Dados atualizados
 */
export const atualizarDetalhe = async (id, detalhe) => {
  const response = await api.put(`/${id}`, detalhe);
  return response.data;
};

/**
 * Remove um detalhe pelo ID do DETALHE.
 * @param {number} id - ID do detalhe (não do produto!)
 */
export const deletarDetalhe = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};