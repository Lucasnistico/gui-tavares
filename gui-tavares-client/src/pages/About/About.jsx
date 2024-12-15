import "./About.scss";
import Hero from "../../components/Hero/Hero.jsx";

export default function About() {
  return (
    <>
      <section className="about__wrap">
        <h3 class="about__content-title">Gui Tavares</h3>
        <p class="about__subtitle">
          Samba é a voz do meu país, está em tudo o que se diz. O mundo precisa
          te encontrar! Canta, solta a voz para se ouvir, deixa o céu iluminar,
          salva o samba que chegar.&#127925;&#127926;
        </p>
        <p class="about__subtitle about__subtitle--slogan">
          - Song Writter | Singer | Multi intrumentalist | Conductor | Gui
          Tavares: Uma das Faces da Música Brasileira no Cenário Internacional.
        </p>
        <div class="about__contents">
          <p class="about__content about__content--top">
            Formado em Violão Clássico e Popular, além de Composição e Regência
            pela UNICAMP, Gui Tavares é uma voz distinta na música brasileira
            contemporânea. Seu primeiro álbum independente, Noite que Brincou de
            Lua, lançado em parceria com Edu Passeto, marcou o início de sua
            trajetória fonográfica e foi relançado mais tarde pela Far Out
            Records devido ao impacto cultural que alcançou. Após anos no Rio de
            Janeiro, onde atuou em estúdios, orquestras e programas de TV, Gui
            mudou-se para Londres em 2004, conquistando espaço em palcos como
            Jazz Café, Barbican Centre, Cadogan Hall, Southbank Centre e Rich
            Mix, e apresentando-se ao lado de grandes nomes como Carlos Lyra e
            Marcos Valle. Ele também participou de uma turnê europeia com a
            lendária banda Azymuth, ampliando sua conexão com o público
            internacional.
          </p>
          <p class="about__content">
            Sua carreira inclui colaborações em álbuns de artistas como Jazzinho
            e Ed Motta, além de contribuições para duas compilações infantis da
            gravadora americana Putumayo Records. Gui lidera projetos que
            celebram a música brasileira, como Clube da Esquina Tribute, Minas
            Heart of Brazil e o Grupo Vocal Nossa Voz, além de promover
            palestras e workshops sobre a cultura musical do Brasil. Em 2024,
            seu tributo ao Clube da Esquina no Jazz Café, com participação
            especial de Filó Machado, e o concerto em homenagem a Tom Jobim no
            Buxton International Festival em julho de 2025 reafirmam seu papel
            como uma figura central da música brasileira no cenário global.
          </p>
        </div>
      </section>
      <Hero
        title="Gui Tavares"
        subtitle="Gui Tavares: Uma das Faces da Música Brasileira no Cenário Internacional."
      ></Hero>
    </>
  );
}
