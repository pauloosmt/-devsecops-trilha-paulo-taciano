# Onboarding SACI 2026.2 - DevSecOps

## Dados do Candidato
* **Nome:** Paulo Sergio Mendes Taciano
* **Curso:** Ciência da Computação
* **Trilha:** DevSecOps

---

## Desafio Técnico Inicial

### Pergunta:
Trilha: DevSecOps
Pergunta Rápida: Escreva uma breve explicação (COM SUAS PALAVRAS) sobre o que são SAST, DAST, SCA e como cada um deles ajuda no desenvolvimento seguro.

### Resposta:

SAST, DAST e SCA são três abordagens de teste de segurança de aplicações, e cada uma olha para um "pedaço" diferente do software.

SAST: analisa o código-fonte sem executar a aplicação. É como um revisor lendo o código procurando padrões perigosos, por exemplo, concatenação de strings em queries SQL (risco de SQL Injection) ou senhas escritas direto no código.

DAST: testa a aplicação em execução, como um atacante externo (caixa-preta). Ele envia requisições maliciosas, como tentativas de XSS ou injeção, e observa como o sistema responde. 

SCA (Software Composition Analysis): analisa as dependências de terceiros (bibliotecas, frameworks, pacotes npm/pip/Maven) e verifica se alguma tem vulnerabilidade conhecida (CVEs) ou licença problemática. O foco não é o código que você escreveu, mas o que você importou. Exemplo clássico: usar uma versão do Log4j afetada pelo Log4Shell.