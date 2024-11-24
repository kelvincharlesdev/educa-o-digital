import React from "react";
import TutorialCard from "./tutorial";

export type TutorialList = {
  title: string;
  description: string;
  content: string;
};
const tutorials: TutorialList[] = [
  {
    title: "📧 Criação de E-mails",
    description: "Aprenda a criar e gerenciar seu e-mail pessoal.",
    content: `
    
    <p>Acesse www.gmail.com.</p>
    <p>Clique em "Criar conta".</p>
    <p>Preencha suas informações (nome, sobrenome, nome de usuário e senha).</p>
    <p>Confirme seu número de telefone (se necessário).</p>
    <p>Confirme seu número de telefone (se necessário).</p>
    <p>Clique em "Avançar" e siga as instruções até concluir.</p>
    <p>Dica: Explique como acessar o e-mail pelo celular ou navegador.</p>

    
    `,
  },
  {
    title: "📱 Usando o WhatsApp",
    description: "Descubra como usar whatsapp no dia a dia.",

    content: `
      <p>Baixe o app na Google Play Store ou Apple App Store.</p>
      <p>Instale o app e abra-o.</p>
      <p>Cadastre seu número de telefone.</p>
      <p>Personalize seu perfil com foto e nome.</p>
      <p>Mostre como enviar mensagens, imagens e realizar chamadas.</p>
`,
  },
  {
    title: "🔒 Segurança Digital",
    description: "Dicas para proteger suas informações na internet.",
    content: `
      <p>Use senhas fortes com combinações de números, letras e símbolos.</p>
      <p>Ative a verificação em duas etapas...</p>`,
  },
  {
    title: "🌐 Navegação na Internet",
    description: "Aprenda a navegar e pesquisar com eficácia online.",
    content: `
    <p>Use palavras-chave específicas no Google...</p>
    <p>Verifique o cadeado no navegador para sites seguros.</p>`,
  },
];

const TutorialsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Tutoriais</h1>
      <div>
        {tutorials.map((tutorial, index) => (
          <TutorialCard
            key={index}
            title={tutorial.title}
            description={tutorial.description}
            content={tutorial.content}
          />
        ))}
      </div>
    </div>
  );
};

export default TutorialsPage;
