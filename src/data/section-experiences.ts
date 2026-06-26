const bespokeSections = new Set([
  'conselho-do-gato-risonho-o-que-outros-pesquisadores-ja-descobriram',
  'o-cha-das-ideias',
  'o-relogio-do-coelho-branco-toda-travessia-precisa-de-um-caminho',
  'capitulos-do-pais-das-infancias',
  'quando-alice-encontra-a-rainha-vermelha',
  'o-tabuleiro-da-rainha-vermelha',
  'a-ultima-casa-do-tabuleiro',
  'biblioteca-do-chapeleiro',
  'mapa-da-curiosidade',
  'o-que-alice-levou-na-bagagem'
]);

export function hasSectionExperience(sectionId: string) {
  return bespokeSections.has(sectionId);
}
