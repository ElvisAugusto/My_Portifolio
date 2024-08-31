import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar'; // Importando o Sidebar
import '../components/pages.css';

const Js = () => {
    const [activeTab, setActiveTab] = useState('História');
    const menuItems = [
        { title: 'História', subtopics: [] },
        { title: 'Fundamentos', subtopics: ['Sintaxe','Váriavel e Tipos de dados'] },
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
                <div className="conteudo-pages">
                    {activeTab === 'História' &&
                        <article>
                            <main>
                                <section>
                                <h1>A História do JavaScript</h1>
                                </section>
                                <section>
                                    <h2>1. Criação (1995)</h2>
                                    <p>Em 1995, <strong>Brendan Eich</strong>, da Netscape Communications, criou o JavaScript em apenas 10 dias. Originalmente chamada de <strong>Mocha</strong> e depois <strong>LiveScript</strong>, a linguagem foi renomeada para <strong>JavaScript</strong> para aproveitar a popularidade do Java, embora sejam bastante diferentes.</p>
                                    <p>JavaScript foi projetado para adicionar interatividade às páginas da web e se tornou essencial para o desenvolvimento web moderno.</p>
                                </section>

                                <section>
                                    <h2>2. Primeira Implementação (1996)</h2>
                                    <p>A primeira versão do JavaScript foi implementada no <strong>Netscape Navigator 2.0</strong> em 1996. Outros navegadores seguiram o exemplo, mas isso levou à fragmentação e à necessidade de padronização.</p>
                                </section>

                                <section>
                                    <h2>3. Padronização - ECMAScript (1997)</h2>
                                    <p>Em 1997, a <strong>ECMA International</strong> publicou o primeiro padrão do JavaScript, conhecido como <strong>ECMAScript</strong>. A Microsoft criou sua própria versão chamada <strong>JScript</strong>, mas a padronização ajudou a unificar a linguagem.</p>
                                </section>

                                <section>
                                    <h2>4. Evolução e Crescimento (2000s)</h2>
                                    <p>Nos anos 2000, o JavaScript evoluiu de uma linguagem de scripts simples para uma ferramenta poderosa com o advento do <strong>AJAX</strong>, que permitiu a criação de páginas dinâmicas e interativas sem recarregar a página inteira.</p>
                                </section>

                                <section>
                                    <h2>5. V8 e o Surgimento do Node.js (2008)</h2>
                                    <p>Em 2008, o Google lançou o navegador <strong>Chrome</strong> com o motor <strong>V8</strong>, melhorando drasticamente o desempenho do JavaScript. Em 2009, <strong>Node.js</strong> foi lançado, permitindo o uso de JavaScript no servidor, tornando-o uma linguagem full-stack.</p>
                                </section>

                                <section>
                                    <h2>6. Popularidade das Bibliotecas e Frameworks (2010s)</h2>
                                    <p>Nos anos 2010, bibliotecas como <strong>jQuery</strong> simplificaram o JavaScript, enquanto frameworks como <strong>AngularJS</strong>, <strong>React</strong> e <strong>Vue.js</strong> revolucionaram o desenvolvimento de aplicações web.</p>
                                </section>

                                <section>
                                    <h2>7. ECMAScript 6+ (2015 e além)</h2>
                                    <p>O <strong>ECMAScript 2015</strong> (ES6) trouxe uma série de novos recursos, como classes, arrow functions, e template literals, modernizando ainda mais o JavaScript. Atualizações anuais continuam a melhorar a linguagem.</p>
                                </section>

                                <section>
                                    <h2>8. JavaScript Hoje e o Futuro (2020s)</h2>
                                    <p>Hoje, o JavaScript é uma das linguagens mais populares do mundo, sendo usada tanto no front-end quanto no back-end. Com o advento de tecnologias como <strong>TypeScript</strong> (um superset do JavaScript que adiciona tipagem estática), <strong>Progressive Web Apps (PWA)</strong>, e o uso de <strong>WebAssembly</strong>, o futuro do JavaScript continua a evoluir de maneira promissora.</p>
                                    <p>Além disso, ferramentas modernas de build como <strong>Webpack</strong> e <strong>Babel</strong>, junto com gerenciadores de pacotes como <strong>NPM</strong> e <strong>Yarn</strong>, tornam o desenvolvimento JavaScript mais eficiente e escalável.</p>
                                </section>

                                <section class="curiosidades">
                                    <h2>Curiosidades</h2>
                                    <ul>
                                        <li>JavaScript foi criado em apenas 10 dias.</li>
                                        <li>A linguagem inicialmente se chamava Mocha.</li>
                                        <li>O surgimento do Node.js transformou o JavaScript em uma linguagem full-stack.</li>
                                        <li>ECMAScript 6 (ES6) revolucionou o JavaScript moderno com novos recursos.</li>
                                        <li>JavaScript é utilizado por mais de 97% dos websites ao redor do mundo.</li>
                                    </ul>
                                </section>
                            </main>
                        </article>
                    }
                    {activeTab === 'Fundamentos' && <h1>Características do Js</h1>}
                        {activeTab === 'Sintaxe' && 
                            <article>
                            <section>
                                <h2>1. Declaração de Variáveis</h2>
                                <p>No JavaScript moderno, podemos declarar variáveis usando <code>let</code>, <code>const</code> e <code>var</code>.</p>
                                <p><code>let</code> e <code>const</code> possuem escopo de bloco, enquanto <code>var</code> tem escopo de função. Em código moderno, recomenda-se usar <code>let</code> para variáveis mutáveis e <code>const</code> para constantes.</p>
                                <pre class="code-block">
                                    <code>
{`let nome = "Elvis"; // Variável mutável
const idade = 30;       // Constante
var cidade = "São Paulo"; // Declaração tradicional (evitar)`}
                                    </code>
                                </pre>
                            </section>
                    
                            <section>
                                <h2>2. Funções</h2>
                                <p>Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Podemos defini-las de diversas formas:</p>
                                <ul>
                                    <li><strong>Função Clássica:</strong></li>
                                    <pre class="code-block">
                                        <code>
{`function saudacao(nome) {
    return "Olá, " + nome + "!";
}`}
                                        </code>
                                    </pre>
                    
                                    <li><strong>Função Anônima:</strong></li>
                                    <pre class="code-block">
                                        <code>
{`const saudacao = function(nome) {
    return "Olá, " + nome + "!";
};`}
                                        </code>
                                    </pre>
                                    <li><strong>Arrow Function (ES6):</strong></li>
                                    <pre class="code-block">
                                        <code>
{`const saudacao = (nome) => "Olá, " + nome + "!";`}
                                        </code>
                                    </pre>
                                </ul>
                            </section>
                    
                            <section>
                                <h2>3. Estruturas de Controle</h2>
                                <p>JavaScript possui várias estruturas de controle de fluxo, como condicionais e loops.</p>
                                <ul>
                                    <li><strong>Condicionais:</strong></li>
                                        <pre class="code-block">
                                            <code>
{`if (idade > 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}`}               
                                            </code>
                                        </pre>                    
                                    <li><strong>Loops</strong></li>
                                        <pre class="code-block">
                                            <code>
{`for (let i = 0; i &lt; 5; i++) {
    console.log(i);
}`} 
                                            </code>
                                        </pre>
                                </ul>
                            </section>
                            <section>
                                <ul>
                                <h2>Objetos e Arrays</h2>
                                        <p>Objetos e arrays são estruturas de dados fundamentais no JavaScript.</p>
                                    <li><strong>Objetos</strong></li>
                                        <p>Objetos são coleções de pares chave-valor.</p>
                                <pre class="code-block">
                                    <code>
{`const pessoa = {
nome: "Elvis",
idade: 30,
cidade: "São Paulo"
};`} 
                                    </code>
                                </pre>
                                
                                <li><strong>Arrays</strong></li>
                                <p>Arrays são listas ordenadas de valores.</p>
                                <pre class="code-block">
                                    <code>
{`const numeros = [1, 2, 3, 4, 5];`}
                                    </code>
                                </pre>
                            </ul>
                            </section>
                            </article>
                        }
                        {activeTab === 'Váriavel e Tipos de dados' && 
                            <article>
                                <section>
                                <h2>Tipos de Dados Primitivos</h2>
                                <p>JavaScript possui vários tipos de dados primitivos, que são os tipos mais básicos da linguagem:</p>
                                <ul>
                                    <li><strong>String</strong>: Representa texto ou uma sequência de caracteres.</li>
                                        <pre class="code-block">
                                            <code>
{`let nome = "Elvis";`}
                                            </code>
                                        </pre>
                                    <li><strong>Number</strong>: Representa números, sejam inteiros ou decimais.</li>
                                    <pre class="code-block">
                                        <code>
{`let idade = 30;
let altura = 1.75;`}
                                        </code>
                                    </pre>
                                    <li><strong>Boolean</strong>: Representa valores lógicos, podendo ser <code>true</code> ou <code>false</code>.</li>
                                    <pre class="code-block">
                                        <code>
{`let isAluno = true;`}
                                        </code>
                                    </pre>
                                    <li><strong>Undefined</strong>: Variáveis que foram declaradas, mas não inicializadas, têm o valor <code>undefined</code>.</li>
                                    <pre class="code-block">
                                        <code>
{`let valorIndefinido;`}
                                        </code>
                                    </pre>
                                    <li><strong>Null</strong>: Representa a ausência intencional de valor.</li>
                                    <pre class="code-block">
                                        <code>
{`let valorNulo = null;`}
                                            </code>
                                        </pre>
                                    <li><strong>Symbol</strong>: Representa um valor único e imutável (introduzido no ES6).</li>
                                    <pre class="code-block">
                                        <code>
{`let id = Symbol('id');`}
                                        </code>
                                    </pre>
                                    <li><strong>BigInt</strong>: Utilizado para representar números inteiros de precisão arbitrária.</li>
                                    <pre class="code-block">
                                        <code>
{`let numeroGrande = BigInt(9007199254740991);`}
                                        </code>
                                    </pre>
                                </ul>
                            </section>
                            <section>
                                <h2>Tipos de Dados Complexos</h2>
                                <p>Além dos tipos primitivos, JavaScript possui tipos de dados complexos, que permitem a criação de estruturas de dados mais elaboradas:</p>
                                <ul>
                                    <li><strong>Object</strong>: Estrutura de dados complexa que armazena pares chave-valor.</li>
                                    <pre class="code-block">
                                        <code>
{`let pessoa = {
nome: "Elvis",
idade: 30,
cidade: "São Paulo"
};`}
                                        </code>
                                    </pre>
                                    <li><strong>Array</strong>: Um tipo especial de objeto usado para armazenar listas ordenadas de valores.</li>
                                    <pre class="code-block">
                                        <code>
{`let numeros = [1, 2, 3, 4, 5];`}
                                        </code>
                                    </pre>
                                    <li><strong>Function</strong>: Bloco de código que realiza uma tarefa específica.</li>
                                    <pre class="code-block">
                                        <code>
{`function saudacao() {
    return "Olá, mundo!";
}`}
                                        </code>
                                            </pre>
                                    <li><strong>Date</strong>: Um objeto que lida com datas e horários.</li>
                                    <pre class="code-block">
                                        <code>
{`let dataAtual = new Date();`}
                                        </code>
                                    </pre>
                                    <li><strong>Map</strong> e <strong>Set</strong>: Estruturas de dados para armazenar pares chave-valor (<code>Map</code>) e valores únicos (<code>Set</code>).</li>
                                    <pre class="code-block">
                                        <code>
{`let mapa = new Map();`}
{`mapa.set('chave', 'valor');`}
{`let conjunto = new Set([1, 2, 3, 4, 5]);`}
                                        </code>
                                    </pre>
                                </ul>
                            </section>
                    
                            <section>
                                <h2>Escopos de Variáveis</h2>
                                <p>JavaScript oferece três maneiras principais de declarar variáveis, cada uma com diferentes regras de escopo:</p>
                                <ul>
                                    <li><strong><code>var</code></strong>: Possui escopo de função e é "elevada" ao topo do escopo.</li>
                                    <pre class="code-block">
                                        <code>
{`var x = 10;`}
                                        </code>
                                    </pre>
                                    <li><strong><code>let</code></strong>: Possui escopo de bloco, sendo mais previsível que <code>var</code>.</li>
                                    <pre class="code-block">
                                        <code>
{`let y = 20;`}
                                        </code>
                                    </pre>
                                    <li><strong><code>const</code></strong>: Similar a <code>let</code>, mas não permite reatribuição.</li>
                                    <pre class="code-block"><code>const z = 30;</code></pre>
                                </ul>
                            </section>
                    
                            <section>
                                <h2>Conversão de Tipos</h2>
                                <p>JavaScript pode realizar conversão de tipos de maneira implícita ou explícita:</p>
                                <ul>
                                    <li><strong>Conversão Implícita</strong>: Ocorre automaticamente durante operações.</li>
                                    <pre class="code-block"><code>let resultado = "5" + 5; // "55"</code></pre>
                                    <li><strong>Conversão Explícita</strong>: Utilizando funções como <code>Number()</code> ou <code>String()</code>.</li>
                                    <pre class="code-block"><code>let num = Number("123"); // 123</code></pre>
                                </ul>
                            </section>
                    
                            <section>
                                <h2>Tipagem Dinâmica</h2>
                                <p>JavaScript é uma linguagem de tipagem dinâmica, o que significa que o tipo de uma variável pode mudar durante a execução do código.</p>
                                <pre class="code-block"><code>let variavel = "texto";  // variavel é uma String
                    variavel = 123;          // variavel agora é um Number</code></pre>
                            </section>
                            </article>
                        }
                </div>
                {/* Menu Lateral */}
                <Sidebar menuItems={menuItems} onMenuClick={handleMenuClick} />
            </div>
            <Footer />
        </div>
    );
};

export default Js;
