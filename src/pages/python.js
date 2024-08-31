import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar'; // Importando o Sidebar
import '../components/pages.css';

const Python = () => {
    const [activeTab, setActiveTab] = useState('História');
    const menuItems = [
        { title: 'História', subtopics: [] },
        { title: 'Fundamentos', subtopics: ['Sintaxe','Váriavel e Tipos de dados'] },
        { title: 'Variáveis', subtopics: ['Declaração', 'Tipos de Dados'] },
        { title: 'Futuro', subtopics: ['Tendências'] },
    ];

    // Função para alterar o conteúdo baseado no menu clicado
    const handleMenuClick = (topic) => {
        setActiveTab(topic);
    };

    return (
        <div>
            <Header />
            <div>
                {/* Conteúdo da Página */}
                <div className="conteudo-python">
                    {activeTab === 'História' &&
                        <article>
                            <h1>História da Linguagem de Programação Python</h1>

                            <section>
                                <h2>Criação e Desenvolvimento Inicial</h2>
                                <p>
                                    Python foi criado no final dos anos 1980 por Guido van Rossum, que começou a trabalhar na linguagem como um projeto de férias. O desenvolvimento inicial foi inspirado por outras linguagens como ABC, C e Modula-3. Em dezembro de 1989, Van Rossum iniciou o projeto, e a primeira versão oficial, Python 0.9.0, foi lançada em 1991. Essa versão incluía muitas das características que ainda são fundamentais na linguagem hoje, como exceções, funções e módulos.
                                </p>
                            </section>

                            <section>
                                <h2>Python 1.0</h2>
                                <p>
                                    Em 1994, a versão 1.0 do Python foi lançada, trazendo várias melhorias e recursos adicionais. Essa versão marcou um ponto importante no desenvolvimento da linguagem e estabeleceu a base para versões futuras.
                                </p>
                            </section>

                            <section>
                                <h2>Python 2.0</h2>
                                <p>
                                    No ano 2000, o Python 2.0 foi lançado, marcando um ponto significativo na evolução da linguagem. Esta versão introduziu importantes recursos, como a coleta de lixo e compreensões de listas, além de novas bibliotecas e módulos.
                                </p>
                            </section>

                            <section>
                                <h2>Python 3.0</h2>
                                <p>
                                    Em 2008, Python 3.0 foi lançado, trazendo mudanças fundamentais para corrigir falhas de design e inconsistências da versão anterior. Entre as novas funcionalidades estavam a função <code>print()</code> com parênteses, e várias mudanças que tornaram a linguagem mais consistente, embora introduzissem incompatibilidades com o código Python 2.x. Isso forçou uma transição gradual para a nova versão.
                                </p>
                            </section>

                            <section>
                                <h2>Transição e Suporte Contínuo</h2>
                                <p>
                                    Nos anos seguintes, o Python 3.x continuou a evoluir, com lançamentos regulares que introduziram novas funcionalidades e melhorias. Python 2.7 foi a última versão da linha 2.x e recebeu suporte até 2020, momento em que o suporte oficial foi encerrado. Desde então, a comunidade e a indústria têm se concentrado na linha Python 3.
                                </p>
                            </section>

                            <section>
                                <h2>Estado Atual e Futuro</h2>
                                <p>
                                    Atualmente, Python é uma das linguagens de programação mais populares e versáteis do mundo. Ela é amplamente utilizada em desenvolvimento web, ciência de dados, inteligência artificial, automação e muito mais. A linguagem continua a evoluir com novos lançamentos que focam em desempenho, segurança e novos recursos.
                                </p>

                                <p>
                                    O futuro do Python parece promissor, com a linguagem expandindo seu uso em áreas como ciência de dados e aprendizado de máquina, e adaptando-se às novas tendências e práticas de desenvolvimento. A comunidade ativa e o robusto ecossistema de bibliotecas e frameworks garantem que Python continue a ser uma escolha importante para desenvolvedores em todo o mundo.
                                </p>
                            </section>
                        </article>
                    }
                    {activeTab === 'Fundamentos' && <h1>Características do Python</h1>}
                        {activeTab === 'Sintaxe' && 
                            <article>
                                <h1>Estrutura Básica do Código Python</h1>
                            <section>
                                <h2>Comentários</h2>
                                <p>Comentários são usados para adicionar notas ao código e são ignorados durante a execução. Python suporta comentários de linha única e múltipla:</p>
                                <pre class="code-block">
                                    <code>
{`# Comentário de linha única

"""
Comentário
de múltiplas linhas
"""`}
                                    </code>
                                </pre>
                            </section>
                        
                            <section>
                                <h2>Identação</h2>
                                <p>Python usa identação para definir blocos de código. Blocos de código são definidos por um nível de identação consistente, geralmente com 4 espaços:</p>
                                <pre class="code-block">
                                    <code>
{`if True:
    print("Olá, mundo!")
else:
    print("Outra mensagem")`}
                                    </code>
                                </pre>
                            </section>
                        
                            <section>
                                <h2>Declaração de Variáveis</h2>
                                <p>Variáveis são criadas ao atribuir um valor a um nome. Python não exige declaração de tipo, pois é dinamicamente tipado:</p>
                                <pre class="code-block">
                                    <code>
{`nome = "Elvis"
idade = 30
print("Outra mensagem")
altura = 1.75`}
                                    </code>
                                </pre>
                            </section>
                            </article>
                        }
                        {activeTab === 'Váriavel e Tipos de dados' && 
                            <article>
                                <h1>Tipos de Dados em Python</h1>
                        
                                <section>
                                <h2>Tipos Numéricos</h2>
                                <p>Python oferece três tipos principais de dados numéricos:</p>
                                <ul>
                                    <li><strong>Inteiros (int)</strong>: Representam números inteiros
                                    <pre class="code-block"><code>{`numero = 30`}</code></pre>.</li>
                                    <li><strong>Ponto Flutuante (float)</strong>: Representam números reais com casas decimais
                                    <pre class="code-block"><code>{`numeros = 1.75`}</code></pre>.</li>
                                    <li><strong>Números Complexos (complex)</strong>: Representam números na forma 
                                    <pre class="code-block"><code>{`numeros = 3 + 4j`}</code></pre>.</li>
                                </ul>
                                </section>
                        
                                <section>
                                <h2>Sequências</h2>
                                <p>As sequências são usadas para armazenar coleções de itens:</p>
                                <ul>
                                    <li><strong>Strings (str)</strong>: Sequências de caracteres
                                    <pre class="code-block"><code>{`nome = "Elvis"`}</code></pre>.</li>
                                    <li><strong>Listas (list)</strong>: Coleções mutáveis de itens
                                    <pre class="code-block"><code>{`lista = ["maçã", "banana", "laranja"]`}</code></pre>.</li>
                                    <li><strong>Tuplas (tuple)</strong>: Coleções imutáveis de itens
                                    <pre class="code-block"><code>{`tupla = (10, 20)`}</code></pre>.</li>
                                    <li><strong>Intervalos (range)</strong>: Sequências de números inteiros
                                    <pre class="code-block"><code>{`intervalos = range(1, 10)`}</code></pre>.</li>
                                </ul>
                                </section>
                        
                                <section>
                                <h2>Coleções de Mapeamento</h2>
                                <p>O principal tipo de mapeamento em Python é o dicionário:</p>
                                <ul>
                                    <li><strong>Dicionários (dict)</strong>: Coleções mutáveis de pares chave-valor
                                    <pre class="code-block"><code>{`dicionario = {"nome": "Elvis", "idade": 30}`}</code></pre>.</li>
                                </ul>
                                </section>
                        
                                <section>
                                <h2>Conjuntos</h2>
                                <p>Os conjuntos são coleções de elementos únicos:</p>
                                <ul>
                                    <li><strong>Conjuntos (set)</strong>: Coleções mutáveis de elementos únicos
                                    <pre class="code-block"><code>{`conjunto = {1, 2, 3, 4}`}</code></pre>.</li>
                                    <li><strong>Conjuntos Imutáveis (frozenset)</strong>: Coleções imutáveis de elementos únicos
                                    <pre class="code-block"><code>{`conjunto = frozenset([1, 2, 3])`}</code></pre>.</li>
                                </ul>
                                </section>
                        
                                <section>
                                <h2>Tipos Booleanos</h2>
                                <p>O tipo booleano representa os valores lógicos <code>{`True`}</code> e <code>{`False`}</code>:</p>
                                <ul>
                                    <li><strong>Booleanos (bool)</strong>: Como <code>{`True`}</code> ou <code>{`False`}</code>.</li>
                                </ul>
                                </section>
                        
                                <section>
                                <h2>Tipos Binários</h2>
                                <p>Os tipos binários são usados para manipular dados binários:</p>
                                <ul>
                                    <li><strong>Bytes (bytes)</strong>: Sequências imutáveis de dados binários, como <code>{`b"Dados em bytes"`}</code>.</li>
                                    <li><strong>Bytearray (bytearray)</strong>: Sequências mutáveis de dados binários.</li>
                                    <li><strong>Memoryview (memoryview)</strong>: Permite o acesso aos dados binários sem copiá-los.</li>
                                </ul>
                                </section>
                        
                                <section>
                                <h2>NoneType</h2>
                                <p>O tipo <code>{`None`}</code> representa a ausência de valor:</p>
                                <ul>
                                    <li><strong>None</strong>: Usado para indicar que uma variável não tem valor, como <code>{`resultado = None`}</code>.</li>
                                </ul>
                                </section>
                        
                                <section>
                                <h2>Tipo de Função</h2>
                                <p>Funções em Python também são tipos de dados:</p>
                                <ul>
                                    <li><strong>Funções (function)</strong>: São objetos de primeira classe e podem ser atribuídas a variáveis.</li>
                                </ul>
                                </section>
                        
                                <section>
                                <h2>Conversão de Tipos (Type Casting)</h2>
                                <p>Você pode converter explicitamente um tipo de dado para outro usando funções como <code>{`int()`}</code>, <code>{`float()`}</code>, <code>{`str()`}</code>, e outras:</p>
                                <pre className="code-block">
                                    <code>
{`numero_str = "123"
numero_int = int(numero_str)  # Converte string para inteiro`}                                      </code>
                                </pre>
                                </section>
                            </article>
                        }
                    {activeTab === 'Bibliotecas' && <p>Principais bibliotecas do Python...</p>}
                    {activeTab === 'Variáveis' && <h1>Variáveis em Python</h1>}
                    {activeTab === 'Declaração' && <p>Declaração de variáveis...</p>}
                    {activeTab === 'Tipos de Dados' && <p>Tipos de dados no Python...</p>}
                    {activeTab === 'Futuro' && <h1>Futuro do Python</h1>}
                    {activeTab === 'Tendências' && <p>Tendências futuras do Python...</p>}
                </div>

                {/* Menu Lateral */}
                <Sidebar menuItems={menuItems} onMenuClick={handleMenuClick} />
            </div>
            <Footer />
        </div>
    );
};

export default Python;
